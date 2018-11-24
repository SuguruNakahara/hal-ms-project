/* global AudioManager */
var manager,
    canvas,
    canvasContext;

const colors = ["#FF0000","#FFA500","#FFFF00","#00FF00","#2cadf8","#800080"];

const soundList = [
  ["Electro_Rainbow", "goshiki", "IntoTheLight"],  // red
  ["MINT", "Morning", "hoshiNoFuritsumoruMachi"],  //orange
  ["SmilesOfFortune", "Greens", "i33"],  //yellow
  ["natsuNoOmoide", "c2", "new_world"],  //green
  ["aoihosi", "kuuhakutoseizyaku", "ahurera"],  //blue
  ["n136"]   //perple
];

function visualizer_design(size, line_width, fill, name, color){
  return function(){

    // ランダム選曲
    backSound = soundList[fill][color];
    voiceName = name != null ? name : 'sample';

    $('#visualizer').attr('height', window.innerHeight);
    $('#visualizer').attr('width', window.innerWidth);

    canvas = document.querySelector('#visualizer');

    canvasContext = canvas.getContext('2d');
    manager = (new AudioManager({
      fps             : 30,
      autoLoop        : false,
      onLoaded        : function() {
        isLoaded = true;
        this.onEnterFrame();
        this.play('bgm');
        this.play('voice');
        this.startLoop();
      },
      onEnterFrame    : function() {
        var me  = this,
          dat = me.analysers.voice.getByteFrequencyData(128),
          len = dat.length,
          haf = len / 2,
          rad = canvas.height/12,
          siz = size;

        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.strokeStyle = colors[fill];

        canvasContext.fillStyle = colors[fill];
        canvasContext.lineWidth = line_width;

        canvasContext.save();
        canvasContext.translate(canvas.width/2, canvas.height/2);
        canvasContext.beginPath();

        canvasContext.arc(0, 0, canvas.height/12, 7, 0, true);
        canvasContext.fill();

        for (var i = 0; i < len; i++) {
          canvasContext.moveTo(rad+(siz*Math.floor((dat[i]/255)*100)/100),0);
          canvasContext.lineTo(rad-1,0);
          canvasContext.rotate(Math.PI/haf);
        }

        canvasContext.stroke();
        canvasContext.translate(-canvas.width/2, -canvas.height/2);
        canvasContext.restore();
      }
    })).init();

    manager.load({
      voice: {
        path    : '../audio/' + voiceName + '.mp3',
        loop    : true,
        sound   : false
      },
      bgm: {
        path    : '../sound/' + backSound + '.mp3',
        loop    : true,
        sound   : true
      }
    });
  }
}

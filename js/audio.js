/* global AudioManager */

var manager,
    canvas,
    canvasContext;

window.onload = function() {

//  $('#visualizer').attr('height', $('.body').height() + 300);

  var isLoaded = false,
      isClicked = false;

  canvas = document.querySelector('canvas');
  canvasContext = canvas.getContext('2d');

  manager = (new AudioManager({
    fps             : 60,
    autoLoop        : false,
    onLoaded        : function() {
      isLoaded = true;
      this.onEnterFrame();
      if (isClicked) {
        this.play('bgm');
        this.startLoop();
      }
    },
    onEnterFrame    : function() {
      if (isLoaded) {
        var me  = this,
          dat = me.analysers.bgm.getByteFrequencyData(128),
          len = dat.length,
          haf = len / 2,
          rad = 60,
          siz = 60;

        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.strokeStyle ='#0ff';
        
        // canvasContext.fillStyle ='#f00';
        canvasContext.fillStyle ='rgb(0, 255, 255)';
        canvasContext.lineWidth = 1.0;

        canvasContext.save();
        canvasContext.translate(canvas.width/2, canvas.height/2);
        canvasContext.beginPath();

        // 円塗りつぶし
        canvasContext.arc(0, 0, 58, 20, 80 * Math.PI / 180, true);
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
    }
  })).init();

  manager.load({
    bgm: '../audio/justUs.m4a'
    // bgm: '../audio/sample.mp3'
  });

  // $('#sample').click(function() {
  $('#startViewButton').click(function() {
    isClicked = true;
    if (manager.isPlaying('bgm')) {
      manager.stop('bgm');
      manager.stopLoop();
    } else {
      if (isLoaded) {
        manager.play('bgm');
        manager.startLoop();
      }
    }
  });
};
const shootingColors = ["#FF0000","#FFA500","#FFFF00","#00FF00","#0000FF","#800080"];

function shootingStar_style(speed,angle) {
  let css, rules;

  //速さ
  css = document.styleSheets.item(0)
  
  const idx = document.styleSheets[0].cssRules.length;
  css.insertRule(".star {animation: kirakira "+ speed +"s linear;}", idx);
  
  const angle2 = angle + Math.floor(Math.random() * 30);

  const angle_key = [
    '0% {transform:translateY(0) rotateY(0);}',
    '100% {transform:translate('+ angle2 +'vh,calc(100vh + 1em)) rotateZ(1800deg);}'
  ]

  var styleSheet = document.styleSheets[1];
  var keyframes = "@keyframes kirakira {0% {transform:translateY(0) rotateY(0)} 100% {transform:translate("+ angle2 +"vh,calc(100vh + 1em)) rotateZ(1800deg)}}";

  styleSheet.deleteRule(styleSheet.cssRules.length-1);
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
};

function starMaker(setColor,angle,speed) {
  const star = document.getElementById('shootingStar');
  star.style.color = shootingColors[setColor];
  starSet(star,angle,speed);
}

function starSet(clone,an,speed) {
  const starClone = clone.cloneNode(true);
  const starStyle = starClone.style;
  starStyle.left = 100 * Math.random() + "%";
  starStyle.animationDelay = 2 * Math.random() + "s";
  starStyle.opacity = 1;
  shootingStar_style(speed,an);

  document.body.appendChild(starClone);

  starClone.addEventListener("animationend", function() {
    this.parentNode.removeChild(this);
    star = document.getElementById('shootingStar');
    starSet(star,an);
  }, false)
}

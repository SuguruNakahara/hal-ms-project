function milky(milkys) {

  const colors = [
    ["#ff0000","#ffbbbb","#ffbb00","#ff00bb"], // red
    ["#00ff00","#bbff00","#bbffbb","#00ffbb"], // orange
    ["#0000ff","#bb00ff","#00bbff","#bbbbff"], // green
    ["#0000ff","#bb00ff","#00bbff","#bbbbff"], // blue
    ["#0000ff","#bb00ff","#00bbff","#bbbbff"], // purple
    ["#ff00ff","#ff00ff","#ff00ff","#ff00ff"]  // yellow
  ];

  const box = document.getElementById('milkyway');
  let setHeight;

  if(60 < milkys.rotate && milkys.rotate < 121) {
    setHeight = 200;
    box.style.top = "-" + milkys.rotate/2 + '%';
    box.style.left = 50 - milkys.left + milkys.left + '%';

  } else {
    if(milkys.rotate < 61){
      setHeight = milkys.rotate * 2 + 100 ;
    } else if( 120 < milkys.rotate) {
      setHeight = milkys.rotate + (180 - milkys.rotate) + 110;
    }
    box.style.top = "-" + milkys.rotate + '%';
    box.style.left = milkys.left + '%';
  }

  box.style.height = setHeight + '%';
  box.style.transform = 'rotate('+ milkys.rotate + 'deg)';

  particlesJS('milkyway',
    {
      "particles": {
        "number": {
          "value": milkys.value,
          "density": {
            "enable": false,
            "value_area": 800
          }
        },
        "color": {
          "value": colors[milkys.color]
        },
        "shape": {
          "type": ["circle", "triangle","star","polygon"],
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": milkys.opacity,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": milkys.size,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 3,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.3,
          "direction": "bottom",
          "random": false,
          "straight": true,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );

  const milkywayDisp = document.querySelector('#milkyway canvas');
  milkywayDisp.style.padding = 10 + '%';
}

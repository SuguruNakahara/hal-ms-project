function star(stars) {

const colors = [
  ["#ff0000", "#FF0099", "#FF4F50","#FF69A3","#e138a6","#e24507","#e73825","#e8473e"],  // red
  ["#ec8810", "#ffa500", "#ffb700","#ffa229","#ee8d1e","#e24507","#e45d00","#ef8457"],  // orange
  ["#ffff00", "#ffd700", "#adff2f","#ffee22","#e3d600","#f3c800","#edb512","#eec800"],  // yellow
  ["#00ff00", "#20df96", "#81c200","#206420","#93ca82","#008b42","#87ae22","#9cc45a"],  // green
  ["#64169e", "#1e90ff", "#00ffff","#0000ff","#7dcdf3","#86bfc9","#68abc4","#9a7fb8"],  // blue
  ["#ff00ff", "#8a2be2", "#9d159b","#6495ed","#a22e8a","#d5007a","#cd659f","#c0a1ca"]   // purple
];

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": stars.value,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": colors[stars.color]
      },
      "shape": {
        "type": ["circle", "triangle","star","polygon"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": stars.opacity,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": stars.size,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 45,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0,
        "direction": "none",
        "random": false,
        "straight": false,
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
        "resize": true
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
}

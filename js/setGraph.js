function setGraph(value) {


  // red, green, blue, orenge, yellow, p

  // red, orenge, yellow, green, blue, 


  let arr = Array();
  if (value[0] == 0) { // red
    if(value[13] == 0) {
      arr.push(30, 18.8, 19.4, 0, 4.2, 7.7);
    } else if(value[13] == 1) {
      arr.push(30, 18.8, 19.4, 0, 4.2, 7.7);
    } else {
      arr.push(30, 18.8, 19.4, 0, 4.2, 7.7);
    }

  } else if (value[0] == 1) { // orange
    if(value[13] == 0) {
      arr.push(5.6, 27.4, 41, 0, 0, 6.1);
    } else if(value[13] == 1) {
      arr.push(5.6, 27.4, 41, 0, 0, 6.1);
    } else {
      arr.push(5.6, 27.4, 41, 0, 0, 6.1);
    }

  } else if (value[0] == 2) { // yellow
    if(value[13] == 0) {
      arr.push(0, 8.4, 65.4, 2.7, 0, 3.5);
    } else if(value[13] == 1) {
      arr.push(0, 8.4, 65.4, 2.7, 0, 3.5);
    } else {
      arr.push(0, 8.4, 65.4, 2.7, 0, 3.5);
    }

  } else if (value[0] == 3) { // green
    if(value[13] == 0) {
      arr.push(0, 0, 26.3, 36.5, 0, 18.2);
    } else if(value[13] == 1) {
      arr.push(0, 0, 26.3, 36.5, 0, 18.2);
    } else {
      arr.push(0, 0, 26.3, 36.5, 0, 18.2);
    }

  } else if (value[0] == 4) { // blue
    if(value[13] == 0) {
      arr.push(2.2, 1.7, 14.5, 13, 21.6, 26.6);
    } else if(value[13] == 1) {
      arr.push(2.2, 1.7, 14.5, 13, 21.6, 26.6);
    } else {
      arr.push(2.2, 1.7, 14.5, 13, 21.6, 26.6);
    }

  } else { // purple
    if(value[13] == 0) {
      arr.push(18.9, 7, 12.9, 1.3, 25.9, 14.2);
    } else if(value[13] == 1) {
      arr.push(18.9, 7, 12.9, 1.3, 25.9, 14.2);
    } else {
      arr.push(18.9, 7, 12.9, 1.3, 25.9, 14.2);
    }

  }

  var ctx = document.getElementById('graph').getContext('2d');
  // ctx.canvas.height =  window.innerHeight/8;
  ctx.canvas.height =  window.innerHeight/3;
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["", "", "", "", "", ""],
      datasets: [{
        backgroundColor: [
          "red",
          "#ffa229",
          "yellow",
          "green",
          "blue",
          "purple"
        ],
        borderWidth: 5,
        data:[ arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]
      }]
    }
  });
}
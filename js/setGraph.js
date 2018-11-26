function setGraph(value) {

  let arr = Array();
  if (value[0] == 0) { // red
    if(value[13] == 0) {
      arr.push(10, 9, 8, 7, 5, 5);
    } else if(value[13] == 1) {
      arr.push(10, 8, 7, 9, 5, 5);
    } else {
      arr.push(10, 7, 8, 9, 5, 5);
    }

  } else if (value[0] == 1) { // orange
    if(value[13] == 0) {
      arr.push(5, 10, 5, 5, 5, 5);
    } else if(value[13] == 1) {
      arr.push(5, 10, 5, 5, 5, 5);
    } else {
      arr.push(5, 10, 5, 5, 5, 5);
    }

  } else if (value[0] == 2) { // yellow
    if(value[13] == 0) {
      arr.push(5, 5, 10, 5, 5, 5);
    } else if(value[13] == 1) {
      arr.push(5, 5, 10, 5, 5, 5);
    } else {
      arr.push(5, 5, 10, 5, 5, 5);
    }

  } else if (value[0] == 3) { // green
    if(value[13] == 0) {
      arr.push(5, 5, 5, 10, 5, 5);
    } else if(value[13] == 1) {
      arr.push(5, 5, 5, 10, 5, 5);
    } else {
      arr.push(5, 5, 5, 10, 5, 5);
    }

  } else if (value[0] == 4) { // blue
    if(value[13] == 0) {
      arr.push(5, 5, 5, 5, 10, 5);
    } else if(value[13] == 1) {
      arr.push(5, 5, 5, 5, 10, 5);
    } else {
      arr.push(5, 5, 5, 5, 10, 5);
    }

  } else { // purple
    if(value[13] == 0) {
      arr.push(5, 5, 5, 5, 5, 10);
    } else if(value[13] == 1) {
      arr.push(5, 5, 5, 5, 5, 10);
    } else {
      arr.push(5, 5, 5, 5, 5, 10);
    }

  }

  var ctx = document.getElementById('graph').getContext('2d');
  ctx.canvas.height =  window.innerHeight/8;
  // ctx.canvas.height =  window.innerHeight/3;
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
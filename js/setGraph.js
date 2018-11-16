function setGraph(value) {

  let arr = Array();
  if (value[0] == 0) { // red
    arr.push(10, 5, 5, 5, 5, 5);

  } else if (value[0] == 1) { // orange
    arr.push(5, 10, 5, 5, 5, 5);

  } else if (value[0] == 2) { // yellow
    arr.push(5, 5, 10, 5, 5, 5);

  } else if (value[0] == 3) { // green
    arr.push(5, 5, 5, 10, 5, 5);

  } else if (value[0] == 4) { // blue
    arr.push(5, 5, 5, 5, 10, 5);

  } else { // purple
    arr.push(5, 5, 5, 5, 5, 10);

  }

  var ctx = document.getElementById('graph').getContext('2d');
  ctx.canvas.height =  window.innerHeight/8;
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["", "", "", "", "", ""],
      datasets: [{
        backgroundColor: [
          "red",
          "orange",
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
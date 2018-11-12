function setGraph(value) {
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
          "green",
          "blue",
          "purple",
          "yellow"
        ],
        borderWidth: 5,
        data:[ value[6], value[1], value[2], value[3], value[4], value[5]]
      }]
    }
  });
}
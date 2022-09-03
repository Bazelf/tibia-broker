

var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [7091,6955,5995,6494,6429,7547,7390,7471,6997,6800],
      borderColor: "red",
      fill: false
    }, { 
      data: [5710,5313,4508,5508,6128,6750,6311,6114,5950,5400],
      borderColor: "green",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});



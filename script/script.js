// Hieronder bevind zich de functie voor het hamburger menu. Wanneer 'open nav' 
// wordt aangeklikt zal het menu over het gehele beeld geopent worden.
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// Hieronder bevind zich de data voor de snelheid, de js is afkomstig van Google charts
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);
      }




// Hieronder bevinden de gegevens voor de Charts. De bron van de charts die 
// gebruikt is, is google charts
var line = document.getElementById('myLineChart').getContext('2d'); 
var myLineChart = new Chart(line, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Kilometers x 10.000',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {}
});


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'x 10.000',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',

            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {}
});



var bar = document.getElementById('stackedBar').getContext('2d'); 
var stackedBar = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Mannen', 'Vrouwen', 'Jongens', 'meisjes'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [3, 10, 5, 2]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});



var doughnut = document.getElementById('myDoughnutChart').getContext('2d'); 
var myDoughnutChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['0-3', '3-12', '12-18', '18-65','65+'],
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [5, 10, 8, 57,20]
        }]
    },
    options: {}
});










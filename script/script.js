
// Hieronder bevind zich de functie voor het hamburger menu. Wanneer 'open nav' 
// wordt aangeklikt zal het menu over het gehele beeld geopent worden.
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// Hieronder bevinden de gegevens voor de Charts. De bron van de charts die 
// gebruikt is, is google charts

// Script voor de afgelegde afstand over de maanden

var line = document.getElementById('myLineChart').getContext('2d'); 
var myLineChart = new Chart(line, {
    type: 'line',
    data: {
        labels: ['Ferbuari', 'Maart', 'April', 'Mei', 'Juni', 'Juli','Augustus'],
        datasets: [{
            label: 'Kilometers x 10.000',
            borderColor: '#66ccff',
            data: [0, 20, 22, 35, 39, 48, 53]
        }]
    },
    options: {
    }
});


// Script voor de chart voorraad

var bar = document.getElementById('stackedBar').getContext('2d'); 
var stackedBar = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Groente', 'Fruit', 'Wijn', 'Bier', 'Water'],
        datasets: [{
            label: 'Voorraad x 20.000',
            backgroundColor: '#66ff99',
            borderColor: '#white',
            data: [5, 30, 15, 12, 50]
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

// Script voor de chart 'bevolking'

var doughnut = document.getElementById('myDoughnutChart').getContext('2d'); 
var myDoughnutChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['0-3 jr.', '3-12 jr.', '12-18 jr.', '18-65 jr.','65+'],
        datasets: [{
            backgroundColor: ['#ff6680','#ffe666','#66ff99','#66ccff','#9966ff'],
            borderColor: 'white',
            data: [5, 10, 8, 57,20]
        }]
    },
    options: {
      legend: {
            display: true,
            position: 'bottom',
            alignment: 'end',
            labels: {
                fontColor: 'white',
            }
            
        }
    }
});


// De javascript voor de afteller. Via W3 gevonden hoe hij werkt, vervolgens met eigen data ingevuld.

var countDownDate = new Date("Dec 5, 2021 09:25:52").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "u "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Geland";
  }
}, 1000);










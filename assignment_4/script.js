// Initialize Weather Charts
const tempCtx = document.getElementById('tempChart').getContext('2d');
const aqiCtx = document.getElementById('aqiChart').getContext('2d');
const precipCtx = document.getElementById('precipChart').getContext('2d');

const tempChart = new Chart(tempCtx, {
    type: 'line',
    data: {
        labels: ['12am', '4am', '8am', '12pm', '4pm', '8pm'],
        datasets: [{
            label: 'Temp °C',
            data: [18, 16, 19, 24, 26, 21],
            borderColor: '#00d2ff',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(0, 210, 255, 0.1)'
        }]
    },
    options: { responsive: true, color: '#94a3b8' }
});

const aqiChart = new Chart(aqiCtx, {
    type: 'doughnut',
    data: {
        labels: ['Oxygen', 'Nitrogen', 'CO2', 'Other'],
        datasets: [{
            data: [21, 78, 0.04, 0.96],
            backgroundColor: ['#10b981', '#3b82f6', '#f43f5e', '#6366f1'],
            borderWidth: 0
        }]
    },
    options: { cutout: '80%' }
});

const precipChart = new Chart(precipCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Rainfall (mm)',
            data: [2, 15, 45, 10, 0, 5, 20],
            backgroundColor: '#3a7bd5',
            borderRadius: 10
        }]
    }
});

function refreshWeather() {
    // Randomize for simulation
    tempChart.data.datasets[0].data = tempChart.data.datasets[0].data.map(() => Math.floor(Math.random() * 15) + 15);
    precipChart.data.datasets[0].data = precipChart.data.datasets[0].data.map(() => Math.floor(Math.random() * 50));
    
    tempChart.update();
    precipChart.update();
    
    console.log("Sensors Synced.");
}
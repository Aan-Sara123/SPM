// Random value generator
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dashboard values
const cpuText = document.getElementById("cpu");
const ramText = document.getElementById("ram");
const diskText = document.getElementById("disk");
const networkText = document.getElementById("network");

// CPU Chart
const cpuCtx = document.getElementById("cpuChart").getContext("2d");

const cpuChart = new Chart(cpuCtx, {
    type: "line",
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10"],
        datasets: [{
            label: "CPU %",
            data: [30,35,40,45,38,50,55,48,60,52],
            borderWidth: 2,
            fill: false,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

// RAM Chart
const ramCtx = document.getElementById("ramChart").getContext("2d");

const ramChart = new Chart(ramCtx, {
    type: "line",
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10"],
        datasets: [{
            label: "RAM %",
            data: [45,50,48,55,58,60,62,65,63,66],
            borderWidth: 2,
            fill: false,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

// Update every 2 seconds
setInterval(() => {

    let cpu = randomValue(20, 95);
    let ram = randomValue(30, 90);
    let disk = randomValue(40, 95);
    let network = randomValue(80, 500);

    cpuText.innerHTML = cpu + "%";
    ramText.innerHTML = ram + "%";
    diskText.innerHTML = disk + "%";
    networkText.innerHTML = network + " Mbps";

    cpuChart.data.datasets[0].data.shift();
    cpuChart.data.datasets[0].data.push(cpu);
    cpuChart.update();

    ramChart.data.datasets[0].data.shift();
    ramChart.data.datasets[0].data.push(ram);
    ramChart.update();

}, 2000);
document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('/api/stations');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '<h2>Citybikes Station Data</h2>';

    if (data.length === 0) {
        dataContainer.innerHTML += '<p>No data available</p>';
        return;
    }

    const stationList = document.createElement('ul');
    data.forEach(station => {
        const stationItem = document.createElement('li');
        const stationLink = document.createElement('a');

        stationLink.textContent = station.station_name;
        stationLink.href = '#'; 
        stationLink.addEventListener('click', () => showStationDetails(station));

        stationItem.appendChild(stationLink);
        stationList.appendChild(stationItem);
    });

    dataContainer.appendChild(stationList);
}

async function showStationDetails(station) {
    try {
        
        const [journeyResponse, totalDeparturesResponse, totalArrivalsResponse, averageDistanceResponse, averageDurationResponse] = await Promise.all([
            fetch(`/api/journey/${station.id}`),
            fetch(`/api/totalJourneys/${station.id}`),
            fetch(`/api/totalArrivals/${station.id}`),
            fetch(`/api/averageDistance/${station.id}`),
            fetch(`/api/averageDuration/${station.id}`)
        ]);

        const [journeyData, totalDeparturesData, totalArrivalsData, averageDistanceData, averageDurationData] = await Promise.all([
            journeyResponse.json(),
            totalDeparturesResponse.json(),
            totalArrivalsResponse.json(),
            averageDistanceResponse.json(),
            averageDurationResponse.json()
        ]);

        
        alert(`Station Name: ${station.station_name}\nStation Address: ${station.station_address}\nTotal Departures: ${totalDeparturesData.total}\nTotal Arrivals: ${totalArrivalsData.total}\nAverage Distance: ${averageDistanceData.average}\nAverage Duration: ${averageDurationData.average}`);
    } catch (error) {
        console.error('Error:', error);
        
    }
}

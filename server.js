const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const PORT = 3000;

const pool = new Pool({
    user: 'academy',
    host: 'localhost',
    database: 'citybike',
    password: 'academy',
    port: 5432,
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/stations', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "station" ORDER BY "station_name"');
        const data = result.rows;
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/journey/:stationId', async (req, res) => {
    const stationId = req.params.stationId;

    try {
        const result = await pool.query('SELECT * FROM "journey" WHERE "departure_station_id" = $1 OR "return_station_id" = $1', [stationId]);
        const journeyData = result.rows;
        res.json(journeyData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/totalJourneys/:stationId', async (req, res) => {
    const stationId = req.params.stationId;

    try {
        const result = await pool.query('SELECT COUNT(*) as total FROM "journey" WHERE "departure_station_id" = $1', [stationId]);
        const totalDepartures = result.rows[0].total;
        res.json({ total: totalDepartures });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/totalArrivals/:stationId', async (req, res) => {
    const stationId = req.params.stationId;

    try {
        const result = await pool.query('SELECT COUNT(*) as total FROM "journey" WHERE "return_station_id" = $1', [stationId]);
        const totalArrivals = result.rows[0].total;
        res.json({ total: totalArrivals });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/averageDistance/:stationId', async (req, res) => {
    const stationId = req.params.stationId;

    try {
        const result = await pool.query('SELECT AVG("distance") as average FROM "journey" WHERE "departure_station_id" = $1', [stationId]);
        const averageDistance = result.rows[0].average;
        const roundedAverage = parseFloat(averageDistance).toFixed(2);
        res.json({ average: roundedAverage });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/averageDuration/:stationId', async (req, res) => {
    const stationId = req.params.stationId;

    try {
        const result = await pool.query('SELECT AVG("duration") as average FROM "journey" WHERE "departure_station_id" = $1', [stationId]);
        const averageDuration = result.rows[0].average;
        const roundedAverage = parseFloat(averageDuration).toFixed(2); 
        res.json({ average: roundedAverage });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

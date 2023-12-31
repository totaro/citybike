# Project: citybike

https://github.com/solita/dev-academy-spring-2024-exercise

Let's imagine that you have received an interesting project offer to create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

The exercise uses data that is owned by City Bike Finland. We provide database to you in a Docker container, but the original datasets can be downloaded from here:<br>

https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv<br>
https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv<br>
https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv<br><br>
Also, the database is created using dataset that has information about Helsinki Region Transport’s (HSL) city bicycle stations.<br>

Dataset: https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv<br>
License and information: https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902

<br><b>The exercise</b><br><br>
Create a web application that uses a backend service to fetch the data. Backend can be made with any technology. We at Solita use for example (not in preference order) Java/Kotlin/C#/TypeScript but you are free to choose any other technology as well.
You are provided with Docker setup, with contains a PostgreSQL database with all the necessary data for the exercise.
You can also freely choose the frontend technologies to use. The important part is to give good instructions on how to build and run the project.<br>


- local docker PostgreSQL 
- station and journey tables

<br><b>Functional requirements</b><br><br>
 <b>Station list</b><br>
 - List all stations
 - Link to single station views
 <br><br><b>Single station views</b><br><br>
 - Station name
 - Station address
 - Total number of journeys starting from the station
 - Total number of journeys ending at the station
 - Average distance of journeys starting from the station
 - Avarage duration of journeys starting from the station<br>

# Solution:
javascript and html / express and pg node.js modules / webpack<br>

- Server-side Node.js script (server.js) that connects PostgreSQL database and makes API endpoint for fetching data.

- Client-side script (client.js) that uses Fetch API to get data from server.

- webpack.config.js file for configuring Webpack that is used to bundle client.js (command: npx webpack --config webpack.config.js)

- HTML file (index.html) where fetched data is displayed on data-container div and includes the bundled script (bundle.js).

- Running server (command: node server.js) and open in browser at http://localhost:3000<br><br>

![citybike1](https://github.com/totaro/citybike/assets/66010583/09861c12-ddd2-4b3b-9816-a056a19280f7)

![citybike2](https://github.com/totaro/citybike/assets/66010583/fb42e01d-e682-4991-8a71-1a71cb080faa)

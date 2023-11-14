# citybike

https://github.com/solita/dev-academy-spring-2024-exercise

Let's imagine that you have received an interesting project offer to create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

The exercise uses data that is owned by City Bike Finland. We provide database to you in a Docker container, but the original datasets can be downloaded from here:
The exercise
Create a web application that uses a backend service to fetch the data. Backend can be made with any technology. We at X use for example (not in preference order) Java/Kotlin/C#/TypeScript but you are free to choose any other technology as well.
You are provided with Docker setup, with contains a PostgreSQL database with all the necessary data for the exercise.
You can also freely choose the frontend technologies to use. The important part is to give good instructions on how to build and run the project.<br>

https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv<br>
https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv<br>
https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv<br><br>
Also, the database is created using dataset that has information about Helsinki Region Transport’s (HSL) city bicycle stations.<br>

Dataset: https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv<br>
License and information: https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902


<br>Functional requirements
Station list
List all stations
Link to single station views
Single station view
Station name
Station address
Total number of journeys starting from the station
Total number of journeys ending at the station
Average distance of journeys starting from the station
Avarage duration of journeys starting from the station

- local docker PostgreSQL 
- station and journey tables

- Station list
 - List all stations
 - Link to single station views
 - Single station view
 - Station name
 - Station address
 - Total number of journeys starting from the station
 - Total number of journeys ending at the station
 - Average distance of journeys starting from the station
 - Avarage duration of journeys starting from the station

#My solution:
-javascript and html
-express and pg node modules, webpack


![citybike1](https://github.com/totaro/citybike/assets/66010583/09861c12-ddd2-4b3b-9816-a056a19280f7)

![citybike2](https://github.com/totaro/citybike/assets/66010583/fb42e01d-e682-4991-8a71-1a71cb080faa)

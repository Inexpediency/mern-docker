# dockerizing

### Description
* Docker usage example;
* Template for next projects with docker & docker-compose.


### Available scripts:
* `docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build` - start 
    application in development mode
* `docker-compose build` - build application
* `docker-compose up` - run application
* `docker-compose up --build` - run and build? application

<br>

* `docker logs dockerizing_api_1` - see server logs
* `docker logs dockerizing_api_db_1` - see database logs

<br>

* `docker-compose rm api` - remove api container
* `docker-compose rm api_db` - remove db container (to clear database)

<br>

* `docker volume ls` - get all volumes
* `docker images` - get all images

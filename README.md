# MERN-Docker

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

* `docker logs merndocker_api` - see api service logs
* `docker logs merndocker_api_db` - see api database logs
* `docker logs merndocker_auth` - see auth service logs
* `docker logs merndocker_auth_db` - see auth database logs

<br>

* `docker-compose rm api` - remove api container
* `docker-compose rm api_db` - remove auth db container (to clear database)
* `docker-compose rm auth` - remove auth container
* `docker-compose rm auth_db` - remove auth db container (to clear database)

<br>

* `docker volume ls` - get all volumes
* `docker images` - get all images
* `docker ps` - get all working processes

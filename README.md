# Medieval Math Mania

## Description

Medieval Math Mania is a web based video game that was based on the Hit Target math game. Hit Target is a game for helping children to learn multiplication tables and develop their number sense. It is a game played between two students, where they are given an initial number, and are asked to find an answer within a certain range. Each player take turns trying to guess a multiplication table that fits within the given bounds, and then each player is awarded based on whether they find an answer within the range or not. Medieval Math Mania is a video game that mimics the Hit Target game and also records player progress within a database. A students progress is recorded within a database making it easier for teachers to monitor and grade their students based on their progress. It also rewards students based on their own progress to encourage children to progress.

## Installation
#### Requirements:

First install git and docker

    sudo apt-get install git
    sudo apt-get install docker-ce

Then clone the repository and change directories to the project folder

    git clone git@github.com:cs4560-18-19/belloq.git
    cd belloq/

#### Build & Run:

Enter the client folder, build and minify the client, and then leave the client folder

    cd client
    npm run build
    cd ..

Next run the mongo database container

    docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4

Then compose and build the server

    docker-compose build
    docker-compose up

Next find the IP adress that the docker machine is running on

    docker-machine ls

Visit the IP of your machine on port 8081 to visit the site

    http://x.x.x.x:8081/

<!-- #### Rerun:

    sudo docker container ls
    sudo docker stop <CONTAINER ID> -->

## Client Readme

# client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## About the project

##### Client:
Amanda Katharine Serenevy, Ph.D.</br>Executive Director, Riverbend Community Math Center  

#### Team Belloq:  
Nathan Estep - Team Leader</br>Eric Bitikofer - Release Manager</br>Evan Bradford - Document Manager</br>Dakota O'Brien - Quality Assurance

![logo](https://github.com/cs4560-18-19/belloq/blob/master/belloq-door.jpg)

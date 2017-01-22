# Time tracker app

This is a time logging app. It tracks and visualizes the work you have done.

# How to run locally

Clone the repository to your machine. You should have [Docker](https://docs.docker.com/engine/installation/) and [Docker Compose](https://docs.docker.com/compose/install/) installed. Make sure that you have ownership of all files:

```
sudo chown -R $USER:$USER .
```

Afterwards, fire up the application:

```
docker-compose up
```

Your application should be running on `localhost:8080`. 

In order to stop the application run

```
docker-compose stop
```

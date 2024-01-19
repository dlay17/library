# Getting Started with Create React App

This project was built off of bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [KodieCode react-private-routes](https://github.com/KodieCode/react-private-routes-authentication)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `docker image build`

To build a docker image of this app, run the following command:
docker image build -t libraryf:latest .

This will build a docker image using the docker file in which you can run the frontend of the site.

### `docker run`

To run the image in a container, run the following command:
docker run -dp 8000:3005 --name libraryf libraryf:latest

To verify that the container is up and running, run docker ps to verify

React uses port 3000 by default, by doing -dp 8000:3000, this will map
React's port 3000 to port 8000. To access the site, go to:

http://localhost:8000

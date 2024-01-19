# ActivateStaff - Backend

## Description

This is a Node.js application written in TypeScript. It uses Express.js for routing and Jest for testing. The application is structured around jobs and workers, with separate controllers, routes, and services for each. The application is built using the monolithic architecture, however it could be easily refactored into using a microservice architecture.

HOW TO RUN THE APP LOCALLY:

1. Run `npm install` in the root directory
2. Run `npm run dev` in the root directory to test on local machine
3. Can test locally by sending requests to `localhost:8080`

HOW TO RUN THE APP IN PRODUCTION (SIMPLE WAY):

1. Run `npm install` in the root directory
2. Run `npm run build` in the root directory
3. Run `npm start` in the root directory

HOW TO RUN THE TESTS:

1. Run `npm install` in the root directory
2. Run `npm run test` in the root directory

HOW TO RUN THE APP IN DOCKER:

1. Run `docker build -t <your username>/node-web-app .` in the root directory
2. Run `docker run -p 8080:8080 -d <your username>/node-web-app` in the root directory
3. Can test locally by sending requests to `localhost:8080`s

HOW TO RUN THE APP WITH DOCKER COMPOSE:

1. Run `docker-compose up --build` in the root directory

HOW TO RUN THE APP WITH KUBERNETES (have minikube and kubectl installed):

1. Create a namespace called `activatestaff` in your Kubernetes cluster
2. Build the Docker image named activatestaff and push it to Docker Hub, or on local registry (e.g. Minikube)
3. Run `kubectl apply -f k8s/ -n activatestaff` in the root directory
4. Can test locally by sending requests to `localhost:8080`

## Project Structure

- src/: This directory contains the main application code.
- config/: Configuration files.
- controllers/: Controller files for handling requests and responses.
- middleware/: Middleware functions for handling requests and responses.
- models/: Data models.
- routes/: Route definitions.
- services/: Service files for business logic.
- test/: This directory contains the test files.
- Dockerfile: Dockerfile for building a Docker image of the app.
- docker-compose.yml: Docker Compose configuration file.
- jest.config.js: Configuration file for Jest.
- tsconfig.json: Configuration file for TypeScript.
- package.json: Lists the app's npm dependencies.

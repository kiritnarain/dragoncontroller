# dragoncontroller
React frontend controller for Dragon Robot.  
Runs on port 5090  
To install: npm install  
To start: npm start  
To deploy see static server deployment: https://create-react-app.dev/docs/deployment/  

This is meant to interface with the Dragon Robot's HTTP server and the dragonbackend HTTP server (running on port 5091). It fetches the the Dragon Robot's IP Address from dragonbackend and sends move or stop commands over HTTP to this IP.


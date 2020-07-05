# dragoncontroller
React frontend controller for Dragon Robot.  
Runs on port 5090  
To install: npm install
To start: npm start
To build: npm run build
Make sure to change proxy and homepage address in package.json
To deploy see static server deployment: https://create-react-app.dev/docs/deployment/  

This is meant to interface with the Dragon Robot's HTTP server and the dragonbackend HTTP server (running on port 5091). It sends move or stop commands over HTTP to the server and receives the status of the Dragon Robot.
Commands:
/move?dirDeg=[x]&speed=[y]
/stop
/status


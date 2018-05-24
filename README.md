# Eventizer
The official Eventizer-repository.

## Pre-setup
Make sure Node 9 and NPM is installed by executing the following command in terminal:

```bash
node -v
npm -v
```

The terminal should respond something like:

```bash
v9.x.x
5.x.x
```

If not, head over to [nodejs.org](https://nodejs.org/en/) and install/update Node for your system.

## Setup
### Install
Setup all dependencies with command:

```bash
npm install
```

### Start
Start back-end and front-end with command:

Make sure port 3001 is available for the back-end-server to occupy.

```bash
npm start
```

The front-end-server should start at port 3000. If the server doesn't open your web-browser automatically, do it manually by open your browser and navigate to http://localhost:3000 .

This will fail if you already have something listening at port 3000, then the CLI will suggest another port.

```bash
? Something is already running on port 3000. Probably:
  test-application (pid xxxx)
  in /path/test-application

Would you like to run the app on another port instead? (Y/n)
```

Accept the suggestion and the local front-end-server should start at the suggested port.

### Contributing
Please report any issues.

#### Eventizer

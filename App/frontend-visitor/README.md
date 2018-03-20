# Eventizer front-end
This is the front-end of the Eventizer development stack.
## Setup
### Make sure Node 9 and NPM is installed
Run command in terminal:

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

### Install Eventizer front-end

Setup all dependencies with command:

```bash
npm install
```

Then start a local front-end server with:

```bash
npm start
```

The server should start at port 3000. If the server doesn't open your web-browser automatically, do it manually by open your browser and navigate to http://localhost:3000 .

This will fail if you already have something listening at port 3000, then the CLI will suggest another port.

```bash
? Something is already running on port 3000. Probably:
  test-application (pid xxxx)
  in /path/test-application

Would you like to run the app on another port instead? (Y/n)
```

Accept the suggestion and the local front-end server should start at the suggested port.

### Contributing
Please report an issue if installation fails.

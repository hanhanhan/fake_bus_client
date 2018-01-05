#### FakeBus Client

Websocket client for the FakeBus [API](https://github.com/hanhanhan/fake_bus_api).

1. To run, first get the node package manager npm, and run ```npm install``` while in the directory to locally install packages.

1. Make sure [the flask API server](https://github.com/hanhanhan/fake_bus_api) is running.

1. Use ```npm run dev``` (aliased of ```webpack --watch```).

1. Navigate to the webpage, and watch the schedule update once a minute. You can trigger a bus schedule delay at the server endpoint ```\delay```.
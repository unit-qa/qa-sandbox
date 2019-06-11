# QA Sandbox

UI Automation Testing Using Nightwatch.js Framework & Chrome Browser

## Requirements

Please make sure that you have Node.js & NPM installed on your system.

Note: Chrome web driver works with Google Chrome browser version 75 or newer.

You can check if NPM is properly installed by executing this command in terminal window:

```bash
npm -v
```

You can check if Node.js is properly installed by executing this command in terminal window:

```bash
node -v
```

## Installation

Navigate to the project directory using terminal and execute this command in order to install all required dependencies:

```bash
npm install
```

## How to run tests

Navigate to the project directory using terminal and execute this command in order to start automation tests:

```bash
npm test
```

## Troubleshoot

If you are trying to run tests on Windows machine, you maybe need to replace server path in 'nightwatch.json' configuration file in order for chromedriver to be loaded correctly.

Replace:

```bash
"server_path": "node_modules/.bin/chromedriver"
```

With:

```bash
"server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

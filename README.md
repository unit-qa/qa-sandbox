# QA Sandbox

UI Automation Testing Using Nightwatch.js Framework & Google Chrome Browser

## Requirements

Please make sure that you have `Node.js` & `NPM` installed on your system.

You can check if `NPM` is properly installed by executing this command in terminal window:

```
npm -v
```

You can check if `Node.js` is properly installed by executing this command in terminal window:

```
node -v
```

## Installation

Navigate to the project directory using terminal and execute this command in order to install all required dependencies:

```
npm install
```

## How to run tests

Navigate to the project directory using terminal and execute this command in order to start automation tests:

```
npm test
```

## Troubleshoot

If you are trying to run tests on Windows machine, you maybe need to replace server path in `nightwatch.json` configuration file in order for `chromedriver` to be loaded correctly.

#### Replace:

```
"server_path": "node_modules/.bin/chromedriver"
```

#### With:

```
"server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
```

If you have some problems with running tests locally, try installing `nightwatch` & `chromedriver` globally by executing next commands in terminal window:

#### Nightwatch
```
npm install nightwatch -g
```

#### Chrome Web Driver:

```
npm install chromedriver -g
```

## Note

Chrome web driver works with `Google Chrome` browser version `75` or `newer`.

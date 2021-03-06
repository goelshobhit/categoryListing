# categoryListing

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

categoryListing is a cloud-enabled, mobile-ready, offline-storage, ReactJS powered with react hooks and material ui.

  - Material UI
  - React Hooks
  - Axios
  - CircleCI
  - Heroku
  
# Demo URL
    
  - FE: https://vast-ridge-09243.herokuapp.com/
  - BE: https://intense-basin-90511.herokuapp.com

# App folder Structure!
    - FrontEnd
        - src/app
            - containers
                - App Container
                    - constants: contains global constants.theme_color, color codes
            - components
                - UI break down into small UI components for each category and badges.
            - utils
                - contains utils function
                    - request
                        - use of axios and noty for api error handle
    - Backend
        - json-server
            - contains db.json file
            - https://github.com/goelshobhit/categoryListing/blob/master/json-server/db.json
            - that folder server separately on heroku
            - rename package-1.json to package.json
     - Steps to run BE
         - cd json-server
         - rename package-1.json to package.json
         - yarn install
         - yarn start 
### Tech

categoryListing uses a number of open source projects to work properly:

* [Material UI] - HTML enhanced for web apps!
* [VSCode Editor] - awesome  text editor
* [json-server] - evented I/O for the backend
* [React-Boilerplate] - App architecture
* [CircleCI] - CI used for deployment
* [Heroku] - Hosting server


### Installation

Install the dependencies and devDependencies.

```sh
$ yarn install
```

### Start App

start the server.

```sh
$ yarn start
```

### Development build

```sh
$ yarn build
```

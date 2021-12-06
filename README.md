# Local-Storage-and-Event-Delegation

## Background & Objectives
In this project, we simulate a restauramt's menu. 
The user should be able to add dishes to the list as well as mark them as completed or checked.



## Features
* Local Storage - when the users add data we want it to be stored so that the same state is displayed when the page is refreshed.
* Event Delegation - we add an event listener to a parent element (ul), as the <li> element doesn't exist before the user creates it.

## Technologies
Project created with:
* HTML5
* CSS3
* JavaScript ES6

## Specs

### Cloning
Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/Local-Storage-and-Event-Delegation.git
```

### Local Server
Launch local webserver with the Terminal:
```bash
npm install -g parcel-bundler
parcel index.html
open http://localhost:1234 in the browser

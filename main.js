'use strict';

var electron = require('electron');
var app = require('electron').app;
var BrowserWindow = electron.BrowserWindow;
 require('electron-reload')(__dirname);


var mainWindow = null;



app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
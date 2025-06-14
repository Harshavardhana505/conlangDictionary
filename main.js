const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");
const remoteMain = require("@electron/remote/main");

remoteMain.initialize();

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  remoteMain.enable(win.webContents);
  win.loadFile("index.html");
});

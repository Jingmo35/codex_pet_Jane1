const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('jane1Pet', {
  onSetAction(callback) {
    ipcRenderer.on('pet:set-action', (_event, action) => callback(action));
  },
  setIgnoreMouse(ignore) {
    ipcRenderer.send('pet:set-ignore-mouse', ignore);
  }
});

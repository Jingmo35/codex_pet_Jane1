const { app, BrowserWindow, Menu, Tray, nativeImage, ipcMain, screen } = require('electron');
const path = require('node:path');

let mainWindow;
let tray;

const WINDOW_WIDTH = 240;
const WINDOW_HEIGHT = 270;

function createWindow() {
  const display = screen.getPrimaryDisplay();
  const { width, height } = display.workAreaSize;

  mainWindow = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    x: width - WINDOW_WIDTH - 32,
    y: height - WINDOW_HEIGHT - 32,
    frame: false,
    transparent: true,
    resizable: false,
    hasShadow: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.loadFile(path.join(__dirname, 'renderer.html'));
}

function createTray() {
  const icon = nativeImage.createEmpty();
  tray = new Tray(icon);
  tray.setToolTip('Jane1 Pet');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Idle', click: () => sendAction('idle') },
    { label: 'Wave', click: () => sendAction('waving') },
    { label: 'Working', click: () => sendAction('running') },
    { type: 'separator' },
    { label: 'Show / Hide', click: toggleWindow },
    { label: 'Quit Jane1', click: () => app.quit() }
  ]));
}

function sendAction(action) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('pet:set-action', action);
  }
}

function toggleWindow() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    mainWindow.show();
  }
}

ipcMain.on('pet:set-ignore-mouse', (_event, ignore) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setIgnoreMouseEvents(Boolean(ignore), { forward: true });
  }
});

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
  createTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', (event) => {
  event.preventDefault();
});

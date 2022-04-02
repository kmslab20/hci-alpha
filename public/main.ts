// @ts-ignore

const {app,BrowserWindow, ipcMain, Menu} = require('electron');

const path = require('path')
const isDev = require('electron-is-dev')

const remote = require('@electron/remote/main')
remote.initialize()

let win

Menu.setApplicationMenu(false)

function createWindow() {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      // enableRemoteModule: true,
      contextIsolation: false,
      // autoHideMenuBar: true,
    }
  })

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  remote.enable(win.webContents);
}


//렌더러프로세스에서 보내는 메시지 처리
ipcMain.on('toggle-debug', (event, arg)=> {
  //디버기 툴 토글(on/off)
  win.webContents.toggleDevTools()
})
ipcMain.on('refresh', (event, arg)=> {
  //페이지 갱신
  win.reload();
})

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if(BrowserWindow.getAllWindows().length === 0) createWindow()
})
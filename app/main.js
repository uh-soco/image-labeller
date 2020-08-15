const { BrowserWindow, app, ipcMain, remote } = require('electron')
const writeResultsToSQLite = require('./utils/writeResultsToSQLite')
const getPathsFromTxt      = require('./utils/getPathsFromTxt')

const path = require('path')

const installExtensions = async () => {
  const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

const createWindow = async () => {


  let win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {   
          nodeIntegration: false,
          contextIsolation: true,
          enableRemoteModule: false,
          preload: path.join(__dirname, "preload.js")
        }
      
    })
    
  if (process.env.NODE_ENV === 'dev') {
    await installExtensions()
    win.loadURL('http://localhost:3003') // KehitykseMME

  } else {
    win.loadFile('./build/index.html') // TuotantoMME
  }
  
}

app.on('ready', () => {
  if (process.env.NODE_ENV) {
    console.log('ymparistoMME', process.env.NODE_ENV)
  } 
 
  createWindow() // Chrome-kehitystyokalutMME
    //win.webContents.openDevTools()  )
})

// Listener for reading file 
ipcMain.handle('read-file-content', (event,arg) => {

  console.log('args',arg)
  return getPathsFromTxt(arg)
  

  
});


// Listener for request to export dat to sqlite
ipcMain.on('request-write-to-sqlite', (event, arg) => {
  writeResultsToSQLite(arg)
});
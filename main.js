const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');
const { BrowserWindow, app } = require('electron')


const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

const createWindow = async () => {


  await installExtensions()
  
  let win = new BrowserWindow({
        width: 1200,
        height: 600
    })
    
  if (process.env.NODE_ENV === 'dev') {
    console.log('Käynnistetään kehitysympäristössäMME')
    win.loadURL('http://localhost:3003') // KehitykseMME
  } else {
    win.loadFile('./build/index.html') // TuotantoMME
  }

  return dev
  
}








app.on('ready', () => {

  console.log('ymparistoMME', process.env.NODE_ENV)
  
  createWindow() // Chrome-kehitystyokalutMME
    //win.webContents.openDevTools()  )

})







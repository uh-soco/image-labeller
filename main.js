
const { BrowserWindow, app } = require('electron')

const createWindow = () => {
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

     // Chrome-kehitystyokalutMME
     win.webContents.openDevTools()  
}

app.on('ready', () => {

  console.log('ymparistoMME', process.env.NODE_ENV)

  createWindow()

})






// Exposes ipcRenderer to the renderer-process via contextBridge
// See https://www.electronjs.org/docs/api/context-bridge
// and e.g. https://github.com/electron/electron/issues/9920
const { contextBridge, ipcRenderer } = require('electron')

const getUrlAsBase64 = require('./main-utils/getUrlAsBase64')

process.once('loaded', () => {

  contextBridge.exposeInMainWorld(
    'api',
    {
      loadFile: filepath => ipcRenderer.invoke('read-file-content',filepath),
      sendRowsToBeWrittenToFile: data => ipcRenderer.invoke('write-rows-to-file', data),
      sendRowsToBeWrittenToSQLite: data => ipcRenderer.invoke('request-write-to-sqlite',data),
      getFile: data => ipcRenderer.invoke('get-file',data),
      getUrlAsBase64: url => getUrlAsBase64(url),
      getFileAsBase64: data => ipcRenderer.invoke('get-file',data).then(d => Buffer.from(d , 'binary').toString('base64') )
    }
  )
})
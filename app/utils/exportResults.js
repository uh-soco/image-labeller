
import getTimestamp from './getTimestamp'

const makeRowForCSV = result => {

    return [result.id, result.service, result.label, result.accuracy,  result.type, result.path, getTimestamp() ].join(';').concat('\n')
}

const createJSON = result => {
    
  const json = [JSON.stringify({ 'id': result.id, 'service': result.service, 'label': result.label, 'accuracy': result.accuracy, 'type': result.type, 'path': result.path, ts: getTimestamp() })]

  return [json] // WriteRowsToFile expects an array
}


const exportResults = (job, formatToExportTo, file='export') => {

  const filename = file.concat('.').concat( formatToExportTo === 'SQLite' ? 'db' : formatToExportTo.toLowerCase() )



  if (formatToExportTo === 'SQLite') {

   
    // Data to send to main process
    const data = {
      result: job.result,
      filename: filename
    };

    // Main process has listener for action 'request-write-to-sqlite'
    // See preload.js
    return window.api.sendRowsToBeWrittenToSQLite(data)

  } 
  


  const rows = formatToExportTo === 'CSV' ? job.result.map(makeRowForCSV) : createJSON(job.result)
  // see preload.js
  return window.api.sendRowsToBeWrittenToFile({ rows: rows, filename: filename })

}

export default exportResults

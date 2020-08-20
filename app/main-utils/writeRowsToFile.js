const fs = require('fs')

const writeRowsToFile = (rows, filename) => {
  const stream = fs.createWriteStream(filename, { flags: 'a' })
  rows.forEach(row => stream.write(row))
  stream.end()

  return new Promise((res,rej) => res(rows.length)) // A pseudo-promise to return to renderer to show number of rows written
}

module.exports = writeRowsToFile
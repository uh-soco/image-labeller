import fs from 'fs'

const writeRowsToFile = (rows, filename) => {
  const stream = fs.createWriteStream(filename, { flags: 'a' })
  rows.forEach(row => stream.write(row))
  stream.end()
}

export default writeRowsToFile
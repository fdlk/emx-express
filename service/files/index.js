const fs = require('fs')

const read = (filename) => fs.readFileSync(filename, 'utf-8').trim()

module.exports = {
  read
}

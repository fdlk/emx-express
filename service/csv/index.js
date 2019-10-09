const Papa = require('papaparse')

const defaultPapaOptions = {
  header: true,
  skipEmptyLines: true,
  transformHeader: (it) => it.trim()
}

const parse = (contents, options = {}) => 
  Papa.parse(contents, {...defaultPapaOptions, ...options}).data

module.exports = {
  parse
}
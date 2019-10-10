const files = require('./files')
const csv = require('./csv')
const emx = require('./emx')
const Repository = require('./repository/Repository')

// read files
const dataDir = './data'
console.log(`procesing metadata...`)
const entitiesCsv = files.read(`${dataDir}/entities.tsv`)
const attributesCsv = files.read(`${dataDir}/attributes.tsv`)

// parse csv
const rawEntities = csv.parse(entitiesCsv, {dynamicTyping: true})
const rawAttributes = csv.parse(attributesCsv, {dynamicTyping: true})

// parse emx meta
const allMeta = emx.parseMeta(rawEntities, rawAttributes)

// create data repositories
const repositories = Object.entries(allMeta).reduce((prev, [id, meta]) => {
  if (meta.abstract) {
    return prev
  }
  const filename = `${dataDir}/${id}.tsv`
  console.log(`procesing ${filename}...`)
  const contents = files.read(filename)
  const rawRows = csv.parse(contents)
  const data = emx.parseData(id, allMeta, rawRows)
  const repo = new Repository(id, allMeta, data)
  return {
    ...prev,
    [id]: repo
  }
}, {})

module.exports = {
  repositories
}
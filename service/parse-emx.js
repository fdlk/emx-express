const files = require('./files')
const csv = require('./csv')
const emx = require('./emx')
const Repository = require('./repository/Repository')

const patientsId = 'root_hospital_patients'

// read files
const dataDir = './data'
const entitiesCsv = files.read(`${dataDir}/entities.csv`)
const attributesCsv = files.read(`${dataDir}/attributes.csv`)
const patientsCsv = files.read(`${dataDir}/${patientsId}.csv`)

// parse csv
const rawEntities = csv.parse(entitiesCsv, {dynamicTyping: true})
const rawAttributes = csv.parse(attributesCsv, {dynamicTyping: true})
const rawPatients = csv.parse(patientsCsv)

const {meta, data} = emx.parse(rawEntities, rawAttributes, {
  [patientsId]: rawPatients
})

const repository = new Repository(patientsId, meta, data[patientsId])

module.exports = {
  repository
}
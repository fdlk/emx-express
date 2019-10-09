const files = require('./files')
const csv = require('./csv')
const emx = require('./emx')
const metadata = require('./metadata')
const paging = require('./v3/paging')
const v3Data = require('./v3/data')

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

//TODO: this is the repository's job
//TODO: add sorting
const page = paging.getPageBlock(1, rawPatients.length, 10)
const patientsPage = data[patientsId].slice(page.number * page.size, (page.number + 1) * page.size)

const patientsAttributes = metadata.attributes.getAllAttributes(patientsId, meta)
const response = v3Data.getResponse(patientsId, patientsAttributes, patientsPage, page)

console.log(JSON.stringify(response))
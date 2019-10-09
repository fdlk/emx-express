const entities = require('./entities')
const attributes = require('./attributes')
const data = require('./data')
const utils = require('../utils')
const metadata = require('../metadata')

const parseData = (entity, meta, rawRows) => {
  const allAttrs = metadata.attributes.getAllAttributes(entity, meta)
  return data.parseRows(rawRows, allAttrs)
}

const parse = (rawEntities, rawAttributes, rawData) => {
  const emxAttributesList = rawAttributes.map(attributes.normalize)
  const emxAttributes = utils.groupBy(emxAttributesList, 'entity')
  const emxEntitiesList = rawEntities
    .map(entities.normalize)
  emxEntitiesList
    .forEach((it) => it.attributes = emxAttributes[it.id])
  const meta = utils.groupByUnique(emxEntitiesList, 'id')


  const data = Object.entries(rawData).reduce((prev, [entity, rawRows]) => {
    prev[entity] = parseData(entity, meta, rawRows)
    return prev
  }, {})
  return { meta, data }
}

module.exports = {
  parse
}
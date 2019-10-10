const entities = require('./entities')
const attributes = require('./attributes')
const data = require('./data')
const utils = require('../utils')
const metadata = require('../metadata')

const parseData = (entity, allMeta, rawRows) => {
  const allAttrs = metadata.attributes.getAllAttributes(entity, allMeta)
  return data.parseRows(rawRows, allAttrs)
}

const parseMeta = (rawEntities, rawAttributes) => {
  const emxAttributesList = rawAttributes.map(attributes.normalize)
  const emxAttributes = utils.groupBy(emxAttributesList, 'entity')
  const emxEntitiesList = rawEntities.map(entities.normalize)
  emxEntitiesList.forEach((it) => it.attributes = emxAttributes[it.id])
  return utils.groupByUnique(emxEntitiesList, 'id')
}

module.exports = {
  parseMeta,
  parseData
}
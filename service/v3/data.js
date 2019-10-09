const MREFS = ['CATEGORICAL_MREF', 'MREF', 'ONE_TO_MANY']

const getValue = (entity, id, value, {name, dataType}, expand) => {
  if ((value !== '' && value !== undefined) || MREFS.includes(dataType) ) {
    switch (dataType) {
      case 'CATEGORICAL':
      case 'XREF':
      case 'FILE':
        return {
          links: {
            self: getSelf(value.refEntity, value.idString)
          }
        }
      case 'CATEGORICAL_MREF':
      case 'MREF':
      case 'ONE_TO_MANY':
        return {
          links: {
            self: getSelf(entity, id, name)
          }
        }
      case 'BOOL':
      case 'DATE':
      case 'DATE_TIME':
      case 'DECIMAL':
      case 'LONG':
      case 'EMAIL':
      case 'HTML':
      case 'HYPERLINK':
      case 'STRING':
      case 'ENUM':
      case 'INT':
      case 'TEXT':
      case 'SCRIPT':
        return value
      default:
        throw new Error(`Unexpected data type: ${dataType}`)
    }
  }
}

const getData = (entity, row, id, attrs, expand) => 
  attrs
    .filter(it => it.dataType !== 'COMPOUND')
    .reduce((data, attr) => ({
      ...data, 
      [attr.name]: getValue(entity, row[id], row[attr.name], attr)
    }), {})

// TODO: this is a param
const baseUrl = 'https://master.dev.molgenis.org/api/data'

const getSelf = (entity, id, attr) => 
  attr ? `${baseUrl}/${entity}/${id}/${attr}` : `${baseUrl}/${entity}/${id}`
  
const getLinks = (entity, id, attr=null) => ({
  self: getSelf(entity, id, attr)
})

const getRowBlock = (name, data, attrs, id) => ({
  links: getLinks(name, data[id]),
  data: getData(name, data, id, attrs)
})

const getResponse = (name, attributes, rows, page) => {
  const idAttr = attributes.find(it => it.idAttribute)
  return {
    links: {
      self: `${baseUrl}/api/data/${name}?todo`
    },
    items: rows.map(row => getRowBlock(name, row, attributes, idAttr.name)),
    page
  }
}

module.exports = {
  getResponse
}
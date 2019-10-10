const attributeDefaults = {
  dataType: 'STRING',
  nillable: true,
  idAttribute: false,
  auto: false,
  lookupAttribute: false,
  aggregateable: false,
  readOnly: false,
  unique: false
}

const mapDataType = (dataType) => {
  const result = dataType.toUpperCase()
  switch (result){
    case 'ONETOMANY':
    case 'ONE_TO_MANY':
      return 'ONE_TO_MANY'
    case 'CATEGORICALMREF':
    case 'CATEGORICAL_MREF':
      return 'CATEGORICAL_MREF'
    case 'DATETIME':
    case 'DATE_TIME':
      return 'DATE_TIME'
    case 'INT':
    case 'LONG':
    case 'FLOAT':
    case 'DECIMAL':
    case 'BOOL':
    case 'XREF':
    case 'CATEGORICAL':
    case 'COMPOUND':
    case 'FILE':
    case 'MREF':
    case 'DATE':
    case 'STRING':
    case 'TEXT':
    case 'ENUM':
    case 'SCRIPT':
    case 'EMAIL':
    case 'HTML':
    case 'HYPERLINK':
      return result
    default:
      throw new Error(`Unknown data type: '${dataType}'`)
  }
}
  
const normalize = (attribute) => {
  const result = {...attribute}
  Object.entries(attributeDefaults).forEach(([name, def]) => {
    if (result[name] === null || result[name] === '') {
      result[name] = def
    }
  })
  result.dataType = mapDataType(result.dataType)
  return result
}

module.exports = {
  normalize
}
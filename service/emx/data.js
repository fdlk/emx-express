const parseBool = value => value.trim().toLowercase() === 'true'

const parseRef = (value, refEntity) => ({
  refEntity,
  idString: value
})

// TODO: Looks like refEntity id cannot contain ',' in EMX!
const parseRefs = (value, refEntity) => 
  value.split(',')
    .map(it => parseRef(it, refEntity))

const convert = (value, {dataType, refEntity}) => {
  switch (dataType) {
    case 'INT':
    case 'LONG':
      return parseInt(value, 10)
    case 'FLOAT':
    case 'DECIMAL':
      return parseFloat(value)
    case 'BOOL':
      return parseBool(value)
    case 'XREF':
    case 'CATEGORICAL':
    case 'FILE':
      return parseRef(value, refEntity)
    case 'MREF':
    case 'CATEGORICAL_MREF':
      return parseRefs(value, refEntity)
    case 'DATE':
    case 'DATE_TIME':
    // NB: we cannot distinguish between empty string and null in EMX
    case 'STRING':
    case 'TEXT':
    case 'ENUM':
    case 'SCRIPT':
    case 'EMAIL':
    case 'HTML':
    case 'HYPERLINK':          
      return value
    case 'ONE_TO_MANY':
      throw new Error('No data for computed data type ONE_TO_MANY')
    default:
      throw new Error(`Unknown dataType: '${dataType}'.`)
  }
}

const parseRow = (row, attrs) => attrs
  .reduce((prev, attr) => {
    const value = row[attr.name]
    if (value !== undefined && value !== '') {
      prev[attr.name] = convert(value, attr)
    }
    return prev
  }, {})

const parseRows = (rows, attrs) => {
  const filteredAttrs = attrs.filter(({dataType}) => dataType !== 'COMPOUND' && dataType !== 'ONE_TO_MANY')
  return rows.map(row => parseRow(row, filteredAttrs))
}

module.exports = {
  parseRows
}

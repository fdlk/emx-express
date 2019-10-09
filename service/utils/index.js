const groupBy = (list, idAttr) => 
  list.reduce((prev, curr) => 
    ({
      ...prev,
      [curr[idAttr]]: [...(prev[curr[idAttr]] || []), curr]
    }), {})

const groupByUnique = (list, idAttr) => 
  list.reduce((prev, curr) => 
    ({
      ...prev,
      [curr[idAttr]]: curr
    }), {})

module.exports = {
  groupBy,
  groupByUnique
}
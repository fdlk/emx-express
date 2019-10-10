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

const paginated = (data, page) => 
  page ? data.slice(page.number * page.size, (page.number + 1) * page.size) : data

module.exports = {
  groupBy,
  groupByUnique,
  paginated
}
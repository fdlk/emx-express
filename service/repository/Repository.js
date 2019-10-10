const {paginated} = require('../utils')
const {attributes} = require('../metadata/index')

class Repository {

  constructor (id, meta, data) {
    this.id = id
    this.meta = meta
    this.data = data
    this.idAttribute = meta[id].attributes.find(it => it.idAttribute)
  }

  count () {
    return this.data.length
  }
  findAll (page) {
    return paginated(this.data, page)
  }
  getAllAttributes () {
    return attributes.getAllAttributes(this.id, this.meta)
  }
}

module.exports = Repository
const getAllAttributes = (id, meta) => {
  const entity = meta[id]
  const parentAttrs = entity.extends ? getAllAttributes(entity.extends, meta) : []
  return [...entity.attributes, ...parentAttrs]
}

module.exports = {
  attributes: {
    getAllAttributes
  }
}
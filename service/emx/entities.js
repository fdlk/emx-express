const normalize = (it) => ({
  ...it,
  id: it.package ? `${it.package}_${it.name}` : it.name
})

module.exports = {
  normalize
}
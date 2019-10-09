const getPageBlock = (number, totalElements, size) => {
  if (!size) {
    size = Math.min(100, totalElements)
  }
  const totalPages = Math.ceil(totalElements / size)
  return {
    size,
    totalElements,
    totalPages,
    number
  }
}

module.exports = {
  getPageBlock
}
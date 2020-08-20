const getTimestamp = () => new Date().toISOString().split('T').join(' ')

module.exports = getTimestamp
const fs = require('fs')
const path = require('path')

function readDatabase() {
  const dataPath = path.resolve(__dirname, '../../../../data.json')
  const file = fs.readFileSync(dataPath)
  return JSON.parse(file)
}

function writeDatabase (task) {
  const dataPath = path.resolve(__dirname, '../../../../data.json')
  const file = fs.readFileSync(dataPath)
  const data = JSON.parse(file)
  data.push(task)
  fs.writeFileSync(dataPath, JSON.stringify(data))
}

module.exports = { readDatabase, writeDatabase }
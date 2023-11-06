const fs = require('fs-extra')
const { execSync } = require('child_process')

const packageJson = JSON.parse(String(fs.readFileSync('./package.json')))
const { name, version } = packageJson

function getNpmVersion() {
  try {
    const result = execSync(`npm view ${name} version`)
    const version = String(result).trim()

    return version
  } catch {
    return '0.0.0'
  }
}

const npmVersion = getNpmVersion()
const shouldPublish = version !== npmVersion

console.log()
console.log(`=== cra-template-publish ===`)
console.log(`current version: ${version}, and npm version: ${npmVersion}`)
console.log(shouldPublish ? `ready for publish` : `skip publish`)
console.log()

if (shouldPublish) {
  execSync(`npm publish`)
}

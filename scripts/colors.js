const fs = require('fs')

const rootPath = process.cwd()

fs.readFile(`${rootPath}/dist/sprite.svg`, 'utf8', (err, data) => {
  if (err) throw err

  const newData = data.replace(/(fill|stroke)=".*?"/g, '')

  fs.writeFile(`${rootPath}/dist/sprite.svg`, newData, (errWrite) => {
    if (errWrite) throw err
    console.log('Sprite without colors created!')
  })
})

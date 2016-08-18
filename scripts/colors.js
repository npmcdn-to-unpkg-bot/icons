const fs = require('fs')

const rootPath = process.cwd()

fs.readFile(`${rootPath}/tmp/sprite.svg`, 'utf8', (err, data) => {
  if (err) throw err

  const newData = data.replace(/(fill|stroke)="(?!none|transparent).*?"/g, '')

  fs.writeFile(`${rootPath}/tmp/sprite.svg`, newData, (errWrite) => {
    if (errWrite) throw err
    console.log('Sprite without colors created!')
  })
})

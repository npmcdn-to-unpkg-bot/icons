const fs = require('fs')
const mkdirp = require('mkdirp')

const rootPath = process.cwd()

fs.readdir(`${rootPath}/src/icons/`, (err, files) => {
  if (err) throw err

  const reg = /^(kb_)(.*)(\.svg)$/i
  const list = files.map((item) => reg.exec(item)[2])

  mkdirp(`${rootPath}/dist`, (errMkdir) => {
    if (errMkdir) throw err

    fs.writeFile(`${rootPath}/dist/sprite.json`, JSON.stringify(list), (errWrite) => {
      if (errWrite) throw err
      console.log('Names list created!')
    })
  })
})

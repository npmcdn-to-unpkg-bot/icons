const fs = require('fs')

const rootPath = process.cwd()

fs.readdir(`${rootPath}/src`, (err, files) => {
  if (err) {
    throw err
  } else {
    const reg = /^(kb-)(.*)(\.svg)$/i
    const list = files.map((item) => reg.exec(item)[2])

    fs.writeFile(`${rootPath}/dist/list.json`, JSON.stringify(list), (errWrite) => {
      if (errWrite) {
        throw err
      } else {
        console.log('List created!')
      }
    })
  }
})

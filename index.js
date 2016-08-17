(function () {
  const sprite = require(`raw!./dist/sprite/icons.svg`)

  if (document.body != null) {
    document.body.appendChild(sprite)
  }
}())

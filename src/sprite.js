const sprite = require('../tmp/sprite.svg')

document.addEventListener('DOMContentLoaded', () => {
  (function () {
    if (document.body != null) {
      document.body.innerHTML += sprite
    }
  }())
})

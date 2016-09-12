const sprite = require('../tmp/sprite.svg')

const appendSprite = (node) => {
  document.querySelector(node).innerHTML += sprite
}

export default appendSprite

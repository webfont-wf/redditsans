const toggle = require("./toggle")

const select = (syncList = []) => (e) => {
  e.preventDefault()

  const el = e.currentTarget
  const parent = el.parentNode
  const siblings = Array.from(parent.parentNode.children)
  const index = siblings.indexOf(parent)

  siblings.forEach(toggle(index))
  syncList.forEach(toggle(index))
}

module.exports = select
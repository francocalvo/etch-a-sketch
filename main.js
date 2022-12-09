'use strict'

const GRID_SIZE = 500
const SIZE_START = 16
const colorList = ['nord10', 'nord11', 'nord12', 'nord13', 'nord14', 'nord15']
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(size) {
  const container = document.querySelector('.container')
  const px = GRID_SIZE / size
  console.log(px)
  for (let j = 0; j < size; j++) {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let i = 0; i < size; i++) {
      const div = document.createElement('div')
      div.classList.add('pixel')
      div.style.width = px + 'px'
      div.style.height = px + 'px'
      div.addEventListener('mousedown', (e) => {
        e.target.classList.toggle(color)
      })
      div.addEventListener('mouseover', (e) => {
        if (!mouseDown) return
        const pixel = e.target

        if (pixel.classList[1]) pixel.classList.remove(pixel.classList[1])
        e.target.classList.toggle(color)
      })

      row.appendChild(div)
    }
    container.appendChild(row)
  }
}

function changeColor(event) {
  console.log(event.target)
  let elements = document.querySelectorAll('.sample')
  elements.forEach((el) => el.classList.remove('chosen'))
  event.target.classList.add('chosen')
  color = event.target.classList[1]
}

function addColors(colors) {
  const container = document.querySelector('.colors')
  for (const color of colors) {
    const div = document.createElement('div')
    div.classList.add('sample')
    div.classList.add(color)
    div.addEventListener('click', changeColor)
    container.append(div)
  }
}

createGrid(SIZE_START)

addColors(colorList)

let color = colorList[0]
let colorEl = document.querySelector('.sample')
colorEl.classList.add('chosen')

const input = document.querySelector('input')
input.addEventListener('change', (e) => {
  e.preventDefault()
  const val = parseInt(e.target.value)
  e.target.value = val + 'px'
  const container = document.querySelector('.container')
  container.innerHTML = ''
  createGrid(val)
})

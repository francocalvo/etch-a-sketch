'use strict'
const side = 500 / 16
const container = document.querySelector('.container')

const colors = {
  nord10: '#5e81ac',
  nord11: '#bf616a',
  nord12: '#d08770',
  nord13: '#ebcb8b',
  nord14: '#a3be8c',
  nord15: '#b48ead',
}

const colorList = ['nord10', 'nord11', 'nord12', 'nord13', 'nord14', 'nord15']



let color = colorList[0]

for (let j = 0; j < 16; j++) {
  const row = document.createElement('div')
  row.classList.add('row')
  for (let i = 0; i < 16; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')

    div.addEventListener('click', (e) => {
      console.log(e.target)
      e.target.classList.toggle(color)
    })

    row.appendChild(div)
  }
  container.appendChild(row)
}

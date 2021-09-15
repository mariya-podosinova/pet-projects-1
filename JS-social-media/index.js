const capybaras = [
  {
    name: 'first',
    thumbnail: 'images/1.JPG',
  },
  {
    name: 'second',
    thumbnail: 'images/2.JPG',
  },
  {
    name: 'third',
    thumbnail: 'images/3.JPG',
  },
  {
    name: 'fourth',
    thumbnail: 'images/4.JPG',
  },
  {
    name: 'fifth',
    thumbnail: 'images/5.JPG',
  },
]

const capybaraBasket = document.getElementById('capybara-basket')

capybaras.forEach((capybara) => {
  const card = document.createElement('div')
  card.classList.add('card')
  capybaraBasket.appendChild(card)

  const pic = document.createElement('img')
  pic.classList.add('pic')
  pic.src = capybara.thumbnail
  card.appendChild(pic)

  const cardName = document.createElement('h2')
  cardName.classList.add('card-name')
  cardName.innerText = capybara.name
  card.appendChild(cardName)

  const paw = document.createElement('span')
  paw.classList.add('material-icons-outlined')
  paw.textContent = 'pets'
  card.appendChild(paw)
})

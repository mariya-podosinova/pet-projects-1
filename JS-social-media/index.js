const capybaras = [
  {
    name: 'first',
    thumbnail: 'images/1.JPG',
    best: true,
  },
  {
    name: 'second',
    thumbnail: 'images/2.JPG',
    best: false,
  },
  {
    name: 'third',
    thumbnail: 'images/3.JPG',
    best: false,
  },
  {
    name: 'fourth',
    thumbnail: 'images/4.JPG',
    best: false,
  },
  {
    name: 'fifth',
    thumbnail: 'images/5.JPG',
    best: false,
  },
]

const capybaraBasket = document.getElementById('capybara-basket')

capybaras.forEach((capybara) => {
  const card = document.createElement('div')
  card.classList.add('card')
  capybaraBasket.appendChild(card)

  if (capybara.best) {
    card.classList.add('best')
  }

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
  paw.addEventListener('click', function () {
    paw.classList.toggle('liked')
  })
})

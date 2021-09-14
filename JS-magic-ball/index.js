const btn = document.getElementById('advice-btn')
const adviceDisplay = document.getElementById('advice-display')
const modeSelector = document.getElementById('mode-selector')
let clickAmount = 0

const advice = [
  'Honestly, has your brain ever even considered something like that?',
  'Sad. Sad that we even had to bring this to your attention.',
  'But in sadness, there is hope.',
  'Let’s consider something very important here.',
  'Well, duh.',
]

const badAdvice = [
  'Don`t count on it. 🍸',
  'My reply is no. 🍺',
  'My sources say no.🍾',
  'Better not tell you now.🥂',
  'Outlook not so good.🍹',
]

btn.addEventListener('click', function () {
  const isEvil = modeSelector.checked
  if (clickAmount < 3) {
    if (isEvil) {
      displayAdvice(badAdvice)
    } else {
      displayAdvice(advice)
    }
  } else {
    btn.textContent = ''
    adviceDisplay.textContent = 'Tired 🥱. Come back later'
  }
})

function displayAdvice(adviceArr) {
  let random = Math.floor(Math.random() * adviceArr.length)
  adviceDisplay.textContent = adviceArr[random]
  clickAmount++
}

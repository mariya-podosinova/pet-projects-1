const btn = document.getElementById('advice-btn')
const adviceDisplay = document.getElementById('advice-display')
const modeSelector = document.getElementById('mode-selector')
let clickAmount = 0

const advice = [
  'Honestly, has your brain ever even considered something like that?',
  'Sad. Sad that we even had to bring this to your attention.',
  'But in sadness, there is hope.',
  'Letâs consider something very important here.',
  'Well, duh.',
]

const badAdvice = [
  'Don`t count on it. ð¸',
  'My reply is no. ðº',
  'My sources say no.ð¾',
  'Better not tell you now.ð¥',
  'Outlook not so good.ð¹',
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
    adviceDisplay.textContent = 'Tired ð¥±. Come back later'
  }
})

function displayAdvice(adviceArr) {
  let random = Math.floor(Math.random() * adviceArr.length)
  adviceDisplay.textContent = adviceArr[random]
  clickAmount++
}

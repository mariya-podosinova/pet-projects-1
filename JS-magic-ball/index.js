const btn = document.getElementById('advice-btn')
const adviceDisplay = document.getElementById('advice-display')

const advice = [
  'Let’s be real.There are very few things in this world that you can shake and instantly receive a sarcastic answer from…',
  'Honestly, has your brain ever even considered something like that?',
  'Sad. Sad that we even had to bring this to your attention.',
  'But in sadness, there is hope.',
  'Let’s consider something very important here.',
  'Well, duh.',
]

btn.addEventListener('click', displayAdvice)

function displayAdvice() {
  let random = Math.floor(Math.random() * advice.length)
  adviceDisplay.textContent = advice[random]
}

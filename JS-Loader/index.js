const btn = document.getElementById('btn')
const loader = document.getElementById('loader')
const timer = document.getElementById('timer')
let interval
let timeLeft = timer.innerText

btn.addEventListener('click', load)

function load() {
  loader.classList.toggle('loading')
  if (loader.classList.contains('loading')) {
    btn.innerText = 'Pause'
    countdown()
  } else {
    btn.innerText = 'Load'
  }
}

function countdown() {
  interval = setInterval(updateTimer, 1000)
}

function updateTimer() {
  if (timeLeft > 1) {
    timeLeft -= 1
    timer.innerText = timeLeft
  } else {
    clearInterval(interval)
    loader.classList.remove('loading')
    timer.innerText = 0
    btn.innerText = 'Load'
  }
}

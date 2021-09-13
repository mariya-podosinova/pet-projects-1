const btn = document.getElementById('btn')
const loader = document.getElementById('loader')

btn.addEventListener('click', load)

function load() {
  loader.classList.toggle('loading')
}

const calculate = document.getElementById('calculate')

calculate.addEventListener('click', calculateTotal)
calculate.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    calculateTotal()
  }
})

function calculateTotal() {
  const billValue = parseFloat(document.getElementById('bill-value').value)
  const tipValue = parseFloat(document.getElementById('tip-value').value)

  const billTotal = billValue + (billValue * tipValue) / 100
  const totalBill = document.getElementById('total')
  totalBill.innerText = billTotal.toLocaleString('en', {
    style: 'currency',
    currency: 'GBP',
  })
}

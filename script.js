const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value


function countSelected() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const numOfSelected = selectedSeats.length;
  count.innerText = numOfSelected;
  total.innerText = numOfSelected * ticketPrice
}

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  countSelected()
})

container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
  }

  countSelected()
})
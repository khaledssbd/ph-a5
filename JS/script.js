function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function home() {
  showElementById('home-page');
  hideElementById('confirmation-page');
}
function confirm() {
  showElementById('confirmation-page');
  hideElementById('home-page');
}
let seats = document.getElementsByClassName('seat-in bus');
let seatsClicked = getTextElementValueById('total-seats');
let seatsLeft = getTextElementValueById('seat-left');
let totalPrice = getTextElementValueById('total-price');
let array = [];

for (const seat of seats) {
  seat.addEventListener('click', function () {
    setBgGreenByClass(seat);
    seatName = seat.innerText;
    array.push(seatName);
    seatsClicked = countUniqueSeats(array);
    seatsLeft = 40 - seatsClicked;

    setTextElementValueById('total-seats', seatsClicked);
    setTextElementValueById('seat-left', seatsLeft);
    totalPrice = seatsClicked * 550;
    setTextElementValueById('total-price', totalPrice);
    setTextElementValueById('grand-total-price', totalPrice);

    seatDetails(
      seatName,
      seatName[0],
      550,
      'selected-seat-name',
      'selected-seat-class',
      'selected-seat-price'
    );
    if (seatsClicked === 4) {
      couponBox = document.getElementById('coupon-box');
      couponBox.removeAttribute('disabled');
        seat.setAttribute('disabled', 'true');
    
    } else {
      couponBox.setAttribute('disabled', true);
    }
  });
}

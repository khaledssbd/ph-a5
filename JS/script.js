//* ----------------> Utility

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBgGreenByClass(element) {
  element.classList.remove('bg-[#F7F8F8]');
  element.classList.add('bg-[#1DD100]');
  element.classList.add('text-white');
  element.setAttribute('disabled', true);
}

function setBgGrayColorByClass(element) {
  element.classList.remove('bg-[#1DD100]');
  element.classList.remove('text-white');
  element.classList.add('bg-[#F7F8F8]');
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementTextValue = element.innerText;
  const value = parseInt(elementTextValue);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function countUniqueSeats(arr) {
  const uniqueSeatsSet = new Set(arr);
  const uniqueSeatsArray = Array.from(uniqueSeatsSet);
  return uniqueSeatsArray.length;
}

function seatDetails(
  name,
  className,
  price,
  idForName,
  idForClass,
  idForPrice
) {
  selectedSeatName(name, idForName);
  selectedSeatName(className, idForClass);
  selectedSeatName(price, idForPrice);
}

function selectedSeatName(info, id) {
  let h3 = document.createElement('h3');
  h3.innerText = info;
  h3.classList.add('text-[#030712]', 'font-inter', 'text-base', 'font-medium');
  nameHolder = document.getElementById(id);
  nameHolder.appendChild(h3);
}

function grandTotal(total, percent) {
  grandTotal = total - total * percent;
  return grandTotal;
}
function setGrandTotal() {
  if (inputValue == 'NEW15') {
    grandTotalPrice = grandTotal(totalPrice, 0.15);
    setTextElementValueById('grand-total-price', grandTotalPrice);
    discounted = totalPrice - grandTotalPrice;
    selectedSeatName(discounted + ' Taka Discounted', 'discounts');
    hideElementById('coupon-area');
  } else if (inputValue == 'Couple 20') {
    grandTotalPrice = grandTotal(totalPrice, 0.2);
    setTextElementValueById('grand-total-price', grandTotalPrice);
    discounted = totalPrice - grandTotalPrice;
    selectedSeatName(discounted + 'Taka Discounted', 'discounts');
    hideElementById('coupon-area');
  }
}

document
  .getElementById('coupon-box')
  .addEventListener('keyup', function (event) {
    let grandTotalPrice = getTextElementValueById('grand-total-price');
    let couponBoxBtn = document.getElementById('coupon-box-btn');
    inputValue = event.target.value;
    if (inputValue == 'NEW15') {
      couponBoxBtn.removeAttribute('disabled');
    } else if (inputValue == 'Couple 20') {
      couponBoxBtn.removeAttribute('disabled');
    } else {
      couponBoxBtn.setAttribute('disabled', true);
    }
  });
//* ----------------> Scripting
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function home() {
  location.reload();
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

    if (seatsClicked <= 4) {
      setTextElementValueById('total-seats', seatsClicked);
      setTextElementValueById('seat-left', seatsLeft);
      totalPrice = seatsClicked * 550;
      setTextElementValueById('total-price', totalPrice);
      setTextElementValueById('grand-total-price', totalPrice);

      document
        .getElementById('passenger-phone')
        .addEventListener('keyup', function (event) {
          pPhone = event.target.value;
          console.log(pPhone);
          const nextBtn = document.getElementById('next-btn');
          console.log(nextBtn);
          if (pPhone && totalPrice > 550) {
            nextBtn.removeAttribute('disabled');
          } else {
            nextBtn.setAttribute('disabled', true);
          }
        });

      seatDetails(
        seatName,
        'Economy',
        550,
        'selected-seat-name',
        'selected-seat-class',
        'selected-seat-price'
      );
      couponBox = document.getElementById('coupon-box');
      if (seatsClicked === 4) {
        couponBox.removeAttribute('disabled');
        seat.setAttribute('disabled', 'true');
      }
    } else if (seatsClicked > 4) {
      alert('Earn More Money');
      couponBox.setAttribute('disabled', true);
      return;
    }
  });
}

//*-------------------------------------------------

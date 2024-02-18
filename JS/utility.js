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
  element.setAttribute('disabled', 'true');
}

function setBgGrayColorByClass(element) {
  element.classList.remove('bg-[#1DD100]');
  element.classList.remove('text-white');
  element.classList.add('bg-[#F7F8F8]');
}

document.getElementById('coupon-box').addEventListener('keyup', function () {
  let grandTotalPrice = getTextElementValueById('grand-total-price');
  let couponBoxBtn = document.getElementById('coupon-box-btn');

  inputValue = event.target.value;
  if (inputValue == 'NEW15') {
    couponBoxBtn.removeAttribute('disabled');
    grandTotalPrice = grandTotal(totalPrice, 0.15);
    setTextElementValueById('grand-total-price', grandTotalPrice);
  } else if (inputValue == 'Couple 20') {
    couponBoxBtn.removeAttribute('disabled');
    grandTotalPrice = grandTotal(totalPrice, 0.2);
    setTextElementValueById('grand-total-price', grandTotalPrice);
  }
});

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

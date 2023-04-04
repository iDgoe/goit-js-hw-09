import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

flatpickr('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    differenceDate(selectedDates[0]);
  },
};

const myDate = document.querySelector('#datetime-picker');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

flatpickr(myDate, options);

const btnStart = document.querySelector('[data-start]');
const myDay = document.querySelector('[data-days]');
const myHours = document.querySelector('[data-hours]');
const myMinutes = document.querySelector('[data-minutes]');
const mySeconds = document.querySelector('[data-seconds]');
console.log(myDay, myHours, myMinutes, mySeconds);
console.log(btnStart);

let timeDifference = 0;
let timer = null;
let formatDate = null;

btnStart.setAttribute('disabled', true);

flatpickr(myDate, options);

btnStart.addEventListener('click', onbtnStartt);

btnStart.addEventListener('click', Notiflix.Notify.success('Hello'));

window.addEventListener('keydown', e => {
  if (e.code === 'Escape' && timer) {
    clearInterval(timer);

    myDate.removeAttribute('disabled');
    btnStart.setAttribute('disabled', true);

    mySeconds.textContent = '00';
    myMinutes.textContent = '00';
    myHours.textContent = '00';
    myDay.textContent = '00';
  }
});

function onbtnStartt() {
  timer = setInterval(startTimer, 1000);
}

function differenceDate(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates < currentDate) {
    btnStart.setAttribute('disabled', true);
    return Notiflix.Notify.failure('Please choose a date in the future');
    // window.alert('Please choose a date in the future');
  }

  timeDifference = selectedDates.getTime() - currentDate;
  formatDate = convertMs(timeDifference);

  renderDate(formatDate);
  btnStart.removeAttribute('disabled');
}

function startTimer() {
  btnStart.setAttribute('disabled', true);
  myDate.setAttribute('disabled', true);

  timeDifference -= 1000;
  if (timeDifference < 0) {
    Notiflix.Confirm.show('Time end');
    clearInterval(timer);
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function renderDate(formatDate) {
  console.log(formatDate.seconds);
  mySeconds.textContent = addLeadingZero(formatDate.seconds);
  myMinutes.textContent = addLeadingZero(formatDate.minutes);
  myHours.textContent = addLeadingZero(formatDate.hours);
  myDay.textContent = addLeadingZero(formatDate.days);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const dayTextEl = document.querySelector(".daytext");
const hourTextEl = document.querySelector(".hourtext");
const minTextEl = document.querySelector(".mintext");
const secTextEl = document.querySelector(".sectext");

function getTimeDiff(start, end) {
  const millisec = end - start;
  const sec = Math.floor(millisec / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const r_day = Math.floor(hour / 24);

  const r_hour = hour - (r_day * 24);
  const r_min = min - (hour * 60);
  const r_sec = sec - (min * 60);
  
  return {
    rDay: r_day,
    rHour: r_hour,
    rMin: r_min,
    rSec: r_sec
  }

}


const counter = setInterval(function () {
  const nowDate = new Date();
  const endDate = new Date("May 17 2019 00:00:00");
  const getTimeDiffObj = getTimeDiff(nowDate, endDate);
  dayEl.textContent = getTimeDiffObj.rDay;
  hourEl.textContent = getTimeDiffObj.rHour;
  minEl.textContent = getTimeDiffObj.rMin;
  secEl.textContent = getTimeDiffObj.rSec;

  const audio = new Audio('res/clocktick.m4a');
  audio.play();

  //animation effect - seconds
  secEl.classList.add("bounceEffect");
  
  //animation effect - minutes
  if(getTimeDiffObj.rSec===00) {
    minEl.classList.add("bounceEffect");
  }
  else {
    minEl.classList.remove("bounceEffect");
  }
  //animation effect - hours
  if(getTimeDiffObj.rMin===00 && getTimeDiffObj.rSec===00) {
    hourEl.classList.add("bounceEffect");
  }
  else {
    hourEl.classList.remove("bounceEffect");
  }
  //animation effect - days
  if(getTimeDiffObj.rHour===00 && getTimeDiffObj.rSec===00) {
    dayEl.classList.add("bounceEffect");
  }
  else {
    dayEl.classList.remove("bounceEffect");
  }

  //stopping the countdown
  if (getTimeDiffObj.rDay === 0 && getTimeDiffObj.rHour === 0 && getTimeDiffObj.rMin === 0 && getTimeDiffObj.rSec === 0) {
    clearInterval(counter);
  }
  //day management
  if (getTimeDiffObj.rDay <= 1) {
    dayTextEl.textContent = "day";
  } else {
    dayTextEl.textContent = "days";
  }

  if (getTimeDiffObj.rDay <= 9) {
    dayEl.textContent = `0${getTimeDiffObj.rDay}`;
  } else {
    dayEl.textContent = getTimeDiffObj.rDay;
  }
  //hour management
  if(getTimeDiffObj.rHour <= 1) {
    hourTextEl.textContent = "hour";
  } else {
    hourTextEl.textContent = "hours";
  }

  if (getTimeDiffObj.rHour <= 9) {
    hourEl.textContent = `0${getTimeDiffObj.rHour}`;
  } else {
    hourEl.textContent = getTimeDiffObj.rHour;
  }
  //minute management
  if(getTimeDiffObj.rHour <= 1) {
    minTextEl.textContent = "minute";
  } else {
    minTextEl.textContent = "minutes";
  }

  if (getTimeDiffObj.rMin <= 9) {
    minEl.textContent = `0${getTimeDiffObj.rMin}`;
  } else {
    minEl.textContent = getTimeDiffObj.rMin;
  }
  //second management
  if(getTimeDiffObj.rSec <= 1) {
    secTextEl.textContent = "second";
  } else {
    secTextEl.textContent = "seconds";
  }

  if (getTimeDiffObj.rSec <= 9) {
    secEl.textContent = `0${getTimeDiffObj.rSec}`;
  } else {
    secEl.textContent = getTimeDiffObj.rSec;
  }
}, 1000)
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
const button = document.querySelector(".buttonImg");

let yearOpt = document.querySelector("#yearOpt");
let monthOpt = document.querySelector("#monthOpt");
let dayOpt = document.querySelector("#dayOpt");

let date = new Date();

let newDay, newMonth, newYear;
const monthDayNumber = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// console.log(date.getMonth());

const checkYear = () => {
  let v = year.parentElement;
  if (!year.value == "") {
    if (year.value <= 2023) {
      v.classList.remove("error");
      v.children[2].innerHTML = "";
      return year.value;
    } else {
      v.classList.add("error");
      v.children[2].innerHTML = "Must be in the past";
    }
  } else {
    v.classList.add("error");
    v.children[2].innerHTML = "This field is required";
  }
};

const checkMonth = () => {
  let v = month.parentElement;
  if (!month.value == "") {
    if (month.value > 0 && month.value <= 12) {
      v.classList.remove("error");
      v.children[2].innerHTML = "";
      return month.value;
    } else {
      v.classList.add("error");
      v.children[2].innerHTML = "Must be a valid month";
    }
  } else {
    v.classList.add("error");
    v.children[2].innerHTML = "This field is required";
  }
};

const checkDay = () => {
  let v = day.parentElement;
  let i = checkMonth() - 1;

  if (!day.value == "") {
    if (day.value > 0 && day.value <= monthDayNumber[i]) {
      v.classList.remove("error");
      v.children[2].innerHTML = "";
      return day.value;
    } else {
      v.classList.add("error");
      v.children[2].innerHTML = "Must be a valid day";
    }
  } else {
    v.classList.add("error");
    v.children[2].innerHTML = "This field is required";
  }
};

const calcYear = () => {
  const inputYear = checkYear();
  const currentYear = date.getFullYear();
  newYear = currentYear - inputYear;
  return newYear;
};

const calcMonth = () => {
  const inputMonth = checkMonth();
  const currentMonth = date.getMonth() + 1;
  if (currentMonth < inputMonth) {
    newYear--;
    newMonth = inputMonth - currentMonth;
  } else {
    newMonth = currentMonth - inputMonth;
  }
  return newMonth;
};

const calcDay = () => {
  const inputDate = checkDay();
  const currentDate = date.getDate();
  if (currentDate < inputDate) {
    newMonth--;
    newDay = inputDate - currentDate;
  } else {
    newDay = currentDate - inputDate;
  }
  return newDay;
};

function checkValues() {
  newYear = calcYear();
  newMonth = calcMonth();
  newDay = calcDay();

  if (newYear && newMonth && newDay) {
    yearOpt.innerHTML = newYear;
    monthOpt.innerHTML = newMonth;
    dayOpt.innerHTML = newDay;
  } else {
    return;
  }
}

button.addEventListener("click", checkValues);
button.addEventListener("mouseover", () => {
  button.classList.add("btnDark");
});
button.addEventListener("mouseout", () => {
  button.classList.remove("btnDark");
});

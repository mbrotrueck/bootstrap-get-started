//get current month & year
const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
let datum = new Date();

const aktuellerMonat = document.getElementById("current-month-and-year");
aktuellerMonat.innerHTML = monate[datum.getMonth()] + " " + datum.getFullYear();


function getLastMonth() {
  document.getElementById("current-month-and-year").innerHTML = "Dezember 2022";
}

function getNextMonth() {
  document.getElementById("current-month-and-year").innerHTML = "Februar 2023";
}


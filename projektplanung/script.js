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

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, direction, switchCount = 0;
  table = document.getElementById("sortTable");
  switching = true;
  direction = "asc";

  while(switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i+1].getElementsByTagName("TD")[n];

      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount == 0 && direction == "asc") {
        direction = "desc";
        switching = true;
      }
    }
  }
}
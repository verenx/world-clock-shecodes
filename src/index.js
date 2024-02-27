//Vienna
function updateDateTime() {
  let viennaElement = document.querySelector("#vienna");

  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");

  let viennaCurrentTz = moment().tz("Europe/Vienna");

  let viennaCurrentDate = viennaCurrentTz.format("MMMM Do YYYY");
  let viennaCurrentTime = `${viennaCurrentTz.format(
    "h:mm:ss"
  )} <small>${viennaCurrentTz.format("A")}</small>`;
  // format("h:mm:ss[<small>A[</small>]")

  viennaDateElement.innerHTML = viennaCurrentDate;
  viennaTimeElement.innerHTML = viennaCurrentTime;

  //Perth
  let perthElement = document.querySelector("#perth");

  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");

  let perthCurrentTz = moment().tz("Australia/Perth");

  let perthCurrentDate = perthCurrentTz.format("MMMM Do YYYY");
  let perthCurrentTime = `${perthCurrentTz.format(
    "h:mm:ss"
  )} <small>${perthCurrentTz.format("A")}</small>`;
  // format("h:mm:ss[<small>A[</small>]")

  perthDateElement.innerHTML = perthCurrentDate;
  perthTimeElement.innerHTML = perthCurrentTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();

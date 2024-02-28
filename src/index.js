//Vienna
function updateDateTime() {
  let viennaElement = document.querySelector("#vienna");
  if (viennaElement) {
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
  }

  //Perth
  let perthElement = document.querySelector("#perth");
  if (perthElement) {
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

  // Honolulu
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = honoluluElement.querySelector(".date");
    let honoluluTimeElement = honoluluElement.querySelector(".time");

    let honoluluCurrentTz = moment().tz("Pacific/Honolulu");

    let honoluluCurrentDate = honoluluCurrentTz.format("MMMM Do YYYY");
    let honoluluCurrentTime = `${honoluluCurrentTz.format(
      "h:mm:ss"
    )} <small>${honoluluCurrentTz.format("A")}</small>`;
    // format("h:mm:ss[<small>A[</small>]")

    honoluluDateElement.innerHTML = honoluluCurrentDate;
    honoluluTimeElement.innerHTML = honoluluCurrentTime;
  }
}

function displayNewCity(event) {
  let newCity = event.target.value;
  if (newCity === "current-location") {
    newCity = moment.tz.guess();
  }
  let cityName = newCity.split("/")[1].replace("_", " ").replace("ome", "omé");

  let newCityTz = moment().tz(newCity);
  let newCityElement = document.querySelector("#cities-displayed");

  newCityElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${newCityTz.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${newCityTz.format(
          "h:mm:ss"
        )} <small>${newCityTz.format("A")}</small></div>
      </div>
      <a href="/" class="homepage">Back to list of all cites</a>`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", displayNewCity);

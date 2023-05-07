function updateTime() {
  //LA
  let losAngelesElement = document.querySelector("#LosAngeles");
  if (losAngelesElement) {
    let LADate = document.querySelector("#LosAngeles .date");
    let LATime = document.querySelector("#LosAngeles .time");
    LADate.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    LATime.innerHTML = `${moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss")} <small> ${moment().format("A")} </small>`;
  }
  //paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = document.querySelector("#paris .date");
    let parisTime = document.querySelector("#paris .time");
    parisDate.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
    parisTime.innerHTML = `${moment()
      .tz("Europe/Paris")
      .format("h:mm:ss")} <small> ${moment().format("A")} </small>`;
  }
  //sydney
  let sydneyElement = document.querySelector("#Sydney");
  if (sydneyElement) {
    let sydneyDate = document.querySelector("#Sydney .date");
    let sydneyTime = document.querySelector("#Sydney .time");
    sydneyDate.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    sydneyTime.innerHTML = `${moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss")} <small> ${moment().format("A")} </small>`;
  }
}

function UpdateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
  setTimeout(UpdateCity, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", UpdateCity);

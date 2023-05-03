function updateTime() {
  //LA
  let LADate = document.querySelector("#LosAngeles .date");
  let LATime = document.querySelector("#LosAngeles .time");
  LADate.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
  LATime.innerHTML = `${moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss")} <small> ${moment().format("A")} </small>`;
  //paris
  let parisDate = document.querySelector("#paris .date");
  let parisTime = document.querySelector("#paris .time");
  parisDate.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
  parisTime.innerHTML = `${moment()
    .tz("Europe/Paris")
    .format("h:mm:ss")} <small> ${moment().format("A")} </small>`;
  //sydney
  let sydneyDate = document.querySelector("#Sydney .date");
  let sydneyTime = document.querySelector("#Sydney .time");
  sydneyDate.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
  sydneyTime.innerHTML = `${moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss")} <small> ${moment().format("A")} </small>`;
}

updateTime();
setInterval(updateTime, 1000);

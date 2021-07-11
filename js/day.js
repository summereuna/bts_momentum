const d = new Date();
const todayDate = document.querySelector("#date");

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
}

const weekday = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

const day = weekday[d.getDay()];
const month = months[d.getMonth()];
const date = d.getDate();

todayDate.innerText = `${day}, ${month} ${date}`;
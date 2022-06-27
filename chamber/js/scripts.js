let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + d.getFullYear();


document.getElementById("date_today").textContent = fulldate;
document.getElementById("year_today").textContent = year;
document.getElementById("timestamp_today").textContent = d;

const meetGreetMsg = document.getElementById("home-meet-greet-msg");

if(dayName === 1 || dayName === 2) {
    meetGreetMsg.style.display = "block";
}
else {
    meetGreetMsg.style.display = "none";
}




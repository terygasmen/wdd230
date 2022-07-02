const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(now);
const year = now.getFullYear();
const today = now.getDay();

document.querySelector(".date_today").innerHTML = fullDate;

document.querySelector("#copyright_year").innerHTML = year;

document.getElementById("copyright_update").innerHTML = document.lastModified;

document.querySelector("#copyright_year_2").innerHTML = year;

document.getElementById("copyright_update_2").innerHTML = document.lastModified;

function toggleMenu() {
    document.getElementById("burger_nav").classList.toggle("open");
    document.getElementById("burger_icon").classList.toggle("open");
}

const x = document.getElementById("burger_icon");

x.onclick = toggleMenu;

const meetGreetMsg = document.getElementById("meet_greet");

if(today === 1 || today === 2) {
    meetGreetMsg.style.display = "block";
}
else {
    meetGreetMsg.style.display = "none";
}
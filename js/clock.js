const getDate = document.querySelector("#date");

let year = new Date ();
let month = new Date ();
let date = new Date ();
let day = new Date();
const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일','토요일'];
let week = WEEKDAY[day.getDay()];


getDate.innerText = `${year.getFullYear()}년 ${month.getMonth()+1}월 ${date.getDate()}일 \r\n${week}`;


const clock = document.querySelector("h2#clock");

function getClock () {
 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    // const seconds = String(data.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);


    
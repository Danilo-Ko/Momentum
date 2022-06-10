const getDate = document.querySelector("#date");

let year = new Date ();
let month = new Date ();
let day = new Date ();

getDate.innerText = `${year.getFullYear()}년 ${month.getMonth()+1}월 ${day.getDay()}일`;


const clock = document.querySelector("h2#clock");

function getClock () {
 
    const data = new Date();
    const hours = String(data.getHours()).padStart(2,"0");
    const minutes = String(data.getMinutes()).padStart(2,"0");
    // const seconds = String(data.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}`;
}

/*:${seconds}*/

getClock();
setInterval(getClock,  1000);



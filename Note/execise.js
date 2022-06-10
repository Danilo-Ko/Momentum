const title = document.querySelector(".hello:first-child h1");




function handTitleClick () {
    title.style.color = "blue";
    
    // console.log("title was clicked");

}

title. addEventListener("click", handTitleClick);

// console.dir(title) // element의 내부를 볼 수 있다.





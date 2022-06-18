const musiclist = [
    "music/Maranatha.mp3",
    "music/The Grace of God.mp3",
    "music/Until the Lord comes back.mp3"
 ];

const music = document.querySelector(".music");

function displayRandom() {
    const audio = Math.floor(Math.random() * (musiclist.length));
    audio = musiclist[audio];
    audio.play();
    setTimeout(loop,audio.duration*1000);
 }

music.addEventListener("submit", displayRandom);

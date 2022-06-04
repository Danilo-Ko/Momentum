const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

const chosenImage = images[Math.floor(Math.random () * images.length)];

const bgImage = document.createElement("img"); // Izgleda da nesto mora da stoji na pocetku. Treba da definise variable.

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);  // Da li je potrebna argument?

bgImage.classList.add("bg");
// isim ekledim
let newName = prompt("Lütfen isminizi giriniz.")
let greeting = document.querySelector('#myName')
let sentence = document.getElementsByClassName('text1')

greeting.textContent = newName


// saati ekliyorum

var divElement = document.querySelector('.text2');
let lastElement = divElement.innerHTML

function updateClock() {
    const clockElement = document.querySelector('.clock');
    const currentTime = new Date();
    const dayIndex = currentTime.getDay();
    const daysOfWeek = ['Pazar', 'Pazartesi', 'Sali', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = daysOfWeek[dayIndex];
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const formattedTime = `${dayName}:${hours}:${minutes}:${seconds} `;

    clockElement.textContent = formattedTime;
  }

  setInterval(updateClock)  ;



  // Buton öğesini seçin
var button = document.getElementById("bubbleButton");

// Butona tıklanma olayını dinleyin
button.addEventListener("click", createBubble);

// Bubble oluşturma işlevi
function createBubble() {
  // Yeni bir div öğesi oluşturun ve stili ayarlayın
  var bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Bubble'ın rastgele konumda görünmesini sağlayın
  var randomX = Math.floor(Math.random() * window.innerWidth);
  var randomY = Math.floor(Math.random() * window.innerHeight);
  bubble.style.left = randomX + "px";
  bubble.style.top = randomY + "px";

  // Bubble'ı container öğesine ekleyin
  var container = document.getElementById("container");
  container.appendChild(bubble);

  // Belirli bir süre sonra bubble'ı silmek için zamanlayıcı kullanın
  setTimeout(function () {
    container.removeChild(bubble);
  }, 500);
}


// not: bunu ben yapmadım maalesef uğraştım ancak olmadı. chat gpt sağ olsun.
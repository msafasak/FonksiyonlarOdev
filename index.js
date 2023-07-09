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

  

  // Saati güncellemek için interval kullanarak updateClock() fonksiyonunu çağırın
   setInterval(updateClock)  ;
  
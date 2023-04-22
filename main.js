// change background of main-slider

let mainSlider = document.querySelector('.main-slider');
let galleryItems = document.querySelectorAll('.gallery-item');
let covers = document.querySelectorAll('.cover')
let current = 0;

setInterval(function() {
  galleryItems[current].dispatchEvent(new MouseEvent('click'));
  current = (current + 1) % galleryItems.length;
}, 3000);

galleryItems.forEach((item, index) => item.addEventListener('click', function () {
  let imgUrl = item.querySelector('img').getAttribute('src')
  mainSlider.style.backgroundImage = `url(${imgUrl})`;
  mainSlider.style.backgroundSize = 'cover';
  mainSlider.style.backgroundPosition = '0 0/100% auto';
  mainSlider.style.backgroundRepeat = 'no-repeat';
  
  covers.forEach((cover, coverindex) => {
    if (index !== coverindex) {
      cover.style.opacity = '0';
    } else {
      cover.style.opacity = '0.5';
      cover.style.border = '3px solid rgb(192,171,116)'
    }
  });
  
}))

// form validation

let form = document.forms.subscribe
let submitBtn = document.querySelector('.submit-btn');
let requiredInputs = document.querySelectorAll('.required');

function checkEmailValidity(e) {
  let value = e.target.value;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(value)) {
    e.target.setCustomValidity('Вы ввели некорректный адрес');
  } else {
    e.target.setCustomValidity('');

  }
}

form.email.addEventListener('input', checkEmailValidity)

requiredInputs.forEach(item => item.addEventListener('blur', function () {
  const targetId = item.getAttribute('data-target');
  const targetParagraph = document.getElementById(targetId)
  if (item.value.length == 0) {
    item.classList.add('error'); 
    targetParagraph.style.display = 'block';
  } else {
    item.classList.remove('error');
    targetParagraph.style.display = 'none;'
  }  
}))

// Iframe

// let addresses =[
//   "https://www.google.com/maps/place/Gran+Hotel+Bah%C3%ADa+del+Duque+Resort/@28.0938527,-16.7441285,17z/data=!3m1!4b1!4m9!3m8!1s0xc6a974b7638d775:0xb14b6b62c3ebf966!5m2!4m1!1i2!8m2!3d28.0938527!4d-16.7419398!16s%2Fg%2F11bc5tlpbr",
//   "https://www.google.com/maps/place/Maxx+Royal+Belek+Golf+Resort/@36.848712,31.0683981,17z/data=!3m1!4b1!4m9!3m8!1s0x14c37b45be7570bd:0x459f8f3bdf73e4b5!5m2!4m1!1i2!8m2!3d36.848712!4d31.0705868!16s%2Fg%2F1v5wdc77?coh=178572&entry=tt&shorturl=1",
//   "https://www.google.com/maps/place/Kimpton+Kitalay+Samui/@9.5735835,100.0771028,17z/data=!3m1!4b1!4m9!3m8!1s0x3054ef5ef5de3d83:0x18e1e604ea047090!5m2!4m1!1i2!8m2!3d9.5735835!4d100.0792915!16s%2Fg%2F11p59fmjty?coh=178572&entry=tt&shorturl=1",
//   "https://www.google.com/maps/place/Gran+Hotel+Bah%C3%ADa+del+Duque+Resort/@28.0938527,-16.7419398,17z/data=!3m1!4b1!4m9!3m8!1s0xc6a974b7638d775:0xb14b6b62c3ebf966!5m2!4m1!1i2!8m2!3d28.0938527!4d-16.7419398!16s%2Fg%2F11bc5tlpbr",
// ];

let mapBtns = document.querySelectorAll('.map a')
const popup = document.querySelector('.popup');
// let container = document.querySelector('.hotels-container')

mapBtns.forEach(btn => btn.addEventListener('click', function (e) {
  e.preventDefault()
  popup.style.display = 'block';

}))

popup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// function createIframe(e){
//   let containers = document.querySelectorAll('.hotel-item')
//   let addressIndex = Number(this.dataset.index);
//   let address = addresses[addressIndex];

//   let iframe = document.createElement('iframe');
//   iframe.src = address;
//   iframe.classList.add('iframe');

//   iframe.style.left = (e.clientX - 120) + 'px';
//   iframe.style.top = (e.clientY + 20) + 'px';

// }


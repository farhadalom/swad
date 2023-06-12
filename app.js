let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

 

 const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 80) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

let body =document.querySelector('body');
function toggleMode(){
   body.classList.toggle('mode');
}

window.onscroll = () =>{
   // menuBtn.classList.remove('fa-times');
   // navbar.classList.remove('active');
   if(window.scrollY > 60){
       document.querySelector('#scroll-top').classList.add('active');
   }
   else{
       document.querySelector('#scroll-top').classList.remove('active');
   }
}
function loader(){
   document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
   setInterval(loader, 2000);

}
window.onload = fadeOut();

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

 valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
      startValue +=1;
      valueDisplay.textContent=startValue;
      if(startValue==endValue){
         clearInterval(counter);
      } 
    },duration);  
 });
 

var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 3,
       },
       1000: {
         slidesPerView: 4,
       },
    },
 });
 
 let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
});

var swiper = new Swiper(".chefs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 5,
   autoplay: {
      delay: 2000,
    },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
   },
});
var swiper = new Swiper(".testomonial-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 5,
   autoplay: {
      delay: 2000,
    },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
   },
});





 
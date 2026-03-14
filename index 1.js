// Hero Slider with fade effect
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function showSlide(index){
  slides.forEach((slide,i)=> slide.classList.remove("active"));
  slides[index].classList.add("active");
}
setInterval(()=>{ currentSlide = (currentSlide+1)%slides.length; showSlide(currentSlide); },5000);

// Scroll reveal
function reveal(){ let reveals = document.querySelectorAll(".reveal");
  for(let i=0;i<reveals.length;i++){
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    if(elementTop < windowHeight - 150){ reveals[i].classList.add("active"); }
  }
}
window.addEventListener("scroll", reveal);
reveal();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', ()=>{
  nav.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('active'));
});

// Sticky navbar scroll effect
window.addEventListener("scroll", ()=>{
  document.querySelector('.navbar').classList.toggle("scrolled", window.scrollY>50);
});

// Counters animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / 200;
    if(count < target){ counter.innerText = Math.ceil(count + inc); setTimeout(updateCount,20); }
    else{ counter.innerText = target; }
  }
  updateCount();
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
function openLightbox(el){ lightbox.style.display="block"; lightboxImg.src=el.querySelector('img').src; lightboxCaption.innerHTML=el.querySelector('img').alt;}
function closeLightbox(){ lightbox.style.display="none";}
lightbox.onclick = function(e){ if(e.target===lightbox) closeLightbox(); }
$(document).ready(function(){
    $("#menu").click(function(){
      $("#navbar").slideToggle("slow");
    });
  });

  var swiper = new Swiper(".hero-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish(){
    loader.classList.add("dispper");
}
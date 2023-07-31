let nav = document.querySelector("nav");
  window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
      nav.classList.add("sticky");
    }else {
      nav.classList.remove("sticky");
    }
  }
  
  gsap.from(".logo",{
    x: -50,
    duration:0.7,
    stagger:0.5,
    rotate:360,
    scale:0.1,
    delay:0.4
})

gsap.to(".logo",{
    x: 10,
    y:1,
    duration:1.7,
    stagger:0.5,
    rotate:360,
   // scale:0.2,
    delay:0.3
})
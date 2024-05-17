let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight -150;
        let offset = sec.offsetTop -150;
        let id = sec.getAttribute('id');
        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
            });
        };

    });
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.add('active');
};

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        0: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
  });


  document.querySelector('.shopping-cart-btn-open').addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#shopping-cart-wrapper').classList.toggle('shopping-cart-show')
})
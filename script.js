$('.owl-carousel').owlCarousel({
    loop: true,
    stagePadding: 15,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
    responsive:{
        0:{
            items:1
        },
        640:{
            items:1
        },
      960:{
            items:3
        },
        1200:{
            items:3
        }
    }
})
let steps = document.querySelector("#steps");
let wizards = [
  {
    complete: true,
    number: 1,
    title: "Verify Identity",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
  },
  {
    complete: false,
    number: 2,
    title: "Create Account",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
  },
    {
    complete: false,
    number: 3,
    title: "Login",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
  },
];

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:2,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

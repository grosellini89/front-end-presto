
    document.addEventListener('scroll', ()=> {
        let navbar = document.querySelector('navbar')
        let scrolled = window.pageYOffset

        if (scrolled > 50) {
            navbar.classList.add('shadow')
        } else {
            navbar.classList.remove('shadow')
        }
        console.log(scrolled)
    } )


    
// registration page 

document.addEventListener('DOMContentLoaded' , () => {

  const psw = document.querySelector('#password');
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container-fluid-reg");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  psw.addEventListener('change' , () => {
    console.log(psw.value.length)
    if(psw.value.length <= 5){
      document.querySelector('#passwordHelper').innerHTML = 'La password deve avere almeno 6 caratteri'
      // sign_up_btn.setAttribute('disabled' , true)
    } else {
      document.querySelector('#passwordHelper').innerHTML = ''
    }
  })


  let togglePasswordVisibility = document.querySelector('#togglePasswordVisibility')

  togglePasswordVisibility.addEventListener('click', () => {
   if (password.type == "password") {
       password.type = "text"
   } else {
       password.type = "password"
   }

   let changeeye = document.querySelector('#sbarraocchio');
    
   changeeye.addEventListener('click', () => {
    
    changeeye.classList.toggle("fa-eye-slash")
     changeeye.classList.toggle("fa-eye")
   })

})

// function changeeye() {
//   var element = document.querySelector("piero");
//   element.classList.remove("fa-eye-slash");
// }

})

// carousel
$('.sameCategory').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrow: false,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrow: true,
              dots: false
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrow: false,
              dots: false
          }
      }
  ]
})


$('.slider-for').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  dots: true,
  arrow: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: '.slider-for'

});

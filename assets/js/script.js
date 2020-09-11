$(window).on('load', function () {
  $(window).on('scroll', () => {
    elementOnWindow()
  });    
  $('.loader').delay(400).fadeOut() 
  slider()
  effectOnHover() 
  openMobileMenu()
  scrollToPage('#1')
  scrollToPage('#2')
  scrollToPage('#3')
  scrollToPage('#4')  
});
/*********************************slider*******************************/
function slider () {
    const slideContent = document.querySelectorAll('.animated__part')
    let k = 0
    function show(i) {
      if(i === 0) {
        slideContent[slideContent.length - 1].classList.remove('move')
        slideContent[i].classList.add('move')
      } else {
        slideContent[i - 1].classList.remove('move')
        slideContent[i].classList.add('move')
      }
    }
    slideContent[0].classList.add('move')
    slideContent[0].style.transform = 'translateY(0px)'
    setInterval(() => {
      k === slideContent.length - 1 ? k = 0 : k++
      show(k)
    },3000)
}

/******************************************hover__effect********************************/

function effectOnHover(x = 7, a = 15) {
  document.querySelector('.navbar__items').addEventListener('mouseover', (e) => {
    let target = e.target
    switch (target.id) {
      case '1':
        move(7, 15)
        break;
      case '2':
        move(29, 17)
        break;
      case '3':
        move(54, 15)
        break;
      case '4':
        move(76, 23.5)
        break;
      default: 
        move(x, a)
        break;
    }
  })  
}
const move = (d, w) => {
    const el = document.querySelector('.after__element')
    el.style.left = d + '%'
    el.style.width = w + '%'
  }


/****************************************progressBar*****************************/
let barShow = false

const progressSkills = () => {
  if (barShow) {
    return false
  }
  actionProgress(container, 90)
  actionProgress(js, 90)
  actionProgress(react, 80)
  actionProgress(vue, 30)
  actionProgress(php, 70)
  $('.skills').css({
    opacity: '1',
    transform: 'translateY(0px)'
  });
  barShow = true
}

/****************************************scrollEffects*****************************/

const elementOnWindow = () => {

  let top = $(window).scrollTop() + 200
  const firstElement = $('#first').offset().top
  const secondElement = $('#about__page').offset().top
  const thirdElement = $('#work__page').offset().top
  const fourElement = $('#contact').offset().top

  if(top < secondElement) {
    effectOnHover(7, 15)  
    move(7, 15)
  }
  if(top > secondElement && top < thirdElement) {
    effectOnHover(29, 17)  
    move(29, 17)
    progressSkills()
  }
  if(top > thirdElement && top < fourElement) {
    effectOnHover(54, 15)  
    move(54, 15)
    $('.projects').css({
      opacity: '1',
      transform: 'translateY(0px)'
    });
  }
  if(top - 200 === fourElement) {
    effectOnHover(76, 23.5)  
    move(76, 23.5)
    $('.icons').css('transform', 'translateY(0px)');
  }
}

const scrollToPage = (link) => {
  $(link).on('click',  function(event) {
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000)
  });
}

/************************************mobileMenu********************************************/

const openMobileMenu = () => {
  const burger = $('.burger'),
        menu = $('.mobileMenu'),
        burgerSpans = $('.burgerElements'),
        navbarBrand = $('.navbar__brand')

  burger.on('click', function(event) {
    burgerSpans.eq(0).toggleClass('fadeSpans')
    burgerSpans.eq(1).toggleClass('additional_1')
    burgerSpans.eq(2).toggleClass('additional_2')
    burgerSpans.eq(3).toggleClass('fadeSpans')
    navbarBrand.fadeToggle()
    menu.fadeToggle()
  })

  const mobileLinks = () => {
    const links = document.querySelectorAll('.mobile__links')
    links.forEach(item => {
      item.addEventListener('click', () => {
        menu.fadeOut()
        navbarBrand.fadeIn()
        burgerSpans.eq(0).removeClass('fadeSpans')
        burgerSpans.eq(1).removeClass('additional_1')
        burgerSpans.eq(2).removeClass('additional_2')
        burgerSpans.eq(3).removeClass('fadeSpans')
      })
    })
  }  

  mobileLinks()

}



function trackScrollPosition() {
  let y = window.scrollY;
	  $('.section').css('background-position', '50%'+y/8+'%');
	  if ( y > 628 ) {
	  	y = y - 870
	  	$('.second').css('background-position', '50%'+y/8+'%');
	  }
	  if ( y > 3262.908935546875 ) {
	  	y = y - 4200
	  	$('.before_footer').css('background-position', '50%'+y/8+'%');
	  }
}

var elements = $('.experience_items')

$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
    if (effectOnScroll($('.ability__tech'))) {
    	progressBar('.inside__bar','.percent')
    }
    if (effectOnScroll($('.middle_row'))) {
    	middleRow('.middle_row')
    }

    for (var i = 0; i < elements.length; i++) {
    	if (effectOnScroll($('.experience_items').eq(i))) {
    		// console.log(i)
    		showContent($('.experience_items').eq(i))
    	}
    }

  })
})



let el = $('.ability__tech')
for (var i = 0; i < el.length; i++) {
	el.eq(i).find('.progress_bar').find('.inside__bar').css('transition-delay',i/5+'s')
}


var block_show = false
function effectOnScroll(viewElement){
	// if (block_show) {
	// 	return false;
	// }
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = viewElement.offset().top;
	var eh = viewElement.outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		return true
	}
}
function progressBar(x,y) {
	$(x).css('width','100%')
	$(y).fadeIn(2000)
}
function middleRow(e) {
	$(e).css("height","82%")
}
function showContent(elem) {
	elem.css('opacity','1')
	// elem.fadeIn()
}



$('#doBig').click(function(event) {
	$('.slider__image').addClass('move__up')
	$('.content').addClass('move__content')
	$('.share__links').css("visibility","hidden")
	$('#doBig').css("display","none")
	$('#doSmall').css("display","block")
});
$('#doSmall').click(function(event) {
	$('.slider__image').removeClass('move__up')
	$('.content').removeClass('move__content')
	$('.share__links').css("visibility","visible")
	$('#doSmall').css("display","none")
	$('#doBig').css("display","block")
});
$('.exit').click(function(event) {
	$('.view__full').fadeOut()
});
$('.back').click(function(event) {
	$('.view__full').fadeOut()
});

let project_1 = ['title_1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_1.gif']
let project_2 = ['title_2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_3.webp']
let project_3 = ['title_3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_4.webp']
let project_4 = ['title_4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_5.webp']
let project_5 = ['title_5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_6.webp']
let project_6 = ['title_6', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_7.webp']
let project_7 = ['title_7', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_8.webp']
let project_8 = ['title_8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'assets/img/image_9.gif']


let projects = [project_1, project_2, project_3, project_4, project_5, project_6, project_7, project_8]

let images = $('.gallery__images')

function viewProject(x) {
	$('#sliderBody').html(`
		<div class="slide__area w-100 d-flex">
			<div class="slide__button pl-4">
				<i class="fas fa-chevron-left pl-3" id="prevBtn"></i>
			</div>
			<div class="slide__content">
				<img width="100%" src="${projects[x][2]}" id="slide__image" alt="">
			</div>
			<div class="slide__button pr-4">
				<i class="fas fa-chevron-right float-right pr-3" id="nextBtn"></i>
			</div>
		</div>
		<div class="content">
			<div class="techno_title pt-4" style="color: #555;">
				${projects[x][0]}
			</div>
			<div class="main w-75">
				${projects[x][1]}
			</div>
		</div>
	`)
	$('.view__full').fadeIn()
	var i = 0
	var j = 0
	$('#nextBtn').click(function(event) {
		x++
		if (x < projects.length) {
			// $('#slide__image').fadeOut('500', function() {
			$('#slide__image').attr("src",projects[x][2])
			// }).fadeIn(500)
			$('.techno_title').text(projects[x][0])
			$('.main').text(projects[x][1])
		}
		else {
			x = projects.length - 1
		}
	});
	$('#prevBtn').click(function(event) {
		x--
		if ( x > -1) {
			// $('#slide__image').fadeOut('500', function() {
			$('#slide__image').attr("src",projects[x][2])
			// }).fadeIn(500)
			$('.techno_title').text(projects[x][0])
			$('.main').text(projects[x][1])
		}
		else {
			x = 0
		}
		
	});
}

function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.ability__percents').offset().top;
	var eh = $('.ability__percents').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
		$('.percent div:eq(0)').show('fast', function(){
			$(this).next().show('fast', arguments.callee);
		});
	}
}
 
$(document).on('click', 'a[href^="#ability"]', function (event) {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});
$(document).on('click', 'a[href^="#experience"]', function (event) {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});
$(document).on('click', 'a[href^="#contacts"]', function (event) {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});

$('.burger').click(function(event) {
	var spans = $('.burgerElements')
	spans.eq(0).toggleClass('activeBurger_first');
	spans.eq(1).toggleClass('rotateSpan_1');
	spans.eq(2).toggleClass('rotateSpan_2');
	spans.eq(3).toggleClass('activeBurger_last');
	$('.header').toggleClass('additionClass');
	$('.logo').toggleClass('addOpacity');
	$('.mobileMenu').fadeToggle()

});
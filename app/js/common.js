
// ============= PRELOADER SCRIPT ===================
$(window).on("load", function (e) {
	$('#preloader').addClass('hid'); 
})
// ============= END PRELOADER SCRIPT ===================

$(function () {
	$("[data-fancybox]").fancybox();
});

$(function () {
	

	$('.phone').mask('(999) 999-99-99');

	$('.slider__wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		autoplay:true,
		nav: true,
		dots: true,
		items: 1,
		navText: ["<img src='assets/img/arrow-left.svg'>", "<img src='assets/img/arrow-right.svg'>"]
	})

	$('.work-performed__carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		items: 4,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 4,
				nav: true
			}
		},
		navText: ["<img src='assets/img/arrow-left.svg'>", "<img src='assets/img/arrow-right.svg'>"]
	})

	$('.our-installers__carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		items: 4,
		navText: ["<img src='assets/img/arrow-left.svg'>", "<img src='assets/img/arrow-right.svg'>"],
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	})

	$('.product-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 5,
		navText: ["<img src='assets/img/arrow-left.svg'>", "<img src='assets/img/arrow-right.svg'>"],
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 5,
				nav: true
			}
		}
	})

	//  https://imapo.ru/fancybox-3-%D0%BC%D0%BE%D1%89%D0%BD%D0%B5%D0%B9%D1%88%D0%B0%D1%8F-%D0%B0%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-jquery/
	//$.fancybox.open('<div class="message">Здесь может быть любой ваш контент</div>');


	$(document).on('af_complete', function(event, response) {
		console.log(event, response.form[0].id)
		if(response.success == false){
			if (response.form[0].id !== 'measurer') {
				$.fancybox.open('<div class="message">В форме содержатся ошибки</div>');
			}
		
		}else{
			
			$.fancybox.close(true);
			$.fancybox.open('<div class="message">Сообщение отправлено</div>');

		}
	});


	$(".close-icon").click(function () {
		$(".mobile-menu__items").slideUp();
		$(".mobile-menu").slideDown();
	});

	$(".btn-burger").click(function () {
		$(".mobile-menu__items").slideDown();
		$(".mobile-menu").slideUp();
	});

	$(document).mouseup(function (e){

		var container = $(".mobile-menu__items");
	
		if (!container.is(e.target) && container.has(e.target).length === 0){
	
			container.fadeOut();
			$(".mobile-menu").fadeIn();
			
		}
	}); 


	$(".mobile-menu__items ul > li > img").click(function() {
		var checkElement = $(this).next();
	  
		$(".mobile-menu__items li").removeClass("active");
		$(this).closest("li").addClass("active");
	  
		if (checkElement.is("ul") && checkElement.is(":visible")) {
		  $(this).closest("li").removeClass("active");
		  checkElement.slideUp("normal");
		}
		if (checkElement.is("ul") && !checkElement.is(":visible")) {
		  $(".mobile-menu__items ul ul:visible").slideUp("normal");
		  checkElement.slideDown("normal");
		}
	  
		if ($(this).closest("li").find("ul").children().length == 0) {
		  return true;
		} else {
		  return false;
		}
	  });

});
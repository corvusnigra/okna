$(function () {
	$("[data-fancybox]").fancybox();
});

$(function () {
	$('.slider__wrapper .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		items: 1,
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"]
	})

	$('.work-performed__carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		items: 4,
		responsive: {
			0: {
				items: 1
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
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"]
	})

	$('.our-installers__carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		items: 4,
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 4,
				nav: true
			}
		}
	})

	$('.product-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 5,
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
		responsive: {
			0: {
				items: 1
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
	// $.fancybox.open('<div class="message">Здесь может быть любой ваш контент</div>');


	$(".close-icon").click(function () {
		$(".mobile-menu__items").hide();
		$(".mobile-menu").show();
	});

	$(".btn-burger").click(function () {
		$(".mobile-menu__items").show();
		$(".mobile-menu").hide();
	});


	$('.tab-title li').not('.active').click(function () {
		var index = $(this).index();
		var content = $('.tab-content li').eq(index);
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
	})

	$('.tab-title li:first').addClass('active');
	$('.tab-content li:first').css('display', 'block');

});
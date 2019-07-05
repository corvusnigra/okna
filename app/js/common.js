$(function() {


	$('.slider__wrapper .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: true,
		items: 1,
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"]
	})

	$('.work-performed__carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		items: 4,
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"]
	})

	$('.our-installers__carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		items: 4,
		navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:4,
				nav:true
			}
		}
	})


	$(".close-icon").click(function(){
		$(".mobile-menu__items").hide();
		$(".mobile-menu").show();
	  });
	  
	  $(".btn-burger").click(function(){
		$(".mobile-menu__items").show();
		$(".mobile-menu").hide();
	  });


	  $('.tab-title li').not('.active').click(function(){
		var index = $(this).index();
		var content = $('.tab-content li').eq(index);
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
	})
	
		$('.tab-title li:first').addClass('active');
		$('.tab-content li:first').css('display', 'block');

});

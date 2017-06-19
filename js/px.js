$(function(){
	$('.mfpx').hover(function(){
		$('.first_tubiao img').addClass('animated bounceIn')
	},function(){
		$('.first_tubiao img').removeClass('animated bounceIn')
	})
})
$(function(){
	$('.pxkc li').hover(function(){
		$(this).find('div').show()
	},function(){
		$(this).find('div').hide()
	})
})
$(function(){
	$(".al_con li").hover(function(){
		$(this).find('div').show()
	},function(){
		$(this).find('div').hide()
	})
})
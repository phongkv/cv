$(document).ready(function(e) {
	
	  // Side-bar click event
	  $('#side-bar li').click(function(even){
		$(this).addClass('selecting').siblings().removeClass('selecting');
		Id = $(this).children('a').attr('href').slice(1);
		$('.'+Id).addClass('active').siblings().removeClass('active');
	
	  });
	  
	  // Menu mibile on click event
	  $('.menu-mobile,.menu').click(function(){
		  
		 $('#side-bar').toggleClass('show');
		 
		 if($('#side-bar').hasClass('show')){
		      $('.menu-mobile i').removeClass('fa-bars').addClass('fa-window-close');
		 }
		 else{
			  $('.menu-mobile i').removeClass('fa-window-close').addClass('fa-bars');
		 }
	  });
	  
	   // Button Next-Prev Testimonials
	 
		var x = 0;
		
		function control(){
		  
			  var y = parseInt($('.item').css('max-width'));
			  
			  var z = -(3-100/y)*y;
			  
			  if(x== 0){
				   $('.prev').prop( "disabled", true );
				}
			  else{
				  $('.prev').prop( "disabled", false );
			  };
			  
			  if(x== z){
				   $('.next').prop( "disabled", true );
				}
			  else{
				  $('.next').prop( "disabled", false );
			  }
		 }
		
		control();
		
		$('.next').click(function(){
		  var y = parseInt($('.item').css('max-width'));
		  x -= y;		  
		  $('.main').animate({marginLeft:x+"%"},500);
		  control();
		})
		
		$('.prev').click(function(even){ 
	
		  var y = parseInt($('.item').css('max-width'));
		  x += y;	  
		  $('.main').animate({marginLeft:x+"%"},500);
		  control()
		})
	 
	     // Portfolio and Fancybox - Init Isotope
		var $grid = $('.grid').isotope({
		  // options
		});
		
		// Filter items on button click
		$('.button-group').on( 'click', 'button', function() {
		  $(this).addClass('btn-active').siblings().removeClass('btn-active');
		  $grid.isotope({ filter: $(this).attr('data-filter') });
		}); 
		
		// Init fancyBox
        $().fancybox({
            selector : '.item:visible > a'
        })
});
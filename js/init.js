  $(document).ready(function(){
  	/*  $(".button-collapse").sideNav();*/
  	$('.collapsible').collapsible();
    
  	$('.sidenav').sidenav();
  	$('.parallax').parallax();
  	$('.modal').modal();
  	 $('.slider').slider({full_width: true, height : 573, interval : 3000/*, indicators: false*/});/*设置轮播时间高度等*/
  	$('.carousel').carousel();
  	$('.carousel.carousel-slider').carousel({
  		fullWidth: true,
  		indicators: true,
  		time_constant : 200,


  	});
  	  $('.dropdown-trigger').dropdown();
  	    $('.dropdown-trigger').dropdown({
  	    	hover : true
  	    });
  	     $('.tap-target').tapTarget({});
         $('select').formSelect();
        
          $('.fixed-action-btn').floatingActionButton({
              direction: 'left'
            
          });

    });
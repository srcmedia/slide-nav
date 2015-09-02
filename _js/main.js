$(function(){
	
   var iScrollPos = 0;
   var halfSet = 0;
   var footer=$('#footer-wrapper');
   var bottomAd=$('#footer-ad');
   var mainContainer=$('#content');
   var navContainer=$('#header');
   var pageHeight = mainContainer.offset().top+mainContainer.outerHeight()+bottomAd.outerHeight(); //Total Page Height.
   var topAd=$(".top-ad-container");

   //First check if the page is too short and affix bottom ad in place
    var windowScrollBottom=$(window).scrollTop()+$(window).height(); //Define the bottom of the screen please. Rechecks on scroll just in case of resize
    if(windowScrollBottom>=pageHeight){
      bottomAd.removeClass('hidden transition').addClass('relativeFriend');
    }

   $(window).scroll(function () { 
    var windowScrollBottom=$(window).scrollTop()+$(window).height(); //Define the bottom of the screen please. Rechecks on scroll just in case of resize

    if ($(window).scrollTop() > $('body').height() / 8) {
      halfSet = 1;
      } 
  	else{
      halfSet = 0;
  	}

    if($(window).scrollTop()>= topAd.height()){
      navContainer.addClass('stuck');
    }
    else{
      navContainer.removeClass('stuck transition');
    }
     var iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos > iScrollPos) {    
        //Scrolling Down
        if(halfSet===1 && !bottomAd.hasClass('stucky') && !(windowScrollBottom>=pageHeight)){     //past our ad kick point
         //   navContainer.addClass('transition go-up');         //Hide the navigation
            bottomAd.addClass('stucky transition').removeClass('hidden'); //Stick the bottom ad/show it
        }
        if(windowScrollBottom>=pageHeight){
          bottomAd.addClass('relativeFriend').removeClass('hidden');
        }

        } else {

       //Scrolling Up

          if(halfSet==1){
          //  navContainer.removeClass('go-up');                  //Show the NAV
          }
          if(halfSet===1 && bottomAd.hasClass('stucky') && !bottomAd.hasClass('relativeFriend')){       //more than whatever position we were at and the bottom ad is showing
            bottomAd.removeClass('stucky').addClass('hidden');  //Hide the stick

          }
          if(windowScrollBottom<pageHeight-bottomAd.height() && bottomAd.hasClass('relativeFriend')){ // && bottomAd.hasClass('relativeFriend')
            bottomAd.css('display','none').removeClass('relativeFriend').addClass('hidden');
            setTimeout(function(){bottomAd.css('display','block')},'50');
          }

      }
    iScrollPos = iCurScrollPos;
  }); //End Window Scroll


  $('.search-button').click(function(){
      $('#search-box').toggleClass('hidden');
  });

});	

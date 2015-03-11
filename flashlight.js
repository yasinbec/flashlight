// FlashLight v1.0.0 for jQuery
// =============
// Author: Ali Beceren
// Created: 2/14/2011
// Date: 10/08/2014
// Website: http://www.jenaldesign.com
// Description: Another kind Lightbox
 
(function($) {
     
    $.fn.flashlight = function() {     
         
        //$('html').css({'background-color': "#ffffff"});
         
        $(this).addClass( "flashlight" );
 
 
        $('.flashlight').click(function(event){
             
            event.preventDefault();
    
            var href = $(this).attr('href');
            $('.flashlight img').attr('src',href );
 
            //$('.flashlight').removeAttr("href");
 
            var title = $('.flashlight img').attr('title');
 
            $('.flashlight img').width('100%');
 
            $('.flashlight').css({'opacity': "1"});
            $('.flashlight').wrap("<div class='flashlight_overlay'><div class='flashlight_content'></div></div>");
 
            $('.flashlight_overlay').fadeIn(200,function(){
                    $('.flashlight_overlay').show();       
                    $('.flashlight_content').show();
                    $('.flashlight_content').animate({'top':'45%'},200);
                    $('.flashlight').replaceWith( "" + $('.flashlight').html() + "<div id='flashlight_close' class='flashlight_close'>close</div><div class='flashlight_title'>" + title + "</div>" );
            });
 
 
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
 
                    //$('.flashlight').unwrap();
                    //$('.flashlight_overlay').hide();     
                    //$('.flashlight_content').hide();
                     
                }   // esc
            });
 
 
            //return true
        });
 
 
 
 
 
 
 
             
    };
 
}(jQuery));

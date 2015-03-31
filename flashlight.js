// FlashLight v1.0.0 for jQuery
// =============
// Author: Ali Beceren
// Created: 10/08/2014
// Date: 10/08/2014
// Website: http://www.jenaldesign.com
// Description: Another kind Lightbox
(function($) {
    $.fn.flashlight = function() {     
        $(this).addClass( "flashlight" );
        $('.flashlight').click(function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            var title = $(this).find("img").attr('title');
            $('body').append("<div class='flashlight_overlay'></div>");
            $('.flashlight_overlay').append("<div class='flashlight_content'><img class='flashlight_image' src='" + href + "'/><div class='flashlight_desc'><div class='flashlight_close'>close</div><div class='flashlight_title'>" + title + "</div></div></div>");
            $('.flashlight_overlay').fadeIn(200,function(){
                    $('.flashlight_overlay').show();       
                    $('.flashlight_content').show();
                    $('.flashlight_content').animate({'top':'45%'},200);
            });
            $('.flashlight_overlay,.flashlight_close').click(function(){           
                   $('.flashlight_overlay').remove();
            });
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                   // esc
                   $('.flashlight_overlay').remove();
                }   
            });
        });            
    };
}(jQuery));

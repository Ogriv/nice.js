(function($){
    $.fn.nice = function(options) {
         
        var
          defaults = {
            theme:'nice',
            textHtml:'Hey There!',
            cancelButton: true,
            cancelButtonText: 'CANCEL',
            goButton: true,
            goButtonText: 'ACTION',
            goAction:'',  
            rounded: false
          },
          settings = $.extend({}, defaults, options);
        
        
        $('<div class="lightbox"><div class="lightbox-wrapper"><div class="lightbox-container"></div><div class="lightbox-buttons"></div></div></div>')
        .appendTo('body');
        
        
        
        this.click(function(e) {
                $('.lightbox').css({
                    display: 'block'
                 });
            
                $('.lightbox-container').html(settings.textHtml);
                $('.lightbox-buttons div').remove();
            
            if(settings.theme) {
               
                $('link[title="nice-theme"]').remove();
                $('head').append('<link rel="stylesheet" title="nice-theme" href="nice/css/' + settings.theme + '.css" type="text/css" />');
                
            }
            
            if(settings.cancelButton) {
                    var $el = $('<div class="lightbox-button-cancel">')
                    .appendTo('.lightbox-buttons');
                
                    $('.lightbox-button-cancel').html(settings.cancelButtonText);
                
                    $el.click(function(e){
                      
                        $('.lightbox').css({
                            display: 'none'
                         });
                        
                    })
                  }
            
            if(settings.goButton) {
                
                    var $el = $('<div class="lightbox-button-go">')
                    .appendTo('.lightbox-buttons');
                
                    $('.lightbox-button-go').html(settings.goButtonText);
                
                    $el.click(function(e){
                      
                        $('.lightbox').css({
                            display: 'none'
                         });
                        
                    })
                  }
            })
        
        jQuery.fn.nice.close = function(message){
            
            $('.lightbox').css({
              display: 'none'
            });
            
        }
        
        jQuery.fn.nice.html = function(html){
            
            settings.textHtml=html;
            $('.lightbox-container').html(settings.textHtml);
            
        }
        
        return this;
        
    }
})(jQuery);
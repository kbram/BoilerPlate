"use strict";
jQuery(document).ready(function ($) {

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


//==========================================
//ScrollUp
//=========================================

   



//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();
    
    

//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



});

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
	
    var input = $('.validate-input .input100');
	
    $('.validate-form').on('submit',function(){
        var check = true;
		var path = window.location.pathname;
		var page = path.split("/").pop();
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;	
            }else{
				
			}
        }
        return check;
    });
	

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
	
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }
	
    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);
$('.btn-group-primary .btn').addClass('btn-secondary');

var slider1 = document.getElementById("LightRange");
var output1 = document.getElementById("Lightdemo");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}
var slider2 = document.getElementById("HumidityRange");
var output2 = document.getElementById("Humiditydemo");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}
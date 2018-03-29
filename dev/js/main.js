// var subha = 10;
// for(var i = 0; i < subha; i++){
// 	console.log(i);
// };


(function () {
	"use strict";
	$(document).ready(function () {
		//Scroll top
		$('.js-scrollTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, "slow");
			return false;
		});
	});
	if ($('.gallery-pop').length > 0) {
		$('.gallery-pop').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			},
			gallery: {
				enabled: true
			}
		});
	}
	//---------------------------------------------------------------------------------------------------------


	$(".js-aaq-add-btn label").click(function () {
		console.log("galleryItem clicked");

		if ($(this).find("input[type=checkbox]:checked").is(':checked')) {
			console.log("checkbox checked");

			$(this).closest(".js-aaq-add-btn").addClass("add").prop("disabled", true);

			var selectedStyle_name = $(this).find("input[type=checkbox]").attr("name");
			var selectedStyle_image = $(this).closest(".js-select-sec").find("img").attr("src");
			var selectedStyle_value = $(this).find("input:checkbox[name='galleryPic']").val();
			console.log("checkbox value is=> " + selectedStyle_name);


			$('.js-selectedstyle').append('<li><div class="select-sec js-select-sec"><div class="addPic"><a href="' + selectedStyle_image + '" class="gallery-pop image-link"><img class="img" src=" ' + selectedStyle_image + ' " alt=""></a></div><div class="add-btn  js-aaq-remove-btn"><label class="quote-check-label" onclick="" for=" ' + selectedStyle_value + 'selected"><span class="js-textReplace">Remove from Style</span><span><img src="images/plus.png" alt=""></span><input type="checkbox" name="' + selectedStyle_name + '" class="hidden" value="' + selectedStyle_value + '" id=" ' + selectedStyle_value + 'selected"></label></div></div></li>');
		}else {
			$(this).closest(".js-aaq-add-btn").removeClass("add");
		}


		$("input[type=checkbox]:checked").change(function () {
			var totalselected_item = $('.js-gallery').find('input[type=checkbox]:checked').length;
			console.log(totalselected_item + ":- stair style is selected");
			if (totalselected_item > 3){
				alert("4 Item Is Maximum");
				
				//console.log($('.js-gallery').find('input:checkbox:not(:checked)').length);
				// $('.js-gallery').find('input:checkbox:not(:checked)').attr('disabled','disabled');
				$('.js-gallery').find('input[type=checkbox]').attr('disabled','disabled');
			} else {
				// $('.js-gallery').find('input:checkbox:not(:checked)').removeAttr('disabled','disabled');
				$('.js-gallery').find('input[type=checkbox]').removeAttr('disabled','disabled');
			}
		});

	});

	$('body').delegate('.js-aaq-remove-btn label', 'click', function () {
		// $(document).on('click','.js-aaq-remove-btn label',function(){
		// $('body').on('click', '.js-aaq-remove-btn label', function() {
		if ($(this).find("input[type=checkbox]:checked").is(':checked')) {
			console.log("style selecter checkbox checked");
			$(this).closest("li").remove();
		} else {

		}

	});

})();




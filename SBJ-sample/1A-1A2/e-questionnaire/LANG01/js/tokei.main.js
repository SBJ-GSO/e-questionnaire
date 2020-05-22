/*!
 * filename: tokei.main.js
 * @version 1.0. 2015-12-25
 */

/** To the top of this page */
 $(function() {
	var topBtn = $('#page-top');	
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	/*
	//Select a column from Checkbox in a table.
	$("table").on("click", "tr", function (event) {
		var checkbox = $(this).find(":checkbox"),
			isChecked = checkbox.prop("checked"),
			tag = $(event.target).prop("tagName");

		if (tag === "INPUT" || tag === "LABEL") {
			return;
		} 
		checkbox.prop("checked", !isChecked);

	});
	*/
	/*
	//Select a column from radio buttons in a table.
	$("table").on("click", "tr", function (event) {
		var radio = $(this).find(":radio"),
			isChecked = radio.prop("checked"),
			tag = $(event.target).prop("tagName");
			
		if (tag === "INPUT" || tag === "LABEL") {
			return;
		} else if ( radio.prop( 'checked' ) ){
			return;
		} 
		radio.prop("checked", !isChecked);


	});
	*/


	/** Change visible/invisible to controller link of open/close. */
	var checkWidth = function() {
		var browserWidth = $(window).width();
		
		var collapsecount = 0;
		$('.tokei-collapse-btn').click(function(){
			collapsecount = 1;
		});

		if(browserWidth <= 767){
			$('.tokei-collapse-box').removeClass('in');
			$('.tokei-collapse-btn').addClass('collapsed');
		}else{
			$('.tokei-collapse-box').addClass('in');
			$('.tokei-collapse-btn').removeClass('collapsed');
		}
		
	};

	$(function(){
		checkWidth();
		$(window).resize(checkWidth);
	});


});



/** Change position of Breadcrumb */
$(function(){
	$(window).bind("load resize", init);
	function init(){
		var _width = $(window).width();
		if(_width <= 767){
			// If window width is equal or less than 768px

			$('#tokei-breadcrumb').insertBefore('#tokei-foot');
		}else{


			$('#tokei-breadcrumb').insertBefore('#tokei-h1');
		}
	}
});






/** function about Table of list */
$(function() {
	$('table').footable();
});


/** when onload */
$(function(){


});

/** tooltip */
$(function() {
	$('[data-toggle=tooltip]').tooltip();
});











 
$(document).ready(function() {
	$("ul.nav li a[href^='#']").on('click', function(e) {
   		e.preventDefault();
   		$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
	});

	$('#melcontact').on('click', function(e) {
		this.href='mailto:' + 'interactionengineering' + '@' + 'gmail.com';
	});
});



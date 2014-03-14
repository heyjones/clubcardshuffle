// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//=	require bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function(){

	$('.pick-club').each(function(){
		$(this).height($(this).width());
		$(this).css('line-height', $(this).height());
		$(this).css('text-indent', $(this).width());
	});
	$('.pick-club').click(function(){
		$('#modal-club-name').text($(this).data('name'));
		$('#modal-club-shuffle').attr('data-id', $(this).data('id'));
		$('#modal-club-shuffle').click();
	});

	$('#modal-club-shuffle').click(function(){
		shuffle();
	});

});

var shuffle = function(){
	$.getJSON('/clubs/1/shuffle.json', function(data){
		console.log(data[0].number);
		$('#modal-card-number').text(data[0].number);
	});
}
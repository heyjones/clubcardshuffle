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

	btnCircle();
	square();

	$('#search').keyup(function(){
		val = $(this).val().toLowerCase();
		search(val);
	});
	$('#search-clear').click(function(){
		$('#search').val('');
		search('');
	});
	$('#search-button').click(function(){
		val = $('#search').val().toLowerCase();
		search(val);
	});

	$('.pick-club').click(function(){
		shuffle($(this).data('id'));
	});
	$('#shuffle-bad').click(function(){
	});

});

$(window).resize(function(){
	btnCircle();
	square();
});

var btnCircle = function(){
	$('.btn-circle').each(function(){
		console.log($(this).height());
		$(this).width($(this).height());
	});
}

var square = function(){
	$('.pick-club').each(function(){
		$(this).height($(this).width());
		$(this).css('line-height', $(this).height());
		$(this).css('text-indent', $(this).width());
	});
}

var search = function(val){
	if(val.length > 0){
		$('#search-clear').show();
		$('.club').hide();
		$('.club').filter('[data-club*="'+val+'"]').show();
	}else{
		$('#search-clear').hide();
		$('.club').show();
	}
}

var shuffle = function(id){
	$.getJSON('/clubs/'+id+'/shuffle.json', function(data){
		console.log(data[0].number);
		$('#shuffle-barcode').attr('src', '/cards/'+data[0].id+'.svg');
		$('#shuffle-number').text(data[0].number);
	});
}
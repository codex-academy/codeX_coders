$(document).ready(function(){
console.log("Hello!!"); 
$('#textbox').mouseenter(function(){
$(this).animate({backgroundColor: '#FFD700'}, 'slow'); 
$(this).animate({borderColor: '#FFD700'}, 'slow');
}); 
$('#textbox').mouseleave(function(){
$(this).animate({backgroundColor: '#8bc53f'}, 'slow');
$(this).animate({borderColor: 'white'}, 'slow'); 
}); 
$( '#listitems2' ).hover(function () {
    $(this).effect("bounce", { times: 1 }, 400);
});
});

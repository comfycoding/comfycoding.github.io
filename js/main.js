$(document).ready(function() {
    console.log('hello')
    $('nav').hover(function() {
        console.log('hi');
        $('#nav-hide').slideToggle();
    })
});

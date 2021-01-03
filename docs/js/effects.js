$(document).ready(function(){
    //Efecto Menú
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //Efecto Header
    if($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        },1500);
    }

    //Scroll
    var acercaDe =$('#acerca-de').offset().top;

    $('#btn-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });
});
// Efeito da Navbar fixada no topo quando a página rolar

var nav = $('.topo');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav.addClass("fixar");
    } else {
        nav.removeClass("fixar");
    }
});

// Efeito de Carousel em depoimentos

$(".owl-carousel").owlCarousel({
    loop: true, //quando chegar no último ele vai "reiniciar"
    margin: 30, //margem entre os elementos do pontilhado
    autoplay: true, //não vai iniciar automático
    autoplayTimeout: 6000, //o tempo do autoplay
    dots: true, //o pontilhado
    lazyLoad: true, //carregar antes de aparecer na tela
    nav: false, //navegação
    responsive: { //a responsividade dos elementos em tela
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: { //acima de 1000px ele carrega 2 itens
            items: 2,
        },
    },
});

//Efeito do pontilhado


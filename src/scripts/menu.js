$(function() {
    const button = $("#btn-mobile");
    const nav = $("#nav");

    function handleMenu (e) {
        if (e.type === "touchstart") e.preventDefault();
        const nav = $("#nav");
        nav.toggleClass("active");
        const active = nav.hasClass("active");
        $(e.currentTarget).attr("aria-expanded", active);
        if (active) {
            $(e.currentTarget).attr("aria-label", "Fecha Menu");
        } else {
            $(e.currentTarget).attr("aria-label", "Abrir Menu");
        }
    }

    button.on("click", handleMenu);

    nav.find("a").on("click", function() {
        nav.removeClass("active");
        button.attr("aria-expanded", "false").attr("aria-label", "Abrir Menu");
    });
     //função para animação ao secrola a pagina
     const sections = $("section");

     const sizeWindows = $(window).height() * 0.5;
 
     function animateScroll(){
         sections.each((index, item) => {
             const itemTop = $(item).offset().top - $(window).scrollTop();
             const getSection = itemTop - sizeWindows < 0;
             if(getSection) {
                 $(item).addClass('active');
             }else {
                 $(item).removeClass('active');
             }
         });
     }
     $(window).scroll(function() {
        animateScroll();
    });
});
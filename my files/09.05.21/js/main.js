$(() => {
    $(".menuIcon").on({
        click: () => {
            $(".sliderWindow").css({ "left": "71%" });
            $(".layout").fadeIn(300);
        }
    });

    $(".closeIcon").on({
        click: () => {
            $(".sliderWindow").css({ "left": "100%" })
            $(".layout").fadeOut(300);
        }
    });

    $(window).on({
        scroll: () => {
            if (this.window.pageYOffset > 10) {
                $(".jeansPhoto").css({ "opacity": "1" });
            } else {
                $(".jeansPhoto").css({ "opacity": "0" });
            }
        }
    });



});
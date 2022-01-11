$(function(){


    var displayWidth = $(window).width();
    console.log(displayWidth);
    
    //Bootstrap dropdown hover
    $('ul.navbar-nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(150).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(150).fadeOut(500);
      });


      //Slider
      $('.owl-carousel').owlCarousel({
          items: 1,
          loop: false,
          autoPlay:false,
          dots:true,
          nav:true,
          navText: ["<i style='font-size:1.4em;' class='fa fa-arrow-left'></i>", "<i style='font-size:1.4em;' class='fa fa-arrow-right'></i>"],
      });

      $('.p-slider').owlCarousel({
        items: 4,
        loop: false,
        dots: false,
        nav: false
    });

    $('.p-item img').click(function(){
        var imgUrl = $(this).attr('src');

        $('.head-img img').attr('src', imgUrl);
    });


    $('.default li a').click(function(e){
        e.preventDefault();

        var activeLi = $('.active');

        if(activeLi){
            $(activeLi).removeClass('active');
        }
        $(this).addClass('active');
    });

    $('.alt').click(function(){

        var activeLi = $('.show');

        if(activeLi){
            $(activeLi).removeClass('show');
        }

        $('.alt-list').addClass('show').css('transition', '.5s all linear');
    });

    $('.ust').click(function(){

        var activeLi = $('.show');

        if(activeLi){
            $(activeLi).removeClass('show');
        }

        $('.ust-list').addClass('show').css('transition', '.5s all linear');
    })


    //Isotope

    var $grid = $('.projects').isotope();

    $('.filter-button-group li a').on( 'click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
})
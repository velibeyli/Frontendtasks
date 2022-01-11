$(() => {
    var counter = 1;
    var sliderItemCounter = $(".sliderItems").length;
    var autoplay = true;

    for (var i = 1; i <= sliderItemCounter; i++) {
        $(".dots").append(`<div class="dot dot_${i}"></div>`);
    }


    if(autoplay){
        setInterval(() => {
            if (counter == sliderItemCounter) {
                $(".sliderItem_" + counter).fadeOut();
                $(".dot_" + counter).removeClass("activeDot");
                counter = 1;
                $(".sliderItem_" + counter).fadeIn();
                $(".dot_" + counter).addClass("activeDot");
            }
            else {
                $(".sliderItem_" + counter).fadeOut();
                $(".dot_" + counter).removeClass("activeDot");
                counter++;
                $(".sliderItem_" + counter).fadeIn();
                $(".dot_" + counter).addClass("activeDot");
            }
        }, 2000);
    }

    $(".dot_" + counter).on("click",()=>{
        $(".sliderItems").fadeOut();
        $(".sliderItem_" + counter).fadeIn();
    });


    $(".changer").mouseenter(function(){
        console.log("enter");
      });

      $(".changer").mouseleave(function(){
        console.log("leave");
      });


    $(".fa-chevron-left").on("click", () => {
        $(".sliderItems").fadeOut();
        counter--;
        $(".sliderItem_" + counter).fadeIn();
    });
    $(".fa-chevron-right").on("click", () => {
        $(".sliderItems").fadeOut();
        counter++;
        $(".sliderItem_" + counter).fadeIn();
    });


});
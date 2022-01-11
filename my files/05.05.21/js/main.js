$(() => {
    var sliderItemsLength = $(".sliderItems").length;
    var autoplay = true;



    var topPosition = "";
    setInterval(() => {
        if (autoplay) {
            if (topPosition == -sliderItemsLength * 500) {
                topPosition = 0;
            }
            else {
                $(".sliderBody").css({ "top": topPosition + "px" });
                topPosition -= 500
            }
        }
        else {
            topPosition = topPosition;
        }

    }, 2000);



    // var topPosition = 500;
    // setInterval(() => {
    //     //     if (topPosition == -sliderItemsLength*500) {
    //     //         topPosition = 0;
    //     //     }
    //     if (autoplay) {
    //         topPosition = -(sliderItemsLength - 1) * 500 == topPosition ? 0 : topPosition - 500;
    //         $(".sliderBody").css({ "top": topPosition + "px" });
    //     }
    //     else{
    //         topPosition = topPosition;
    //     }


    // }, 2000);


    $(".sliderChanger").on({
        mouseenter: () => {
            // console.log("enter");  
            autoplay = false;
        }
    });

    $(".sliderChanger").on({
        mouseleave: () => {
            // console.log("leave");
            autoplay = true;
        }
    });

    $(".changeUp").on({
        click: () => {
            topPosition += 0;
            if (topPosition == -sliderItemsLength * 500) {
                topPosition = 0;
            }
            else {
                $(".sliderBody").css({ "top": topPosition + "px" });
                topPosition -= 500
            }
        }
    });
    $(".changeDown").on({
        click: () => {
            topPosition += 1000;
            if (topPosition == -sliderItemsLength * 500) {
                topPosition = 0;
            }
            else if (topPosition > 0) {
                topPosition = -(sliderItemsLength+1) * 500;
            }
            else {
                $(".sliderBody").css({ "top": topPosition + "px" });
                topPosition -= 500
            }
        }
    });





});
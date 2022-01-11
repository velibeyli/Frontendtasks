$(() =>{
    $(".menuBar").on("click" , () => {
        $(".slide").toggleClass("active");

        // if($(".slide").hasClass("active")) {
        //     $(".menuBar").html("<i class='far fa-window-close'></i>");
        // }
        // else {
        //     $(".menuBar").html("<i class='fas fa-bars'></i>");
        // }
        $(".fa-bars").toggleClass("d-none");
        $(".fa-window-close").toggleClass("d-none");
    });
});
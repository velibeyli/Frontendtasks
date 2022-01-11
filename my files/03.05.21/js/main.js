$(() => {

    $(".box").on({
        click: (e) => {
            var itemId = $(e.target).attr("data-itemId");
            $(".box_"+ itemId).fadeOut("slow");          
        }
    });
});
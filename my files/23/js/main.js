function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/* console.log (Math.round (getRandomArbitrary(1, 100))); */



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//console.log (getRandomColor());

////////////////////////////////////////////////
var randomColorChanger = $("#randomColorChanger");
var colorChangeBox = $(".box");
var toggleChanger = $("#toggleChanger");
var isRed = true;
var xPosition = 0;
var yPosition = 0;
var xChanger = $("#xChanger");
var yChanger = $("#yChanger");

var left = $("#left");
var right = $("#right");
var up = $("#up");
var down = $("#down");

//////
randomColorChanger.on("click", () => {
    var size = getRandomArbitrary(200, 300) + "px";
    colorChangeBox.css({
        "background-color": getRandomColor(),
        "height": size,
        "width": size
    });
});
//////
toggleChanger.on("click", () => {
    if (isRed == true) {
        colorChangeBox.css({
            "background-color": "blue"
        });
        isRed = false;
    }
    else {
        colorChangeBox.css({
            "background-color": "red"
        });
        isRed = true;
    }
});

//////
xChanger.on("click", () => {
    xPosition += 30;
    colorChangeBox.css({
        "left": xPosition + "px"
    });
});

yChanger.on("click", () => {
    yPosition += 30;
    colorChangeBox.css({
        "top": yPosition + "px"
    });
});

//////

right.on("click", () => {
    xPosition += 30;
    colorChangeBox.css({
        "left": xPosition + "px"
    });
});

left.on("click", () => {
    xPosition -= 30;
    colorChangeBox.css({
        "left": xPosition + "px"
    });
});

up.on("click", () => {
    yPosition -= 30;
    colorChangeBox.css({
        "top": yPosition + "px"
    });
});

down.on("click", () => {
    yPosition += 30;
    colorChangeBox.css({
        "top": yPosition + "px"
    });
});

$(document).on('keydown', function (e) {
    console.log(colorChangeBox.position().top);
    e.preventDefault();
    if (e.which == 38) {
        yPosition -= 30;
        colorChangeBox.css({
            "top": yPosition + "px"
        });
    } 
    else if (e.which == 40) {
        yPosition += 30;
        colorChangeBox.css({
            "top": yPosition + "px"
        });
    } 
    else if (e.which == 39) {
        xPosition += 30;
        colorChangeBox.css({
            "left": xPosition + "px"
        });
    } 
    else {
        xPosition -= 30;
        colorChangeBox.css({
        "left": xPosition + "px"
        });
    }
    //////////////////////////////////////
    if(colorChangeBox.position().top>460){
        yPosition = 0
        colorChangeBox.css({
        "top": 0
        });
    }
    else if(colorChangeBox.position().left>1320){
        xPosition = 0
        colorChangeBox.css({
        "left": 0
        });
    }
    else if(colorChangeBox.position().left<-120){
        xPosition = 1180
        colorChangeBox.css({
        "left": 1180
        });
    }
    else if(colorChangeBox.position().top<-120){
        yPosition = 330
        colorChangeBox.css({
        "top": 330
        });
    }
});

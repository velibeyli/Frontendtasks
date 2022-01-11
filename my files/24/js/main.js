$(() => {
    // $(".box").hide("5000");
    // $(".box").show("5000");
    // $(".box").toggle("slow");

    $("#button1").on("click", () =>{
        $(".box").hide("slow");
    });
    $("#button2").on("click", () =>{
        $(".box").show("slow");
    });
    $("#button3").on("click", () =>{
        $(".box").toggle("slow");
    });
    $("#button4").on("click", () =>{
        // $(".box").removeClass("box");
        // $(".box").addClass("green");
        // $(".box").toggleClass("ms-0");
    });

    var month = 1
    switch (month) {
        case a = 1:
            console.log("Yanvar");
            break;
        case a = 2:
            console.log("Fevral");
            break;
        case a = 5:
        console.log("May");
        break;
        default:
            console.log("Dekabr");
            break;
    }
///////////////
    if(month==1) {
        console.log("Yanvar");
    }
    else if(month==2) {
        console.log("Fevral");
    }
    else if(month==5) {
        console.log("May");
    }
    else{
        console.log("Dekabr");
    }

    console.clear();

    var a1 = 10;  //integer
    var a2 = "ten";  //string
    var a3 = true;  //boolean
    var a4 = ["ten" , "one"]; //array


    var users = ["Aslan", "Ruslan", "Ramazan", "Tehmasib"]

    users.push("Vagif");

    // console.log(users[0]);
    // console.log(users[users.length-1]);
    users.forEach(item => {
        // console.log(item);
    });

    for (var i=0; i < users.length; i++){
        // console.log(i);
        // console.log(users[i]);
    }
    for (var item of users) {
        console.log(item);
    }

    console.clear();

    var user1 = {
        firstName: "Aslan",
        lastName: "Valizadeh",
        email: "aslanvalizadeh@gmail.com",
        getFullName: function () {
            return this.firstName + " " + this.lastName
        }
    };

    var user2 = {
        firstName: "Ramazan",
        lastName: "Gadimov",
        email: "ramazangadimov@gmail.com",
        getFullName: function () {
            return this.firstName + " " + this.lastName
        }
    };

    var students = [];
    students.push(user1);
    students.push(user2);

    students.forEach (item =>{
        console.log(item.getFullName());
    });

});
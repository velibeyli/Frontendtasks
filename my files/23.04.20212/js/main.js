$(() => {

    // $(".wrapper").text("Hello from Jquery ");
    // $(".wrapper").html("<div class='text-danger text-center'>Hello from Jquery Html</div>");

    ////////////////////////////////////////
    // var div = document.createElement("div");
    // div.innerText = "Js 1";
    // $(".wrapper2").append(div);
    // $(".wrapper2").prepend(div);



    // for (var i = 0; i < 10; i++) {

    //     var div2 = document.createElement("div");
    //     div2.innerText = "Hello from Js " + i;
    //     $(".wrapper2").append(div2);

    //     $(".wrapper2").append("<div class='text-success text-center'> JS " + i + "</div >");

    //     $(".wrapper2").append(`<div class='text-success text-center'> JS ${i}</div >`);
    // };
    ////////////////////////////////////////


    
    ////////////////////////////////////////

    //declare new empty array
    var students = [];

    //creating new student
    var student1 = {
        firstName: "Aslan",
        lastName: "Valizadeh",
        email: "aslanvalizadeh@gmail.com",
        age: 18,
        isAdmin: false,
        isActive: true,
    };

    //creating new student
    var student2 = {
        firstName: "Ruslan",
        lastName: "Valibeyli",
        email: "ruslanvalibeyli@gmail.com",
        age: 30,
        isAdmin: true,
        isActive: true,
    };

    //creating new student
    var student3 = {
        firstName: "Ibragim",
        lastName: "Zeynalov",
        email: "ibrazeynalov@gmail.com",
        age: 7,
        isAdmin: false,
        isActive: true
    }

    //creating new student
    var student4 = {
        firstName: "Ramazan",
        lastName: "Gadimov",
        email: "ramazangadimov@gmail.com",
        age: 55,
        isAdmin: true,
        isActive: false
    };

    //creating new student
    var student5 = {
        firstName: "Kamran",
        lastName: "Mammadov",
        email: "kamranzyzz@gmail.com",
        age: 15,
        isAdmin: false,
        isActive: true
    };


    //pushing elements to array 
    students.push(student1);
    students.push(student2);
    students.push(student3);
    students.push(student4);
    students.push(student5);

    //consoling to view if pushing is success
    console.log(students);

    ////////////////////////////////////////

    //declare new variables

    var counter = 0;
    var adminText = "";
    var isForbidden = "";
    var isActive = "";

    //staring loop side
    students.forEach(item => {

        //counting how many times loop
        counter++;

        //find if student is Admin
        if (item.isAdmin) {
            adminText = "<td class='text-center text-success'><i class='fas fa-check-circle'></i></td>"
        } else {
            adminText = "<td class='text-center text-danger'><i class='fas fas fa-ban'></i></td>"
        }

        //find if user not 18+
        if (item.age > 18) {
            isForbidden = "<td class='text-center text-success'><i class='fas fa-check-circle'></i></td>"
        } else {
            isForbidden = "<td class='text-center text-danger'><i class='fas fas fa-ban'></i></td>"
        }

        //find if user is not active
        if (item.isActive) {
            isActive = "<td class='text-center text-success'><i class='fas fa-check-circle'></i></td>"
        } else {
            isActive = "<td class='text-center text-danger'><i class='fas fas fa-ban'></i></td>"
        }

        //appending element to table body 
        $(".wrapper3 table tbody").append(`
                                            <tr>
                                                <th scope="row">${counter}</th>
                                                <td>${item.firstName}</td>
                                                <td>${item.lastName}</td>
                                                <td>${item.email}</td>
                                                <td>${item.age}</td>
                                                    ${adminText}
                                                    ${isForbidden}
                                                    ${isActive}
                                            </tr>
                                            `)
    });
    ////////////////////////////////////////
});
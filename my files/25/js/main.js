$(() => {
    // $(".wrapper").text("hello from js");
    // $(".wrapper").html("<div class='text-danger text-center'>Hello from jquery html</div>");

    ////////////////////////////

    var div = document.createElement("div");
    div.innerText = "JS 1";
    // $(".wrapper2").append(div);
    // $(".wrapper2").prepend(div);
    
    var a = 45;
    

    for(i=0;i<10;i++){
        // $(".wrapper2").prepend(`<h1 class ='first text-center text-success'>Javascript ${i}</h1>`);
        // $(".wrapper2").prepend("<h1 class ='second text-center text-warning'>Javascript "+i+"</h1>");
    };

    /////////////////////////////////
    var students = [];

    var student1 = {
        firstName: "Aslan",
        lastName: "Valizadeh",
        email: "aslanvalizadeh@gmail.com",
        age: 18,
        isAdmin: false
    };

    var student2 = {
        firstName: "Ruslan",
        lastName: "Valibeyli",
        email: "ruslanvelibeyli@gmail.com",
        age: 30,
        isAdmin: false
    };

    var student3 = {
        firstName: "Ibrahim",
        lastName: "Zeynalov",
        email: "ibrazeynalov@gmail.com",
        age: 7,
        isAdmin: false
    };

    var student4 = {
        firstName: "Ramazan",
        lastName: "Gadimov",
        email: "ramazangadimov@gmail.com",
        age: 52,
        isAdmin: true
    };

    var student5 = {
        firstName: "Kamran",
        lastName: "Mammadov",
        email: "kamranzyzz@gmail.com",
        age: 24,
        isAdmin: true
    };

    console.log(students);


    students.push(student1);
    students.push(student2);
    students.push(student3);
    students.push(student4);
    students.push(student5);

    var counter = 0;

    students.forEach(item =>{
        //
        counter++;
        //
        var adminText = "";
        var isForbidden = "";

        if (item.isAdmin){
            adminText = "<td class = 'text-center text-success'><i class='fas fa-check-circle'></i></td>"
        }
        else{
            adminText = "<td class = 'text-center text-danger'><i class='fas fa-ban'></i></td>"
        }
        if (item.age >= 18) {
            isForbidden = "<td class = 'text-center text-success'><i class='fas fa-check-circle'></i></td>"
        }
        else{
            isForbidden = "<td class = 'text-center text-danger'><i class='fas fa-ban'></i></td>"
        }

        $(".wrapper3 table tbody").append(`<tr>
                                            <th scope="row">${counter}</th>
                                            <td>${item.firstName}</td>
                                            <td>${item.lastName}</td>
                                            <td>${item.email}</td>
                                            <td>${item.age}</td>
                                            ${adminText}
                                            ${isForbidden}
                                            </tr>`);
    });
});
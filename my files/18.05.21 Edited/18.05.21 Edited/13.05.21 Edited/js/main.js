$(() => {
    var counter = 0;

    $("#email").keyup(function () {
        if (generalValidater($("#email").val(), 0, "email")) {
            // if the email is validated
            // set input email border green
            $("#email").removeClass("invalidInput");
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        } else {
            // if the email is not validated
            // set border red
            $("#email").addClass("invalidInput");
            $("#emailMsg").html("<p class='text-danger'>Please write valid email</p>");
        }
    });

    $("#phone").keyup(function () {
        if (generalValidater($("#phone").val(), 0, "phone")) {
            // if the email is validated
            // set input email border green
            // and set label 
            $("#phone").removeClass("invalidInput");
            $("#phoneMsg").html("<p class='text-success'>Validated</p>");
        } else {
            // if the email is not validated
            // set border red
            $("#phone").addClass("invalidInput");
            $("#phoneMsg").html("<p class='text-danger'>Please write valid phone</p>");
        }
    });

    $("#firstName").keyup(function () {
        if (generalValidater($("#firstName").val(), 3, "text")) {
            $("#firstName").removeClass("invalidInput");
            $("#firstNameMsg").html("<p class='text-success'>Validated</p>");
        } else {
            // if the email is not validated
            // set border red
            $("#firstName").addClass("invalidInput");
            $("#firstNameMsg").html("<p class='text-danger'>Please write your Firstname</p>");
        }
    });

    $("#lastName").keyup(function () {
        if (generalValidater($("#lastName").val(), 3, "text")) {
            $("#lastName").removeClass("invalidInput");
            $("#lastNameMsg").html("<p class ='text-success'>Validated</p>")
        }
        else {
            $("#lastName").addClass("invalidInput");
            $("#lastNameMsg").html("<p class ='text-danger'>Please write your Lastname</p>");
        }
    });

    $("#faculty").keyup(function () {
        if (generalValidater($("#faculty").val(), 3, "text")) {
            $("#faculty").removeClass("invalidInput");
            $("#facultyMsg").html("<p class = 'text-success'>Validated</p>")
        }
        else {
            $("#faculty").addClass("invalidInput");
            $("#facultyMsg").html("<p class = 'text-danger'>Please write your faculty</p>")
        }
    });

    $("#date").blur(function () {
        if (generalValidater($("#date").val(), 18, "date")) {
            $("#date").removeClass("invalidInput");
            $("#dateMsg").html("<p class ='text-success'>Validated</p>")
            $(".parentSide").addClass("d-none");
        }
        else {
            $("#date").addClass("invalidInput");
            $("#dateMsg").html("<p class = 'text-danger'>Please fill the below gaps</p>")
            $(".parentSide").removeClass("d-none");
        }
    });

    $("#firstNameP").keyup(function() {
        if (generalValidater($("#firstNameP").val(),3,"text")) {
            $("#firstNameP").removeClass("invalidInput");
            $("#parentFirstNameMsg").html("<p class='text-success'>Validated</p>");
        }
        else{
            $("#firstNameP").addClass("invalidInput");
            $("#parentFirstNameMsg").html("<p class='text-danger'>Please write your Firstname</p>");
        }
    });

    $("#lastNameP").keyup(function() {
        if (generalValidater($("#lastNameP").val(),3,"text")) {
            $("#lastNameP").removeClass("invalidInput");
            $("#parentLastNameMsg").html("<p class='text-success'>Validated</p>");
        }
        else{
            $("#lastNameP").addClass("invalidInput");
            $("#parentLastNameMsg").html("<p class='text-danger'>Please write your Lastname</p>");
        }
    });

    $("#phoneP").keyup(function(){
        if (generalValidater($("#phoneP").val(),0,"phone")) {
            $("#phoneP").removeClass("invalidInput");
            $("#parentPhoneMsg").html("<p class='text-success'>Validated</p>");
        }
        else{
            $("#phoneP").addClass("invalidInput");
            $("#parentPhoneMsg").html("<p class='text-danger'>Please write valid phone</p>");
        }
    });

    $("#emailP").keyup(function(){
        if (generalValidater($("#emailP").val(),0,"email")) {
            $("#emailP").removeClass("invalidInput");
            $("#parentEmailMsg").html("<p class='text-success'>Validated</p>");
        }
        else{
            $("#emailP").addClass("invalidInput");
            $("#parentEmailMsg").html("<p class='text-danger'>Please write valid email</p>");
        }
    });



    function generalValidater(inputValue, length, type) {
        switch (type) {
            case "text":
                var reg = /^[a-zA-Z '.-]*$/;
                return reg.test(inputValue) && inputValue.length >= length ? true : false;
            case "date":
                var birthday = new Date(inputValue);
                var today = new Date();
                var difference = today.getTime() - birthday.getTime();
                var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
                return age > length ? true : false;
            case "email":
                var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                return reg.test(inputValue) ? true : false;
            case "phone":
                var reg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
                return reg.test(inputValue) ? true : false;
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // function validatePhone() {
    //     var phone = $("#phone").val();

    //     var reg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    //     // if (reg.test(phone)) {
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }

    //     return reg.test(phone) ? true : false;
    // }

    // function validateEmail() {
    //     // get value of input email
    //     var email = $("#email").val();
    //     // use reular expression
    //     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    //     // if (reg.test(email)) {
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }

    //     return reg.test(email) ? true : false;
    // }

    // function validateFirstName() {
    //     var firstName = $("#firstName").val();
    //     var reg = /^[a-zA-Z '.-]*$/;
    //     if (reg.test(firstName) && firstName.length > 2) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }

    // function validateLastName() {
    //     var lastName = $("#lastName").val();
    //     var reg = /^[a-zA-Z '.-]*$/;
    //     if (reg.test(lastName) && lastName.length > 2) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    // function validateFaculty() {
    //     var faculty = $("#faculty").val();
    //     var reg = /^[a-zA-Z '.-]*$/;
    //     if (reg.test(faculty) && faculty.length > 6) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    // function validateAge() {
    //     var birthday = new Date($("#date").val());
    //     var today = new Date();
    //     var difference = today.getTime() - birthday.getTime();
    //     var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    //     if (age > 18) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    $(".addStudent").on({
        click: () => {

            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var phone = $("#phone").val();
            var email = $("#email").val();
            var date = $("#date").val();
            var faculty = $("#faculty").val();
            var parentFirstName = $("#firstNameP").val();
            var parentLastName = $("#lastNameP").val();
            var parentPhone = $("#phoneP").val();
            var parentEmail = $("#emailP").val();


            if (email && firstName && lastName && phone && date && faculty) {
                if (generalValidater($("#email").val(), 0, "email") &&
                    generalValidater($("#phone").val(), 0, "phone") &&
                    generalValidater($("#firstName").val(), 3, "text") &&
                    generalValidater($("#lastName").val(), 3, "text") &&
                    generalValidater($("#faculty").val(), 3, "text") &&
                    generalValidater($("#firstNameP").val(),3,"text") &&
                    generalValidater($("#lastNameP").val(),3,"text") &&
                    generalValidater($("#emailP").val(),0,"email") &&
                    generalValidater($("#emailP").val(),0,"email"))
                    {
                    counter++;
                    $("tbody").append(`<tr>
                                           <th scope="row">${counter}</th>
                                           <td>${firstName}</td>
                                           <td>${lastName}</td>
                                           <td>${phone}</td>
                                           <td>${email}</td>   
                                           <td>${date}</td>      
                                           <td>${faculty}</td>  
                                           <td>${parentFirstName}</td> 
                                           <td>${parentLastName}</td>  
                                           <td>${parentEmail}</td>  
                                           <td>${parentPhone}</td>                   
                                      </tr>`)
                    $("#studentAdder").modal("hide");
                    $(".studentAdder h4 span").text(counter);
                    $("#firstName").val("");
                    $("#lastName").val("");
                    $("#phone").val("");
                    $("#email").val("");
                    $("#date").val("");
                    $("#faculty").val("");
                    $("#firstNameP").val("");
                    $("#lastNameP").val("");
                    $("#phoneP").val("");
                    $("#emailP").val("");

                    $(".msg").fadeOut();
                }
            }
            else {
                $(".alert").fadeIn("slow")
            }
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    function returnName(firstName, lastName) {
        console.log("Users full information is " + firstName + " " + lastName);
    }

    function returnAge1(age) {
        console.log("Age is " + age);
    }



    returnName("Ramazan", "Gadimov");

    returnAge1(45);
    console.log(returnAge2(19));
    console.log(returnAge2());

    console.clear();

    function returnAge2(age) {
        if (age != null) {
            return "Your age is " + age;
        } else {
            return "Please enter valid age";
        }
    }

    finalReturn = age => {
        return age ? "Age is " + age : "Please enter Valid email";
    }

    function TestFunction() {
        console.log("Test function");
    }

    TestFunction2 = () => {
        console.log("Test function2 ");
    }

    TestFunction2("Test test test");

    console.log(finalReturn());
    console.log(finalReturn(100));

    var users = ["Ramazan", "Aslan", "Ruslan"];

    users.forEach(element => {
        console.log(element);
    });


});
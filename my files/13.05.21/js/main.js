$(() => {
    var counter = 0;

    $("#email").keyup(function(){
        if(validateEmail()){
            // if the email is validated
            // set input email border green
            $("#email").removeClass("invalidInput");
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#email").addClass("invalidInput");
            $("#emailMsg").html("<p class='text-danger'>Please write valid email</p>");
        }
    });

    $("#phone").keyup(function(){
        if(validatePhone()){
            // if the email is validated
            // set input email border green
            // and set label 
            $("#phone").removeClass("invalidInput");
            $("#phoneMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#phone").addClass("invalidInput");
            $("#phoneMsg").html("<p class='text-danger'>Please write valid phone</p>");
        }
    });

    $("#firstName").keyup(function(){
        if(validateFirstName()){
            $("#firstName").removeClass("invalidInput");
            $("#firstNameMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#firstName").addClass("invalidInput");
            $("#firstNameMsg").html("<p class='text-danger'>Please write your Firstname</p>");
        }
    });

    $("#lastName").keyup(function() {
        if (validateLastName ()) {
            $("#lastName").removeClass("invalidInput");
            $("#lastNameMsg").html("<p class ='text-success'>Validated</p>")
        }
        else{
            $("#lastName").addClass("invalidInput");
            $("#lastNameMsg").html("<p class ='text-danger'>Please write your Lastname</p>");
        }
    });

    $("#faculty").keyup(function(){
        if (validateFaculty()) {
            $("#faculty").removeClass("invalidInput");
            $("#facultyMsg").html("<p class = 'text-success'>Validated</p>")
        }
        else{
            $("#faculty").addClass("invalidInput");
            $("#facultyMsg").html("<p class = 'text-danger'>Please write your faculty</p>")
        }
    });

    $("#date").blur(function(){
        if (validateAge ()) {
            $("#date").removeClass("invalidInput");
            $("#dateMsg").html("<p class ='text-success'>Validated</p>")
        }
        else{
            $("#date").addClass("invalidInput");
            $("#dateMsg").html("<p class = 'text-danger'>Please fill the below gaps</p>")
            $(".main").append(`<div>
                                    <h6>Parent firstname</h6>
                                    <input type="firstName" class="form-control" id="firstName" placeholder="Enter Firstname" autocomplete="off" name="">
                                    <span id="parentFirstNameMsg"></span>
                                </div>
                                <div>
                                    <h6>Parent lastname</h6>
                                    <input id="lastName" class="form-control" type="lastName" placeholder="Enter Lastname">
                                    <span id="parentLastNameMsg"></span>
                                </div>
                                <div class="my-2">
                                    <h6>Parent phone</h6>
                                    <input type="ParentPhone" class="form-control" id="phone" placeholder="Enter phone" autocomplete="off" name="">
				                    <span id="phoneMsg"></span>
                                </div>
                                <div class="my-2">
                                    <h6>Parent email</h6>
                                    <input type="parentEmail" class="form-control" id="email" placeholder="Enter email" autocomplete="off" name="">
				                    <span id="emailMsg"></span>
                                </div>
                             `)
        }
    });

    function validatePhone(){
        var phone=$("#phone").val();

        var reg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if(reg.test(phone)){
            return true;
        }else{
            return false;
        }       
   }


    
   function validateEmail(){
    // get value of input email
    var email=$("#email").val();
    // use reular expression
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}

function validateFirstName(){
    var firstName = $("#firstName").val();
     var reg = /^[a-zA-Z '.-]*$/;
     if(reg.test(firstName) && firstName.length >2){
         return true;
     }else{
         return false;
     }

}

function validateLastName () {
    var lastName = $("#lastName").val();
    var reg = /^[a-zA-Z '.-]*$/;
    if (reg.test(lastName) && lastName.length >2) {
        return true;
    }
    else{
        return false;
    }
}

function validateFaculty(){
    var faculty = $("#faculty").val();
    var reg = /^[a-zA-Z '.-]*$/;
    if (reg.test(faculty) && faculty.length > 6) {
        return true;
    }
    else{
        return false;
    }
}

function validateAge (){
    var birthday = new Date ($("#date").val());
    var today = new Date ();
    var difference = today.getTime() - birthday.getTime();
    var age = Math.floor(difference/(1000*60*60*24*365.25));
    if (age > 18) {
        return true;
    }
    else{
        return false;
    }
}


    $(".addStudent").on({
        click: () => {

            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var phone = $("#phone").val();
            var email = $("#email").val();
            var date = $("#date").val();
            var faculty = $("#faculty").val();
         

            if (email && firstName && lastName && phone && date && faculty) {
                if (validateFirstName() && validateLastName() && validatePhone() && 
                    validateEmail () && validateFaculty() && validateAge() ) {
                    counter++;
                    $("tbody").append(`<tr>
                                           <th scope="row">${counter}</th>
                                           <td>${firstName}</td>
                                           <td>${lastName}</td>
                                           <td>${phone}</td>
                                           <td>${email}</td>   
                                           <td>${date}</td>      
                                           <td>${faculty}</td>                       
                                      </tr>`)
                $("#studentAdder").modal("hide");
                $(".studentAdder h4 span").text(counter);

                $("#firstName").val("");
                $("#lastName").val("");
                $("#phone").val("");
                $("#email").val("");
                $("#date").val("");
                $("#faculty").val("");

                $(".msg").fadeOut();
                }
            }
            else{
                $(".alert").fadeIn("slow")
            }
        }
    });



});
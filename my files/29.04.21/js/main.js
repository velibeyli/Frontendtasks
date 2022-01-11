$(() => {
    var studentCounter = 0;
    $("#btnAdder").on({
        click: () => {
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var date = $("#date").val();
            var faculty = $("#faculty").val();


            if (firstName && lastName && email && phone && date && firstName.length>2 && lastName.length>2) {
                if(email.length>5 && email.includes('@')){
                    studentCounter++;
                    $(".table tbody").append(`            
                                         <tr>
                                            <th scope="row">${studentCounter}</th>
                                            <td>${firstName}</td>
                                            <td>${lastName}</td>
                                            <td>${email}</td>
                                            <td>${phone}</td>
                                            <td>${date}</td>
                                            <td>${faculty}</td>
                                         tr>
                                           `)
                    $("#studentAdder").modal("toggle");
                    $(".studentCounter").hide("slow");
                    $(".studentCounter").text(studentCounter);
                    $(".studentCounter").show("slow");
                    $("#firstName").val("");
                    $("#lastName").val("");
                    $("#email").val("");
                    $("#phone").val("");
                    $("#date").val("");
                    $("#faculty").val("");
                    $(".alert-danger").fadeOut("slow");
                    $(".invalidInput").removeClass("invalidInput");
                }
                else{
                    $(".alert-danger").text("Email is not valid.Please verify your email").fadeout("slow");
                }
    
            }
            else{
                $(".alert-danger").text("Firstname,lastname,email,phone and date are required!").fadeIn("slow");
                if(!firstName){
                    $("#firstName").addClass("invalidInput");
                }
                else{
                    $("#firstName").removeClass("invalidInput");
                }

                if(!lastName){
                    $("#lastName").addClass("invalidInput");
                }
                else{
                    $("#lastName").removeClass("invalidInput");
                }

                if(!email){
                    $("#email").addClass("invalidInput");
                }
                else{
                    $("#email").removeClass("invalidInput");
                }

                if(!phone){
                    $("#phone").addClass("invalidInput");
                }
                else{
                    $("#phone").removeClass("invalidInput");
                }

                if(!date){
                    $("#date").addClass("invalidInput");
                }
                else{
                    $("#date").removeClass("invalidInput");
                }
            }
        }
    })
});
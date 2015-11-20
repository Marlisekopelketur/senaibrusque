//*Building a Bootstrap Contact Form Using PHP and AJAX*/
//*http://webdesign.tutsplus.com/tutorials/building-a-bootstrap-contact-form-using-php-and-ajax--cms-23068*//


$("#contactForm").submit(function (event) {
    // cansela o envio padrão
    event.preventDefault();
    //Chama uma função que fará o envio do formulário
    console.log("submitForm");
    submitForm();
});

function submitForm() {
    // Inicializada variaveis com o conteúdo do formulário
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    

    $.ajax({
        type: "POST",
        url: "formProcess.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            }
        }
    });
}
function formSuccess() {
    $("#msgSubmit").removeClass("hidden");
}
/* 
 * Responsável pela busca AJAX de apenas uma notícia
 */

var id = 0;
$('document').ready(function () {
    $('#noticias button').click(function () {
        //Botão clicado
        if ($.isNumeric($(this).attr('id'))) {
            id = $(this).attr('id');
            console.log(id);
            //Reconstruição do identificador da notícia
            noticiaID = '#noticia' + id;
            console.log(noticiaID);
            //AJAX método GET
            $.get(
                    "noticia1.php",
                    function (retorno) {
                        $(noticiaID).html(retorno);
                    }
            );

        }
    });
});
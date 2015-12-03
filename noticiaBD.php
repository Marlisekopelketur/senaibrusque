<?php 
//Faz a requisição de dados paraconexão com o BD
if ($_SERVER['SERVER_ADDR'] == '127.0.0.1')
    require_once 'dbconfig.php';
else
    require_once 'dbconfigHstinger.php';

?>
<div class="modal-dialog">

    <!-- Conteúdo da modal-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"> <?= $Titulo; ?></h4>
        </div>
        <div class="modal-body">
            <time class="h4"> <?= $dtCadastro; ?></time>
            <p>Autor: <?= $autor; ?></p>

           
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
        </div>
    </div>

</div>


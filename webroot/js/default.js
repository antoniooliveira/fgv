$(document).ready(function($){
    $('.cpf').mask('999.999.999-99');
    $('.telefone').mask('(99)9999-9999');
    $('.date').datepicker({
        showButtonPanel:true,
        dateFormat: 'dd/mm/yy',
        currentText: 'Hoje',
        closeText: 'Sair',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        nextText: 'Próximo',
        prevText: 'Anterior',
        showOtherMonths: true,
        selectOtherMonths: true
    });

    $('.uppercase').on('blur', function(){
        $(this).val($(this).val().toUpperCase());
    });

    $("body").on("show.bs.modal", '.modal', function() {
        removeContent();
    });

    $("body").on("hide.bs.modal", '.modal', function () {
        removeContent();
    });
});

function removeContent(){
    $(".modal-content").html('');
    $(this).removeData('bs.modal');
}

$(document).ajaxSend(function(event, request, settings) {
    $('#loading-indicator').show();
});

$(document).ajaxComplete(function(event, request, settings) {
    $('#loading-indicator').hide();
});




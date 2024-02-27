$(document).ready(function(){

    $('form button').click(function(){

        
        
    })


$('form').on('submit',function(e){
    e.preventDefault();
const caixaDeEntrada = $('#nua').val();
const novoItem = $('<li></li>');
(novoItem).text(caixaDeEntrada);
$(novoItem).appendTo('ul');


novoItem.click(function(){
    $(this).css('text-decoration', 'line-through');
});

})

})

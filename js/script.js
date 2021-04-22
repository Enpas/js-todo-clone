// inizializzo il dom
$(function(){

  // creo un array con le cosa da fare
  var arrTodo = [
    "Fare una passeggiata rilassante",
    "Fare la spesa",
    "Fare palestra",
    "Fare la doccia",
    "Cucinare la cena"
  ];

  // creo un ciclo for che visualizza l'array e salvo la lista in una var
  for (var i = 0; i < arrTodo.length; i++) {
    var strTodo = arrTodo[i];
    // clono il template
    var itemList = $('.template li').clone();
    // trovo la classe text al suo interno e le appendo strTodo
    $(itemList).find('.text').append(strTodo);
    // appendo alla lista il nuovo itemList
    $('.app-section ul').append(itemList);
  }

  // ricarico il dom al click sul cestino
  $(document).on('click', '.fa-trash-alt', function(){
    // al click sul cestino vado a puntare al genitore dello stesso (li)
    // sostituisco il testo in "Rimosso" e lo rimuovo cancellando l'elemento desiderato dalla lista
    $(this).parent().html('<p class="text">Rimosso</p>').fadeOut(500);
  });

  // inserisco un event listener sul campo input
  $('.app-section input').keyup(function(element){
    // quando viene premuto un tasto si attiva una funzione che controlla se il tasto rilasciato è Invio (13)
    if (element.which === 13) {
      //se il tasto premuto è Invio controlla che la lunghezza del val() di input sia superiore ai 3 caratteri
      if ($(this).val().length > 3) {
        // se è stato premuto si ripete il passaggio con clone() e append()
        var itemList = $('.template li').clone();
        $(itemList).find('.text').append($(this).val());
        $('.app-section ul').append(itemList);
        // infine svuoto il contenuto
        $(this).val('');
      }

    }
    
  });

});
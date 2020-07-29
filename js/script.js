// var msg = $('template').clone();
// msg.addClass('sent');
// $('.main-conv').append(msg);

$('#content').keydown(invio);

function invio(event) {
  if(event.which == 13 || event.keyCode == 13){
    //prendiamo il contenuto
    var contenuto = $('#content').val();
    console.log(contenuto);

    var msg = $('.template').clone();
    var text = $('.template p');

    console.log(msg);
    console.log(text);

    msg.removeClass('display');
    msg.show();
    text.text(contenuto);
    // msg.append(contenuto);

    msg.addClass('sent');
    // msg.addClass('cloud');

    // msg.show();

    $('.main-conv').append(msg);
  }
}

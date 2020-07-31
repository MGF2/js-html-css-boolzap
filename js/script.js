$(document).ready(function() {

  //Con tasto invio
  $("#content").keydown(function(){
      if (event.which == 13 || event.keyCode == 13) {
          invio();

      }
  });

  //Con icona invio
  $('#invio').click(function(){
    invio();
  });

  //Search
  $('#search').keyup(function(){
    search();
  });

  //FUNZIONI
  function invio(){
      // 1 step -- prendere il valore
      var valore = $("#content").val();
      // 2 step -- creo clone del template da message
      var clone = $(".template .message").clone();
      var time = myTime();
      // 3 Step -- Aggiungo una classe
      clone.addClass("sent");
      // 4 step -- inserimento del testo
      clone.find(".cloud-top .text").append(valore);
      clone.find(".cloud-time small").append(time);
      // 5 step - Inserimento nel DOM
      $(".main .active").append(clone);
      // 6 step - risposta automatica
      setTimeout(rispostaAutomatica,1000);
      // 7 step -reset input
      valore = $("#content").val('');

    }

  function rispostaAutomatica(){
      // 1 step - clonare il template
      var clone = $(".template .message").clone();
      var time = myTime();
      // 2 step - mettere la classe
      clone.addClass("received");
      // 3 step - aggiungere il Testo
      clone.find(".cloud-top .text").append("Ok");
      clone.find(".cloud-time small").append(time);
      // 4 step - mettere elemento nel DOM
      $(".main .active").append(clone);
  }

  //GET TIME

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function myTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    return h + ':' + m;
  }

  //Al click cambia la conversazione
  $('.convers .conv-box').click(function() {

    //indice del click
    var posizione = $(this).index();

    //tolgo l'active alla conversazione utente(aside) e lo aggiungo a quella cliccata
    $('.convers .activeUt').removeClass('activeUt');
    $(this).addClass('activeUt');

    //metto active nella conversazione (main) corrispondente all'index utente
    $('.main .active').removeClass('active').addClass('none');
    $('.main-conv').eq(posizione).removeClass('none').addClass('active');

    //metto active nell'immagine corrispondente
    $('.conv-box .avatar .activeImg').removeClass('activeImg');
    $('.conv-box .avatar img').eq(posizione).addClass('activeImg');

    //metto active nel nome utente corrispondente
    $('.conv-box .icon-text .activeName').removeClass('activeName');
    $('.conv-box .icon-text h5').eq(posizione).addClass('activeName');

    //prendo il contenuto di immagine e nome utente attivo
    var avatar = $('.conv-box .activeImg').attr('src');
    var name = $('.conv-box h5.activeName').text();

    //inserisco il contenuto nel nav (main)
    $('.container-msg .avatar img').attr('src', avatar);
    $('.container-msg .icon-text h5').text(name);

  });

  //SEARCH BAR FUNCTION
  function search() {
    //prendo valore input
    var input = $('#search').val();
    console.log(input);
    //memorizzo contenitore conversazioni
    var contatti = $('.conv-box');
    //per ogni conversazione controllo
    contatti.each(function(){
      var nome = $(this);
      //cerco nel testo del nome utente
      var cerca = nome.find('.icon-text > h5').text();
      console.log(cerca);
      //Se il testo input è prensente nel nome utente allora mostra se no nascondi
      if (cerca.toLowerCase().includes(input.toLowerCase())) {
        nome.show();
      } else {
        nome.hide();
      }
    })
  }


});

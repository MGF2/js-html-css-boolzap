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
      $(".main-conv").append(clone);
      // 6 step - risposta automatica
      setTimeout(rispostaAutomatica,2000);
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
      $(".main-conv").append(clone);
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

  $('.convers .conv-box').click(function() {

    var posizione = $(this).index();

    $('.convers .activeUt').removeClass('activeUt');
    $(this).addClass('activeUt');

    $('.main .active').removeClass('active').addClass('none');
    $('.main-conv').eq(posizione).removeClass('none').addClass('active');

    $('.conv-box .avatar .activeImg').removeClass('activeImg');
    $('.conv-box .avatar img').eq(posizione).addClass('activeImg');

    $('.conv-box .icon-text .activeName').removeClass('activeName');
    $('.conv-box .icon-text h5').eq(posizione).addClass('activeName');

    var avatar = $('.conv-box .activeImg').attr('src');
    var name = $('.conv-box h5.activeName').text();

    $('.container-msg .avatar img').attr('src', avatar);
    $('.container-msg .icon-text h5').text(name);
    console.log(avatar);
    console.log(name);

  });

});

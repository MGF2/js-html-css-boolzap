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
      // 3 STEP -- Aggiungo una classe
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

  function myTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    document.getElementById("time").innerHTML = h + ":" + m ;
  }

  // function addZero(i) {
  //   if (i < 10) {
  //     i = "0" + i;
  //   }
  //   return i;
  // }

  // function myTime() {
  //   var d = new Date();
  //   var x = document.getElementById("time");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   x.innerHTML = h + ":" + m ;
  // }

});

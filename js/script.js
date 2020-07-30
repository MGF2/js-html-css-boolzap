
$("#content").keydown(function(){
    if (event.which == 13 || event.keyCode == 13) {
        invio();

    }
});

function invio(){
    // 1 step -- prendere il valore
    var valore = $("#content").val();
    // 2 step -- creo clone del template
    //creo clone del template partendo da message che si trova nella classe message
    var clone = $(".template .message").clone();
    // 3 STEP -- Aggiungo una classe
    clone.addClass("sent");
    // 4 step -- inserimento del testo
    clone.find(".cloud-top p").append(valore);
    clone.find(".cloud-time small").append("16.36");
    // 5 step - Inserimento nel DOM
    $(".main-conv").append(clone);
    // 6 step - risposta automatica
    setTimeout(rispostaAutomatica,2000);
    // 7 step -reset input
    valore = $("#content").val('');
}

function rispostaAutomatica(){
    // 1 step - clonare il template
    // message dove parte il clone
    var clone = $(".template .message").clone();
    // 2 step - mettere la classe
    clone.addClass("received");
    // 3 step - aggiungere il Testo
    clone.find(".cloud-top p").append("Ok");
    clone.find(".cloud-time small").append('15.30');
    // 4 step - mettere elemento nel DOM
    $(".main-conv").append(clone);
}

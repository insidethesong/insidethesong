
  // Nascondi l'elenco quando si clicca fuori da esso o dalla barra di ricerca
  document.addEventListener("click", function(event) {
    var elenco = document.getElementById("elenco");
    var barraRicerca = document.getElementById("barra-ricerca");

    if (event.target !== elenco && event.target !== barraRicerca) {
      elenco.style.display = "none";
    }
  });
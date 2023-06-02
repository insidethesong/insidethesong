// Imposta la data di fine del countdown (formato: Anno/Mese/Giorno Ore:Minuti:Secondi)
var countdownDate = new Date("2023/07/30 00:00:00").getTime();

// Aggiorna il conteggio ogni secondo
var countdown = setInterval(function() {

  // Ottieni la data e l'ora corrente
  var now = new Date().getTime();

  // Calcola la differenza tra la data di fine del countdown e la data corrente
  var distance = countdownDate - now;

  // Calcola i giorni, le ore, i minuti e i secondi rimanenti
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Visualizza il countdown nell'elemento con l'id "countdown"
  document.getElementById("countdown").innerHTML = days + " giorni, " + hours + " ore, "
  + minutes + " minuti, " + seconds + " secondi";

  // Se il countdown è terminato, visualizza un messaggio
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown terminato!";
  }
}, 1000);

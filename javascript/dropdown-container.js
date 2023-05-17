// Seleziona l'elemento del menu, il contenitore del dropdown e il suo contenuto
var dropdownContainer = document.querySelector('.dropdown-container');
var dropdownContent = document.querySelector('.dropdown-content');
var timeoutId;

// Aggiungi event listener per aprire il dropdown al passaggio del mouse
dropdownContainer.addEventListener('mouseenter', function() {
  clearTimeout(timeoutId);
  dropdownContent.style.display = 'block';
});

// Aggiungi event listener per chiudere il dropdown all'uscita del mouse
dropdownContainer.addEventListener('mouseleave', function() {
  startTimeout();
});

dropdownContent.addEventListener('mouseenter', function() {
  clearTimeout(timeoutId);
});

dropdownContent.addEventListener('mouseleave', function() {
  startTimeout();
});

// Funzione per avviare il timeout
function startTimeout() {
  timeoutId = setTimeout(function() {
    dropdownContent.style.display = 'none';
  }, 5000); // 5000 millisecondi = 5 secondi
}

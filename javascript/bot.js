function submitComment(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;

  // Verifica che il testo del messaggio non sia vuoto
  if (name.trim() === "" || comment.trim() === "") {
    alert("Inserisci un nome e un commento validi.");
    return;
  }

  // Invia il commento a telegram
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.telegram.org/bot6116598446:AAGm_p9ZzzQfyLSe-eeykqw8Oa3ASTw7Mvo/sendMessage", true); 
  xhr.setRequestHeader("Content-Type", "application/json");

  var message = {
    chat_id: "-1001975768427", 
    text: "Nuovo commento:\n\nNome: " + name + "\nCommento: " + comment
  };

  xhr.send(JSON.stringify(message));

  // Mostra il messaggio di conferma
  var confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";

  // Resettare i campi del modulo
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  
  setTimeout(function() {
    confirmationMessage.style.display = "none";
  }, 3000);

  return false;
}




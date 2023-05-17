function submitComment(event) {
    event.preventDefault(); // Previeni l'invio del form
  
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
  
    // Verifica che il testo del messaggio non sia vuoto
    if (name.trim() === "" || comment.trim() === "") {
      alert("Inserisci un nome e un commento validi.");
      return;
    }
  
    // Invia il commento al tuo gruppo Telegram
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.telegram.org/bot6116598446:AAGm_p9ZzzQfyLSe-eeykqw8Oa3ASTw7Mvo/sendMessage", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    var message = {
      chat_id: "-1001975768427",
      text: "Nuovo commento:\n\nNome: " + name + "\nCommento: " + comment
    };
  
    xhr.send(JSON.stringify(message));
  
    // Pulisci il form dopo l'invio del commento
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
  
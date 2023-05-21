
  // Nascondi l'elenco quando si clicca fuori da esso o dalla barra di ricerca
  document.addEventListener("click", function(event) {
    var elenco = document.getElementById("elenco");
    var barraRicerca = document.getElementById("barra-ricerca");

    if (event.target !== elenco && event.target !== barraRicerca) {
      elenco.style.display = "none";
    }
  });
  window.onload = function() {
    var list = document.getElementById("elenco");
    var items = list.getElementsByTagName("li");
    var itemsArr = [];
    for (var i in items) {
      if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
      }
    }
    itemsArr.sort(function(a, b) {
      return a.textContent.localeCompare(b.textContent);
    });
    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }

  function ricerca() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById("barra-ricerca");
    filter = input.value.toUpperCase();
    ul = document.getElementById("elenco");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
      
    }
    }
  }

  function toggleDropdown() {
	  var dropdown = document.getElementById("myDropdown");
	  if (dropdown.style.display === "block") {
		dropdown.style.display = "none";
	  } else {
		dropdown.style.display = "block";
	  }
	}
  
	function showDropdown() {
	  var dropdown = document.getElementById("myDropdown");
	  dropdown.style.display = "block";
	}

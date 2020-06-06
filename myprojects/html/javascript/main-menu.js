// funkcja pokazywania menu //
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); // po kliknieciu toggle("show") //
  }

  // zamykanie menu //
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
let mainMenuBtn = document.getElementById("mm-btn");
mainMenuBtn.addEventListener('click', redirect);

/*
below ensures that when the button is clicked then the user is taken to the main menu.  
credit: https://www.tutorialspoint.com/online_javascript_editor.php
*/
function redirect() {
  window.location="index.html";
}
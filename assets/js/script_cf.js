let mainMenuBtn = document.getElementById("mm-btn");
mainMenuBtn.addEventListener('click', redirect);

/*
below ensures that when the button is clicked then the user is taken to the main menu.  
credit: https://www.tutorialspoint.com/online_javascript_editor.php
*/
function redirect() {
  window.location = "index.html";
}

/*
below function is from the CI course material 'sending email using EmailJS'.  Links the values in the form to the EmailJS template and variables
and defines 'success' and 'failed' response.
*/
function sendMail(contactForm) {
  emailjs.send("service_00jneif", "template_Pattern-Spiel", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "feedback": contactForm.feedback.value
    })
    .then(
      function (response) {
        alert("Message successfully sent.  We appreciate your feedback!");
      },
      function (error) {
        alert("Message not sent, please try again. if problem persists please check your network settings");
      }
    );
  return false; //blocks a new page from loading.
}
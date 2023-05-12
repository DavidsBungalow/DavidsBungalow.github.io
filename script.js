// Get the buttons
let requestButtons = document.getElementsByClassName("my-button");

// Loop through the buttons and add click event listeners
for (let i = 0; i < requestButtons.length; i++) {
  requestButtons[i].addEventListener("click", function() {
    // Get the parent card-container div
    let cardContainer = this.parentNode.parentNode;

    // Hide the card-container div
    cardContainer.style.display = "none";

    // Create the form element
    let form = document.createElement("form");
    form.classList.add("request-form");

    // Create input fields for name, phone number, email, and message
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Name");
    form.appendChild(nameInput);

    let phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "text");
    phoneInput.setAttribute("placeholder", "Phone Number");
    form.appendChild(phoneInput);

    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Email");
    form.appendChild(emailInput);

    let messageInput = document.createElement("textarea");
    messageInput.setAttribute("placeholder", "Message");
    form.appendChild(messageInput);

    // Create submit button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerText = "Submit";
    form.appendChild(submitButton);

    // Create go back button
    let goBackButton = document.createElement("button");
    goBackButton.innerText = "Go Back";
    goBackButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission

      // Show the card-container div
      cardContainer.style.display = "block";

      // Remove the form
      form.remove();
    });
    form.appendChild(goBackButton);

    // Append the form after the card-container div
    cardContainer.parentNode.insertBefore(form, cardContainer.nextSibling);
  });
}



  
  
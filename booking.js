const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stops the default form behavior

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("mail").value.trim();
  const message = document.getElementById("msg").value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please fill out all fields.";
    return;
  }

  const subject = encodeURIComponent("Message from " + name);
  const body = encodeURIComponent(message + "\n\nReply to: " + email);

  formStatus.textContent = "Opening your email app...";
  window.location.href = "mailto:bs18whitmr@gmail.com?subject=" + subject + "&body=" + body;
});

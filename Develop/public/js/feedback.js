let contactform = document.querySelector(".contact-form");
let name = document.getElementById("feedback-name");
let email = document.getElementById("feedback-email");
let text = document.getElementById("feedback-text");
let message = document.getElementById("feedback-message");

contactform.addEventListener("submit", async (e) => {
  e.preventDefault();

  let feedbackData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  if (
    name.value.length == 0 ||
    email.value.length == 0 ||
    subject.value.length == 0 ||
    message.value.length == 0
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter all fields",
      footer: '<a href="">Why do I have this issue?</a>',
      timer: 150000,
    });
    return;
  }

  const response = await fetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify(feedbackData),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  const data = await response.json();
  console.log(data);

  if (response.ok) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "your request has been submitted",
      showConfirmButton: true,
      timer: 150000,
    });
    document.location.replace("/");
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
      timer: 150000,
    });
    console.log(response);
    document.location.replace("/feedback");
  }

});

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (!email && !password) {
    Swal.fire("Please enter e-mail and password");
  } else if (email && !password) {
    Swal.fire("Please enter  password");
  } else if (!email && password) {
    Swal.fire("Please enter  e-mail");
  }
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      document.location.replace("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are logged in",
        showConfirmButton: true,
        timer: 150000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
        timer: 150000,
      });
      console.log(response);
      document.location.replace("/register");
    }
  }
};
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

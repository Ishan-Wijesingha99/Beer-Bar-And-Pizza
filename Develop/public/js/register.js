const registerForm = document.querySelector(".login-card");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#register-email").value.trim();
  const name = document.querySelector("#register-name").value.trim();
  const address = document.querySelector("#register-address").value.trim();
  const mobile = document.querySelector("#register-mobile").value.trim();
  const password = document.querySelector("#register-password").value;
  const repeatPassword = document.querySelector("#repeatPassword").value;
  if (password === repeatPassword) {
    const response = await fetch("/register", {
      method: "POST",
      body: JSON.stringify({ email, name, mobile, address, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      Swal.fire("User successfully registered");
      document.location.replace("/login");
    } else {
      Swal.fire("Failed to log in", "please register");
    }
  } else Swal.fire("Passwords do not match, please reenter again");
});

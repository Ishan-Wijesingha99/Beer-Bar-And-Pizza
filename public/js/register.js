const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const name = document.querySelector("#name").value.trim();
  const address = document.querySelector("#address").value.trim();
  const mobile = document.querySelector("#mobile").value.trim();
  const password = document.querySelector("#password").value;
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

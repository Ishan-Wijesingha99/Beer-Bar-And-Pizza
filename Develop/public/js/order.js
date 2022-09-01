const guest = document.querySelector("#guest");
const login = document.querySelector("#login");
const register = document.querySelector("#register");

guest.addEventListener('click',async()=>
{
const response = await fetch("/pizza")

  if (response.ok) {
    document.location.replace("/pizza");
  }
}
);

login.addEventListener('click',async()=>
{
const response = await fetch("/login")

  if (response.ok) {
    document.location.replace("/login");
  }
}
);

register.addEventListener('click',async()=>
{
const response = await fetch("/register")

  if (response.ok) {
    document.location.replace("/register");
  }
}
);

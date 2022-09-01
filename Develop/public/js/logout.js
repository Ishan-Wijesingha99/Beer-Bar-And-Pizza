const logout = async () => {
  alert("LINE1");
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  alert("LINE7");

  if (response.ok) {
    alert("LINE8");
    document.location.replace("/login");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);

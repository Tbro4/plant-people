const signupFormHandler = async (event) => {
  event.preventDefault();

  console.log("Signup button clicked");

  const username = document.querySelector("#inputUsername").value.trim();
  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();
  const fact = document.querySelector("#inputFact").value.trim();

  if (username && email && password && fact) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password, fact }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/members");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

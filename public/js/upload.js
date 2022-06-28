// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   console.log("LOGIN button clicked");

//   const email = document.querySelector("#inputEmail").value.trim();
//   const password = document.querySelector("#inputPassword").value.trim();

//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/members");
//     } else {
//       alert("Failed to log in.");
//     }
//   }
// };

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

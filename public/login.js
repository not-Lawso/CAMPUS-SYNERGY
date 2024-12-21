document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");
  
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        window.location.href = "admin-dashboard.html"; // Redirect to admin dashboard
      } else {
        messageElement.style.color = "red";
        messageElement.textContent = result.message;
      }
    } catch (error) {
      console.error("Error:", error);
      messageElement.style.color = "red";
      messageElement.textContent = "An error occurred. Please try again.";
    }
  });
  
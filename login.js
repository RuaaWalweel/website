document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token); // Store authentication token
        window.location.href = "dashboard.html"; // Redirect to the team-only page
    } else {
        document.getElementById("error").textContent = data.message;
    }
});
if (!localStorage.getItem("token")) {
    window.location.href = "login.html";
}

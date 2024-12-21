async function fetchPendingUsers() {
    const response = await fetch("http://localhost:5000/api/users/pending");
    const pendingUsers = await response.json();
  
    const pendingUsersDiv = document.getElementById("pendingUsers");
    pendingUsersDiv.innerHTML = "";
  
    pendingUsers.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <p>${user.username} (${user.email})</p>
        <button onclick="approveUser('${user._id}')">Approve</button>
        <button onclick="rejectUser('${user._id}')">Reject</button>
      `;
      pendingUsersDiv.appendChild(userDiv);
    });
  }
  
  async function approveUser(userId) {
    await fetch(`http://localhost:5000/api/users/approve/${userId}`, { method: "POST" });
    fetchPendingUsers();
  }
  
  async function rejectUser(userId) {
    await fetch(`http://localhost:5000/api/users/reject/${userId}`, { method: "DELETE" });
    fetchPendingUsers();
  }
  
  fetchPendingUsers();
  
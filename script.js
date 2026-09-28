// Loads user data from data.json and renders it into the grid as cards.

async function loadUsers() {
  const grid = document.getElementById("userGrid");

  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error(`Failed to load data.json: ${response.status}`);
    }

    const users = await response.json();
    renderUsers(users, grid);
  } catch (error) {
    grid.innerHTML = `<p>Could not load user data. If you opened this file directly in a browser, run it through a local server instead (e.g. VS Code "Live Server").</p>`;
    console.error(error);
  }
}

function renderUsers(users, grid) {
  grid.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = user.avatar;
    avatar.alt = `${user.first_name} ${user.last_name}`;

    const info = document.createElement("div");
    info.className = "user-info";

    const name = document.createElement("div");
    name.className = "user-name";
    name.textContent = `${user.first_name} ${user.last_name}`;

    const email = document.createElement("div");
    email.className = "user-email";
    email.textContent = user.email;

    info.appendChild(name);
    info.appendChild(email);
    card.appendChild(avatar);
    card.appendChild(info);
    grid.appendChild(card);
  });
}

loadUsers();

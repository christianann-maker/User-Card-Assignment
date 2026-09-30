// Loads user data from data.json and renders it into the grid as cards.
// Falls back to an embedded copy of the same data if fetch() is blocked
// (this happens when the page is opened directly as a file:// URL instead
// of through a local server), so the app still works either way.

const FALLBACK_USERS = [
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
  }
];

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
    // fetch() failed, most likely because the page was opened directly
    // (file://) instead of through a local server. Use the embedded copy
    // of data.json instead so the app still renders correctly.
    console.warn("Could not fetch data.json, using embedded fallback data.", error);
    renderUsers(FALLBACK_USERS, grid);
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

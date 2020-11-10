/* 
    Challenge
    
    Using the body tag as a Flexbox container
        re-create the provided layout
    
    Hint: The Header and Footer are each 10% 
        of the container's height
*/

async function getUsers() {
  let response = await fetch("users.json");
  let users = await response.json();
  return users;
}

function getUserDiv(user) {
  return `<div class="my-online-user">
        <div class="user-username">${user.username}</div>
        <div class="user-online"></div>
    </div>`;
}

getUsers().then((users) => {
  let sampleUser = users[0];

  document.body.innerHTML = `
    <div class="header">Header</div>
    <div class="my-online-users">
        ${users.map((user) => getUserDiv(user)).join("")}
    </div>
    <div class="main-content">Main Content</div>
    <div class="footer">Footer</div>
    `;
});

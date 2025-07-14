
const adminBtn = document.getElementById('admin-login');
let adminTapCount = 0;

document.querySelector('.welcome-title').addEventListener('click', () => {
  adminTapCount++;
  if (adminTapCount >= 3) {
    const pass = prompt("Enter Admin Password");
    if (pass === "MAHINMESSADMIN99") {
      alert("Admin mode activated!");
    } else {
      alert("Wrong Password");
    }
    adminTapCount = 0;
  }
});

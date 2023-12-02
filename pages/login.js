function login() {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      let email = document.getElementById("lemail").value;
      let password = document.getElementById("lpsw").value;
      let user = JSON.parse(localStorage.getItem(email));
      if (user && user.password === password) {
        localStorage.setItem("loggedInUserEmail", email);
        window.location.href = "./bus.html";
      } else {
        alert("Invalid email or password");
      }
    });
  }
  
  window.onload = function () {
    let loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    let user = JSON.parse(localStorage.getItem(loggedInUserEmail));
    if (user) {
      document.getElementById("userName").setAttribute("href", "#");
      document.getElementById("userName").innerHTML = `${user.fname} <a href= "./loginPage.html">Logout</a>`;
    }
  };



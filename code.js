let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass = document.getElementById("psw");
let userName;
function registration() {
  if (localStorage) {
    document.getElementById("regForm").addEventListener("submit", function (e) {
      e.preventDefault();
      if (regCheck()) {
        let user = {
          fname: fname.value,
          lname: lname.value,
          email: email.value, 
          password: pass.value,
        };
        // let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(user), 'badboy').toString();
        // localStorage.setItem(user.email, encryptedData);
        // let bytes = CryptoJS.AES.decrypt(encryptedData, 'badboy');
        // let data = bytes.toString(CryptoJS.enc.Utf8);

        localStorage.setItem(user.email, JSON.stringify(user));
        window.location.href = "./pages/login.html";
        window.alert("You have been registered Successfully!");
      }
    });
  }
}

// let isLogin = false;
// function login() {
//   document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     let email = document.getElementById("lemail").value;
//     let password = document.getElementById("lpsw").value;
//     let user = JSON.parse(localStorage.getItem(email));
//     if (user && user.password === password) {
//       isLogin = true;
//       console.log("Login successful!");
//       localStorage.setItem("userName", user.fname);
//       window.location.href = "./bus.html";
//     } else {
//       console.log("Invalid email or password");
//     }
//   });
// }

// window.onload = function () {
//   let userName = localStorage.getItem("userName");
//   if (userName) {
//     document.getElementById("userName").setAttribute("href", "#");
//     document.getElementById(
//       "userName"
//     ).innerHTML = `${userName} <a href= "./login.html">Logout</a>`;
//   }
// };

//Clear form function
// function clearForm() {
//   let formData = document.querySelectorAll("input");
//   for (let i = 0; i < formData.length; i++) {
//     formData[i].value = "";
//   }
// }

function regCheck() {
  // First and Last Name Validation
  let fnRegex = /^[a-zA-Z]{4,12}$/;
  if (!fnRegex.test(fname.value)) {
    alert("Please enter a valid First name");
    return false;
  }
  let flRegex = /^[a-zA-Z]{4,12}$/;
  if (!flRegex.test(lname.value)) {
    alert("Please enter a valid Last name");
    return false;
  }
  // Email validation
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    return false;
  }
  // Check if email already exists
  if (localStorage.getItem(email.value)) {
    alert("There is an existing account with this email.");
    return false;
  }
  // Password validation
  let passwordRegex =
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(pass.value)) {
    alert(
      "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
    );
    return false;
  }
  return true;
}


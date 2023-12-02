let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass = document.getElementById("psw");
let userName;
let singUpForm = document.getElementById("regForm");

singUpForm.addEventListener('submit', function(e){
  e.preventDefault();
  registration();
})


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
        window.location.href = "./pages/loginPage.html";
      }
    });
  }
}

function regCheck() {
  let fnamecheck = /^[A-Za-z. ]{3,20}$/;
  let lnamecheck = /^[A-Za-z. ]{3,20}$/;
  let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  let pswcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;
  
  if(fname.value.trim() == "" && lname.value.trim() == "" && email.value.trim() == "" && pass.value == "")
  {
    document.getElementById('fnameerror').innerHTML = "**Should not contain digits, special characters and spaces";
    document.getElementById('lnameerror').innerHTML = "**Should not contain digits and special characters";
    document.getElementById('emailerror').innerHTML = "**Email-id is invalid";
    document.getElementById('passerror').innerHTML = "**Should contain capital letter digits and special characters";
    let inputs = document.querySelectorAll('input');
    for(let i = 0; inputs.length-1; i++){
      inputs[i].className = "errClass";
    }
    
  }

  existingEmail = localStorage.getItem(email.value);

  if(email.value != existingEmail["email"]) {
    document.getElementById('emailerror').innerHTML = "";
    email.className = "";
  }
  else
  {
    document.getElementById('emailerror').innerHTML = "*Email Already Exists";
    email.className = "errClass";
    return false;
  }

  if (fnamecheck.test(fname.value)) {
    document.getElementById('fnameerror').innerHTML = "";
    fname.className = "";
  } else {
    fname.className = "errClass";
    document.getElementById('fnameerror').innerHTML = "**Should not contain digits, special characters and spaces";    
    return false;
  }
  if (lnamecheck.test(lname.value)) {
    document.getElementById('lnameerror').innerHTML = "";
    lname.className = "";
  } else {
    document.getElementById('lnameerror').innerHTML = "*Should not contain digits and special characters";
    lname.className = "errClass";
    return false;
  }
  if (emailcheck.test(email.value)) {
    document.getElementById('emailerror').innerHTML = "";
    email.className = "";
  } else {
    document.getElementById('emailerror').innerHTML = "*Email-id is invalid";
    email.className = "errClass";
    return false;
  }
  if (pswcheck.test(pass.value)) {
    document.getElementById('passerror').innerHTML = "";
    pass.className = "";
  } else {
    document.getElementById('passerror').innerHTML = "*Should contain capital letter digits and special characters";
    pass.className = "errClass";
    return false;
  }

  return true;
}


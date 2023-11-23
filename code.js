let fname= document.getElementById('fname');
let lname= document.getElementById('lname');
let email= document.getElementById('email');
let pass= document.getElementById('psw');
function registration() {
    if (localStorage) {        
        document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();

            if (localStorage.getItem(email.value)) {
              alert('There is an existing account with this email.');
              return;
          }

            if (!fname.value || !lname.value || !email.value || !pass.value) {
              alert('All fields are required.');
              return;
          }

          // Email validation
          let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(email.value)) {
              alert('Please enter a valid email address.');
              return;
          }

          // Password validation
          let passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
          if (!passwordRegex.test(pass.value)) {
              alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
              return;
          }

            let user = {
              fname: fname.value,
              lname: lname.value,
              email: email.value,
              password: pass.value
            };            
            localStorage.setItem(user.email, JSON.stringify(user));            
            clearForm();
            window.location.href = "./pages/login.html";
            window.alert("You have been registered Successfully!")
          }); 
    }  
}

let isLogin = false;
function login(){
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();        
        let email = document.getElementById('lemail').value;
        let password = document.getElementById('lpsw').value;        
        let user = JSON.parse(localStorage.getItem(email));        
        if (user && user.password === password) {
          isLogin = true;
          console.log('Login successful!');
          window.location.href = "./bus.html";
          document.getElementById("userName").innerHTML = user.fname;
        } else {           
          console.log('Invalid email or password');         
        }
      });
}
//Clear form function 
function clearForm(){
  let formData = document.querySelectorAll('input');
  for(let i = 0; i<formData.length; i++){
    formData[i].value = "";
  }
  
}

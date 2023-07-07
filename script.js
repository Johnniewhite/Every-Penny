import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

  

const firebaseConfig = {

apiKey: "AIzaSyA2uKnF_QW7c8b5I8fdX1zzcKGVn-Lo6yc",

authDomain: "everypenny-a7b43.firebaseapp.com",

projectId: "everypenny-a7b43",

storageBucket: "everypenny-a7b43.appspot.com",

messagingSenderId: "1042032186383",

appId: "1:1042032186383:web:2cde7e360465e0e63cff7a",

measurementId: "G-93X267ZXWS"

};

  

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

  
  

const submitButton = document.getElementById("submit");

const signupButton = document.getElementById("sign-up");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const main = document.getElementById("main");

const createacct = document.getElementById("create-acct")

  

const signupEmailIn = document.getElementById("email-signup");

  

const signupPasswordIn = document.getElementById("password-signup");

  

const createacctbtn = document.getElementById("create-acct-btn");

  

const returnBtn = document.getElementById("return-btn");

  

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

  

createacctbtn.addEventListener("click", function() {

var isVerified = true;

  

signupEmail = signupEmailIn.value;

signupPassword = signupPasswordIn.value;

if(signupEmail == null || signupPassword == null) {

window.alert("Please fill out all required fields.");

isVerified = false;

}

if(isVerified) {

createUserWithEmailAndPassword(auth, signupEmail, signupPassword)

.then((userCredential) => {

// Signed in

const user = userCredential.user;

// ...

window.alert("Success! Account created.");

})

.catch((error) => {

const errorCode = error.code;

const errorMessage = error.message;

// ..

window.alert("Error occurred. Try again.");

});

}

});

  

submitButton.addEventListener("click", function() {

email = emailInput.value;

console.log(email);

password = passwordInput.value;

console.log(password);

  

signInWithEmailAndPassword(auth, email, password)

.then((userCredential) => {

// Signed in

const user = userCredential.user;

console.log("Success! Welcome back!");

window.alert("Success! Welcome back!");

// ...

})

.catch((error) => {

const errorCode = error.code;

const errorMessage = error.message;

console.log("Error occurred. Try again.");

window.alert("Error occurred. Try again.");

});

});

  

signupButton.addEventListener("click", function() {

main.style.display = "none";

createacct.style.display = "block";

});

  

returnBtn.addEventListener("click", function() {

main.style.display = "block";

createacct.style.display = "none";

});

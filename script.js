import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase,ref, set, onValue, } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
  

const firebaseConfig = {

apiKey: "AIzaSyA2uKnF_QW7c8b5I8fdX1zzcKGVn-Lo6yc",

authDomain: "everypenny-a7b43.firebaseapp.com",

projectId: "everypenny-a7b43",

storageBucket: "everypenny-a7b43.appspot.com",

messagingSenderId: "1042032186383",

appId: "1:1042032186383:web:2cde7e360465e0e63cff7a",

measurementId: "G-93X267ZXWS",
databaseURL: "https://everypenny-a7b43-default-rtdb.firebaseio.com/"

};

  

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

const database = getDatabase(app);
  
  

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

const logoutButton = document.getElementById("logoutBtn");



//   The form Collection
const titleOfItem = document.getElementById("title");
const descriptionOfItem = document.getElementById("description")
const priceOfItem = document.getElementById("price");
const forWhoItem = document.getElementById("dropdown")
const addItem = document.getElementById("addButton")



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
// const Name = window.prompt("What is your Full Name?")
window.location.replace("./real_dash.html")

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

localStorage.setItem('email', email);

window.location.replace("./real_dash.html")

// ...
const storerEmail = localStorage.setItem('email', email)
console.log(storerEmail)
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

// SAVING THE ENTRY INTO THE DATABASE

function saveFormDataToDatabase() {
    const title = titleOfItem.value;
    const description = descriptionOfItem.value;
    const price = priceOfItem.value;
    const forWho = forWhoItem.value;
    
    // Create a new reference to a child node in the database
    const newItemRef = ref(database, 'items').push();
    
    // Set the data for the new item
    set(newItemRef, {
      title: title,
      description: description,
      price: price,
      forWho: forWho
    })
    .then(() => {
      // Data saved successfully
      console.log('Form data saved to database!');
      window.alert("Expense Added")
      
      // Clear the form inputs after saving
      titleOfItem.value = '';
      descriptionOfItem.value = '';
      priceOfItem.value = '';
      forWhoItem.value = 'Me';
    })
    .catch((error) => {
      // An error occurred while saving the data
      console.error('Error saving form data:', error);
      window.alert("I could not add your expense oo")
    });
  }
  
  // Add an event listener to the "Add" button
  addItem.addEventListener('click', saveFormDataToDatabase);
  
import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { database } from "./script.js"; // Import the database reference from your firebaseConfig file

export function saveFormDataToDatabase(title, description, price, forWho) {
  const newItemRef = ref(database, 'items').push();

  set(newItemRef, {
    title: title,
    description: description,
    price: price,
    forWho: forWho
  })
    .then(() => {
      console.log('Form data saved to database!');
      window.alert("Expense Added");
    })
    .catch((error) => {
      console.error('Error saving form data:', error);
      window.alert("Failed to add expense");
    });
}

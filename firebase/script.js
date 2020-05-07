//This is specific to my firebase database, you'll need to put in your own information
var firebaseConfig = {
  apiKey: "AIzaSyAeJvHNTuQD0QNcc1Wh7Owwo96BcXYWQRY",
  authDomain: "webdev2020-706fb.firebaseapp.com",
  databaseURL: "https://webdev2020-706fb.firebaseio.com",
  projectId: "webdev2020-706fb",
  storageBucket: "webdev2020-706fb.appspot.com",
  messagingSenderId: "56688177695",
  appId: "1:56688177695:web:75c1b021fb6d15c1f31b2a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Prep the database object
var database = firebase.database();

//Gets information from the page and sends it to the database
document.getElementById("submit").addEventListener("click", function() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  writeUserData(id, name, email);
});

//Writes information to the database
function writeUserData(userId, name, email) {
  database.ref('users/' + userId).set({
    username: name,
    email: email
  });
}







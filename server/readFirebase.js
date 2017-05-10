var firebase = require("firebase");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsY0GbJxuJpkRiLxw1fDRQUl29X1B74cM",
    authDomain: "websockeio.firebaseapp.com",
    databaseURL: "https://websockeio.firebaseio.com",
    projectId: "websockeio",
    storageBucket: "websockeio.appspot.com",
    messagingSenderId: "74796311773"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


var starCountRef = firebase.database().ref('users/' + '001');
starCountRef.on('value', function(snapshot) {
  // updateStarCount(postElement, snapshot.val());
  console.log(snapshot.val());
});
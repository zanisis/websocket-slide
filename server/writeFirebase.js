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

writeUserData('001', 'Zaniburn', 'zonisis@gmail.com', 'http://www.shabaviz.net/files/staticPages/4_night_mahan/terrorist_man_silhouette_with_bonnet_mask_318_49561.jpg')

 function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });

  console.log('firebase save data');
}




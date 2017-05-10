// var firebase = require("firebase");

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


function writeUserData(slideId, slide) {
  firebase.database().ref('slide/' + slideId).set({
    index_slide: slide
  });

  console.log('firebase save data');
}

var app = new Vue({
  el: '#app',
  data:{
    index_slide : 0,
    index : ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']
  },
  methods:{
    nextslide(){
      var data = this.index.length
      if(this.index_slide >= data - 1){
        this.index_slide = data - 1
      } else {
        this.index_slide += 1
      }
      writeUserData('001', this.index_slide)
      // console.log(this.index_slide);
    },
    previousslide(){
      if(this.index_slide > 0){
        this.index_slide -= 1
      } else {
        this.index_slide = 0
      }
      writeUserData('001', this.index_slide)
      console.log(this.index_slide);
    }
  },
  created: function(){
    writeUserData('001', this.index_slide)
    // console.log('created', this.index_slide);
  }
})


var starCountRef = firebase.database().ref('slide/' + '001');
starCountRef.on('value', function(snapshot) {
  app.index_slide = snapshot.val().index_slide
  // console.log('learn', snapshot.val().index_slide);
  console.log('vue', app.index_slide);
});
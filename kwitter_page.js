const firebaseConfig = {
    apiKey: "AIzaSyAuQIUWiugDseabOfRx71ouFZega7U6ghA",
    authDomain: "kwitter-94584.firebaseapp.com",
    databaseURL: "https://kwitter-94584-default-rtdb.firebaseio.com",
    projectId: "kwitter-94584",
    storageBucket: "kwitter-94584.appspot.com",
    messagingSenderId: "904179630008",
    appId: "1:904179630008:web:0f085d5c9fb96b3095194d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
 
function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("message").value="";

}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
    //Start code

    //End code
 } }); }); }
  getData();
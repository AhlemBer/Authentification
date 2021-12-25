var database = [];


//signup
var userNameInput = document.getElementById("signup-user-name")
var passwordInput = document.getElementById("signup-password")
var signInBtn = document.getElementById("signup-btn")

//LOGIN

var LOGuserNameInput = document.getElementById("login-user-name");
var LOGpasswordInput = document.getElementById("login-password");
var loginBTN = document.getElementById("login-btn");

function signup(){
    var userInfo ={
        username : userNameInput.value ,
        password : passwordInput.value
    }
   database.push(userInfo);
}

signInBtn.addEventListener("click", signup)
loginBTN.addEventListener("click", login)


function login(){
   var userInfo = {
     username : LOGuserNameInput.value ,
     password : LOGpasswordInput.value
   };
   var isLimit = false ;

   for(var i=0 ; i<database.length ; i++){
       if(i=== database.length - 1){

           isLimit = true;
       }
       if(database[i].username === userInfo.username){
           if(database[i].password === userInfo.password){
                return alert("*** WELCOME ***")
           }else{
               return alert (" Wrong Password ")
           }
         

       }else if(isLimit === true)
           alert("This username doesnt exist ! please sign up");
       }
   }

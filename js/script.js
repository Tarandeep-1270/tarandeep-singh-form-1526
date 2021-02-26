//Declaring variables that would store references for 3 inputs and a submit button

let sbmt = document.getElementById("submit");
let email = document.getElementById("email");
let fullname = document.getElementById("fullname");
let message = document.getElementById("message");

// Decalaring variable to store regular expression for email

let expression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


// Function starts here

function handleEvent(eve){

       
   
  // Declaring object that will store the form-data
  // Declainge array that will store the errors
  eve.preventDefault();
  let data = {};
  let err = [];
    
  // Checking if fullname is not empty.

  if(fullname.value !== ""){

    // Passing the collected value
    data['fullname'] = fullname.value;
  }
  else{
    // Adding the error message to array
    err.push({fullname : "full name is missing."});
  }

  
  // Checking if email is not empty.
  if(email.value !== ""){
    if(expression.test(email.value)){
      // Passing the collected value
      data['email'] = email.value;
    }
    else{
      // Adding the error message to array
      err.push({email: "Email is Invalid"});
    }
  }
  else{
    // Adding the error message to array
    err.push({email: "Email is missing"});
  }
    


  // Check if message is not empty.
  if(message.value !== ""){
    // Passing the collected value
    data['message'] = message.value;
  }
  else{
    // Give the error message
    err.push({message: "Message is missing"});
  }


  // Checking if there is anything in array errors
  if(err.length > 0){
    // Give the error message
    console.log('ERRORS', err);
  }
  else{
    // Print in console
    console.log('COLLECTED DATA', data);
  }

}

// Register form to click event
sbmt.addEventListener("click", handleEvent);

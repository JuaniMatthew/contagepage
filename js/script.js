

//Linking all the fields to our fields object
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.houseNumber = document.getElementById('houseNumber');
    fields.country = document.getElementById('country');
    fields.password = document.getElementById('password');
    fields.passwordCheck = document.getElementById('passwordCheck');
    fields.newsletter = document.getElementById('newsletter');
    fields.question = document.getElementById('question');
   })

   //Checking that the field is not empty
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   //Checking that the field value is a number for the house number field
   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }

   //Check if a string is an email, We check the string value with the regex expression

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   //check if the password is longer than 5 characters
   function isPasswordValid(password) {
    if (password.length > 5) {
    return true;
    }
    return false
   }

   //This function checks the condition and colors the field red, if there is an error

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
    return isFieldValid;
   }

   //central function for checking the validity of our contact form

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.houseNumber, isNumber);
    valid &= fieldValidation(fields.password, isPasswordValid);
    valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
    valid &= fieldValidation(fields.question, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }

   //password checking if incorrect
   function arePasswordsEqual() {
    if (fields.password.value == fields.passwordCheck.value) {
    field.password.className = 'placeholderRed';
    field.passwordCheck.className = 'placeholderRed';
    return true;
    }
    return false
   }

   //user class constructor to show you can
   class User {
    constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
    this.country = country;
    this.email = email;
    this.newsletter = newsletter;
    this.question = question;
    }
   }

   //Sending the contact form data with JavaScript
   function sendContact(){
       field.gender = getGender();

       if (isValid()) {
           let usr = new User(firstName.value, lastname.value, fields.gender.value, address.value, country.value, email.value, newlestter.checked);

           alert('${usr.firstName} thanks for registering.')
       }

       else {
           alert("there was an error")
       }
   }



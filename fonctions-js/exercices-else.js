"use strict"


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Did parents allow you?');
//   }

// Réecrivez le code ci-dessus en utilisant "?"


function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you ?");
}


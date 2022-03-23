// Declare the variable first_name and assign it with the value of your first name;
// Declare the variable last_name and assign it with the value of your last name;
// Declare the variable email and assign it with the value of your email;
// Declare the variable output;

let first_name, last_name, email;

first_name = 'Oleksii';
last_name = 'Bielov';
email = 'biel0028@algonquinlive.com';

let output = '';

// Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
// Assign output with gotten expression;
output += '"' + 'My name is' + " " + first_name + " " + last_name + '.' + " " + 'You can contact me at' + " " + email + '.' + '";';

// Alert output.
alert(output);

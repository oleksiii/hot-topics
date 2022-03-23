// Declare three variables, a and b and c.
let a, b, c;

// If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
a = 3;
b = 5;

let output = '';
output += 'let a = 3\n';
output += 'let b = 5\n';
output += 'let c = undefined\n';
output += '-----------------\n';
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += '(a += b): ' + (a = (a + b)) + '\n';
output += '(a -= b): ' + (a = (a - b)) + '\n';
output += '(a *= b): ' + (a = (a * b)) + '\n';
output += '(a /= b): ' + (a = (a / b)) + '\n';
output += '(a %= b): ' + (a = (a % b)) + '\n';
output += '(a == b): ' + (a == b) + '\n';
output += '(a != b): ' + (a != b) + '\n';
output += '(a > b): ' + (a > b) + '\n';
output += '(a < b): ' + (a < b) + '\n';
output += '(!a && !c): ' + (!a && !c) + '\n';
output += '(!a || !c): ' + (!a || !c) + '\n';

alert(output);

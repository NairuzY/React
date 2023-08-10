var msg = prompt("enter a msg", "Msg");

for (var i = 1; i < 7; i++) {
  document.write("<h" + i + ">" + msg + "</h" + i + ">");
}

var color = prompt("enter a color", "red");

console.log("%cName:Nairuz", "color:" + color);
console.log("%cemail:blabla@gmail.com", "color:" + color);
console.log("%cphoneNumber:018985", "color:" + color);

function sum() {
  var number = prompt("enter a number", "0");
  var sum = 0;
  while (number != "0") {
    sum += parseInt(number);
    number = prompt("enter a number", "0");
  }
  document.write("<h1>sum is: " + sum + "</h1>");
}

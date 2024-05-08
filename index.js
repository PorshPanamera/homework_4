var RandomThink = prompt(
  "Please,enter what do you want to do(add,sub,mult,div):",
  ""
);
switch (RandomThink) {
  case "add":
    var q = prompt("Enter the first number");
    var w = prompt("Enter the second number");
    var sum = parseInt(q) + parseInt(w);
    alert(q + " + " + w + " = " + sum);
    break;
  case "sub":
    let a = prompt("Enter the first number", "");
    let b = prompt("Enter the second number", "");
    var sum = parseInt(a) - parseInt(b);
    alert(a + " - " + b + " = " + sum);
    break;
  case "mult":
    let x = prompt("Enter the first number", "");
    let y = prompt("Enter the second number", "");
    var sum = parseInt(x) * parseInt(y);
    alert(x + " * " + y + " = " + sum);
    break;
  case "div":
    let c = prompt("Enter the first number", "");
    let d = prompt("Enter the second number", "");
    var sum = parseInt(c) / parseInt(d);
    alert(c + " / " + d + " = " + sum);
    break;
}

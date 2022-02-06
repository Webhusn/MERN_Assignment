
var n1 = prompt("Enter first number:");
var n2 = prompt("Enter second number:");
var n3 = prompt("Enter third number:");
n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);
var min;
if (n1 < n2) {
    min = n1;
} else {
    min = n2;
}
if (min > n3) {
    min = n3;
}
alert(min);
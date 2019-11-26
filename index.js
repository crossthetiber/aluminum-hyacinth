// Get the date and display it
var date = new Date();
document.body.innerHTML = "<h1>The date today is: " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " and function result is: " + add_values(34,123) + "</h1>"; 

function add_values (a, b) {
    return a + b;
}
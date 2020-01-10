// Get the date and display it
var date = new Date();

var myVar = function(a, b) {
    return a - b;
};

// document.body.innerHTML = "<h1>The date today is: "
//             + (date.getMonth() + 1)
//             + "/" + date.getDate() + "/"
//             + date.getFullYear()
//             + " and function result is: "
//             + add_values(34,123)
//             + " and alt value is: "
//             + myVar(5,3) + "</h1>";

// document.body.innerHTML += "<h2 class='big-heading'>"
//     + "This is another heading</h2>";

// document.body.innerHTML += "<h2 class='small-heading'>"
//     + "This is another heading</h2>";

function add_values (a, b) {
    return a + b;
}

const E1 = document.querySelector("#element-one");
const E2 = document.querySelector("#element-two");
// E1.classList.add("hide");
function clickHide() {
    E1.classList.toggle("hide");
}

var clicked = function() { console.log("2 was clicked"); };

E1.onclick = clickHide;
E2.addEventListener("click", clicked, false);
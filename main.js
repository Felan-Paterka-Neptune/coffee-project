"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6 ">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class="d-flex align-items-center"><h3 class="m-1">' + coffee.name + '</h3>';
    html += '<p class="m-1">' + coffee.roast + '</p>';
    html += '</div></div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// SELECT ALL ROASTS FUNCTIONz
function updateCoffees(e) {
    if (document.getElementById("roast-selection").value === "all") {
        tbody.innerHTML = renderCoffees(coffees);
        // console.log("hello world");
    } else {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var selectedRoast = roastSelection.value;
        var filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

// // ADD ITEMS FUNCTION
// function myFunction2() {
//
//     var newArray = document.getElementById("newCoffeeName").value;
//     coffees.push(newArray);
//     // document.getElementById("newCoffeeName").value = "";
//     document.getElementById("demo").innerHTML = coffees;
//
// }
// // var newCoffeeName = document.getElementById('new-coffee-name');
// // var newCoffeeRoast=document.getElementById('newCoffeeRoast');
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function (coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// document.querySelector('#submitNewCoffee').addEventListener('click', function(event) {
//     var inputs = document.querySelectorAll('#newCoffeeName');
//     var roast = document.querySelectorAll('#newCoffeeRoast');
//
//     var newCoffee = {};
//     for (var i = 0; i < inputs.length; i++) {
//         newCoffee[inputs[i].name] = inputs[i].value;
//         inputs[i].value = '';
//
//         newCoffee[roast[i].roast] = roast[i].value;
//         roast[i].value = '';
//     }
//     coffees.push(newCoffee);
//     console.log(coffees);
//     event.preventDefault();
//
// }, false);
//
// function selectAll() {
//     h3 = document.getElementsByTagName("h3");
//     for (i = 0; i < h3.length; i++)
//     {
//         h3[i].selected = "true";
//     }
// }
//
// function newCoff(name, roast) {
//     var newNew = {
//         name: name,
//         roast: roast,
//     }
//     return coffees.push(newNew)
// }
// newCoff()

function myFunction() {
    // Declare variables
    var input, filter, div, h3, i, txtValue;
    input = document.getElementById("search-coffees");
    filter = input.value.toLowerCase();
    div = document.getElementsByClassName("coffee");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < div.length; i++) {
        h3 = div[i].getElementsByTagName("h3")[0];
        if (h3) {
            txtValue = h3.textContent || h3.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
            }
        }
    }
}
myFunction();

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// function createCoffee(newCoffeeName,newCoffeeRoast) {
//     newCoffeeName = document.getElementById("newCoffeeName");
//     newCoffeeRoast = document.getElementById("newCoffeeRoast");
//
//     var newCoffee = {
//         name: newCoffeeName.value,
//         roast: newCoffeeRoast.value
//     }
//     return coffees.push(newCoffee);
// }
var submitButton = document.querySelector("#submitNewCoffee");
submitButton.addEventListener("click", createCoffee);

function createCoffee(newCoffeeName, newCoffeeRoast) {
    var newCoffeeId = '15';
    newCoffeeName = document.getElementById("newCoffeeName");
    newCoffeeRoast = document.getElementById("newCoffeeRoast");
    var newCoffee = {
        id: newCoffeeId.value,
        name: newCoffeeName.value,
        roast: newCoffeeRoast.value
    }
    coffees.push(newCoffee);
    console.log(coffees);
    event.preventDefault();
    tbody.innerHTML = renderCoffees(coffees);
}
//
// var submitButton = document.querySelector("#submitNewCoffee");
// submitButton.addEventListener("click", createCoffee);
// submitButton.addEventListener("click", renderCoffees);

// function createCoffee(newCoffeeName,newCoffeeRoast) {
//     var newCoffee = {
//         name: newCoffeeName.value,
//         roast: newCoffeeRoast.value
//     }
//     return coffees.push(newCoffee);
// }

var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees.reverse());
// submitButton.addEventListener('click', renderCoffees());
roastSelection.addEventListener('click', updateCoffees);
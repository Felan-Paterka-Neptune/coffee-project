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

// SELECT ALL ROASTS FUNCTION
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

var submitButton = document.querySelector("#submitNewCoffee");
submitButton.addEventListener("click", createCoffee);

function createCoffee(newCoffeeName, newCoffeeRoast) {
    newCoffeeName = document.getElementById("newCoffeeName");
    newCoffeeRoast = document.getElementById("newCoffeeRoast");
    var newCoffee = {
        id: coffees.length+1,
        name: newCoffeeName.value,
        roast: newCoffeeRoast.value
    }
    coffees.push(newCoffee);
    localStorage.setItem("coffees", JSON.stringify(coffees));
    event.preventDefault();
    tbody.innerHTML = renderCoffees(coffees);
}

var stored = JSON.parse(localStorage.getItem("coffees"));
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(stored.reverse());
roastSelection.addEventListener('click', updateCoffees);
console.log( 'in JS' );

$( document ).ready( onReady );

// Global
let employees = [];
let monthly = 0;


function onReady(){
    console.log( 'in JQ' );
    $( '#submitButton' ).on( 'click', addEmployee);
    $( '#deleteRow' ).on( 'click', deleteEntry );
}

// Adds employee to employeeArray
function addEmployee(){
    console.log( 'in addEmployee' );
    // takes in input from user ${firstName}; <-----
    let newObject = {
        firstName: $( '#firstName' ).val(),
        lastName: $( '#lastName' ).val(),
        ID: $( '#ID' ).val(),
        title: $( '#title' ).val(),
        annualSalary: $( '#annualSalary' ).val()
    }
    employees.push(newObject);

    console.log(employees);
    // push employee object to DOM
    $( '.body' ).append(`<tr id="row"></tr><td>${newObject.firstName}</td><td>${newObject.lastName}</td><td>${newObject.ID}</td><td>${newObject.title}</td><td>${newObject.annualSalary}</td><td><button id="deleteRow" onclick="deleteEntry(this)">Delete</button></td>`);
    // update DOM
    monthly += Number(((newObject.annualSalary)/12));
    $( '#totalMonthly' ).text(`Total Monthly: ${monthly}`);
    
    if( monthly > 20000){
        $( '#totalMonthly' ).replaceWith(`<h2 class="red" id="totalMonthly">Total Monthly: ${monthly} </h2>`);
        console.log('inmonthly');
    }
}

// Deletes employee from Array and DOM
function deleteEntry(emp){
    console.log( 'in deleteEntry', emp );
    $( emp ).parent().parent().remove();
    // splice array
    //update DOM
}
console.log(monthly);

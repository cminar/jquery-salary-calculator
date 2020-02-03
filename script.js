console.log( 'in JS' );

$( document ).ready( onReady );

// Global
let employees = [];
let monthly = 0;


function onReady(){
    console.log( 'in JQ' );
    $( '#submitButton' ).on( 'click', addEmployee);
    $( '#deleteRow' ).on( 'click', deleteEntry );
    // from Marys $( '#all-employees' ).on('click', deleteEmployee );
}
// event.preventDefault //prevents the page from refreshing if using submit button and <forum> 


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
    // could do
    $( '.body' ).append(`<tr id="row"></tr><td>${newObject.firstName}</td><td>${newObject.lastName}</td><td>${newObject.ID}</td><td>${newObject.title}</td><td>${newObject.annualSalary}</td><td><button id="deleteRow" onclick="deleteEntry(this)">Delete</button></td>`);
    // update DOM
    // could use .empty() to empty
    monthly += Number(((newObject.annualSalary)/12));
    $( '#totalMonthly' ).text(`Total Monthly: ${monthly}`);
    
    if( monthly > 20000){
        $( '#totalMonthly' ).replaceWith(`<h2 class="red" id="totalMonthly">Total Monthly: ${monthly} </h2>`);
        console.log('in monthly');
    }// can do addClass and removeClass to add and remove .red instead of this
}

// Deletes employee from Array and DOM
function deleteEntry(del){
    console.log( 'in deleteEntry', del );
    $( del ).parent().parent().remove();
    // $( del ).closest( 'tr' ).remove(); TO REPLACE DO NO MORE PARENT().PARENT() etc....
    // splice array
    //update DOM
    //let emploeeSalary = $(this).parent().prev().text(); this gets the one previous data
}
console.log(monthly);

console.log( 'in JS' );

$( document ).ready( onReady );

// Global
let employees = [];

function onReady(){
    console.log( 'in JQ' );
    $( '#submitButton' ).on( 'click', addEmployee);
    $( '.delete' ).on( 'click', deleteEntry );
}

// Adds employee to employeeArray
function addEmployee(){
    console.log( 'in addEmployee' );
    // takes in input from user ${firstName}; <-----
    let newObject = {
        firstName: 'firstname',
        lastName: 'lastname',
        ID: 'ID',
        title: 'title',
        annualSalary: 'salray'
    }
    employees.push(newObject);
    console.log(employees);
    // push employee object to DOM
    // update DOM
}

// Deletes employee from Array and DOM
function deleteEntry(){
    console.log( 'in deleteEntry' );
    // splice array
    //update DOM
}


// make table??????
// update DOM
// calculate total and push to DOM
// 
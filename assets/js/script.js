// function to check form validation
function sendContact(){
    // Get the form data
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    // Form validation
    if (fname == "" || lname == "" || email == "" || message == "") {
        alert("Please Fill All the fields!");   // Display an alert box
        return false;
    } else {
       return true;
    }        
};


document.onload(function(){
    alert('Welcome to our website!')
})


// Close modal

function closemodal(){

    document.getElementById('id01').style.display='none';

}


$(document).ready(function() {
    $('.parent').click(function() {
        $('.sub-nav').toggleClass('visible');
    });
});

function validateForm() {
        var fname = document.forms["contact"]["FName"].value;
        var lname = document.forms["contact"]["LName"].value;
        var msg = document.forms["contact"]["Message"].value;
        var checkboxs=document.getElementsByName("problem");
        var okay=false;
        var email = document.getElementById('Email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if (fname == "") {
            alert("First Name textfield must be filled out");
            document.contact.FName.focus() ;
            return false;
        }
        else if (lname == "") {
            alert("Last Name textfield must be filled out");
            document.contact.LName.focus() ;
            return false;
        }
        else if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }
        
        for(var i=0,l=checkboxs.length;i<l;i++)
        {
            if(checkboxs[i].checked)
            {
                okay=true;
                break;
            }
        }
        
        if(!okay) {
            alert("Please check a checkbox"); 
            return false;
        }  
        
        if (msg == "") {
            alert("Message Box must be filled out");
            document.contact.LName.focus() ;
            return false;
        }             
    }
function validateForm(){

    var nm=document.forms["contact"]["name"].value;
    var em=document.forms["contact"]["email"].value;
    var mb=document.forms["contact"]["phone"].value;
    
    if(nm==null||nm=="")
        {
            alert("Please enter your name");
            return false;
        }
    else if(em==null||em=="")
        {
            alert("Please enter your email id");
            return false;
        }
    else if(mb==null||mb=="")
        {
            alert("Please enter your phone number");
            return false;
        }    
    else{
        alert("Form has been submitted. We will contact you.");
    }
}
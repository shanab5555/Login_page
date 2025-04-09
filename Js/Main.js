
function Login_Data(){
    
    var result=document.getElementById("result");
    var Name=document.getElementById("Name").value;
    var Email=document.getElementById("Email").value;
    var Password=document.getElementById("Password").value;
    var Confirm=document.getElementById("Confirm").value;
    
    result.setAttribute("class" , "shanab")

    if( Name=="" && Email=="" && Password=="" && Confirm==""){

        result.innerHTML="Please Enter Data";
        return false;
    }
    else if( Name.length <3 || Name.length >15 ) {

        result.innerHTML="Please Enter Name 3-15 Charcter";
        return false;

    }else if(Email.indexOf("@" , 3)==-1 || Email.lastIndexOf(".com") == -1 ) {

        result.innerHTML="Please valid Email";
        return false;

    }else if(Password.length<8){

        result.innerHTML="Please Enter Password Strong";
        return false;        

    }else if(Confirm!=Password){

        result.innerHTML="Please Enter Confirm Password correct";
        return false;                

    }else{
        return true;
    }

   

}
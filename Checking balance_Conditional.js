var balance = -22;
var checkBalance = true;
var isActive = true;

if(checkBalance===true)
    {
        if(balance > 0 && isActive)
        {
            console.log("Your balance is $" + balance +".");
        }
        else if(!isActive)
        {
            console.log("Your account is no longer active.");
        } else if(balance===0){
            console.log("Your account is empty.");
        } else {
            console.log("Your balance is negative. Please contact bank.");
        } 
        }else {
            console.log("Thank you. Have a nice day!");
   
    
}

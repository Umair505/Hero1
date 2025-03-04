document.getElementById("login-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("Account-NO").value;
        const pin =  document.getElementById("login-pin").value;
        
        if(accountNumber.length === 11)
        {
            if(pin == 1234)
            {
                window.location.href = "main.html"
            }
            else{
                alert("Invalid Pin");
            }
        }
        else{
            alert("Invalid Account Number");
        }
    
    })  
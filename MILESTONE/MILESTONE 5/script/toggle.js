document.getElementById("add").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transaction-section").style.display = "none";

document.getElementById("add-btn").addEventListener("click",
    function(){
        document.getElementById("add").style.display = "block";
        document.getElementById("cashout").style.display = "none";
        document.getElementById("transaction-section").style.display = "none";
    }
)
document.getElementById("cashout-btn").addEventListener("click",
    function(){
        document.getElementById("cashout").style.display = "block";
        document.getElementById("add").style.display = "none";
        document.getElementById("transaction-section").style.display = "none";
    }
)

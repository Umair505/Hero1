document.getElementById("transaction").addEventListener("click",
    function(event){
        event.preventDefault();
        document.getElementById("transaction-section").style.display = "block";
        document.getElementById("cashout").style.display = "none";
        document.getElementById("add").style.display = "none";
    }
)
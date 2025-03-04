document.getElementById("add-money").addEventListener("click",
    function (event){
        event.preventDefault();
        const amount = getInputValue("amount");
        const pin = getInputValue("pin");
        const currentAmount = getInputInnerText("main-balance");
        const account = document.getElementById("bank-account-no").value;
        if(pin === 1234)
        {
            const sum = currentAmount + amount;
            setValue("main-balance", sum);
            
            const container = document.getElementById("transaction-container");
            const p = document.createElement("p");
            p.innerText = `Successfully added Tk. ${amount} from this account no: ${account}`;
            container.appendChild(p);
        }
        else{
            alert("Invalid Pin")
            return;
        }
    })
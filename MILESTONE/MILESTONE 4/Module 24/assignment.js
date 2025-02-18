function cashOut( money ) {
    if(typeof money != 'number')
        return "Invalid"
    else if(money < 0) 
        return "Invalid";

    const cashOut = money * (1.75/100);
    return cashOut;
}

function  validEmail( email ) {
    if(typeof email != 'string')
        return "Invalid"
    
    else if(email[0] === '.' || email[0] === '-' || email[0] === '+' || email[0] === '@' || email[0] === '_' )
        return false;
    else if(email.includes("@") && email.includes(".com") && !email.includes(" "))
        return true
    return false;
}

function  electionResult( votes ) {
    if(!Array.isArray(votes))
        return "Invalid"
    let mango = 0;
    let banana = 0;
    for(const vote of votes) {
        if(vote === 'mango')
            mango++;
        else if(vote === 'banana')
            banana++;
    }
    if(mango === banana)
        return "Draw";
    else if(mango > banana)
        return "Mango";
    else return "Banana"
}

function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !== "object" && typeof f2 !== "object")
        return "Invalid"
    else if(typeof f1.name != "string" || typeof f2.name != "string" || typeof f1.roll != "number" || typeof f2.roll != "number" || typeof f1.bestFriend != "number" || typeof f2.bestFriend != "number")
        return "Invalid";
    else if(f1.roll === f2.bestFriend && f2.roll === f1.bestFriend)
        return true;
    else return false;
}


function  calculateWatchTime( times ) {
    if(!Array.isArray(times))
        return "Invalid"
    let sum = 0;
    for(const second of times){
        if(typeof second != "number")
            return "Invalid";
        sum += second;
    }
    const hour = parseInt(sum / 3600);
    const minute = parseInt((sum % 3600) / 60);
    const sec = sum % 60;
    return {'hour': hour, 'minute': minute, 'second': sec}
}




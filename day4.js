function isValidPass(pass, triple=false){
    let tmp = String(pass);
    let doubleDigits = false;
    for (let j = 0; j<6; j++){
        if (tmp[j] > tmp[j+1]){
            return 0
        }
        if (tmp[j-1] != tmp[j] && tmp[j] == tmp[j+1] && tmp[j+1] != tmp[j+2]){
            doubleDigits = true
        }
    }
    if (!doubleDigits) {
        return 0;
    }
    return 1;
}

function getNumValidPasses(){
    numValid = 0;
    for (let i = 254032; i<= 789860; i++){
        numValid += isValidPass(i)
    }
    return numValid
}


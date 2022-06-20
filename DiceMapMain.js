function getRandomNo(){
    return Math.floor(Math.random()*10)%6+1;
}

let diceMap = new Map();

while(true){
    let diceNo = getRandomNo();
    if(diceMap.get(diceNo)!=null){
        let value = diceMap.get(diceNo);
            if(value==20){
                break;
            }
        diceMap.set(diceNo,++value);
    } else {
        diceMap.set(diceNo,1);
    }
}

for(let [key,value] of diceMap) {
    console.log("Dice Key :"+key+"\t Value :"+value);
}

console.log(""+[...diceMap.entries()].reduce((a,e)=>e[1]>a[1]?e:a));
console.log(""+[...diceMap.entries()].reduce((a,e)=>e[1]<a[1]?e:a));
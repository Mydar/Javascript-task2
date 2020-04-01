let data = [
    {
        Principal: 2500,
        time: 1.8
    },
    {
        Principal: 1000,
        time: 5
    },
    {
        Principal: 3000,
        time: 1
    },
    {
        Principal: 2000,
        time: 3
    }
];


function interestCalculator(arr) {

    let initRate;
    let interestData = [];

    for(let i = 0; i < arr.length; i++) {
        
        let initPrincipal = arr[i].Principal;
        let initTime = arr[i].time;
        
        
        if (initPrincipal >= 2500 && initTime == 2) {
            initRate = 3;
        } else if (initPrincipal >= 2500 && initTime >= 3) {
            initRate = 4;
        } else if (initPrincipal < 2500 && initTime <= 1) {
            initRate = 2;
        } else {
            initRate = 1;
        }

        let initInterest = (initPrincipal * initRate * initTime)/100;
        
        let obj = {
            principal: initPrincipal,
            rate: initRate,
            time: initTime,
            interest: initInterest
        }
        

        interestData.push(obj);
        
    }

    console.log(interestData);
    return interestData;
}

interestCalculator(data);
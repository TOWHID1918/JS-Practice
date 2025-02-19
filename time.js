function  calculateWatchTime( times ) {
  

    let totalCalculate=0;
    for(let i=0;i<times.length;i++){
        if (typeof times[i] !== 'number') {
            return "Invalid";
        }
        totalCalculate=totalCalculate+times[i];

    }

    let hours = parseInt(totalCalculate / 3600);
    let minutes = parseInt((totalCalculate % 3600) / 60);
    let seconds = parseInt(totalCalculate % 60);
    

    return {
        hours,
        minutes,
        seconds
    }
  

}
console.log(calculateWatchTime([100, 99, 119, 300]));
console.log(calculateWatchTime([1000, 2000, 725]));
console.log(calculateWatchTime([100, 3800]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([5600]));
console.log(calculateWatchTime([100, 3800, "90" ]));







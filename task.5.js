//random numbers
//input range of numbers
//input how many numbers to pick
//how do they are spread in the range


//a = min value 
//b = max value
//c = how many picks
//min value is 1
function randomInRange(a,b,c){
    var random = []
    while (c > 0){
    test = Math.floor(Math.random() * b) + a ;
    random.push(test)
    c --;
    }
    return random
}
console.log(randomInRange(1,5,5));
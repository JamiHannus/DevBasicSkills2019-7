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
    test = (Math.random() * b) + a;
    testRounded = Math.round(test *10) / 10 ;
    random.push(testRounded)
    c --;
    }
    return random
}


console.log(randomInRange(1,5,5));
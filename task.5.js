//random numbers
//input range of numbers
//input how many numbers to pick
//how do they are spread in the range


//a = min value 
//b = max value
//c = how many picks
//min value is 1
function randomInRange(a,b,c){
    var random = [0]
    while (c > 0){
    test = (Math.random() * b) + a;
    testRounded = Math.round(test *10) / 10 ;
    random.push(testRounded)
    c --;
    }
    return random;
}

function Classify(){
var num1 ;
var naturalNumber       = 0 ;
var wholeNumber         = 0 ;
var integer             = 0 ;
var rationalNumber      = 0 ;
var irrationalNumbers   = 0 ;
var realNumber          = 0 ;
var a =1; //document.querySelector("#ranValMin").value;
var b =3; //document.querySelector("#ranValMax").value;
var c =10; //document.querySelector("#ranPicks").value;
var set
set = randomInRange(a,b,c) ;
i = set.length

    while ( i > 0 ){
    num1= +set.pop.value;

        if(num1 !== 0){
            naturalNumber ++;
        }
        if (num1 % 1 === 0){
            wholeNumber ++;
            integer ++;
            }
        else{
            rationalNumber ++ ;
            }
        realNumber ++ ;
        i--;
    }
console.log(naturalNumber);
console.log(wholeNumber);
console.log(integer);
console.log(rationalNumber);
console.log(irrationalNumbers);
console.log(realNumber)
return set;
}
console.log(Classify())

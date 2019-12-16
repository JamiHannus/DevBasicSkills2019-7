//By Abdeljalil Misbah and  jami hannus
//tool for combinations and permutations
//You pick one or the othe
//2 input field for numbers 
//pick combinatios or permutations
//repotition allowed or not?


//permutation
//P(n, r) = n!/(n-r)!
// n objects number
// r how many to pick

//combinations
//C(n,r)= n!/r!(n-r)!



function repotionAllowed() {
    var comb_box_state = document.querySelector('input[value="combination"]');


    if (comb_box_state.cheked) {
        document.getElementById("repotition").disabled = true;
    } else {
        document.getElementById("repotition").disabled = false;
    }
}

function product_Range(a,b){
    var prd = a , i= a ;
    while( i++ < b) {
        prd*=i;
    }
    return prd;
}

function combinations(n,r){
    if (n==r)
    { 
        return 1;
    }
    else{
        r=(r<n-r) ? n-r : r ;
        return product_Range(r+1,n)/product_Range(1,n-r);
    }
}

function factorial(f){
    return( f != 1) ? f * factorial(f -1) : 1 ;
}
function permutationWithRep(n,r){
    if (n == 1){
        return 1;
    }
    else{
        return Math.pow(n,r);
    }
}
function permutation(n,r){
    x = n-r;
// x is the divider. so n!/!x
    if (n == r){
    return 1;
    }
    else{
    return factorial(n) / factorial(x);
    }
}
console.log(combinations(5,2))
console.log(factorial(5))
console.log(permutation(5,2));
console.log(permutationWithRep(5,4));
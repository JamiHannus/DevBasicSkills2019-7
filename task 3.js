//By Abdeljalil Misbah and  jami hannus
//tool for combinations and permutations
//You pick one or the othe
//2 input field for numbers 
//pick combinatios or permutations
//repotition allowed or not?


//permutation
//P(m , n) = m!/(m-n)!
// m objects number
// n how many to pick

//combinations
//C(m,n)= m!/n!(m-n)!



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
console.log(combinations(6,2))
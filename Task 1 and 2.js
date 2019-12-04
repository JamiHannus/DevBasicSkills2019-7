// Creating a system conversion tool
// Jami Hannus 02.12.2019


function dectoBin(){
    number = +document.getElementById("number_from").value;
    var converted_number = number.toString(2);
    document.getElementById("myOut").innerHTML = converted_number;
}
function dectoHex(){

    number = +document.getElementById("number_from_hex").value;
    var converted_number = number.toString(16);
    document.getElementById("myOutHex").innerHTML = converted_number;
}
function dectoOcta(){

    number = +document.getElementById("number_from_octa").value;
    var converted_number = number.toString(8);
    document.getElementById("myOutOcta").innerHTML = converted_number;
}
function dectoBinMath(){
    number = +document.getElementById("number_from_math").value;
    var binary = "";
    while (number > 0) {
         binary = number % 2 + binary;
         number= Math.floor(number / 2);
    }
    document.getElementById("myOutMath").innerHTML = +binary ;
}

function conversionfromdec(){
    var dec = +document.getElementById("mathDec").value;
    var bin = +document.getElementById("mathBin").value;
    var octa = +document.getElementById("mathOcta").value;
    var hex = +document.getElementById("mathHex").value;

    bin = dec.toString(2);
    octa = dec.toString(8);
    hex = dec.toString(16);
    
    document.getElementById("mathBin").value = bin;
    document.getElementById("mathOcta").value = octa;
    document.getElementById("mathHex").value = hex;
    
    
}
function conversionfrombin(){
    var dec = +document.getElementById("mathDec").value;
    var bin = +document.getElementById("mathBin").value;
    var octa = +document.getElementById("mathOcta").value;
    var hex = +document.getElementById("mathHex").value;

    dec = parseInt(bin,2);

    octa = dec.toString(8);
    hex = dec.toString(16);
    
    document.getElementById("mathDec").value = dec;
    document.getElementById("mathOcta").value = octa;
    document.getElementById("mathHex").value = hex;
}
function conversionfromocta(){
    var dec = +document.getElementById("mathDec").value;
    var bin = +document.getElementById("mathBin").value;
    var octa = +document.getElementById("mathOcta").value;
    var hex = +document.getElementById("mathHex").value;

    dec = parseInt(octa,8);

    bin = dec.toString(2);
    hex = dec.toString(16);
    
    document.getElementById("mathDec").value = dec;
    document.getElementById("mathBin").value = bin;
    document.getElementById("mathHex").value = hex;
}
function conversionfromhex(){
    var dec = +document.getElementById("mathDec").value;
    var bin = +document.getElementById("mathBin").value;
    var octa = +document.getElementById("mathOcta").value;
    var hex = +document.getElementById("mathHex").value;

    dec = parseInt(hex,16);

    bin = dec.toString(2);
    octa = dec.toString(8);
    
    document.getElementById("mathDec").value = dec;
    document.getElementById("mathBin").value = bin;
    document.getElementById("mathOcta").value = octa;
}
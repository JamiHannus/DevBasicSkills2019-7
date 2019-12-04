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

    var check = "2345678";
    bin = bin.toString();

    if(bin.indexOf("2") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("3") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("4") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("5") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("6") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("7") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("8") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    if(bin.indexOf("9") > -1)
    { 
        alert("wrong input")
        document.getElementById("mathBin").value = 1;
        conversionfrombin();
        return;
    }
    else{
        dec = parseInt(bin,2);

        octa = dec.toString(8);
        hex = dec.toString(16);
        }
    document.getElementById("mathDec").value = dec;
    document.getElementById("mathOcta").value = octa;
    document.getElementById("mathHex").value = hex;
}
function conversionfromocta(){
    var dec = +document.getElementById("mathDec").value;
    var bin = +document.getElementById("mathBin").value;
    var octa = +document.getElementById("mathOcta").value;
    var hex = +document.getElementById("mathHex").value;

    octa = octa.toString();
    if (octa.indexOf(9) > -1)
    {
        alert("wrong input")
        document.getElementById("mathOcta").value = 7;
        conversionfromocta();
        return;
    }
    if (octa.indexOf(8) > -1)
    {
        alert("wrong input")
        document.getElementById("mathOcta").value = 7;
        conversionfromocta();
        return;
    }
    else{
        
    dec = parseInt(octa,8);

    bin = dec.toString(2);
    hex = dec.toString(16);
    
    }

    document.getElementById("mathDec").value = dec;
    document.getElementById("mathBin").value = bin;
    document.getElementById("mathHex").value = hex;
}
function conversionfromhex(){
    var dec = +document.getElementById("mathDec").value;
    var bin = +document.getElementById("mathBin").value;
    var octa = +document.getElementById("mathOcta").value;
    var hex = +document.getElementById("mathHex").value;

    var check = /^[a-f]+$/;

    hex = hex.toString();

    if((hex.match(check)))
    {
    dec = parseInt(hex,16);

    bin = dec.toString(2);
    octa = dec.toString(8);
    }
    else{  
        alert("wrong input")
        document.getElementById("mathHex").value = hex;
        return
    }

    document.getElementById("mathDec").value = dec;
    document.getElementById("mathBin").value = bin;
    document.getElementById("mathOcta").value = octa;
}
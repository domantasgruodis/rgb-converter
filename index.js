//The RGB to Hex code conversion app
//By Domantas Gruodis

function getInput(){
    let textField = document.getElementById("inputField");
    let input = textField.value.split(",");
    //Input validation
    let invalid = false;
    if (input.length !== 3){
        invalid = true;
    }
    else{
        for (let i = 0; i < 3; i++){
            if (input[i] === " "){
                input[i] = "0";
            }
            else if (isNaN(input[i]) || input[i] > 255){
                invalid = true;
            }
        }
        //If the input is invalid the function returns null, otherwise, it returns the rgb values
        textField.value = "";
        if (invalid){
            window.alert("Invalid input");
            return null;
        }
        else{
            return input;
        }
    }
}

function decToHex(rgb){
    let temp = [];
    rgb.forEach(element => {
        temp.push(parseInt(element).toString(16).toUpperCase());
    });
    return temp;
}

function convert(){
    let rgb = getInput();
    if (rgb == null)
    {
        return;
    }
    else{
        let converted = decToHex(rgb);
        let hexCode = "#";
        for(let i = 0; i < 3; ++i){
            if (converted[i].length === 1){
                hexCode += "0" + converted[i];
            }
            else{
                hexCode += converted[i];
            }
        }
        document.getElementById("result").textContent = hexCode;
    }
}


//Updated & Completed by Derek Fuenning 3/7/2020



//establishing my variables
var lengthOp;
var getLowercase;
var getUppercase;
var getNumber;
var getSymbols;
var selection;


//lowercase options
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//uppercase options
uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//number options
numbers = [1,2,3,4,5,6,7,8,9,0];
//had to determine whether to have numbers as a string or int
// ["1","2","3","4","5","6","7","8","9","0"];
//special character options
symbols = ["!","@","#","$","%","^","&","*","?",".","/"];



var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {
    pword = generatePassword();
    document.getElementById("password").placeholder = pword;
});

//function to initite password generation
function generatePassword() {

    lengthOp = parseInt(prompt("How long would you like your password? (Between 8-128 Characters)"));
    // parseInt(lengthOp);
    if (!lengthOp) {
        alert("Please enter a positive value between 8-128");
    } else if (lengthOp < 8 || lengthOp > 128) {
      //this is checking to see if the parameter of length is met, if not it will ask to reassign a length??
        lengthOp = parseInt(prompt("Between 8-128 please :)"));
    }  else {
        //Continues with 4 prompts once validated in length
        getUppercase = confirm("Would you like it to contain uppercase letters?");
        getLowercase = confirm("Would you like it to contain lowercase letters?");
        getNumber = confirm("Would you like it to contain any numbers?");
        getSymbols = confirm("Would you like it to contain any special characters?");
    };

    if (!getLowercase && !getUppercase && !getNumber && !getSymbols){
        alert("Someone is awfully picky...re-load the page and try again");
    }
    //Chosing all 4 selections
    else if (getLowercase && getUppercase && getNumber && getSymbols){
       
        selection = lowercase.concat(uppercase, numbers, symbols);
    }
    //Chosing 3 of 4 selections
    //Didnt choose symbols
    else if (getLowercase && getUppercase && getNumber) {
       
        selection = lowercase.concat(uppercase, numbers) ;
    }
    //Didnt choose numbers
    else if (getLowercase && getUppercase && getSymbols){
       
        selection = lowercase.concat(uppercase, symbols);
    }
    //Didnt choose uppercase
    else if (getLowercase && getNumber && getSymbols){
       
        selection = lowercase.concat(numbers, symbols);
    }
    //Didnt choose lowercase
    else if (getUppercase && getNumber && getSymbols){
       
        selection = uppercase.concat(numbers, symbols);
    }
    //Choosing 2 of 4 selections
    //Uppercase & Lowercase
    else if (getLowercase && getUppercase){
       
        selection = lowercase.concat(uppercase);
    }
    //lowercase and numbers
    else if (getLowercase && getNumber){
       
        selection = lowercase.concat(numbers);
    }
    //lowercase and symbols
    else if (getLowercase && getSymbols){
       
        selection = lowercase.concat(symbols);
    }
    //uppercase and numbers
    else if (getUppercase && getNumber){
       
        selection = uppercase.concat(numbers);
    }
    //uppercase and symbols
    else if (getUppercase && getSymbols){
       
        selection = uppercase.concat(symbols);
    }
    //numbers and symbols
    else if (getNumber && getSymbols){
       
        selection = numbers.concat(symbols);
    }
    //If only making one selections
    //only lowercase
    else if (getLowercase){
       
        selection = lowercase;
    }
    //only uppercase
    else if (getUppercase){
       
        selection = uppercase;
    }
    //only symbols
    else if (getSymbols){
       
        selection = symbols;   
    }
    //only numbers
    else if (getNumber){
       
        selection = numbers;
    }
    else if (getLowercase && getUppercase && getNumber && getSymbols){
       
        selection = lowercase.concat(uppercase, number, symbols);
    };

    let output = [];
    //created a loop to run through the selections that were chosen, this will run on the length
    for (i=0; i<lengthOp; i++) {
        var finalAnswer = selection[Math.floor(Math.random() * selection.length)];
        output.push(finalAnswer);
    }
    
    //Thank you Aaron from IT for teaching me this
    var pword = output.join("");
    almostDone(pword);
    return pword;

};
//FINALLY I AM PUTTING THE PASSWORD INTO THE TEXT BOX!
function almostDone(pword) {
    document.querySelector("#password").textContent = pword;
}






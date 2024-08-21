const inputBox = document.getElementById("box");

inputBox.addEventListener("keydown" , (event)=>{
    if(event.key === "Enter"){
        createPassword()
    }
})

function createPassword(){
    let inputValue = inputBox.value.trim();  
    let numericValue = parseInt(inputValue, 10); 
    if(inputBox.value === "" || !isNaN(numericValue)){
        // if we entered because the box was empty return random length else the user provided a lenght use it
        let passwordLength = isNaN(numericValue) ? randomLength() : numericValue;
        generatePassword(passwordLength);
    }
    else{
        inputBox.value = ""
    }
}
// generate random length in case if the user didnt provide one
function randomLength(){
    let len = Math.floor(Math.random()*19 +5);
    return len
}

function generatePassword(len){
    let password= ""
    for(let i=0 ; i<len ; i++){
        var chr = Math.floor(Math.random()*61 +65);
        password += String.fromCharCode(chr)
    }
    inputBox.value = password ;
}
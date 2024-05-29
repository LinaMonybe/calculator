
function displayInput(x){
let input=x.textContent;
let result =document.getElementById("result");
if(input==="AC")result.textContent="";
else if(input==="=")result.textContent=eval(result.textContent);
else{
 if(input==='x')input="*";
result.textContent+=input;
}
}
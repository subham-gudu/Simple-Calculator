 let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll('button');
 let string="";
 let arr=Array.from(buttons);
 arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
         string=string.substring(0,string.length-1);
         input.value=string;
        }
       else{ 
        string+=e.target.innerHTML;
        input.value=string;
       }
    });
 });
document.addEventListener("keydown", (event) => {
    if((event.key >= 0 && event.key <= 9) || ["+", "-", "*", "/", "%", "."].includes(event.key)){
        string += event.key;
        input.value = string;
    } else if(event.key === "Enter") {
        string = eval(string);
        input.value = string;
    } else if(event.key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    } else if(event.key === "Escape") {
        string = "";
        input.value = string;
    }
});
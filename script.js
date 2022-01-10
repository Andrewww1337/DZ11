//--11.1--//
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const button = document.getElementById('button');
const inner = document.getElementById('inner');
console.log(inp1);
console.log(inp2);
console.log(button);


console.log(inp1.value);
button.addEventListener('click', function(){
   var znach=0
    for (let i=0; i<inp1.value.length; i++) {
        //console.log(i)//
        
        if(inp1.value[i]===inp2.value) znach++;

        inner.innerHTML=znach;
        
    }
    });

//--11.2--//
const inp7 = document.getElementById('inp7');
const inp8 = document.getElementById('inp8');
const inp9 = document.getElementById('inp9');
const inp10 = document.getElementById('inp10');
const inner5 = document.getElementById('inner5');
const button5 = document.getElementById('button5');
button5.addEventListener('click', function(){
resultfin = inp7.value;
inner5.innerHTML = resultfin.slice(inp8.value || 0, inp9.value || inp7.length);

    
       

    
    
})


//--11.3--//
const inp5 = document.getElementById('inp5');
const inp6 = document.getElementById('inp6');
const button3 = document.getElementById('button3');
const inner3 = document.getElementById('inner3');

button3.addEventListener('click', function(){
    let results = Number(inp5.value);
    let finResults = Number(inp6.value);
    let days = 0;
    let tableContent = "";

     for (let i=1; results<=finResults; i++) {  
        results = results + results*0.1;
        days = i;    
        tableContent += `<div>${days} day: ${Math.floor(results * 100) / 100 }</div>`

        console.log(results, days);        
     }
     inner3.innerHTML = tableContent;
     });



//--11.4--//
const inp3 = document.getElementById('inp3');
const inp4 = document.getElementById('inp4');
const button2 = document.getElementById('button2');
const inner2 = document.getElementById('inner2');

button2.addEventListener('click', function(){
    let result = Number(inp3.value);
    let finResult = Number(inp4.value);
    let days = 0;

     for (let i=1; result<=finResult; i++) {  
        result = result + result*0.1;
        days = i;    

        console.log(result, days);        
     }
     inner2.innerHTML=days
     });
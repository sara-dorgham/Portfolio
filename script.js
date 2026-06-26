const jobs=[

"AI Engineer",

"Data Scientist",

"Data Analyst",

"Machine Learning Engineer"

];

let i=0;

let j=0;

let current="";

let deleting=false;

function type(){

current=jobs[i];

if(!deleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j==0){

deleting=false;

i++;

if(i==jobs.length){

i=0;

}

}

}

setTimeout(type,deleting?50:120);

}

type();
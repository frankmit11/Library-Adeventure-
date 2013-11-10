/*
    TODO Use the flowchart you designed as a model and implement in JavaScript

    Tips:
    	- write a function that will be called by the button's onclick handler
    	- give your function a meaningful, appropriate name
    	- use local variables for any intermediate values of your algorithm
    	- give your variables meaningful, appropriate names
    	- use nested or chained if-statements
    	- use consistent indentation and spacing
    	- avoid lines that are especially long by breaking complex statements
    		into several smaller ones and using variables
    	- write preconditions and postconditions for your function
*/
function answer()
{ 
  response = document.getElementById('x').value;
  if(response ==='shout'){
  document.getElementById('output').innerHTML=
  'Voice goes down hall and nothing is heard.';
  }
 else if(response ==='walk'){
  
  document.getElementById('output').innerHTML=
  'You walk to a new place.';
  }
  else if(response ==='pick up'){
  
  document.getElementById('output').innerHTML=
  'You pick up something.';
  }
   else if(response ==='drop'){
  
  document.getElementById('output').innerHTML=
  'You dropped something.';
  }
  else{
  document.getElementById('output').innerHTML=
  'That is not a valid response.';
  
    } 
 }
function timer(){
  y = 10
 while(y > 0){
 y = y - 1;
 if(y <=0){
 document.getElementById( 'text' ).style.visibility = 'visible';
       } 
     }
  }
  function hide(){
  document.getElementById( 'input' ).style.visibility = 'hidden';
  document.getElementById( 'text' ).style.visibility = 'hidden';
 }
  function start(){
   name=document.getElementById('nameBox').value
   if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a ruler!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a ruler!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a ruler!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a ruler!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a ruler!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a ruler!';
       errors();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a pencil!';
       errors();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a ruler!';
       errors();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a nerd, and you now have a pencil!';
       errors();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a nerd, and you now have a phone!';
       errors();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+', your major is math,<br> you are a nerd, and you now have a ruler!';
       errors();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a pencil!';
       errors();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a phone!';
       errors();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a ruler!';
       errors();
       }
   
   
   
   
   
    
    
}


function errors(){
 if(document.getElementById('cs').checked===true && document.getElementById('eng').checked===true && document.getElementById('math').checked===true ){
  alert("Too Many Checked!");
   document.getElementById('put').innerHTML= '';
   }
    else if(document.getElementById('jock').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pop').checked===true) {
    alert("Too Many Checked!");
        }
    
     else if(document.getElementById('pen').checked===true && document.getElementById('phone').checked===true && document.getElementById('rule').checked===true) {
    alert("Too Many Checked!");
        }
    

        
}

 
 
 
 



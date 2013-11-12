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
 document.getElementById( 'text' ).style.display = 'block';
 document.getElementById( 'start' ).style.display = 'none';
 document.getElementById( 'button' ).style.display = 'none';
 image();
  }
  function show(){
   document.getElementById( 'button' ).style.display = 'block';
 }
 function create(){
  document.getElementById( 'input' ).style.display = 'block';
   document.getElementById( 'text' ).style.display = 'none';
 
 
 }
  
  
  function hide(){
  document.getElementById( 'input' ).style.display = 'none';
  document.getElementById( 'text' ).style.display = 'none';
  document.getElementById( 'button' ).style.display = 'none'
 }
  function start(){
   name=document.getElementById('nameBox').value
   if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a pencil!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a phone!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a ruler!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a pencil!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a phone!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a ruler!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a pencil!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a phone!';
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a ruler!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a pencil!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a phone!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a ruler!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a pencil!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a phone!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a ruler!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a pencil!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a phone!';
       errors();
       show();
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a ruler!';
       errors();
        show();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a pencil!';
       errors();
        show();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a phone!';
       errors();
        show();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a ruler!';
       errors();
        show();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a nerd, and you now have a pencil!';
       errors();
        show();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a nerd, and you now have a phone!';
       errors();
        show();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+', your major is math,<br> you are a nerd, and you now have a ruler!';
       errors();
        show();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a pencil!';
       errors();
        show();
       }
     else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a phone!';
       errors();
        show();
       }
    else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a ruler!';
       errors();
        show();
       }
   
   
   
   
   
    
    
}

function NoMoreThanOne($in1, $in2, $in3){
	var int = 0;
	if(document.getElementById($in1).checked){int++;}
	if(document.getElementById($in2).checked){int++;}
	if(document.getElementById($in3).checked){int++;}
	if(int == 1){
		return true;
	}else{
		return false;
	}


}

function errors(){
	if(!NoMoreThanOne('cs', 'eng', 'math') || !NoMoreThanOne('jock', 'nerd', 'pop') || !NoMoreThanOne('pen', 'phone', 'rule')){
		alert("You have checked too many only select one from each column!");
   		document.getElementById('put').innerHTML= '';
   }
        
}
function image(){
document.body.style.backgroundImage="url('images/library.jpg')";



}

 

 
 
 
 



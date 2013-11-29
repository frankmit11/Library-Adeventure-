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
function riddle(){ 
 var response1;
 response1 = document.getElementById('moveBox1').value.toLowerCase();
 if(response1 ==='clock'){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
                          }
 else if(response1 ==='a clock'){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
                                 }
  else{
  document.getElementById('output1').innerHTML=
  'That is incorrect';
     } 
 }
 function answer(){ 
  var response;
  response = document.getElementById('moveBox').value.toLowerCase();
  if(response ==='left'){
  document.body.style.backgroundImage="url('images/readingroom.jpg')";
  document.getElementById( 'direction1' ).style.display = 'block';
  document.getElementById( 'direction' ).style.display = 'none';
  document.getElementById( 'monsterIMG' ).src="images/monster.png";
 }
 else if(response ==='right'){
  document.body.style.backgroundImage="url('images/study.jpg')";
  document.getElementById( 'direction2' ).style.display = 'block';
  document.getElementById( 'direction' ).style.display = 'none';
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
   document.getElementById( 'text' ).style.display = 'none';
   document.body.style.backgroundImage="url('images/bathroom.jpg')";
   document.getElementById( 'direction' ).style.display = 'block'
}
 function hide(){
  document.getElementById( 'elevator' ).style.display = 'none';
  document.getElementById( 'text' ).style.display = 'none';
  document.getElementById( 'button' ).style.display = 'none';
  document.getElementById( 'direction' ).style.display = 'none';
  document.getElementById( 'direction1' ).style.display = 'none';
  document.getElementById( 'direction2' ).style.display = 'none';
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
function elevator(){ 
var move;
var response3;
response3 = document.getElementById('moveBox3').value.toLowerCase();
if (response3==='up'){
document.body.style.backgroundImage="url('images/floor2.jpg')";
 document.getElementById( 'elevator' ).style.display = 'none';
}
else if (response3=='down'){ 
document.body.style.backgroundImage="url('images/floor1.jpg')";
 document.getElementById( 'elevator' ).style.display = 'none';
                            }
}



 
 
 
 



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
 if(response1 =='clock'){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
   if (phone==1){
    document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
 document.getElementById( 'button2' ).style.display = 'block';
                 }
 }
 else if(response1 =='watch'){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
  if (phone==1){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
 document.getElementById( 'button2' ).style.display = 'block';
                }
}
 else if(response1 =='a watch'){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
      if (phone==1){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
 document.getElementById( 'button2' ).style.display = 'block';
                   }
 }
 else if(response1 =='a clock'){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
      if (phone==1){
 document.body.style.backgroundImage="url('images/elevator.jpg')";
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'elevator' ).style.display = 'block';
 document.getElementById( 'button2' ).style.display = 'block';
                   }
 }
  else{
  document.getElementById('output1').innerHTML=
  'Hint: This thing can tell time';
     } 
 }
 
 function riddle1(){ 
 var response10;
 response10 = document.getElementById('moveBox9').value.toLowerCase();
 if(response10 =='yes'){
   document.body.style.backgroundImage="url('images/elevator.jpg')";
   document.getElementById( 'direction4' ).style.display = 'none';
   document.getElementById( 'elevator' ).style.display = 'block';
  if (phone==1){
   document.getElementById( 'button2' ).style.display = 'block';
   document.body.style.backgroundImage="url('images/elevator.jpg')";
   document.getElementById( 'direction4' ).style.display = 'none';
   document.getElementById( 'elevator' ).style.display = 'block';
  }
}
 else if(response10 ==='no'){
  document.getElementById( 'monsterIMG1' ).src="images/librarymonster.jpg";
  document.getElementById('output9').innerHTML=
  'Then you will be eaten by the library monster!';
   document.getElementById( 'monstertext' ).style.display = 'none';
      }
  else{
  document.getElementById('output9').innerHTML=
  'That is an incorrect response!';
     } 
 }
 
 function answer(){ 
  var response;
  response = document.getElementById('moveBox').value.toLowerCase();
  if(response =='left'){
  document.body.style.backgroundImage="url('images/readingroom.jpg')";
  document.getElementById( 'direction1' ).style.display = 'block';
  document.getElementById( 'direction' ).style.display = 'none';
  document.getElementById( 'monsterIMG' ).src="images/monster.png";
  if (eng==1){
 document.getElementById( 'direction4' ).style.display = 'block';
 document.getElementById( 'direction1' ).style.display = 'none';
 document.getElementById( 'monsterIMG1' ).src="images/monster.png";
              }
 }
 else if(response =='right'){
  document.body.style.backgroundImage="url('images/study.jpg')";
  document.getElementById( 'direction2' ).style.display = 'block';
  document.getElementById( 'direction' ).style.display = 'none';
  document.getElementById( 'output2' ).innerHTML='';
  if (comp==1){
 document.getElementById( 'direction3' ).style.display = 'block';
 document.getElementById( 'direction2' ).style.display = 'none';
 document.getElementById( 'output8' ).innerHTML='';
              }
 }
 else{
  document.getElementById('output').innerHTML=
  'That is not a valid response.';
     } 
}
 
 function game(){
 document.getElementById( 'text' ).style.display = 'block';
 document.getElementById( 'start' ).style.display = 'none';
 document.getElementById( 'button' ).style.display = 'none';
 image();
}
 
 function show(){
   document.getElementById( 'button' ).style.display = 'block';
}
 
 function bathroom(){
   document.getElementById( 'text' ).style.display = 'none';
   document.body.style.backgroundImage="url('images/bathroom.jpg')";
   document.getElementById( 'direction' ).style.display = 'block'
    document.getElementById( 'helpbutton' ).style.display = 'block';
}
 
 function hide(){
  document.getElementById( 'helpbutton' ).style.display = 'none';
  document.getElementById( 'exit2' ).style.display = 'none';
  document.getElementById( 'button2' ).style.display = 'none';
  document.getElementById( 'mathroom1' ).style.display = 'none';
  document.getElementById( 'direction4' ).style.display = 'none';
  document.getElementById( 'direction3' ).style.display = 'none';
  document.getElementById( 'exit' ).style.display = 'none';
  document.getElementById( 'win' ).style.display = 'none';
  document.getElementById( 'exit1' ).style.display = 'none';
  document.getElementById( 'mathroom' ).style.display = 'none';
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
       comp = 1;
       jock = 1;
       errors();
       show();
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a phone!';
       errors();
       show();
        comp = 1;
        jock = 1;
        phone = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a jock, and you now have a ruler!';
       errors();
       show();
        comp = 1;
        jock = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a pencil!';
       errors();
       show();
       comp = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a phone!';
       errors();
       show();
        comp = 1;
        phone = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a nerd, and you now have a ruler!';
       errors();
       show();
        comp = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a pencil!';
       errors();
       show();
        comp = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a phone!';
       errors();
       show();
        comp = 1;
        phone = 1;
       }
    else if(document.getElementById('cs').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is computer science,<br> you are a popular kid, and you now have a ruler!';
       errors();
       show();
       comp = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a pencil!';
       errors();
       show();
       eng = 1;
       jock = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a phone!';
       errors();
       show();
       eng = 1;
       phone = 1;
       jock = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a jock, and you now have a ruler!';
       errors();
       show();
       eng = 1;
       jock = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a pencil!';
       errors();
       show();
       eng = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a phone!';
       errors();
       show();
       eng = 1;
       phone = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a nerd, and you now have a ruler!';
       errors();
       show();
       eng = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a pencil!';
       errors();
       show();
       eng = 1;
    
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a phone!';
       errors();
       show();
       eng = 1;
       phone = 1;
       }
    else if(document.getElementById('eng').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is english,<br> you are a popular kid, and you now have a ruler!';
       errors();
        show();
        eng = 1;
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a pencil!';
       errors();
        show();
        math = 1;
        jock = 1;
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a phone!';
       errors();
        show();
        math = 1;
        phone = 1;
        jock = 1;
       }
    else if(document.getElementById('math').checked===true && document.getElementById('jock').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a jock, and you now have a ruler!';
       errors();
        show();
        math = 1;
        jock = 1;
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a nerd, and you now have a pencil!';
       errors();
        show();
         math = 1;
         
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a nerd, and you now have a phone!';
       errors();
        show();
         math = 1;
         phone = 1;
       }
     else if(document.getElementById('math').checked===true && document.getElementById('nerd').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+', your major is math,<br> you are a nerd, and you now have a ruler!';
       errors();
        show();
         math = 1;
       }
     else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('pen').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a pencil!';
       errors();
        show();
         math = 1;
       }
     else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('phone').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a phone!';
       errors();
        show();
         math = 1;
         phone = 1;
       }
    else if(document.getElementById('math').checked===true && document.getElementById('pop').checked===true && document.getElementById('rule').checked===true ){
       document.getElementById('put').innerHTML= 'Hello '+name+' your major is math,<br> you are a popular kid, and you now have a ruler!';
       errors();
        show();
         math = 1;
       }
}

function NoMoreThanOne($in1, $in2, $in3){
	var int = 0;
	if(document.getElementById($in1).checked){int++;}
	if(document.getElementById($in2).checked){int++;}
	if(document.getElementById($in3).checked){int++;}
	if(int == 1){
		return true;
}
else{
		return false;
	}
}

function errors(){
	if(!NoMoreThanOne('cs', 'eng', 'math') || !NoMoreThanOne('jock', 'nerd', 'pop') || !NoMoreThanOne('pen', 'phone', 'rule')){
		alert("You have checked too many only select one from each column!");
   		document.getElementById('put').innerHTML= '';
}
        else if (name == ''){
        alert("You forgot your name!");
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
 document.getElementById( 'mathroom' ).style.display = 'block';
 document.getElementById( 'mathteachIMG' ).src="images/teacher.jpg";
 document.getElementById( 'button2' ).style.display = 'none';
  if (math==1){
 document.getElementById( 'mathroom' ).style.display = 'none';
 document.getElementById( 'mathroom1' ).style.display = 'block';
 document.getElementById( 'elevator' ).style.display = 'none';
 document.body.style.backgroundImage="url('images/floor2.jpg')";
 document.getElementById( 'mathteachIMG1' ).src="images/teacher1.jpg";
              }
}
else if (response3=='down'){ 
document.body.style.backgroundImage="url('images/floor1.jpg')";
 document.getElementById( 'elevator' ).style.display = 'none';
 document.getElementById( 'exit' ).style.display = 'block';
 document.getElementById( 'button2' ).style.display = 'none';
 if (jock==1){
 document.body.style.backgroundImage="url('images/floor1.jpg')";
 document.getElementById( 'elevator' ).style.display = 'none';
 document.getElementById( 'exit' ).style.display = 'none';
  document.getElementById( 'exit2' ).style.display = 'block';
 document.getElementById( 'button2' ).style.display = 'none';
             }
}
    else{
    document.getElementById('output13').innerHTML= 'That is an invalid response!';
        }
}

function math(){
var response4;
response4 = document.getElementById('moveBox4').value.toLowerCase();
if (response4=='8' && randomnumber=='1' ){
document.body.style.backgroundImage="url('images/floor1.jpg')";
document.getElementById( 'exit1' ).style.display = 'block';
document.getElementById('output7').innerHTML= 'You have a Marist ID!';
document.getElementById( 'mathroom' ).style.display = 'none';
m = 1;
}
else if (response4=='10' && randomnumber=='2' ){
document.body.style.backgroundImage="url('images/floor1.jpg')";
document.getElementById( 'exit1' ).style.display = 'block';
document.getElementById('output7').innerHTML= 'You have a Marist ID!';
document.getElementById( 'mathroom' ).style.display = 'none';
m = 1;
}
else if (response4=='12' && randomnumber=='3' ){
document.body.style.backgroundImage="url('images/floor1.jpg')";
document.getElementById( 'exit1' ).style.display = 'block';
document.getElementById('output7').innerHTML= 'You have a Marist ID!';
document.getElementById( 'mathroom' ).style.display = 'none';
m = 1;
}
else { 
 alert("That is wrong you will now be sent to the bathroom!");
 document.getElementById( 'mathroom' ).style.display = 'none';
 document.body.style.backgroundImage="url('images/bathroom.jpg')";
 document.getElementById( 'direction' ).style.display = 'block';
 document.getElementById('output').innerHTML= '';
 document.getElementById('output2').innerHTML= '';
 document.getElementById('output9').innerHTML= '';
  document.getElementById('output1').innerHTML= '';
      }
}

function leave(){ 
var response5;
response5 = document.getElementById('moveBox5').value.toLowerCase();
 if (response5=='yes'){
 alert("You need to find a Marist ID in order to leave");
  document.getElementById( 'elevator' ).style.display = 'block';
  document.getElementById('output13').innerHTML= '';
  document.getElementById('output4').innerHTML= '';
  document.getElementById( 'exit' ).style.display = 'none';
  document.body.style.backgroundImage="url('images/elevator.jpg')";
}
else if (response5=='no') { 
document.getElementById('output4').innerHTML= 'Then prepare to be eaten alive!';
document.getElementById( 'badmonster' ).src="images/badmonster.jpg";
                           }
else{
document.getElementById('output4').innerHTML= 'That is an invalid response!';
    }
}

function leave1(){
var response6 = document.getElementById('moveBox7').value.toLowerCase();
if (response6=='yes' && m==1){
document.body.style.backgroundImage="url('images/tour.jpeg')";
 document.getElementById( 'exit1' ).style.display = 'none';
  document.getElementById( 'win' ).style.display = 'block';
  document.getElementById( 'helpbutton' ).style.display = 'none';
}
else if (response6=='no'){ 
document.getElementById('outputDiv').innerHTML= 'Then you will be eaten!';
 document.getElementById( 'evilmonster' ).src="images/evilmonster.png";
}
else{
document.getElementById('outputDiv').innerHTML= 'That is an invalid response!';
     }
}

function problem(){
var mathproblem={firstnumber: 4, secondnumber: 2}
 randomnumber =Math.floor(Math.random()*3)+1;
document.getElementById('output3').innerHTML= mathproblem.firstnumber + ' + ' + mathproblem.secondnumber + ' x ' +randomnumber+ ' + ' +mathproblem.secondnumber+ '!';
}

function over(){
window.close();
}

function study(){
var response8 = document.getElementById('moveBox2').value.toLowerCase();
if (response8=='enter'){
 document.getElementById( 'output2' ).innerHTML='The door is locked!';
} 
 else if (response8=='leave'){
  document.body.style.backgroundImage="url('images/bathroom.jpg')";
  document.getElementById( 'direction' ).style.display = 'block';
  document.getElementById( 'direction2' ).style.display = 'none';
   document.getElementById('output').innerHTML='';
 }
   else{
       document.getElementById( 'output2' ).innerHTML='That is not a valid response!';
   }
}

function csmajor(){
var response9 = document.getElementById('moveBox8').value.toLowerCase();
if (response9=='enter'){
   alert("You hacked into the room and found out that the answer to a riddle is clock!")
   document.getElementById( 'direction3' ).style.display = 'none';
   document.body.style.backgroundImage="url('images/readingroom.jpg')";
   document.getElementById( 'direction1' ).style.display = 'block';
   document.getElementById( 'monsterIMG' ).src="images/monster.png";
} 
else if (response9=='leave'){
  document.body.style.backgroundImage="url('images/bathroom.jpg')";
  document.getElementById( 'direction' ).style.display = 'block';
  document.getElementById( 'direction2' ).style.display = 'none';
  document.getElementById( 'direction3' ).style.display = 'none';
   document.getElementById( 'output' ).innerHTML='';
}
else{
  document.getElementById( 'output8' ).innerHTML='That is not a valid response';
     }
}

function mathmajor(){
var response11 = document.getElementById('moveBox10').value.toLowerCase();
if (response11=='yes'){
document.body.style.backgroundImage="url('images/floor1.jpg')";
document.getElementById( 'exit1' ).style.display = 'block';
document.getElementById('output7').innerHTML= 'You have a Marist ID!';
document.getElementById( 'mathroom1' ).style.display = 'none';
m = 1;
}
else if (response11=='no'){
document.getElementById('output10').innerHTML= 'Then I will give you a permanent F!';
document.getElementById( 'mathteachIMG1' ).src="images/meanteacher.jpg"; 
}
else{
document.getElementById('output10').innerHTML= 'That is an invalid response!';
    }
}

function elevator2(){ 
alert("Hello this is the librarian, I would advise going up the elevator!")  
 }

function jocks(){ 
 var response12 = document.getElementById('moveBox11').value.toLowerCase();
if (response12=='yes'){
  alert("Hey son this is your coach speaking, you need to find a Marist ID in the math room in order to escape. Here let me take you there!") 
  document.body.style.backgroundImage="url('images/floor2.jpg')";
  document.getElementById( 'mathroom' ).style.display = 'block';
  document.getElementById( 'exit2' ).style.display = 'none';
  document.getElementById( 'mathteachIMG' ).src="images/teacher.jpg"; 
                     }
 else if (response12=='no'){
  document.getElementById( 'scarymonster' ).src="images/bane.jpg"; 
  document.getElementById('output11').innerHTML= 'Then prepare for your reckoning!';
}
else{
  document.getElementById('output11').innerHTML= 'That is an invalid response!';
    }
}
function help(){ 
alert("Your goal is to find your group again before getting trapped in the library forever. Find the math room and things will become clear.")  
 }



 
 
 
 



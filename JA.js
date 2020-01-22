
	
	
	
	
	
	






function validateForm3() {
  var x = document.forms["LF"]["temperatures"].value;
  if (x == "") {
    alert("Q1 must be filled out");
     x.focus();
    return false;
  }
  var x = document.forms["LF"]["paper towels"].value;
 if (x == "") {
    alert("Q2 must be filled out");
     x.focus();
    return false;
  }
   var x = document.forms["LF"]["5 steps"].value;
   
 if (x == "write the vitamin name") {
   
    alert("Q3 must be filled out");


    return false;
  }
  
  
alert("your answers saved");
Testform3();
}

function validateForm2() {
var x = document.forms["LF"]["Mint benefit"].value;
  if (x == "") {
    alert("Q1 must be filled out");
    x.focus();
    return false;
  }
 var frm = document.forms["LF"];
    if (!frm["Checkbox1"].checked && !frm["Checkbox2"].checked && !frm["Checkbox3"].checked) {
	     alert("Q2 must be filled out");
	    return false;
    }
/* var x = document.forms["LF"]["cm"].value;
 if (x < 0) {
    alert("Q3 must be filled out");
     x.focus();
    return false;
  }*/
alert("your answers saved");
Testform2();

}

function validateForm1() {
  var x = document.forms["LF"]["First step"].value;
  if (x == "") {
    alert("Q1 must be filled out");
     x.focus();
    return false;
  }

   var frm = document.forms["LF"];
    if (!frm["Checkbox1"].checked && !frm["Checkbox2"].checked && !frm["Checkbox3"].checked) {
	     alert("Q2 must be filled out");
	    return false;
		
    }
   
    
    /*
   var x = document.forms["LF"]["days"].value;
 if (x <= 0) {
	 
    alert("Q3 must be filled out"+x+"");
     x.focus();
    return false;
  }*/
  	

alert("your answers saved");
Testform1();
}


var i=0;
function Testform1(){
	//var avg =0;
	
	
var count=0;
if(document.getElementById("1").checked)
	count+=1;
	else {count+=0;
	document.getElementById("q11").style.backgroundColor="yellow";} 
	                  
	
var f1 = document.forms["LF"];
    if (!f1["Checkbox1"].checked && f1["Checkbox2"].checked && f1["Checkbox3"].checked)
count+=1;
else 	
      if (f1["Checkbox1"].checked) { count=+0;document.getElementById("q12").style.backgroundColor="yellow";}
		
	else 
		if ( f1["Checkbox2"].checked || f1["Checkbox3"].checked)
			count=+0.5;
else
	count+=0;
	    
if(document.getElementById("op1").selected)
count+=1;
	else {count+=0;document.getElementById("q13").style.backgroundColor="yellow";}
	
	
	alert("your grade is "+count+"of 3");
	
	//avg=+count;
  //  localStorage.setItem("Average", avg);
	//localStorage.setItem("grade1", count);

var k=count;

i=localStorage.getItem("attempt1");
i++;


var c=i;
localStorage.setItem("attempt" ,i );
localStorage.setItem("attempt1" ,c );



var score3=localStorage.getItem("avrage3");
var cont =localStorage.getItem("attempt1");
count=(((score3*(cont-1))+k)/(cont));
// /
score3=count;
localStorage.setItem("avrage" ,count);
localStorage.setItem("avrage3" ,score3);

	
		
}
var j=0;
function Testform2(){
	
	var count=0;
if(document.getElementById("2").checked)
	
	count+=1;
	else { count+=0; document.getElementById("q21").style.backgroundColor="yellow";}
	
	var f1 = document.forms["LF"];
    if (f1["Checkbox1"].checked && f1["Checkbox2"].checked && !f1["Checkbox3"].checked)
count+=1;
else 	
      if (f1["Checkbox3"].checked){ count=+0;document.getElementById("q22").style.backgroundColor="yellow";}
		
	else 
		if ( f1["Checkbox1"].checked || f1["Checkbox2"].checked)
			count=+0.5;

	
	
	else count+=0;
	
	
	
	if(document.getElementById("op2").selected)
count+=1;
	else {count+=0;document.getElementById("q23").style.backgroundColor="yellow";}
	
	//localStorage.setItem("grade2", count);
	
alert("your grade is "+count+"of 3");

var r=count;

j=localStorage.getItem("attempt3");
j++;

var c1=j;
localStorage.setItem("attempt2" ,j );
localStorage.setItem("attempt3" ,c1 );

var score4=localStorage.getItem("avrage4");
var cont1 =localStorage.getItem("attempt3");
count=(((score4*(cont1-1))+r)/(cont1));
// /
score4=count;
localStorage.setItem("avrage" ,count);
localStorage.setItem("avrage4" ,score4);





	
}

	
	var k=0;

	function Testform3(){
		var count=0;
	  var text1 =document.getElementById("t1").value ;
	  var patt = /star/i;
	
	if(patt.test(text1)) 
		count=+1;
	else {count=+0;document.getElementById("q31").style.backgroundColor="yellow";}
	
	
	 var text2 =document.getElementById("t2").value  ;
	  var patt2 = /plastic bag/i;
	
	if(patt2.test(text2))
		count=+1;
	else {count=+0;document.getElementById("q32").style.backgroundColor="yellow";}
	
	
		 var text3 =document.getElementById("t3").value  ;
	  var patt3 = /vitamin E/i;
	
	if(patt3.test(text3)) count=+1;
	else {count=+0;document.getElementById("q33").style.backgroundColor="yellow";}
	
	
	
	//	localStorage.setItem("grade3", count);

	alert("your grade is "+count+"of 3");
	
	
	
var d=count;

k=localStorage.getItem("attempt5");
k++;

var c2=k;
localStorage.setItem("attempt4" ,k );
localStorage.setItem("attempt5" ,c2 );

var score4=localStorage.getItem("avrage5");
var cont2 =localStorage.getItem("attempt5");
count=(((score4*(cont2-1))+d)/(cont2));
///
score4=count;
localStorage.setItem("avrage" ,count);
localStorage.setItem("avrage5" ,score4);
	
	
	
	}
	

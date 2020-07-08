 $(document).ready(function(){
				
			$("#fullname").on("input", function(){
				// Print entered value in a div box
			//	$("#sign-preview").text($(this).val());					
				var fullname = $(this).val();		
			//	document.getElementById("hintResult").innerHTML=fullname; 
				/*//$('#sign-preview').append('#sign-preview');
               $("#sign-preview").html(tabledata+'<span style="font-size: 16px; margin-top: 0px; margin-bottom: 0px;"><strong>'+fullname+'</strong></span><br>');*/
				
				var fullnameElement = document.createElement('span');
				fullnameElement.style=('font-size: 16px; margin-top: 0px; margin-bottom: 0px;');
				fullnameElement.innerHTML=('<strong>'+fullname+'</strong>');
				document.getElementById('hintResult').appendChild(fullnameElement);		
				
			});
	
			$("#jobtitle").on("input", function(){
				
				var jobtitle = $(this).val();
				document.getElementById("hintResult").innerHTML=jobtitle; 			
		/*	//$('#sign-preview').append('#sign-preview');
			$("#sign-preview").html(tabledata+'<span style="color: rgb(153, 153, 153); margin-top: 0px; margin-bottom: 0px; text-decoration: none;">'+jobtitle+'</span><br>');	*/
				
			});  
});  

/*

$(document).on('input', '.form-control', printUserInput);

function printUserInput(e){
console.log("I am here");
	e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.id.match(/fullname/))
    {	
	   console.log("I am fullname");
		 var fullname = document.getElementById("fullname").value;
         document.getElementById("hintResult").innerHTML=fullname; 
		
    }
	
	if (target.id.match(/jobtitle/))
    {
     //an element with the keyword Class was clicked		
	   console.log("I am jobtitle");
		var jobtitle = document.getElementById("jobtitle").value;
         document.getElementById("hintResult").innerHTML=jobtitle; 
		
    }
	
	 if (target.id.match(/phone/))
    {	
	   console.log("I am phone");
		 var phone = document.getElementById("phone").value;
         document.getElementById("hintResult").innerHTML=phone; 
		
    }
	
	 if (target.id.match(/website/))
    {	
	   console.log("I am website");
		 var website = document.getElementById("website").value;
         document.getElementById("hintResult").innerHTML=website; 
		
    }
	 if (target.id.match(/logourl/))
    {	
	   console.log("I am logourl");
		 var logourl = document.getElementById("logourl").value;
         document.getElementById("hintResult").innerHTML=logourl; 
		
    }
	
}
*/


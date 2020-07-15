
function showSocialIcons() {
	   if(document.getElementById("socialIcon").checked){		
		 document.getElementById("socialIconGroup").style.display="block";}
		else {		
		  document.getElementById("socialIconGroup").style.display="none";}
	
	}


function showHtmlScript() {		
		if(document.getElementById("showhtml").checked)
		{						
		   document.getElementById("code-htmlscript").style.display="block";	
	       document.getElementById('code-htmlscript').innerHTML=document.getElementById('preview-output').innerHTML
     	}
		else {		
		  document.getElementById("code-htmlscript").style.display="none";
		}	
	}

function slideFunction(val) {
  document.getElementById("demo").innerHTML = val; 
  document.getElementById("fbimg").width=val;
  document.getElementById("twimg").width=val;
  document.getElementById("instaimg").width=val;
  document.getElementById("youtubeimg").width=val;
  document.getElementById("linkedinimg").width=val;
}

function printFullname(){
	document.getElementById("printfullname").style.display="block";
	document.getElementById("hint").style.display="none";
	var fname=document.getElementById("fullname").value;
	document.getElementById("printfullname").innerHTML="<strong>"+fname+"</strong><br>";
}


function printJobtitle(){		
	document.getElementById("printjobtitle").style.display="block";
	var job=document.getElementById("jobtitle").value;	
	document.getElementById("printjobtitle").innerHTML=job+"</span><br><br>"; 
}

function printPhonenumber(){		
	document.getElementById("printphonenumber").style.display="block";
	var phone=document.getElementById("phone").value;	
	document.getElementById("printphonenumber").href=phone; 	
	document.getElementById("printphonenumber").innerHTML=phone; 	
}

function printWebsite(){			
	document.getElementById("printwebsite").style.display="block";
	var website=document.getElementById("website").value;	
	document.getElementById("printwebsite").href=website;	
	document.getElementById("printwebsite").innerHTML=website;	
}

function previewLogo(obj)
	{		
		if (FileReader)
		{
			var reader = new FileReader();
			reader.readAsDataURL(obj.files[0]);
			reader.onload = function (e) {
			var image=new Image();
			image.src=e.target.result;
			image.onload = function () {
				document.getElementById("logourl").style.display="block";
				document.getElementById("logopreview").src=image.src;
			};
		  }
		}
		else
		{			
			document.getElementById("logopreview").src="Logo"
		}
}

function printFacebook() {
	var fb=document.getElementById("facebook").value;
	var len=document.getElementById("facebook").value.length;
	if (len==0){
    	document.getElementById("fbimg").style.display="none";
	} else {			
		document.getElementById("fbimg").style.display="inline-block";
		document.getElementById("printfacebook").href=fb; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("fbimg").width=slidervalue;
	}
}

function printTwitter() {
	var twitter=document.getElementById("twitter").value;	
	var len=document.getElementById("twitter").value.length;
	if (len==0){
    	document.getElementById("twimg").style.display="none";
	} else {		
		document.getElementById("twimg").style.display="inline-block";
		document.getElementById("printtwitter").href=twitter; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("twimg").width=slidervalue;
	}
}

function printInstagram() {
	var insta=document.getElementById("instagram").value;
	var len=document.getElementById("instagram").value.length;
	if (len==0){
    	document.getElementById("instaimg").style.display="none";
	} else {	
	document.getElementById("instaimg").style.display="inline-block";
	document.getElementById("printinstagram").href=insta; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("instaimg").width=slidervalue;
	}
}

function printYoutube() {
	var ytube=document.getElementById("youtube").value;	
	var len=document.getElementById("youtube").value.length;
	if (len==0){
    	document.getElementById("youtubeimg").style.display="none";
	} else {
		document.getElementById("youtubeimg").style.display="inline-block";
		document.getElementById("printyoutube").href=ytube; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("youtubeimg").width=slidervalue;
	}
}

function printLinkedin() {
	var linkedin=document.getElementById("linkedin").value;	
	var len=document.getElementById("linkedin").value.length;
	if (len==0){
    	document.getElementById("linkedinimg").style.display="none";
	} else {
		document.getElementById("linkedinimg").style.display="inline-block";
		document.getElementById("printlinkedin").href=linkedin; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("linkedinimg").width=slidervalue;
	}
}

// function copyToClipboard(){ 
// 	html2canvas(document.querySelector('.logourl'), {
// 		onrendered: function(canvas) {
// 			document.body.appendChild(canvas);
// 		}
// 	});
// }

function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("preview-output"));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy"); 
	window.getSelection().removeAllRanges();// to deselect
	document.getElementById("copied").innerHTML="Copied to Clipboard";
}
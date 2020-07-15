

function printFullname(){	
	var printTD = document.getElementById("namefld");
	var fullname = document.getElementById("fullname").value;
	var len = document.getElementById("fullname").value.length;
	if (len==0) { 
		document.getElementById("namefld").style.display="none";
	 }
	 else {		
		var fname = document.createElement("span");
		fname.textContent =fullname;
		printTD.appendChild(fname);
	 }

}

function printJobtitle() {
	var printTD = document.getElementById("jobfld");
	var jobtitle = document.getElementById("jobtitle").value;	
	var len = document.getElementById("jobtitle").value.length;
	if (len==0) { 
		document.getElementById("jobfld").style.display="none";
	 }
	else {
		var job = document.createElement("span");
	//	var brElem = document.createElement("br");
		job.textContent = jobtitle;
		printTD.appendChild(job);
	//	printTD.insertBefore (brElem, job);
	}
}

function printPhone(){		
	var phone = document.getElementById("phone").value;	
	var len = document.getElementById("phone").value.length;
	if (len==0) { 		
		document.getElementById("phlable").style.display="none";
		document.getElementById("phonenumber").style.display="none";
	}
	else {
	document.getElementById("phlable").style.display="block";
	var printTD = document.getElementById("phonenumber");
	var ph = document.createElement("a");
	var link= document.createTextNode(phone);
	ph.appendChild(link);
	ph.href=phone;	
	ph.style.textDecoration='none';
	ph.style.color="#000";
	printTD.appendChild(ph);
	}
 }

 function printWebsite() {
	var website = document.getElementById("website").value;
	var len = document.getElementById("website").value.length;
	if (len==0) {
		document.getElementById("weblable").style.display="none";
		document.getElementById("websiteadd").style.display="none";
	} else {	
		document.getElementById("weblable").style.display="block";
		var printTD = document.getElementById("websiteadd");
		var web = document.createElement("a");
		var link= document.createTextNode(website);
		web.appendChild(link);
		web.href=website;	
		web.style.textDecoration='none';
		web.style.color="#000";
		printTD.appendChild(web);
	}
}

function printFacebook() {
	document.getElementById("sociallable").style.display="block";
	var fb=document.getElementById("facebook").value;
	var len=document.getElementById("facebook").value.length;
	if (len==0){
    	document.getElementById("fbimg").style.display="none";	
		document.getElementById("sociallable").style.display="none";
	} else {			
		document.getElementById("fbimg").style.display="inline-block";
		document.getElementById("printfacebook").href=fb; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("fbimg").width=slidervalue;
	}
}


function printTwitter() {
	document.getElementById("sociallable").style.display="block";
	var twitter=document.getElementById("twitter").value;	
	var len=document.getElementById("twitter").value.length;
	if (len==0){
    	document.getElementById("twimg").style.display="none";	
		document.getElementById("sociallable").style.display="none";
	} else {		
		document.getElementById("twimg").style.display="inline-block";
		document.getElementById("printtwitter").href=twitter; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("twimg").width=slidervalue;
	}
}

function printInstagram() {
	document.getElementById("sociallable").style.display="block";
	var insta=document.getElementById("instagram").value;
	var len=document.getElementById("instagram").value.length;
	if (len==0){
    	document.getElementById("instaimg").style.display="none";	
		document.getElementById("sociallable").style.display="none";
	} else {	
	document.getElementById("instaimg").style.display="inline-block";
	document.getElementById("printinstagram").href=insta; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("instaimg").width=slidervalue;
	}
}

function printYoutube() {
	document.getElementById("sociallable").style.display="block";
	var ytube=document.getElementById("youtube").value;	
	var len=document.getElementById("youtube").value.length;
	if (len==0){
    	document.getElementById("youtubeimg").style.display="none";	
		document.getElementById("sociallable").style.display="none";
	} else {
		document.getElementById("youtubeimg").style.display="inline-block";
		document.getElementById("printyoutube").href=ytube; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("youtubeimg").width=slidervalue;
	}
}

function printLinkedin() {
	document.getElementById("sociallable").style.display="block";
	var linkedin=document.getElementById("linkedin").value;	
	var len=document.getElementById("linkedin").value.length;
	if (len==0){
		document.getElementById("linkedinimg").style.display="none";		
		document.getElementById("sociallable").style.display="none";
	} else {
		document.getElementById("linkedinimg").style.display="inline-block";
		document.getElementById("printlinkedin").href=linkedin; 	
		var slidervalue=document.getElementById("sliderrange").value;	
		document.getElementById("linkedinimg").width=slidervalue;
	}
}

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

function copyToClipboard() {
 var range = document.createRange();
 range.selectNode(document.getElementById("preview-output"));
 window.getSelection().removeAllRanges(); // clear current selection
 window.getSelection().addRange(range); // to select text
 document.execCommand("copy"); 
 window.getSelection().removeAllRanges();// to deselect
 document.getElementById("copied").innerHTML="Copied to Clipboard";
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
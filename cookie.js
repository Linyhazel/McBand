function setCookie(loginInfo, email, expireDays){
	var day = new Date();
	day.setTime(day.getTime() + (expireDays*24*60*60*1000));
	var expires = "expires="+day.toGMTString();
	document.cookie = loginInfo + "=" + email + ";"+expires;
}

function getCookie(loginInfo){
	var name = loginInfo+"=";
	var attributes = document.cookie.split(';');
	for(var i = 0;i < attributes.length;i++){
		var c = attributes[i].trim();
		if(c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
			console.log("Success!");
		}
	}
	return "";
}

function checkCookie(loginInfo){
	var email = getCookie(loginInfo);
	if(email != ""){
		//Logged in now. Some operations need to be added
	}
	else{
		//Not log in yet, be the visitor mode
	}

}
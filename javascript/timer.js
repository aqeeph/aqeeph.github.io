function countdown() {
		
        // Creating date object
		var today = new Date();
    
        /* Getting all the needed properties from object
        (day, month, year, hour, minute and second)*/
		
		var day = today.getDate();
		var month = today.getMonth() + 1;
		var year = today.getFullYear();
		
		var hour = today.getHours();
		if (hour < 10) hour = "0" + hour;
		
		var minute = today.getMinutes();
		if (minute < 10) minute = "0" + minute;
		
		var second = today.getSeconds();
		if (second < 10) second = "0" + second;

		/* Changing inner HTML of #date_time div, to the
        properties of the object */
		document.getElementById("date_time").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + minute +":" + second;
		
        // Invoking whole function again after 1 second
		setTimeout("countdown()", 1000);
	};

// Adding event listener to the body of webpage

document.body.addEventListener("onload", countdown());

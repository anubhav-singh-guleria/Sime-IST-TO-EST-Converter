function convertToIST() {
	// get input value
	let estTime = document.getElementById("est-time").value;

	// convert to IST
	let estDate = new Date(estTime);
	estDate.setUTCHours(estDate.getUTCHours() - 5);
	let istTime = estDate.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" });

	// update output
	document.getElementById("ist-time").value = istTime;
}

function convertToEST() {
	// get input value
	let istTime = document.getElementById("ist-time").value;

	// convert to EST
	let istDate = new Date(istTime);
	istDate.setUTCHours(istDate.getUTCHours() + 5);
	istDate.setUTCMinutes(istDate.getUTCMinutes() + 30);
	let estTime = istDate.toLocaleTimeString("en-US", { timeZone: "America/New_York" });

	// update output
	document.getElementById("est-time").value = estTime;
}

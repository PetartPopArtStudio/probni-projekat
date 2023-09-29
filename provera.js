function required(event) {
	event.preventDefault();
	var ime = document.forms["forma"]["fime"].value;
	var prezime = document.forms["forma"]["fprezime"].value;
	var prosek = document.forms["forma"]["fprosek"].value;
	if (ime == "" || prezime == "" || prosek == "") {
		alert("Unesite trazene podatke");
		return false;
	} else {
		return true;
	}
}

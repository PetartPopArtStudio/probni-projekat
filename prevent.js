const form = document.querySelector("form");

async function postData(url = "", data = {}) {
	const response = await fetch("http://localhost/probni-projekat" + url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!response.ok) {
		throw new Error("Network response was not OK");
	}

	return response.json();
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formInputs = form.querySelectorAll(".field");
	let formData = {};
	for (let input of formInputs) {
		formData[input.name] = input.value;
	}

	/*if (!required()) {
		return;
	}*/
	const loader = document.querySelector(".loader");
	loader.classList.add("active");

	postData("/unos.php", formData)
		.then((data) => {
			loader.classList.remove("active");
			const parent = document.querySelector(".parent");

			const wrap = document.createElement("li");
			const prom = document.createElement("ul");
			const elId = document.createElement("li");
			const elIme = document.createElement("li");
			const elPrezime = document.createElement("li");
			const elProsek = document.createElement("li");
			//const elDugme = document.createElement("li");
			const buttonSubmit = document.createElement("button");
			buttonSubmit.type = "submit";
			prom.setAttribute("class", "studenti__list-student");
			buttonSubmit.setAttribute("class", "studenti__list-student--btn");

			elId.innerHTML += "Broj Indeksa: " + data.id;
			elIme.innerHTML += "Ime: " + data.ime;
			elPrezime.innerHTML += "Prezime: " + data.prezime;
			elProsek.innerHTML += "Prosek: " + data.prosek;
			buttonSubmit.innerHTML += "Delete";

			wrap.appendChild(prom);
			prom.appendChild(elId);
			prom.appendChild(elIme);
			prom.appendChild(elPrezime);
			prom.appendChild(elProsek);
			//prom.appendChild(elDugme);
			prom.appendChild(buttonSubmit);
			//elLiDugme.type = "submit";
			//elLiDugme.setAttribute("name", "brisanje");
			//elLiDugme.setAttribute("value", "Delete");

			//console.log(elLiDugme);

			parent.appendChild(wrap);

			/*
				"<li> <ul> <li> Broj Indeksa: " +
				data.id +
				" </li> <li>  Ime: " +
				data.ime +
				"</li> <li> Prezime: " +
				data.prezime +
				"</li> <li> Prosek: " +
				data.prosek +
				" <li><button id=" +
				"delete" +
				">Delete Entity</button></li> </ul> <br>";
*/
			console.log(data);
			form.reset();
		})

		.catch((err) => {
			console.error(err);
		})
		.finally(() => {
			console.log("always called");
		});
});

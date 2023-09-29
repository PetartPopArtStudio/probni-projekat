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

function deleteButtonClick(deleteButton) {
	deleteButton.addEventListener("click", (event) => {
		event.preventDefault();

		const studentId = deleteButton.parentElement.querySelector(".studentId").innerText;

		const xhr = new XMLHttpRequest();
		const url = "http://localhost/probni-projekat/delete.php";

		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {
				console.log(xhr.responseText);
				deleteButton.parentElement.parentElement.remove();
			} else {
				console.error("Error:", xhr.responseText);
			}
		};

		xhr.onerror = function () {
			console.error("Network Error");
		};

		xhr.send(`broj_indeksa=${studentId}`);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formInputs = form.querySelectorAll(".field");
	let formData = {};
	for (let input of formInputs) {
		formData[input.name] = input.value;
	}

	const loader = document.querySelector(".loader");
	loader.classList.add("active");

	postData("/unos.php", formData)
		.then((data) => {
			loader.classList.remove("active");
			const parent = document.querySelector(".parent");

			const wrap = document.createElement("li");
			const prom = document.createElement("ul");
			const elId = document.createElement("li");
			const elSpId = document.createElement("span");
			const elIme = document.createElement("li");
			const elPrezime = document.createElement("li");
			const elProsek = document.createElement("li");
			//const elDugme = document.createElement("li");
			const buttonSubmit = document.createElement("button");
			buttonSubmit.type = "submit";
			prom.setAttribute("class", "studenti__list-student");
			buttonSubmit.setAttribute("class", "studenti__list-student--btn deleteButton");
			elSpId.setAttribute("class", "studentId");

			elSpId.innerHTML += data.id;
			elId.innerHTML += "Broj Indeksa: ";
			elIme.innerHTML += "Ime: " + data.ime;
			elPrezime.innerHTML += "Prezime: " + data.prezime;
			elProsek.innerHTML += "Prosek: " + data.prosek;
			buttonSubmit.innerHTML += "Delete";

			wrap.appendChild(prom);
			elId.appendChild(elSpId);
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

			deleteButtonClick(buttonSubmit);

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

document.addEventListener("DOMContentLoaded", () => {
	const deleteButtons = document.querySelectorAll(".deleteButton");

	deleteButtons.forEach((deleteButton) => {
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
	});
});

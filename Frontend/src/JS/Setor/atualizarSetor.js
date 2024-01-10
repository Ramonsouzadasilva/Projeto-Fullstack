document.addEventListener("DOMContentLoaded", async function () {
	const urlParams = new URLSearchParams(window.location.search);
	const setId = urlParams.get("id");
	await loadSetor(setId);
});

async function loadSetor(setId) {
	// Fetch setor details from the server
	const response = await fetch(`http://localhost:3000/setores/${setId}`);
	const setor = await response.json();

	// Populate the form
	document.getElementById("nomeInput").value = setor.nome;
	document.getElementById("codigoInput").value = setor.codigo;

	// Add event listener for form submission
	const atualizarSetorForm = document.getElementById("atualizarSetorForm");
	atualizarSetorForm.addEventListener("submit", async function (event) {
		event.preventDefault();

		// Get updated values
		const updatedNome = document.getElementById("nomeInput").value;
		const updatedCodigo = document.getElementById("codigoInput").value;

		// Send updated data to the server
		await fetch(`http://localhost:3000/setores/${setId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nome: updatedNome,
				codigo: updatedCodigo,
			}),
		});

		// Redirect to the list page after updating
		window.location.href = "index.html";
	});
}

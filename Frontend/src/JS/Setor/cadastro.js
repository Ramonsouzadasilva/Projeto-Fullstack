document.addEventListener("DOMContentLoaded", function () {
	const cadastroForm = document.getElementById("cadastroForm");
	cadastroForm.addEventListener("submit", cadastrarSetor);
});

async function cadastrarSetor(event) {
	event.preventDefault();

	const nomeInput = document.getElementById("nomeInput");
	const codigoInput = document.getElementById("codigoInput");

	const setor = {
		nome: nomeInput.value,
		codigo: codigoInput.value,
	};

	// Send the setor data to the server for registration
	await fetch("http://localhost:3000/setores", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(setor),
	});

	alert("Setor cadastrado com sucesso!");
	// Redirect back to the list page
	window.location.href = "index.html";
}

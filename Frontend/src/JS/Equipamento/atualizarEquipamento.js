document.addEventListener("DOMContentLoaded", async function () {
	const urlParams = new URLSearchParams(window.location.search);
	const equipId = urlParams.get("id");
	await loadEquipamento(equipId);
});

async function loadEquipamento(equipId) {
	// Fetch equipamento details from the server
	const response = await fetch(`http://localhost:3000/equipamentos/${equipId}`);
	const equipamento = await response.json();

	// Populate the form
	document.getElementById("nomeInput").value = equipamento.nome;
	document.getElementById("marcaInput").value = equipamento.marca;
	document.getElementById("descricaoInput").value = equipamento.descricao;
	document.getElementById("codigoInput").value = equipamento.codigo;
	document.getElementById("valorInput").value = equipamento.valor;

	// Populate the setor select
	const setorSelect = document.getElementById("setorSelect");
	const setoresResponse = await fetch("http://localhost:3000/setores");
	const setores = await setoresResponse.json();

	setores.forEach((setor) => {
		const option = document.createElement("option");
		option.value = setor.id;
		option.textContent = setor.nome;
		setorSelect.appendChild(option);
	});

	// Set the selected setor
	setorSelect.value = equipamento.setor.id;

	// Add event listener for form submission
	const atualizarEquipamentoForm = document.getElementById(
		"atualizarEquipamentoForm"
	);
	atualizarEquipamentoForm.addEventListener("submit", async function (event) {
		event.preventDefault();

		// Get updated values
		const updatedNome = document.getElementById("nomeInput").value;
		const updatedMarca = document.getElementById("marcaInput").value;
		const updatedSetorId = document.getElementById("setorSelect").value;
		const updatedDescricao = document.getElementById("descricaoInput").value;
		const updatedCodigo = document.getElementById("codigoInput").value;
		const updatedValor = document.getElementById("valorInput").value;

		// Convert setor_id to a number
		const setor_id = +updatedSetorId;
		const valor = +updatedValor;

		// Send updated data to the server
		await fetch(`http://localhost:3000/equipamentos/${equipId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nome: updatedNome,
				marca: updatedMarca,
				setor_id: setor_id, // Use setor_id here
				descricao: updatedDescricao,
				codigo: updatedCodigo,
				valor: parseFloat(updatedValor),
			}),
		});

		// Redirect to the list page after updating
		window.location.href = "equipamento.html";
	});
}

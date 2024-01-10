document.addEventListener("DOMContentLoaded", async function () {
	await loadSetores();
	const cadastroEquipamentoForm = document.getElementById(
		"cadastroEquipamentoForm"
	);
	cadastroEquipamentoForm.addEventListener("submit", cadastrarEquipamento);
});

async function loadSetores() {
	const setorSelect = document.getElementById("setorSelect");

	try {
		// Fetch setores from the server
		const response = await fetch("http://localhost:3000/setores");
		const setores = await response.json();

		// Populate the select options
		setores.forEach((setor) => {
			const option = document.createElement("option");
			option.value = setor.id;
			option.textContent = setor.nome;
			setorSelect.appendChild(option);
		});

		console.log("Setores carregados com sucesso:", setores);
	} catch (error) {
		console.error("Erro ao carregar setores:", error);
	}
}

async function cadastrarEquipamento(event) {
	event.preventDefault();

	const nomeInput = document.getElementById("nomeInput");
	const marcaInput = document.getElementById("marcaInput");
	const setorSelect = document.getElementById("setorSelect");
	const descricaoInput = document.getElementById("descricaoInput");
	const codigoInput = document.getElementById("codigoInput");
	const valorInput = document.getElementById("valorInput");

	// Obter o valor selecionado do setor
	const setor_id = +setorSelect.value;

	const equipamento = {
		nome: nomeInput.value,
		marca: marcaInput.value,
		setor_id: setor_id,
		descricao: descricaoInput.value,
		codigo: codigoInput.value,
		valor: parseFloat(valorInput.value),
	};

	// Enviar os dados do equipamento para o servidor
	await fetch("http://localhost:3000/equipamentos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(equipamento),
	});

	alert("Equipamento cadastrado com sucesso!");
	// Redirecionar de volta para a página de lista
	window.location.href = "equipamento.html";
}

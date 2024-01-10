document.addEventListener("DOMContentLoaded", async function () {
	await loadEquipamentos();
});

async function loadEquipamentos() {
	const equipamentoList = document.getElementById("equipamentoList");
	equipamentoList.innerHTML = "";

	// Fetch equipamentos from the server
	const response = await fetch("http://localhost:3000/equipamentos");
	const equipamentos = await response.json();

	// Populate the table
	equipamentos.forEach((equipamento) => {
		const row = document.createElement("tr");
		row.innerHTML = `<td>${equipamento.id}</td>
                        <td>${equipamento.nome}</td>
                        <td>${equipamento.marca}</td>
						<td>${equipamento.descricao}</td>
						<td>${equipamento.codigo}</td>
						<td>${equipamento.valor}</td>
                        <td>${equipamento.setor}</td>
                        <td>
                            <a href="atualizarEquipamento.html?id=${equipamento.id}">Atualizar</a>
                        </td>
                        <td>
                            <a href="#" onclick="deleteEquipamento(${equipamento.id})">Excluir</a>
                        </td>`;
		equipamentoList.appendChild(row);
	});
}

async function searchEquipamento() {
	const searchInput = document.getElementById("searchInput");
	const searchTerm = searchInput.value.toLowerCase();

	// Fetch equipamentos with a similar name from the server
	const response = await fetch(
		`http://localhost:3000/buscar?nome=${searchTerm}`
	);
	const equipamentos = await response.json();

	// Display the filtered equipamentos
	const equipamentoList = document.getElementById("equipamentoList");
	equipamentoList.innerHTML = "";

	equipamentos.forEach((equipamento) => {
		const row = document.createElement("tr");
		row.innerHTML = `<td>${equipamento.id}</td>
                       <td>${equipamento.nome}</td>
                        <td>${equipamento.marca}</td>
						<td>${equipamento.descricao}</td>
						<td>${equipamento.codigo}</td>
						<td>${equipamento.valor}</td>
                    	<td>${equipamento.setor}</td>
						<td>
                            <a href="atualizarEquipamento.html?id=${equipamento.id}">Atualizar</a>
                        </td>
                        <td>
                            <a href="#" onclick="deleteEquipamento(${equipamento.id})">Excluir</a>
                        </td>`;
		equipamentoList.appendChild(row);
	});
}

function deleteEquipamento(equipId) {
	const confirmDelete = confirm(
		"Tem certeza de que deseja excluir este equipamento?"
	);
	if (confirmDelete) {
		// Send delete request to the server
		fetch(`http://localhost:3000/equipamentos/${equipId}`, {
			method: "DELETE",
		}).then(() => {
			// Reload equipamentos after deletion
			loadEquipamentos();
		});
	}
}

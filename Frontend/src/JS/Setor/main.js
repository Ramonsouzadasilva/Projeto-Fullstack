document.addEventListener("DOMContentLoaded", async function () {
	await loadSetors();
});

async function loadSetors() {
	const setorList = document.getElementById("setorList");
	setorList.innerHTML = "";

	// Fetch setors from the server
	const response = await fetch("http://localhost:3000/setores");
	const setors = await response.json();

	// Populate the table
	setors.forEach((setor) => {
		const row = document.createElement("tr");
		row.innerHTML = `<td>${setor.id}</td>
						<td>${setor.nome}</td>
						<td>${setor.codigo}</td>
						<td>
							<a href="atualizarSetor.html?id=${setor.id}">Atualizar</a>
						</td>
						<td>
							<a href="#" onclick="deleteSetor(${setor.id})">Excluir</a>
						</td>`;
		setorList.appendChild(row);
	});
}

// function searchSetor() {
// 	const searchInput = document.getElementById("searchInput");
// 	const searchTerm = searchInput.value.toLowerCase();

// 	const setorTable = document.getElementById("setorTable");
// 	const rows = setorTable.getElementsByTagName("tr");

// 	for (let i = 1; i < rows.length; i++) {
// 		const nome = rows[i]
// 			.getElementsByTagName("td")[1]
// 			.textContent.toLowerCase();
// 		const codigo = rows[i]
// 			.getElementsByTagName("td")[2]
// 			.textContent.toLowerCase();

// 		if (nome.includes(searchTerm) || codigo.includes(searchTerm)) {
// 			rows[i].style.display = "";
// 		} else {
// 			rows[i].style.display = "none";
// 		}
// 	}
// }

async function searchSetor() {
	const searchInput = document.getElementById("searchInput");
	const searchTerm = searchInput.value.toLowerCase();

	// Fetch equipamentos with a similar name from the server
	const response = await fetch(
		`http://localhost:3000/buscarSetor?nome=${searchTerm}`
	);
	const setores = await response.json();

	// Display the filtered equipamentos
	const setorList = document.getElementById("setorList");
	setorList.innerHTML = "";

	setores.forEach((setor) => {
		const row = document.createElement("tr");
		row.innerHTML = `<td>${setor.id}</td>
                       	<td>${setor.nome}</td>
						<td>${setor.codigo}</td>
						<td>
                            <a href="atualizarSetor.html?id=${setor.id}">Atualizar</a>
                        </td>
                        <td>
                            <a href="#" onclick="deleteSetor(${setor.id})">Excluir</a>
                        </td>`;
		setorList.appendChild(row);
	});
}

function deleteSetor(setId) {
	const confirmDelete = confirm(
		"Tem certeza de que deseja excluir este setor?"
	);
	if (confirmDelete) {
		// Send delete request to the server
		fetch(`http://localhost:3000/setores/${setId}`, {
			method: "DELETE",
		}).then(() => {
			// Reload setors after deletion
			loadSetors();
		});
	}
}

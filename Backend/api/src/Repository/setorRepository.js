const Setor = require("../Model/Setor");

class SetorRepository {
	constructor(conexao) {
		this.conexao = conexao;
	}

	async obterSetores() {
		const [rows] = await this.conexao.execute("SELECT * FROM setor");
		return rows.map((row) => new Setor(row));
	}

	async createSetor(setor) {
		const { nome, codigo } = setor;

		const query = "INSERT INTO setor(nome, codigo) VALUES (?, ?)";

		const [createdSetor] = await this.conexao.execute(query, [nome, codigo]);

		// Obtém o ID do setor criado e retorna uma instância da classe Setor
		return new Setor({
			id: createdSetor.insertId,
			nome,
			codigo,
		});
	}

	async atualizarSetor(id, setor) {
		const { nome, codigo } = setor;
		const query = "UPDATE setor SET nome = ?, codigo = ? WHERE id = ?";
		const [updatedSetor] = await this.conexao.execute(query, [
			nome,
			codigo,
			id,
		]);
		return updatedSetor;
	}

	async deletarSetor(id) {
		const deletedSetor = await this.conexao.execute(
			"DELETE FROM setor WHERE id = ?",
			[id]
		);
		return deletedSetor;
	}

	async buscarSetorPorId(id) {
		const query = "SELECT * FROM setor WHERE id = ?";
		const [setor] = await this.conexao.execute(query, [id]);

		// Retorna a primeira linha (se existir) como uma instância da classe Setor
		return setor.length > 0 ? new Setor(setor[0]) : null;
	}

	async obterLike(nome) {
		nome = nome + "%";
		const query = "SELECT * FROM setor WHERE nome LIKE ?";
		const [setores] = await this.conexao.execute(query, [nome]);
		return setores.map((row) => new Setor(row));
	}
}

module.exports = SetorRepository;

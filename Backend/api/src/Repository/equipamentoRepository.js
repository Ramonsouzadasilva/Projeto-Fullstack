const Equipamento = require("../Model/Equipamento");

class EquipamentoRepository {
	constructor(conexao) {
		this.conexao = conexao;
	}

	async obterTodos() {
		const query =
			"SELECT e.id, e.nome, e.marca, e.descricao, e.codigo, e.valor, s.nome AS setor FROM equipamento e JOIN setor s ON s.id = e.setor_id";
		const [rows] = await this.conexao.execute(query);
		return rows.map((row) => new Equipamento(row));
	}

	async createEquipamento(equipamento) {
		const { nome, marca, descricao, codigo, valor, setor_id } = equipamento;
		console.log(equipamento);

		// Insert the Equipamento into the database
		const equipamentoQuery =
			"INSERT INTO equipamento(nome, marca, descricao, codigo, valor, setor_id) VALUES (?, ?, ?, ?, ?, ?)";

		const [createdEquipamento] = await this.conexao.execute(equipamentoQuery, [
			nome,
			marca,
			descricao,
			codigo,
			valor,
			setor_id, // Assuming setor has an 'id' property
		]);

		// Obtém o ID do equipamento criado e retorna uma instância da classe Equipamento
		return new Equipamento({
			id: createdEquipamento.insertId,
			nome,
			marca,
			descricao,
			codigo,
			valor,
			setor_id,
		});
	}

	async atualizarEquipamento(id, equipamento) {
		const { nome, marca, descricao, codigo, valor, setor_id } = equipamento;
		const query =
			"UPDATE equipamento SET nome = ?, marca = ?, descricao = ?, codigo = ?, valor = ?, setor_id = ? WHERE id = ?";
		const [updatedEquipamento] = await this.conexao.execute(query, [
			nome,
			marca,
			descricao,
			codigo,
			valor,
			setor_id,
			id,
		]);
		return updatedEquipamento;
	}

	async deletarEquipamento(id) {
		const deletedEquipamento = await this.conexao.execute(
			"DELETE FROM equipamento WHERE id = ?",
			[id]
		);
		return deletedEquipamento;
	}

	async buscarEquipamentoPorId(id) {
		const query =
			"SELECT e.id, e.nome, e.marca, e.descricao, e.codigo, e.valor, s.nome AS setor FROM equipamento e JOIN setor s ON s.id = e.setor_id WHERE e.id = ?";
		const [equipamento] = await this.conexao.execute(query, [id]);

		// Retorna a primeira linha (se existir) como uma instância da classe Equipamento
		return equipamento;
	}

	async obterLike(nome) {
		nome = nome + "%";
		const query =
			"SELECT e.id, e.nome, e.marca, e.descricao, e.codigo, e.valor, s.nome AS setor FROM equipamento e JOIN setor s ON s.id = e.setor_id WHERE e.nome LIKE ?";
		const [equipamentos] = await this.conexao.execute(query, [nome]);
		return equipamentos.map((row) => new Equipamento(row));
	}
}

module.exports = EquipamentoRepository;

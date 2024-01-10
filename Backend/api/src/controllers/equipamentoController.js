const { request, response } = require("express");
const equipamentoService = require("../Repository/equipamentoRepository");

class EquipamentoController {
	constructor(equipamentoService) {
		this.equipamentoService = equipamentoService;
	}

	obterTodos = async (_request, response) => {
		const equipamentos = await this.equipamentoService.obterTodos();
		return response.status(200).json(equipamentos);
	};

	adicionarEquipamento = async (request, response) => {
		const createdEquipamento = await this.equipamentoService.createEquipamento(
			request.body
		);
		return response.status(201).json(createdEquipamento);
	};

	atualizarEquipamento = async (request, response) => {
		const { id } = request.params;
		await this.equipamentoService.atualizarEquipamento(id, request.body);
		return response.status(200).json();
	};

	deletarEquipamento = async (request, response) => {
		const { id } = request.params;

		await this.equipamentoService.deletarEquipamento(id);
		return response.status(200).json();
	};

	buscarEquipamento = async (request, response) => {
		const { id } = request.params;
		const [equipamento] = await this.equipamentoService.buscarEquipamentoPorId(
			id
		);
		return response.status(200).json(equipamento);
	};

	obterLike = async (request, response) => {
		const { nome } = request.query;
		const equipamentos = await this.equipamentoService.obterLike(nome);
		return response.status(200).json(equipamentos);
	};
}

module.exports = EquipamentoController;

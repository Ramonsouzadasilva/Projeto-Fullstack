const { request, response } = require("express");
const setorService = require("../Repository/setorRepository");

class SetorController {
	constructor(setorService) {
		this.setorService = setorService;
	}

	obterSetores = async (_request, response) => {
		const setores = await this.setorService.obterSetores();
		return response.status(200).json(setores);
	};

	adicionarSetor = async (request, response) => {
		const createdSetor = await this.setorService.createSetor(request.body);
		return response.status(201).json(createdSetor);
	};

	atualizarSetor = async (request, response) => {
		const { id } = request.params;
		await this.setorService.atualizarSetor(id, request.body);
		return response.status(200).json();
	};

	deletarSetor = async (request, response) => {
		const { id } = request.params;
		await this.setorService.deletarSetor(id);
		return response.status(200).json();
	};

	buscarSetor = async (request, response) => {
		const { id } = request.params;
		const setor = await this.setorService.buscarSetorPorId(id);
		return response.status(200).json(setor);
	};

	obterLikeSetor = async (request, response) => {
		const { nome } = request.query;
		const setores = await this.setorService.obterLike(nome);
		return response.status(200).json(setores);
	};
}

module.exports = SetorController;

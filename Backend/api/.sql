use api_servico;

CREATE TABLE setor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL
)ENGINE=INNODB;

-- Criar a tabela equipamento com o novo atributo setor
CREATE TABLE equipamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    setor_id INT,
    FOREIGN KEY (setor_id) REFERENCES setor(id)
)ENGINE=INNODB;

-- Criar a tabela ordem_de_servico
CREATE TABLE ordem_de_servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(150) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    equipamento_id INT,
    tipo_manutencao VARCHAR(50) NOT NULL,
    data_emissao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipamento_id) REFERENCES equipamento(id)
)ENGINE=INNODB;


-- Inserir dados na tabela setor
INSERT INTO setor (nome, codigo) VALUES
('Produção de Peças', 'PP001'),
('Manutenção de Máquinas', 'MM002'),
('Controle de Qualidade', 'CQ003');

-- Inserir dados na tabela equipamento
INSERT INTO equipamento (nome, marca, descricao, codigo, valor, setor_id) VALUES
('Torno CNC', 'Mazak', 'Máquina de usinagem CNC para produção', 'CNC001', 80000.00, 1),
('Fresadora Vertical', 'Haas', 'Máquina de fresagem para produção', 'FRS002', 60000.00, 1),
('Máquina de Solda a Arco', 'Lincoln Electric', 'Máquina de solda para processos de fabricação', 'SOL003', 5000.50, 2);

-- Inserir dados na tabela ordem_de_servico
INSERT INTO ordem_de_servico (descricao, codigo, equipamento_id, tipo_manutencao) VALUES
('Substituição de Ferramenta de Corte', 'OS001', 1, 'Manutenção Corretiva'),
('Calibração de Fresadora', 'OS002', 2, 'Calibração Mecânica'),
('Manutenção Preventiva em Máquina de Solda', 'OS003', 3, 'Manutenção Preventiva');


-- Inserir dados na tabela setor
INSERT INTO setor (nome, codigo) VALUES
('Fundição', 'FND001'),
('Usinagem de Precisão', 'UP002'),
('Montagem', 'MTG003');

-- Inserir dados na tabela equipamento
INSERT INTO equipamento (nome, marca, descricao, codigo, valor, setor_id) VALUES
('Forno de Indução', 'Inductotherm', 'Forno para fundição de metais', 'FRN001', 120000.00, 1),
('Torno Vertical CNC', 'Doosan', 'Máquina para usinagem de peças grandes', 'CNC002', 100000.00, 2),
('Robô de Solda', 'ABB', 'Robô para soldagem automatizada', 'ROB003', 25000.50, 3);

-- Inserir dados na tabela ordem_de_servico
INSERT INTO ordem_de_servico (descricao, codigo, equipamento_id, tipo_manutencao) VALUES
('Troca de Cadinho no Forno de Indução', 'OS004', 1, 'Manutenção Corretiva'),
('Ajuste Fino do Torno CNC', 'OS005', 2, 'Ajuste de Precisão'),
('Atualização de Software no Robô de Solda', 'OS006', 3, 'Manutenção de Software');

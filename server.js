const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Caminho do arquivo JSON local
const arquivoProfissionais = path.join(__dirname, "dados", "profissionais.json");

// Função para ler os dados do arquivo JSON
function lerProfissionais() {
  try {
    const dados = fs.readFileSync(arquivoProfissionais, "utf-8");
    return JSON.parse(dados);
  } catch (erro) {
    console.error("Erro ao ler o arquivo JSON:", erro.message);
    return [];
  }
}

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Profissionais de Saúde",
    rotas: {
      listarProfissionais: "/profissionais",
      listarEspecialidades: "/especialidades",
      filtrarPorEspecialidade: "/profissionais/especialidade/:especialidade",
      buscarPorNome: "/profissionais/busca?nome=mariana"
    }
  });
});

// Listar todos os profissionais
app.get("/profissionais", (req, res) => {
  const profissionais = lerProfissionais();
  res.json(profissionais);
});

// Listar especialidades sem repetição
app.get("/especialidades", (req, res) => {
  const profissionais = lerProfissionais();

  const especialidades = [
    ...new Set(profissionais.map((profissional) => profissional.especialidade))
  ];

  res.json(especialidades);
});

// Filtrar profissionais por especialidade
app.get("/profissionais/especialidade/:especialidade", (req, res) => {
  const profissionais = lerProfissionais();
  const especialidadeParam = req.params.especialidade.toLowerCase();

  const resultado = profissionais.filter((profissional) =>
    profissional.especialidade.toLowerCase() === especialidadeParam
  );

  if (resultado.length === 0) {
    return res.status(404).json({
      mensagem: "Nenhum profissional encontrado para essa especialidade."
    });
  }

  res.json(resultado);
});

// Buscar profissional por nome
app.get("/profissionais/busca", (req, res) => {
  const profissionais = lerProfissionais();
  const nomeBusca = req.query.nome;

  if (!nomeBusca) {
    return res.status(400).json({
      mensagem: "Informe um nome para busca. Exemplo: /profissionais/busca?nome=mariana"
    });
  }

  const resultado = profissionais.filter((profissional) =>
    profissional.nome.toLowerCase().includes(nomeBusca.toLowerCase())
  );

  if (resultado.length === 0) {
    return res.status(404).json({
      mensagem: "Nenhum profissional encontrado com esse nome."
    });
  }

  res.json(resultado);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
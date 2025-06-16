const dados = {
  estruturas: [
    { nome: "Daniel Raposo", pontuacao: 100, foto: "https://avatars.dicebear.com/api/avataaars/fox.svg" },
    { nome: "Victor Hugo", pontuacao: 96, foto: "https://avatars.dicebear.com/api/avataaars/owl.svg" },
    { nome: "Yann Lucas", pontuacao: 80, foto: "https://avatars.dicebear.com/api/avataaars/deer.svg" },
    { nome: "Andressa Gabriele", pontuacao: 79, foto: "https://avatars.dicebear.com/api/avataaars/cat.svg" },
    { nome: "Sophya", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/rabbit.svg" },
    { nome: "Rafael", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/penguin.svg" },
    { nome: "Giovanne", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/dog.svg" },
  ],
  git: [
    { nome: "Daniel Raposo", pontuacao: 96, foto: "https://avatars.dicebear.com/api/avataaars/fox.svg" },
    { nome: "Victor Hugo", pontuacao: 90, foto: "https://avatars.dicebear.com/api/avataaars/owl.svg" },
    { nome: "Rafael", pontuacao: 82, foto: "https://avatars.dicebear.com/api/avataaars/penguin.svg" },
    { nome: "Andressa Gabriele", pontuacao: 81, foto: "https://avatars.dicebear.com/api/avataaars/cat.svg" },
    { nome: "Yann Lucas", pontuacao: 77, foto: "https://avatars.dicebear.com/api/avataaars/deer.svg" },
    { nome: "Giovanne", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/dog.svg" },
    { nome: "Sophya", pontuacao: 76, foto: "https://avatars.dicebear.com/api/avataaars/rabbit.svg" },
  ],
  html: [
    { nome: "Victor Hugo", pontuacao: 100, foto: "https://avatars.dicebear.com/api/avataaars/owl.svg" },
    { nome: "Elias", pontuacao: 90, foto: "https://avatars.dicebear.com/api/avataaars/fox.svg" },
    { nome: "Sophya", pontuacao: 85, foto: "https://avatars.dicebear.com/api/avataaars/rabbit.svg" },
    { nome: "Daniel", pontuacao: 90, foto: "https://avatars.dicebear.com/api/avataaars/fox.svg" },
    { nome: "Giovanne", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/dog.svg" },
    { nome: "Rafael", pontuacao: 89, foto: "https://avatars.dicebear.com/api/avataaars/penguin.svg" },
    { nome: "Andressa", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/cat.svg" },
    { nome: "Yann Lucas", pontuacao: 75, foto: "https://avatars.dicebear.com/api/avataaars/deer.svg" },
  ]
};


function renderRanking(idElemento, listaAlunos) {
  const ul = document.getElementById(idElemento);
  listaAlunos
    .sort((a, b) => b.pontuacao - a.pontuacao)
    .forEach((aluno, index) => {
      const li = document.createElement("li");
      li.classList.add("ranking-item");
      li.innerHTML = `
        <span class="posicao">#${index + 1}</span>
        <img src="${aluno.foto}" alt="Ícone de ${aluno.nome}" />
        <span class="nome">${aluno.nome}</span>
        <span class="pontuacao">${aluno.pontuacao} pts</span>
      `;
      ul.appendChild(li);
    });
}

renderRanking("ranking-estruturas", dados.estruturas);
renderRanking("ranking-git", dados.git);
renderRanking("ranking-html", dados.html);

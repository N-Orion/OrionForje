

const nomes = [
  "Edrik", "Lysandra", "Borin", "Selene", "Tharion", "Mira",
  "Kael", "Vesper", "Darian", "Nyx", "Aldric", "Seraphine",
  "Roderick", "Isolde", "Garrick", "Elara", "Fenris", "Lyra",
  "Caius", "Evelyn", "Lucian", "Rowan", "Selwyn", "Thalia",
  "Veyra", "Zarek", "Orin", "Sylas", "Tamsin", "Vanya", "Xander",
  "Yara", "Zephyr", "Aeliana", "Bastian", "Cassandra", "Dorian", "Elysia",
  "Fiona", "Gideon", "Helena", "Icarus", "Jasper", "Kiera",
  "Liora", "Magnus", "Nerissa", "Oberon", "Peregrine", "Quinn",
  "Rhiannon", "Soren", "Talia", "Ulric", "Valeria", "Wren",
  "Xanthe", "Yorick", "Zinnia", "Alaric", "Briony", "Cyrus", "Dahlia", "Eamon",
  "Garron", "Hespera", "Isidore", "Jocelyn", "Kaelen", "Mordecai", "Nimue", "Oriana"
];

const profissoes = [
  "Ferreiro", "Mercadora", "Coveiro", "Caçadora", "Alquimista",
  "Guarda aposentado", "Bibliotecário arcano", "Contrabandista",
  "Sacerdotisa", "Minerador", "Taverneiro", "Caçador de recompensas",
  "Cartógrafo", "Curandeiro", "Espião", "Inventor excêntrico",
  "Mestre de armas", "Navegador", "Pescador", "Sacerdote itinerante",
  "Vidente", "Xamã", "Zelador de ruínas"
];

const segredos = [
  "esconde um artefato roubado",
  "trabalha secretamente para um culto proibido",
  "falsifica documentos de famílias nobres",
  "deve uma grande dívida a criminosos da capital",
  "presenciou um assassinato envolvendo a guarda local",
  "é o último herdeiro de uma linhagem esquecida",
  "mantém um portal instável escondido em seu porão",
  "possui um mapa para uma cidade perdida",
  "uma vez foi um espião para uma nação inimiga",
  "tem visões de um futuro apocalíptico",
  "há rumores de que é imortal e vive há séculos",
  "já negociou com demônios para obter poder"
];

const ganchos = [
  "precisa de escolta até uma cidade distante",
  "pede ajuda para recuperar um objeto roubado",
  "acredita estar sendo perseguido por assassinos",
  "quer investigar ruínas recém-descobertas",
  "procura aventureiros para quebrar uma antiga maldição",
  "oferece uma recompensa por informações sobre um desaparecimento",
  "está disposto a compartilhar segredos de uma guilda rival",
  "vai recompensar quem ajudá-lo a escapar de um inimigo poderoso",
  "precisa de proteção enquanto transporta uma carga valiosa",
  "procura mercenários para escoltar uma caravana amaldiçoada",
  "afirma ter encontrado a entrada para um templo subterrâneo esquecido",
  "quer contratar aventureiros para espionar um nobre suspeito"
];

const locais = [
  "nas minas abandonadas de Kar-Dur",
  "na floresta de Vhalor",
  "nas ruínas do antigo império",
  "na vila costeira de Brisamar",
  "no subterrâneo abaixo da capital",
  "na fortaleza congelada de Skarn",
  "no pântano das Sombras Silenciosas",
  "na torre destruída de Arkenfall",
  "no deserto de vidro de Sarth",
  "na cadeia montanhosa de Durnak",
  "na floresta carmesim de Elarion",
  "nas cavernas cristalinas de Myr",
  "na cidade subterrânea de Khaz-Tor",
  "no arquipélago tempestuoso de Valmere",
  "na planície amaldiçoada de Ordrath"
];

const recompensas = [
  "150 moedas de ouro",
  "um mapa antigo",
  "uma recomendação da guarda real",
  "um grimório raro",
  "um favor de uma família influente",
  "uma arma de aço rúnico",
  "acesso a uma biblioteca proibida",
  "um título honorário concedido pela cidade",
  "uma relíquia élfica esquecida",
  "um cavalo de guerra treinado",
  "um contrato de proteção vitalício",
  "um fragmento de cristal arcano",
  "um medalhão capaz de detectar magia fraca",
  "direitos de exploração sobre uma mina abandonada",
  "um pergaminho contendo um ritual perdido"
];

const itensMagicos = [
  "Anel das Brasas Eternas",
  "Lâmina do Crepúsculo",
  "Lanterna dos Ecos Perdidos",
  "Manto do Caçador Sombrio",
  "Martelo da Forja Ancestral"
];

const efeitos = [
  "permite enxergar no escuro absoluto",
  "concede resistência moderada ao fogo",
  "revela portas e passagens ocultas próximas",
  "aumenta drasticamente a força durante alguns segundos",
  "permite falar brevemente com espíritos de objetos antigos"
];

const puzzles = [
  {
    titulo: "As Três Alavancas",
    descricao: "Uma porta possui três alavancas marcadas com sol, lua e estrela. Apenas duas devem ser puxadas na ordem correta."
  },
  {
    titulo: "O Salão dos Ecos",
    descricao: "O eco repete uma frase alterando uma palavra a cada tentativa. Os aventureiros precisam descobrir a versão original."
  },
  {
    titulo: "O Relógio Sem Ponteiros",
    descricao: "Doze runas representam os meses do ano. Ative apenas as runas das estações corretas para abrir a passagem."
  }
];

const regrasDaCasa = [
  "Uma vez por sessão, um jogador pode declarar: 'Eu conheço alguém'. O mestre deve incorporar esse contato à narrativa.",
  "Quando um personagem tira 20 natural fora de combate, ele descobre um detalhe útil sobre o ambiente.",
  "Todo personagem começa com um objeto estranho sem explicação. Em algum momento da campanha, o mestre revelará sua importância.",
  "Após uma falha crítica, o jogador pode narrar uma consequência cômica em vez de sofrer uma punição severa.",
  "Uma vez por sessão, o grupo pode pedir um 'flashback rápido' para justificar uma preparação anterior plausível."
];

const floras = [
  "pinheiros negros e cogumelos luminescentes",
  "árvores retorcidas cobertas por musgo vermelho",
  "campos de flores azul-prateadas",
  "juncos altos e raízes expostas sobre águas escuras",
  "vegetação tropical densa com cipós gigantes"
];

const economias = [
  "mineração de ferro negro",
  "comércio marítimo",
  "produção de vinho e ervas raras",
  "caça e curtimento de peles",
  "extração de cristais arcanos"
];

const regimes = [
  "conselho de clãs",
  "monarquia mercantil",
  "teocracia devota aos espíritos antigos",
  "república controlada por guildas",
  "domínio militar de uma ordem de cavaleiros"
];

const culturas = [
  "valorizam honra e histórias cantadas ao redor da forja central",
  "acreditam que sonhos revelam mensagens dos ancestrais",
  "celebram festivais de máscaras e competições de poesia",
  "consideram visitantes uma oportunidade sagrada de troca cultural",
  "mantêm rígidos rituais de hospitalidade e duelo"
];

const rumores = [
  "Moradores afirmam ouvir sinos vindos de túneis abandonados durante a madrugada.",
  "Dizem que uma figura encapuzada aparece sempre antes de grandes tempestades.",
  "Há relatos de luzes azuis dançando sobre as águas sem deixar reflexo.",
  "Crianças juram ter visto sombras caminhando pelos telhados ao amanhecer.",
  "Um antigo poço da região estaria sussurrando nomes de pessoas desaparecidas.",
  "Pescadores evitam uma determinada área do rio por medo de algo que os observa das profundezas.",
  "Alguns viajantes afirmam que a floresta muda de posição durante noites sem lua.",
  "Existe um boato de que uma cripta selada guarda um rei que nunca morreu de verdade.",
  "Moradores mais velhos evitam pronunciar o nome original da cidade por acreditarem que ele atrai desgraça.",
  "Dizem que um dragão adormecido repousa sob as montanhas e que tremores leves são sua respiração."
];

const somForja = new Audio("Sons/forja.mp3");
somForja.volume = 0.25;

function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function atualizarResultado(html) {
  document.getElementById("resultado").innerHTML = html;
}

function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = mensagem;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function tocarForja() {
  somForja.currentTime = 0;
  somForja.play().catch(() => {});
}

function gerarNPC() {
  tocarForja();
  atualizarResultado(`
    <h2>🎭 ${aleatorio(nomes)}</h2>
    <p><strong>Função:</strong> ${aleatorio(profissoes)}</p>
    <p><strong>Segredo:</strong> ${aleatorio(segredos)}</p>
    <p><strong>Gancho:</strong> ${aleatorio(ganchos)}.</p>
  `);
}

function gerarMissaoCurta() {
  tocarForja();
  atualizarResultado(`
    <h2>📜 Missão Curta</h2>
    <p><strong>Objetivo:</strong> ${aleatorio(ganchos)}.</p>
    <p><strong>Local:</strong> ${aleatorio(locais)}.</p>
    <p><strong>Recompensa:</strong> ${aleatorio(recompensas)}.</p>
  `);
}

function gerarMissaoLonga() {
  tocarForja();
  atualizarResultado(`
    <h2>🗺️ Missão Longa</h2>
    <p><strong>Introdução:</strong> Uma série de eventos estranhos começou a ocorrer ${aleatorio(locais)}.</p>
    <p><strong>Objetivo principal:</strong> ${aleatorio(ganchos)}.</p>
    <p><strong>Complicação:</strong> Um grupo rival também busca resolver o problema, mas possui intenções duvidosas.</p>
    <p><strong>Conclusão possível:</strong> O sucesso pode render ${aleatorio(recompensas)}, mas também revelará um segredo maior ligado ao reino.</p>
  `);
}

function gerarRegiao() {
  tocarForja();
  atualizarResultado(`
    <h2>🌍 Região Gerada</h2>
    <p><strong>Flora:</strong> ${aleatorio(floras)}.</p>
    <p><strong>Ambientação:</strong> ${aleatorio(locais)}.</p>
    <p><strong>Economia:</strong> ${aleatorio(economias)}.</p>
    <p><strong>Regime:</strong> ${aleatorio(regimes)}.</p>
    <p><strong>Cultura:</strong> ${aleatorio(culturas)}.</p>
    <p><strong>Rumor:</strong> ${aleatorio(rumores)}</p>
  `);
}

function gerarItemMagico() {
  tocarForja();
  atualizarResultado(`
    <h2>✨ ${aleatorio(itensMagicos)}</h2>
    <p><strong>Efeito:</strong> ${aleatorio(efeitos)}.</p>
    <p>Forjado durante uma antiga guerra entre reinos e dragões.</p>
  `);
}

function gerarPuzzle() {
  tocarForja();
  const p = aleatorio(puzzles);

  atualizarResultado(`
    <h2>🧩 ${p.titulo}</h2>
    <p>${p.descricao}</p>
  `);
}

function gerarRegraCasa() {
  tocarForja();
  atualizarResultado(`
    <h2>🎭 Regra da Casa</h2>
    <p>${aleatorio(regrasDaCasa)}</p>
  `);
}

function copiarResultado() {
  const texto = document.getElementById("resultado").innerText;

  navigator.clipboard.writeText(texto).then(() => {
    mostrarToast("📋 Conteúdo copiado!");
  });
}

function salvarResultado() {
  const conteudo = document.getElementById("resultado").innerHTML;

  let salvos = JSON.parse(localStorage.getItem("orionforge_salvos")) || [];

  salvos.unshift({
    data: new Date().toLocaleString("pt-BR"),
    conteudo
  });

  localStorage.setItem("orionforge_salvos", JSON.stringify(salvos));

  mostrarToast("💾 Resultado salvo!");

  carregarSalvos();
}

function carregarSalvos() {
  const lista = document.getElementById("listaSalvos");

  if (!lista) return;

  const salvos = JSON.parse(localStorage.getItem("orionforge_salvos")) || [];

  if (salvos.length === 0) {
    lista.innerHTML = "<p>Nenhum conteúdo salvo ainda.</p>";
    return;
  }

  lista.innerHTML = salvos.map((item, i) => `
    <div class="salvo-item">
      <h3>📌 Salvo #${i + 1}</h3>
      <small>${item.data}</small>
      <div>${item.conteudo}</div>
    </div>
  `).join("");
}

function limparSalvos() {
  localStorage.removeItem("orionforge_salvos");
  carregarSalvos();
  mostrarToast("🗑️ Todos os salvos foram removidos!");
}

document.addEventListener("DOMContentLoaded", () => {
  // Geradores
  document.getElementById("btnNPC").addEventListener("click", gerarNPC);
  document.getElementById("btnMissaoCurta").addEventListener("click", gerarMissaoCurta);
  document.getElementById("btnMissaoLonga").addEventListener("click", gerarMissaoLonga);
  document.getElementById("btnRegiao").addEventListener("click", gerarRegiao);
  document.getElementById("btnItemMagico").addEventListener("click", gerarItemMagico);
  document.getElementById("btnPuzzle").addEventListener("click", gerarPuzzle);
  document.getElementById("btnRegraCasa").addEventListener("click", gerarRegraCasa);

  // Ações
  document.getElementById("btnCopiar").addEventListener("click", copiarResultado);
  document.getElementById("btnSalvar").addEventListener("click", salvarResultado);

  // Configurações
  document.getElementById("btnLimparSalvos").addEventListener("click", limparSalvos);

  // Abas
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      tab.classList.add("active");

      const alvo = document.getElementById(tab.dataset.tab);
      if (alvo) {
        alvo.classList.add("active");
      }

      if (tab.dataset.tab === "salvos") {
        carregarSalvos();
      }
    });
  });

  carregarSalvos();
});

function atualizarResultado(html) {
  const resultado = document.getElementById("resultado");

  resultado.classList.add("forjando");

  setTimeout(() => {
    resultado.innerHTML = html;
    resultado.classList.remove("forjando");
  }, 120);
}
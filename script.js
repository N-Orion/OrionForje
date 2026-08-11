

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
  "Martelo da Forja Ancestral",
  "Coroa das Cinzas Silenciosas",
  "Adaga do Sussurro Carmesim",
  "Orbe das Marés Profundas",
  "Escudo do Guardião Adormecido",
  "Colar das Estrelas Caídas",
  "Botas do Peregrino Fantasma",
  "Livro das Chamas Azuis",
  "Flauta do Bosque Sem Lua",
  "Ampulheta do Último Suspiro",
  "Elmo do Rei Afogado"
];

const efeitos = [
  "permite enxergar no escuro absoluto",
  "concede resistência moderada ao fogo",
  "revela portas e passagens ocultas próximas",
  "aumenta drasticamente a força durante alguns segundos",
  "permite falar brevemente com espíritos de objetos antigos",
  "silencia completamente os passos do portador por alguns minutos",
  "faz pequenas chamas azuis flutuarem ao redor do usuário quando há perigo próximo",
  "permite respirar debaixo d'água por até uma hora",
  "restaura lentamente a vitalidade enquanto o portador dorme",
  "projeta uma ilusão simples para distrair criaturas inteligentes",
  "permite compreender inscrições antigas e idiomas esquecidos",
  "faz sombras próximas se moverem como servos temporários",
  "absorve uma pequena quantidade de dano mágico antes de se dissipar",
  "permite ouvir sussurros distantes trazidos pelo vento",
  "marca criaturas hostis com um brilho visível apenas para o portador"
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
  },
  {
    titulo: "As Taças do Alquimista",
    descricao: "Três taças contêm líquidos de cores diferentes. Apenas uma combinação específica revela a passagem secreta."
  },
  {
    titulo: "O Mosaico Quebrado",
    descricao: "Peças de um antigo mosaico devem ser organizadas para representar o ciclo das estações."
  },
  {
    titulo: "As Velas da Cripta",
    descricao: "Quatro velas precisam ser apagadas em uma ordem determinada pelas inscrições nas paredes."
  },
  {
    titulo: "O Julgamento dos Corvos",
    descricao: "Estátuas de corvos apontam para diferentes portas. Apenas a porta indicada pelo corvo mentiroso leva adiante."
  },
  {
    titulo: "A Ponte dos Pesos",
    descricao: "Uma ponte só permanece estável quando exatamente o peso correto é distribuído entre seus pilares."
  },
  {
    titulo: "O Espelho da Rainha",
    descricao: "Um espelho mostra símbolos invertidos que devem ser pressionados na ordem refletida."
  },
  {
    titulo: "As Estrelas de Bronze",
    descricao: "Discos metálicos precisam ser girados para alinhar uma constelação específica."
  },
  {
    titulo: "O Corredor das Sombras",
    descricao: "Atravessar o corredor exige pisar apenas nas pedras que permanecem iluminadas pela chama central."
  },
  {
    titulo: "A Biblioteca Silenciosa",
    descricao: "Livros numerados escondem uma sequência lógica baseada em títulos aparentemente aleatórios."
  },
  {
    titulo: "O Sino Submerso",
    descricao: "Sinos parcialmente inundados produzem notas diferentes dependendo do nível da água. A melodia correta abre a comporta."
  },
  {
    titulo: "As Máscaras Gêmeas",
    descricao: "Duas máscaras trocam de expressão quando observadas de ângulos diferentes; apenas uma representa a verdade."
  },
  {
    titulo: "O Jardim de Pedra",
    descricao: "Estátuas de animais precisam ser giradas para apontar na direção de seus habitats naturais."
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
  "vegetação tropical densa com cipós gigantes",
  "bosques de bétulas pálidas envoltas por névoa constante",
  "samambaias gigantes e flores que exalam perfume adocicado ao anoitecer",
  "cactos cristalizados que refletem a luz como vidro colorido",
  "vinhas negras que crescem sobre ruínas antigas",
  "campos de lavanda cinzenta balançando sob ventos frios",
  "árvores de casca azulada e folhas douradas no outono eterno",
  "manguezais sombrios repletos de raízes entrelaçadas",
  "pradarias cobertas por ervas altas que brilham sob a lua cheia",
  "florestas de bambu vermelho que produzem sons semelhantes a flautas",
  "jardins selvagens de rosas negras e heras prateadas"
];

const economias = [
  "mineração de ferro negro",
  "comércio marítimo",
  "produção de vinho e ervas raras",
  "caça e curtimento de peles",
  "extração de cristais arcanos",
  "criação de cavalos de guerra e montarias exóticas",
  "comércio de especiarias vindas de desertos distantes",
  "fundição de bronze e fabricação de armaduras ornamentadas",
  "pesca de criaturas abissais e venda de seus subprodutos",
  "cultivo de cogumelos medicinais em cavernas subterrâneas",
  "produção de pergaminhos, tintas raras e livros copiados à mão",
  "comércio de relíquias recuperadas de ruínas antigas",
  "refino de sal extraído de lagos cristalizados",
  "tecelagem de tecidos luxuosos feitos com fibras de insetos gigantes",
  "fornecimento de mercenários e escoltas armadas para caravanas"
];

const regimes = [
  "conselho de clãs",
  "monarquia mercantil",
  "teocracia devota aos espíritos antigos",
  "república controlada por guildas",
  "domínio militar de uma ordem de cavaleiros",
  "oligarquia de famílias comerciantes rivais",
  "governo tribal liderado por xamãs e chefes guerreiros",
  "magocracia administrada por um círculo de arquimagos",
  "cidade-estado governada por um príncipe eleito entre os nobres",
  "ditadura de um conquistador que unificou a região pela força",
  "aliança frouxa de vilas independentes que se reúnem em tempos de crise",
  "reinado dual em que um monarca governa ao lado de um sumo sacerdote",
  "governo secreto manipulado por uma sociedade de mascarados",
  "confederação marítima comandada pelos capitães das maiores frotas",
  "administração burocrática controlada por escribas e coletores de impostos"
];

const culturas = [
  "valorizam honra e histórias cantadas ao redor da forja central",
  "acreditam que sonhos revelam mensagens dos ancestrais",
  "celebram festivais de máscaras e competições de poesia",
  "consideram visitantes uma oportunidade sagrada de troca cultural",
  "mantêm rígidos rituais de hospitalidade e duelo",
  "registram acontecimentos importantes em tapeçarias bordadas à mão",
  "creem que cada pessoa nasce acompanhada por um espírito protetor invisível",
  "realizam corridas cerimoniais durante o solstício de verão",
  "usam tatuagens rúnicas para marcar conquistas e juramentos",
  "valorizam o silêncio e a contemplação acima da riqueza material",
  "realizam banquetes coletivos para resolver disputas entre famílias",
  "acreditam que a música possui poder de afastar maus espíritos",
  "preservam lendas ancestrais através de contadores de histórias itinerantes",
  "tratam ferreiros e artesãos como figuras quase sagradas",
  "consideram a caça ritual uma forma de agradecer aos espíritos da natureza"
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
  "Dizem que um dragão adormecido repousa sob as montanhas e que tremores leves são sua respiração.",
  "Uma estrela cadente teria caído nas colinas próximas, e desde então animais nascem com olhos brilhantes.",
  "Há quem diga que uma ponte antiga só pode ser atravessada com segurança durante a neblina da manhã.",
  "Mineiros juram ter encontrado uma porta de ouro maciço enterrada muito abaixo das galerias conhecidas.",
  "Algumas casas da região amanhecem cobertas por cinzas frias mesmo sem haver fogo algum por perto.",
  "Viajantes desaparecidos teriam sido vistos dias depois caminhando em silêncio na direção das montanhas, como se estivessem hipnotizados."
];

const origensMagicas = [
  "foi forjado durante uma antiga guerra entre reinos e dragões",
  "foi encontrado nas ruínas submersas de uma cidade esquecida",
  "pertenceu a um rei cuja linhagem desapareceu sem deixar herdeiros",
  "foi criado por ferreiros anões que desapareceram após concluir a obra",
  "teria sido moldado com metal caído de uma estrela incandescente",
  "foi usado por um caçador lendário para derrotar uma criatura das sombras",
  "permaneceu selado durante séculos em uma cripta protegida por runas antigas",
  "foi presenteado por espíritos da floresta a um guerreiro escolhido",
  "teria sido roubado de um templo dedicado a uma divindade esquecida",
  "foi recuperado do corpo petrificado de um gigante adormecido",
  "foi criado em uma forja alimentada por lava vulcânica eterna",
  "teria sido amaldiçoado após a queda de um império arcano",
  "foi carregado por um capitão fantasma que ainda assombra mares distantes",
  "foi encontrado enterrado sob as raízes de uma árvore milenar",
  "foi forjado para selar um portal entre o mundo mortal e os reinos espirituais"
];

const somForja = new Audio("Sons/forja.mp3");
somForja.volume = 0.25;
const somForjaPesada = new Audio("Sons/forjastrikes.mp3");
somForjaPesada.volume = 0.22;
const somPapel = new Audio("Sons/papel.mp3");
somPapel.volume = 0.18;


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

function tocarForjaPesada() {
  somForjaPesada.currentTime = 0;
  somForjaPesada.play().catch(() => {});
}

function tocarPapel() {
  somPapel.currentTime = 0;
  somPapel.play().catch(() => {});
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

    <p><strong>Origem:</strong> Dizem que este item ${aleatorio(origensMagicas)}.</p>
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
  tocarPapel();

  localStorage.removeItem("orionforge_salvos");
  carregarSalvos();
  mostrarToast("🗑️ Todos os salvos foram removidos!");
}

function gerarForjaRapida() {
  tocarForjaPesada();
  atualizarResultado(`
    <h2>⚒️ Forja Rápida</h2>

    <hr>

    <h3>🎭 NPC</h3>
    <p><strong>Nome:</strong> ${aleatorio(nomes)}</p>
    <p><strong>Profissão:</strong> ${aleatorio(profissoes)}</p>

    <hr>

    <h3>📜 Missão</h3>
    <p>${aleatorio(ganchos)} ${aleatorio(locais)}.</p>
    <p><strong>Recompensa:</strong> ${aleatorio(recompensas)}.</p>

    <hr>

    <h3>🌍 Região</h3>
    <p><strong>Economia:</strong> ${aleatorio(economias)}</p>
    <p><strong>Regime:</strong> ${aleatorio(regimes)}</p>

    <hr>

    <h3>✨ Item Especial</h3>
    <p><strong>${aleatorio(itensMagicos)}</strong></p>
    <p>${aleatorio(efeitos)}.</p>
  `);
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
  document.getElementById("btnForjaRapida").addEventListener("click", gerarForjaRapida);

  // Ações
  document.getElementById("btnCopiar").addEventListener("click", copiarResultado);
  document.getElementById("btnSalvar").addEventListener("click", salvarResultado);
  document.getElementById("btnTemaMagma").addEventListener("click", alternarTema);

// Carregar tema salvo
const temaSalvo = localStorage.getItem("orionforge_tema");
if (temaSalvo === "arcano") {
  document.body.classList.add("tema-arcano");
}

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

function alternarTema() {
  document.body.classList.toggle("tema-arcano");

  const ativo = document.body.classList.contains("tema-arcano");

  localStorage.setItem("orionforge_tema", ativo ? "arcano" : "magma");

  mostrarToast(ativo ? "🌙 Tema Arcano ativado!" : "🌋 Tema Magma ativado!");
}
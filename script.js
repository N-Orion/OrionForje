// ============================================================
// ORIONFORGE — JAVASCRIPT
// ============================================================

// =========================
// BANCO DE DADOS
// =========================

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
  "Xanthe", "Yorick", "Zinnia", "Alaric", "Briony", "Cyrus",
  "Dahlia", "Eamon", "Garron", "Hespera", "Isidore", "Jocelyn",
  "Kaelen", "Mordecai", "Nimue", "Oriana"
];

const profissoes = [
  "Ferreiro",
  "Mercadora",
  "Coveiro",
  "Caçadora",
  "Alquimista",
  "Guarda aposentado",
  "Bibliotecário arcano",
  "Contrabandista",
  "Sacerdotisa",
  "Minerador",
  "Taverneiro",
  "Caçador de recompensas",
  "Cartógrafo",
  "Curandeiro",
  "Espião",
  "Inventor excêntrico",
  "Mestre de armas",
  "Navegador",
  "Pescador",
  "Sacerdote itinerante",
  "Vidente",
  "Xamã",
  "Zelador de ruínas"
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

const humores = [
  "rabugento e impaciente",
  "calmo e observador",
  "eufórico e falante",
  "melancólico e distante",
  "desconfiado de todos",
  "extremamente educado",
  "nervoso e inquieto",
  "sarcástico e provocador",
  "alegre e otimista",
  "frio e calculista",
  "tímido e hesitante",
  "dramático e exagerado",
  "curioso e intrometido",
  "sereno mesmo diante do perigo",
  "amigável, mas excessivamente cauteloso"
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

const urgencias = [
  "algo acontecerá ao pôr do sol se ninguém agir",
  "uma testemunha importante está prestes a desaparecer",
  "os inimigos já descobriram que os aventureiros estão envolvidos",
  "o local será destruído em poucas horas",
  "uma criatura poderosa está se aproximando",
  "a pessoa que contratou os aventureiros será executada ao amanhecer",
  "um ritual já começou e não pode mais ser interrompido facilmente",
  "a única pista encontrada desaparecerá com a próxima maré",
  "uma guerra pode começar se ninguém interferir",
  "os responsáveis estão prestes a fugir da região",
  "uma doença misteriosa está se espalhando rapidamente",
  "o objeto procurado será vendido para outro reino ainda hoje",
  "uma passagem importante ficará inacessível em breve",
  "uma segunda vítima foi marcada e será atacada em breve",
  "algo muito pior acontecerá caso o problema seja ignorado"
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

const bangs = [
  "Dois guardas arrombam a porta procurando por alguém.",
  "Um assassino tenta envenenar a bebida de um dos aventureiros.",
  "Uma explosão acontece no distrito vizinho.",
  "Um mensageiro ferido chega carregando uma informação urgente.",
  "Uma criatura cai do céu bem diante dos aventureiros.",
  "Alguém grita o nome de um dos personagens no meio da multidão.",
  "As portas da cidade são fechadas repentinamente.",
  "Um incêndio começa em um prédio próximo.",
  "Um estranho coloca uma pequena caixa nas mãos de um dos aventureiros e foge.",
  "Um grupo armado aparece procurando pelos personagens.",
  "Uma pessoa importante é sequestrada diante dos aventureiros.",
  "Um terremoto revela uma passagem subterrânea.",
  "Uma criatura desconhecida começa a atacar a região.",
  "Um velho conhecido aparece pedindo ajuda desesperadamente.",
  "Um cadáver cai de uma janela próxima segurando uma mensagem."
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

const papeisDesafio = [
  {
    titulo: "O Capanga",
    icone: "🗡️",
    funcao: "Pressionar o grupo através de quantidade e ritmo.",
    comportamento: "Ataca em grupo, ocupa espaço e não hesita em recuar quando perde vantagem.",
    adaptacao: "Use inimigos básicos ou pouco resistentes disponíveis no sistema da sua mesa.",
    fraqueza: "Individualmente é fraco e pode ser derrotado rapidamente.",
    complicacao: "Quando o grupo começa a vencê-los, chegam novos reforços.",
    pergunta: "Quem está enviando esses inimigos?"
  },
  {
    titulo: "O Tanque",
    icone: "🛡️",
    funcao: "Absorver pressão e impedir que os jogadores alcancem algo mais importante.",
    comportamento: "Avança lentamente, protege aliados e ocupa posições estratégicas.",
    adaptacao: "Escolha uma criatura ou inimigo resistente do sistema utilizado pela mesa.",
    fraqueza: "É lento, previsível ou possui dificuldade para lidar com ataques indiretos.",
    complicacao: "Ao perceber que está perdendo, começa a destruir o ambiente para bloquear o caminho.",
    pergunta: "O que ele está protegendo?"
  },
  {
    titulo: "O Artilheiro",
    icone: "🎯",
    funcao: "Punir jogadores que permanecem expostos e controlar o espaço à distância.",
    comportamento: "Mantém distância, procura posições elevadas e prioriza alvos vulneráveis.",
    adaptacao: "Use um inimigo capaz de atacar à distância ou causar efeitos perigosos de longe.",
    fraqueza: "É vulnerável quando os jogadores conseguem alcançá-lo.",
    complicacao: "Ele começa a mudar de posição constantemente, tornando o terreno parte do desafio.",
    pergunta: "Por que ele não pode simplesmente fugir?"
  },
  {
    titulo: "O Controlador",
    icone: "🕸️",
    funcao: "Limitar opções e alterar o posicionamento dos jogadores.",
    comportamento: "Evita confronto direto e tenta separar o grupo.",
    adaptacao: "Use efeitos de lentidão, medo, imobilização, obstáculos ou qualquer recurso equivalente do sistema.",
    fraqueza: "Possui pouca capacidade de enfrentar jogadores diretamente.",
    complicacao: "Quanto mais tempo permanecer ativo, mais difícil fica atravessar o cenário.",
    pergunta: "Quem se beneficia enquanto os jogadores estão presos?"
  },
  {
    titulo: "O Assassino",
    icone: "🗡️",
    funcao: "Punir distrações e transformar vulnerabilidade em perigo imediato.",
    comportamento: "Espera uma abertura, escolhe um alvo isolado e ataca rapidamente.",
    adaptacao: "Use um inimigo furtivo, móvel ou especializado em ataques contra alvos vulneráveis.",
    fraqueza: "Perde grande parte da vantagem quando é descoberto.",
    complicacao: "Se escapar, poderá retornar em outro momento.",
    pergunta: "Por que esse alvo específico foi escolhido?"
  },
  {
    titulo: "O Guardião",
    icone: "👑",
    funcao: "Impedir o acesso a algo importante.",
    comportamento: "Permanece próximo do objetivo e reage a qualquer tentativa de aproximação.",
    adaptacao: "Pode ser uma criatura, guerreiro, entidade, mecanismo ou até uma pessoa.",
    fraqueza: "Está preso ao seu objetivo ou possui uma condição que pode ser explorada.",
    complicacao: "Derrotá-lo não resolve necessariamente o problema.",
    pergunta: "O que existe atrás dele?"
  },
  {
    titulo: "O Perigo Ambiental",
    icone: "🔥",
    funcao: "Transformar o próprio cenário em uma ameaça.",
    comportamento: "Não possui intenção própria; o perigo simplesmente continua acontecendo.",
    adaptacao: "Use incêndios, desmoronamentos, veneno, enchentes, frio extremo ou qualquer ameaça equivalente.",
    fraqueza: "Pode ser contornado, controlado ou utilizado pelos jogadores.",
    complicacao: "A situação piora enquanto os jogadores discutem ou hesitam.",
    pergunta: "O que acontecerá se ninguém fizer nada?"
  },
  {
    titulo: "A Contagem Regressiva",
    icone: "⏳",
    funcao: "Impedir que os jogadores tenham tempo infinito para planejar.",
    comportamento: "O desafio se torna progressivamente pior.",
    adaptacao: "Estabeleça uma quantidade de rodadas, minutos ou etapas antes de algo acontecer.",
    fraqueza: "Os jogadores podem acelerar a solução se assumirem riscos.",
    complicacao: "Cada etapa perdida aumenta o custo da solução.",
    pergunta: "O que acontece quando o tempo acabar?"
  },
  {
    titulo: "O Obstáculo",
    icone: "🧩",
    funcao: "Impedir o progresso sem depender de combate.",
    comportamento: "Exige observação, criatividade, conhecimento ou uso inteligente dos recursos.",
    adaptacao: "Transforme portas, enigmas, ambientes perigosos ou problemas logísticos em desafios.",
    fraqueza: "Existe mais de uma maneira de resolver o problema.",
    complicacao: "Uma solução rápida pode criar um problema posterior.",
    pergunta: "Qual solução os jogadores ainda não consideraram?"
  },
  {
    titulo: "O Conflito Social",
    icone: "👥",
    funcao: "Criar tensão através de negociação, autoridade ou interesses conflitantes.",
    comportamento: "Resiste aos jogadores porque possui algo a ganhar ou perder.",
    adaptacao: "Pode ser um nobre, comerciante, líder, testemunha, criminoso ou aliado.",
    fraqueza: "Possui desejos que podem ser explorados.",
    complicacao: "A conversa atrai a atenção de alguém que não deveria estar ouvindo.",
    pergunta: "O que essa pessoa realmente quer?"
  },
  {
    titulo: "A Perseguição",
    icone: "🏃",
    funcao: "Transformar movimento e urgência no próprio desafio.",
    comportamento: "O alvo tenta escapar ou os jogadores precisam alcançá-lo.",
    adaptacao: "Use obstáculos, terrenos difíceis, atalhos e consequências para representar a perseguição.",
    fraqueza: "O alvo possui uma rota previsível ou precisa chegar a algum lugar específico.",
    complicacao: "Um terceiro grupo entra na perseguição.",
    pergunta: "O que acontece se o alvo escapar?"
  },
  {
    titulo: "O Sacrifício",
    icone: "💀",
    funcao: "Forçar os jogadores a escolherem entre duas coisas importantes.",
    comportamento: "O desafio não possui uma solução completamente perfeita.",
    adaptacao: "Faça os jogadores escolherem entre tempo, recursos, segurança, informação ou pessoas.",
    fraqueza: "Existe sempre alguma forma de reduzir o custo.",
    complicacao: "A escolha terá consequências futuras.",
    pergunta: "O que os jogadores estão dispostos a perder?"
  }
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

const tiposConfronto = [
  "Capanga",
  "Tanque",
  "Elite",
  "Chefe",
  "Perigo Ambiental",
  "Controlador",
  "Emboscador",
  "Perseguidor",
  "Guardião",
  "Enxame"
];

const comportamentosConfronto = [
  "avança diretamente contra o alvo mais vulnerável",
  "protege uma criatura ou objeto importante",
  "tenta separar o grupo antes de atacar",
  "usa o ambiente a seu favor",
  "pressiona os personagens sem dar tempo para descanso",
  "recuará quando estiver em desvantagem para atacar novamente depois",
  "tenta capturar um personagem em vez de simplesmente derrotá-lo",
  "ignora os personagens inicialmente e corre em direção ao seu verdadeiro objetivo",
  "ataca em conjunto, coordenando seus movimentos",
  "provoca os personagens para fazê-los cometer um erro"
];

const objetivosConfronto = [
  "impedir que os personagens alcancem determinado local",
  "proteger algo que está prestes a ser descoberto",
  "ganhar tempo para que outro evento aconteça",
  "capturar alguém vivo",
  "forçar os personagens a abandonar uma posição",
  "roubar um objeto importante",
  "eliminar uma testemunha",
  "escapar com uma informação valiosa",
  "impedir que um ritual seja interrompido",
  "sobreviver tempo suficiente para receber reforços"
];

const complicacoesConfronto = [
  "o terreno começa a desmoronar durante o confronto",
  "há civis ou aliados em perigo nas proximidades",
  "o inimigo possui uma segunda estratégia escondida",
  "o confronto atrai outras criaturas",
  "um dos inimigos não está realmente do lado dos outros",
  "o objetivo verdadeiro só fica claro depois que o confronto começa",
  "o ambiente oferece uma vantagem perigosa para ambos os lados",
  "o inimigo pode fugir e retornar mais tarde",
  "o confronto acontece sob uma contagem regressiva",
  "vencer o confronto não significa necessariamente resolver o problema"
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

const lootMissao = [
  "o favor de um nobre local",
  "um mapa antigo escondido no verso de um quadro",
  "uma carta contendo o nome de alguém que deveria estar morto",
  "uma chave sem identificação que abre algo importante",
  "um documento capaz de provar uma antiga traição",
  "um medalhão pertencente a uma família desaparecida",
  "um diário com páginas arrancadas justamente no trecho mais importante",
  "um convite para uma sociedade secreta",
  "um mapa indicando uma região que não aparece em nenhum mapa oficial",
  "um antigo símbolo que pode garantir passagem por território inimigo",
  "uma dívida que alguém poderoso agora tem com o grupo",
  "um nome verdadeiro capaz de comprometer uma figura importante",
  "um fragmento de uma relíquia que parece estar incompleto",
  "uma informação sobre a verdadeira origem de um personagem",
  "uma pista que conecta a missão atual a um acontecimento muito maior"
];

const lootKill = [
  "algumas moedas e pequenos objetos pessoais",
  "uma arma parcialmente danificada",
  "uma pedra preciosa incomum",
  "uma runa gravada em osso",
  "um componente raro para magia",
  "um frasco contendo uma substância desconhecida",
  "um mapa rudimentar com uma localização marcada",
  "um amuleto de origem desconhecida",
  "uma chave enferrujada",
  "um fragmento de cristal mágico",
  "uma pequena relíquia religiosa",
  "um símbolo pertencente a uma organização secreta",
  "uma carta que revela quem contratou a criatura",
  "um objeto aparentemente inútil que pode ter valor posteriormente",
  "um item mágico de poder limitado"
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

const tiposMercadores = [
  "Mercador de materiais para magia",
  "Alquimista especializado em poções",
  "Vendedor de comidas exóticas",
  "Taverneiro especializado em bebidas raras",
  "Mercador de artefatos mágicos",
  "Vendedor de armas antigas",
  "Mercador de pergaminhos e grimórios",
  "Comerciante de joias encantadas",
  "Vendedor de componentes para rituais",
  "Mercador de relíquias encontradas em ruínas",
  "Comerciante de ervas e ingredientes raros",
  "Vendedor de itens para aventureiros",
  "Mercador de objetos amaldiçoados",
  "Comerciante de mapas e informações",
  "Vendedor ambulante de bugigangas mágicas"
];

const peculiaridadesMercadores = [
  "nunca revela seu verdadeiro nome",
  "sempre tenta trocar mercadorias em vez de aceitar dinheiro",
  "conhece histórias demais sobre os aventureiros",
  "mantém um pequeno animal mágico sobre o balcão",
  "afirma que todos os seus produtos possuem uma história",
  "vende alguns itens sem saber que são mágicos",
  "recusa-se a negociar com membros da nobreza",
  "possui um estoque secreto escondido atrás da loja",
  "cobra preços diferentes dependendo da personalidade do cliente",
  "sempre sabe quando alguém está mentindo",
  "coleciona objetos estranhos recebidos como pagamento",
  "tem uma dívida com uma poderosa guilda",
  "desaparece misteriosamente durante certas noites",
  "aceita favores como pagamento",
  "parece saber exatamente o que cada cliente está procurando"
];


// =========================
// SONS
// =========================

const somForja = new Audio("Sons/forja.mp3");
somForja.volume = 0.25;

const somForjaPesada = new Audio("Sons/forjastrikes.mp3");
somForjaPesada.volume = 0.22;

const somPapel = new Audio("Sons/papel.mp3");
somPapel.volume = 0.18;


// =========================
// FUNÇÕES AUXILIARES
// =========================

function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function atualizarResultado(html) {
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  resultado.classList.add("forjando");

  setTimeout(() => {
    resultado.innerHTML = html;
    resultado.classList.remove("forjando");
  }, 120);
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


// =========================
// CONTROLE DE ÁUDIO
// =========================

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


// =========================
// GERADORES
// =========================

function gerarNPC() {
  tocarForja();

  atualizarResultado(`
    <h2>🎭 ${aleatorio(nomes)}</h2>
    <p><strong>Função:</strong> ${aleatorio(profissoes)}</p>
    <p><strong>Humor:</strong> ${aleatorio(humores)}</p>
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

function gerarLootMissao() {
  tocarForja();

  atualizarResultado(`
    <h2>📜 Loot de Missão</h2>
    <p><strong>Encontrado:</strong> ${aleatorio(lootMissao)}.</p>
  `);
}

function gerarLootKill() {
  tocarForja();

  atualizarResultado(`
    <h2>💀 Loot de Combate</h2>
    <p><strong>Encontrado:</strong> ${aleatorio(lootKill)}.</p>
  `);
}

function gerarRegraCasa() {
  tocarForja();

  atualizarResultado(`
    <h2>🎭 Regra da Casa</h2>
    <p>${aleatorio(regrasDaCasa)}</p>
  `);
}

function gerarMercador() {
  tocarForja();

  atualizarResultado(`
    <h2>🧑‍💼 Mercador</h2>
    <p><strong>Nome:</strong> ${aleatorio(nomes)}</p>
    <p><strong>Especialidade:</strong> ${aleatorio(tiposMercadores)}</p>
    <p><strong>Peculiaridade:</strong> ${aleatorio(peculiaridadesMercadores)}.</p>
    <p><strong>Local:</strong> ${aleatorio(locais)}.</p>
  `);
}

function gerarBang() {
  tocarForja();

  atualizarResultado(`
    <h2>💥 BANG!</h2>

    <p>${aleatorio(bangs)}</p>

    <p><strong>O que isso pode significar?</strong></p>

    <p>
      O evento não precisa ter uma solução imediata.
      Use-o para criar movimento, pressão ou uma nova decisão para os jogadores.
    </p>
  `);
}

function gerarPapelDesafio() {
  tocarForja();

  const papel = aleatorio(papeisDesafio);

  atualizarResultado(`
    <h2>${papel.icone} ${papel.titulo}</h2>

    <p>
      <strong>Função:</strong>
      ${papel.funcao}
    </p>

    <p>
      <strong>Comportamento:</strong>
      ${papel.comportamento}
    </p>

    <p>
      <strong>Como adaptar:</strong>
      ${papel.adaptacao}
    </p>

    <p>
      <strong>Fraqueza:</strong>
      ${papel.fraqueza}
    </p>

    <p>
      <strong>Complicação:</strong>
      ${papel.complicacao}
    </p>

    <p>
      <strong>💭 Pergunta para o mestre:</strong>
      ${papel.pergunta}
    </p>
  `);
}

function gerarConfronto() {
  // Corrigido: tocarDado() não existia.
  tocarForja();

  const tipo = aleatorio(tiposConfronto);
  const comportamento = aleatorio(comportamentosConfronto);
  const objetivo = aleatorio(objetivosConfronto);
  const complicacao = aleatorio(complicacoesConfronto);

  atualizarResultado(`
    <h2>⚔️ Confronto</h2>

    <p><strong>Função:</strong> ${tipo}</p>

    <p>
      <strong>Objetivo:</strong>
      ${objetivo}.
    </p>

    <p>
      <strong>Comportamento:</strong>
      ${comportamento}.
    </p>

    <p>
      <strong>Complicação:</strong>
      ${complicacao}.
    </p>

    <p>
      <strong>Dica para o mestre:</strong>
      Use o inimigo mais apropriado do seu sistema para representar essa função.
      O desafio deve vir da situação, não apenas dos números.
    </p>
  `);
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
    <p>${aleatorio(ganchos)} ${aleatorio(locais)}</p>
    <p><strong>Recompensa:</strong> ${aleatorio(recompensas)}</p>

    <hr>

    <h3>🌍 Região</h3>
    <p><strong>Economia:</strong> ${aleatorio(economias)}</p>
    <p><strong>Regime:</strong> ${aleatorio(regimes)}</p>

    <hr>

    <h3>🚨 Urgência</h3>
    <p><strong>Urgência:</strong> ${aleatorio(urgencias)}</p>

    <hr>

    <h3>✨ Item Especial</h3>
    <p><strong>${aleatorio(itensMagicos)}</strong></p>
    <p>${aleatorio(efeitos)}</p>
  `);
}


// =========================
// COPIAR / SALVAR
// =========================

function copiarResultado() {
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  const texto = resultado.innerText;

  navigator.clipboard.writeText(texto)
    .then(() => {
      mostrarToast("📋 Conteúdo copiado!");
    })
    .catch(() => {
      mostrarToast("❌ Não foi possível copiar.");
    });
}

function salvarResultado() {
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  const conteudo = resultado.innerHTML;

  let salvos =
    JSON.parse(localStorage.getItem("orionforge_salvos")) || [];

  salvos.unshift({
    data: new Date().toLocaleString("pt-BR"),
    conteudo
  });

  localStorage.setItem(
    "orionforge_salvos",
    JSON.stringify(salvos)
  );

  mostrarToast("💾 Resultado salvo!");

  carregarSalvos();
}

function carregarSalvos() {
  const lista = document.getElementById("listaSalvos");

  if (!lista) return;

  const salvos =
    JSON.parse(localStorage.getItem("orionforge_salvos")) || [];

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


// =========================
// TEMA
// =========================

function alternarTema() {
  document.body.classList.toggle("tema-arcano");

  const ativo =
    document.body.classList.contains("tema-arcano");

  localStorage.setItem(
    "orionforge_tema",
    ativo ? "arcano" : "magma"
  );

  mostrarToast(
    ativo
      ? "🌙 Tema Arcano ativado!"
      : "🌋 Tema Magma ativado!"
  );
}


// =========================
// INICIALIZAÇÃO
// =========================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------
  // GERADORES
  // -------------------------

  const botoesGeradores = {
    btnNPC: gerarNPC,
    btnMissaoCurta: gerarMissaoCurta,
    btnMissaoLonga: gerarMissaoLonga,
    btnRegiao: gerarRegiao,
    btnItemMagico: gerarItemMagico,
    btnPuzzle: gerarPuzzle,
    btnRegraCasa: gerarRegraCasa,
    btnConfronto: gerarConfronto,
    btnForjaRapida: gerarForjaRapida,
    btnMercador: gerarMercador,
    btnLootMissao: gerarLootMissao,
    btnLootKill: gerarLootKill,
    btnBang: gerarBang,
    btnPapelDesafio: gerarPapelDesafio
  };

  Object.entries(botoesGeradores).forEach(
    ([id, funcao]) => {
      const botao = document.getElementById(id);

      if (botao) {
        botao.addEventListener("click", funcao);
      }
    }
  );


  // -------------------------
  // AÇÕES
  // -------------------------

  const btnCopiar =
    document.getElementById("btnCopiar");

  if (btnCopiar) {
    btnCopiar.addEventListener("click", copiarResultado);
  }

  const btnSalvar =
    document.getElementById("btnSalvar");

  if (btnSalvar) {
    btnSalvar.addEventListener("click", salvarResultado);
  }

  const btnTema =
    document.getElementById("btnTemaMagma");

  if (btnTema) {
    btnTema.addEventListener("click", alternarTema);
  }

  const btnLimpar =
    document.getElementById("btnLimparSalvos");

  if (btnLimpar) {
    btnLimpar.addEventListener("click", limparSalvos);
  }


  // -------------------------
  // TEMA SALVO
  // -------------------------

  const temaSalvo =
    localStorage.getItem("orionforge_tema");

  if (temaSalvo === "arcano") {
    document.body.classList.add("tema-arcano");
  }


  // -------------------------
  // ABAS
  // -------------------------

  document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("click", () => {

      document
        .querySelectorAll(".tab")
        .forEach(t => t.classList.remove("active"));

      document
        .querySelectorAll(".tab-content")
        .forEach(c => c.classList.remove("active"));

      tab.classList.add("active");

      const alvo =
        document.getElementById(tab.dataset.tab);

      if (alvo) {
        alvo.classList.add("active");
      }

      if (tab.dataset.tab === "salvos") {
        carregarSalvos();
      }
    });

  });


  // -------------------------
  // SALVOS INICIAIS
  // -------------------------

  carregarSalvos();

});
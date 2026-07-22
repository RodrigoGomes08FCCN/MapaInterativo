/**
 * script.js
 * ---------------------------------------------------------------
 * Carrega dinamicamente os ficheiros da pasta SVG/ conforme
 * o Edifício e o Piso selecionados.
 */

//guarda o piso e o edifício selecionado
const CURRENT = { edificio: "B", piso: "0" };

/* 1) Função para carregar os ficheiros de suporte (Header/Footer) */
async function loadInclude(targetSelector, path) {

  //Procura o elemento onde será colocado o conteúdo.
  const target = document.querySelector(targetSelector);
  if (!target) return;
  try {

    //Faz um pedido ao ficheiro HTML.
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    target.innerHTML = await res.text();
  } catch (err) {

    //Mostra mensagem se der erro.
    console.warn("Falha ao carregar include:", path, err);
  }
}

/* 2) Função Principal: Carrega o SVG diretamente da pasta SVG/ */
async function loadSVGFloor(edificio, piso) {

  //Atualiza o edifício e piso atuais.
  CURRENT.edificio = edificio;
  CURRENT.piso = piso;

  const svgContainer = document.getElementById("svg-container");
  const emptyMsg = document.getElementById("floor-empty-msg");

  // Define o caminho do ficheiro com base na estrutura de pastas
  const ficheiroSVG = (edificio === "A")
    ? `public/assets/SVG/EDIF-A.svg`
    : `public/assets/SVG/EDIF-${edificio}-Piso-${piso}.svg`;

  try {
    // Força o carregamento da versão mais recente eliminando a cache do browser
    const resposta = await fetch(`${ficheiroSVG}?v=${new Date().getTime()}`);
    if (!resposta.ok) throw new Error(`Ficheiro não encontrado: ${ficheiroSVG}`);

    const svgTexto = await resposta.text();

    if (emptyMsg) emptyMsg.style.display = "none";

    if (svgContainer) {
      // Injeta o SVG diretamente no contentor HTML
      svgContainer.innerHTML = svgTexto;

      const svgElement = svgContainer.querySelector("svg");
      if (svgElement) {
        svgElement.style.width = "100%";
        svgElement.style.height = "auto";
        svgElement.style.display = "block";
      }
    }

    // Ativa os eventos de clique nas salas do SVG injetado
    wireRooms();
    clearDetail();
    updateTextElements(`${edificio}-${piso}`);

  } catch (err) {
    console.error("Erro ao carregar o mapa SVG:", err);
    if (emptyMsg) emptyMsg.style.display = "block";
    if (svgContainer) svgContainer.innerHTML = "";
    clearDetail();
  }
}

/* 3) Atualiza os textos do cabeçalho e rodapé */
function updateTextElements(key) {
  const floor = ROOMS_DATA[key];
  if (!floor) return;

  const footerPiso = document.getElementById("footer-piso-atual");
  if (footerPiso) footerPiso.textContent = `${floor.edificio} · ${floor.piso}`;

  const heading = document.getElementById("map-heading-title");
  if (heading) heading.textContent = `${floor.edificio} — ${floor.piso}`;
}

/* 4) Escuta as alterações nos seletores de Edifício e Piso */
//liga os selects ao mapa
function wireFloorSelectors() {
  const selEdificio = document.getElementById("select-edificio");
  const selPiso = document.getElementById("select-piso");

  if (!selEdificio || !selPiso) {
    setTimeout(wireFloorSelectors, 100);
    return;
  }

  selEdificio.value = CURRENT.edificio;
  selPiso.value = CURRENT.piso;

  const updatePisoOptions = (edificioSelecionado) => {
    const optPiso1 = selPiso.querySelector('option[value="1"]');
    if (optPiso1) {
      if (edificioSelecionado === "A") {
        optPiso1.style.display = "none";
        if (selPiso.value === "1") {
          selPiso.value = "0";
        }
      } else {
        optPiso1.style.display = "block";
      }
    }
  };

  updatePisoOptions(selEdificio.value);

  selEdificio.addEventListener("change", () => {
    updatePisoOptions(selEdificio.value);
    loadSVGFloor(selEdificio.value, selPiso.value);
  });

  selPiso.addEventListener("change", () => {
    loadSVGFloor(selEdificio.value, selPiso.value);
  });
}

/* 5) Interatividade do Painel Lateral e Ficha da Sala */
function getFloorData() {
  const key = `${CURRENT.edificio}-${CURRENT.piso}`;
  return ROOMS_DATA[key];
}

function initialsFor(nome) {
  if (!nome) return "??";
  return nome
    .split(" ")
    .filter((w) => w.length > 2 || w === w.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const ROOM_COLORS = {
  gabinete: "#3d7bab",
  circulacao: "#5c7688",
  apoio: "#b8813f",
  reuniao: "#4a9c78",
  aula: "#a15da8",
  estudio: "#e8803d"
};

//carrega os detalhes da sala no painel lateral

function renderDetail(roomKey) {

  //pega os dados do piso selecionado
  const floor = getFloorData();

  //pega os dados da sala selecionada
  const sala = floor && floor.salas[roomKey];

  // pega os detalhes da sala selecionada
  const card = document.getElementById("detail-card");

  // Mostra a mensagem de "nenhuma sala selecionada" se não houver sala
  const empty = document.getElementById("detail-empty");
  if (!sala) return;

  // Marca a sala selecionada no mapa e no painel lateral
  document.querySelectorAll(".room, [data-room]").forEach((el) => {
    el.classList.toggle("is-selected", el.dataset.room === roomKey);
  });

  if (empty) empty.style.display = "none";
  if (card) card.classList.add("is-active");

  // Atualiza a imagem da sala ou as iniciais se não houver imagem
  const img = document.getElementById("detail-image");
  if (img) {
    if (sala.imagem) {
      img.style.backgroundImage = `url(${sala.imagem})`;
      img.style.backgroundSize = "cover";
      img.style.backgroundPosition = "center";

      // remove as iniciais se houver imagem
      const span = img.querySelector("span");
      if (span) span.textContent = "";
    } else {

      // se não houver imagem, mostra as iniciais da sala com a cor correspondente
      img.style.backgroundImage = "none";
      img.style.background = ROOM_COLORS[sala.cor] || "#3d7bab";
      const span = img.querySelector("span");
      if (span) span.textContent = initialsFor(sala.nome || sala.funcao);
    }

    // vai buscar o email
    const emailBtn = document.getElementById("detail-email");

    // o botao so aparece quando existe email, senao fica escondido
    if (sala.email) {
      emailBtn.style.display = "inline-block";
      emailBtn.href = `mailto:${sala.email}?subject=Contacto`;
    } else {
      emailBtn.style.display = "none";
    }

    // abre o outlook com o email da sala
    emailBtn.onclick = () => {
      window.open(
        `https://outlook.office.com/calendar/action/compose?to=${encodeURIComponent(sala.email)}`,
        "_blank"
      );
    };
  }

  //verifica-se se esse elemento existe caso exista conteudo (textContent) e atualizado com o valor de sala.id
  const idEl = document.getElementById("detail-id");
  if (idEl) idEl.textContent = sala.id;

  //verifica-se se esse elemento existe caso exista conteudo (textContent) e atualizado com o valor de sala.nome
  const nomeEl = document.getElementById("detail-nome");
  if (nomeEl) nomeEl.textContent = sala.nome || sala.funcao;

  const funcaoEl = document.getElementById("detail-funcao");
  if (funcaoEl) funcaoEl.textContent = sala.funcao;

  const capEl = document.getElementById("detail-capacidade");
  if (capEl) {
    capEl.textContent =
      sala.capacidade === null || sala.capacidade === undefined
        ? "—"
        : sala.capacidade === 0
          ? "Sem lotação (staff)"
          : `${sala.capacidade} pessoas`;
  }
}

function clearDetail() {
  document.querySelectorAll(".room.is-selected, [data-room].is-selected").forEach((el) =>
    el.classList.remove("is-selected")
  );
  const card = document.getElementById("detail-card");
  const empty = document.getElementById("detail-empty");
  if (card) card.classList.remove("is-active");
  if (empty) empty.style.display = "block";
}

// Adiciona eventos de clique às salas do mapa e ao botão de fechar detalhes
function wireRooms() {
  
  // seleciona todos os elementos que representam salas no mapa, usando dois seletores:
  //.room – elementos com a classe room;
  // [data-room] – elementos que possuem o atributo data-room.
  // De seguida, percorre cada um desses elementos utilizando o método forEach().
  document.querySelectorAll(".room, [data-room]").forEach((el) => {
    if (el.dataset.wired === "1") return;
    el.dataset.wired = "1";
    el.style.cursor = "pointer";
    el.addEventListener("click", () => renderDetail(el.dataset.room));
  });

  const closeBtn = document.getElementById("detail-close");
  if (closeBtn && closeBtn.dataset.wired !== "1") {
    closeBtn.dataset.wired = "1";
    closeBtn.addEventListener("click", clearDetail);
  }
}

/* Arranque do projeto */
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadInclude("#header-slot", "public/INCLUDES/header.html"),
    loadInclude("#footer-slot", "public/INCLUDES/footer.html")
  ]);

  wireFloorSelectors();
  loadSVGFloor(CURRENT.edificio, CURRENT.piso);
});
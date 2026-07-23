/**
 * script.js
 * ---------------------------------------------------------------
 * Carrega dinamicamente os ficheiros da pasta SVG/ conforme
 * o Edifício e o Piso selecionados.
 */

// Guarda o piso e o edifício selecionado
const CURRENT = { edificio: "B", piso: "0" };

// Determina o prefixo do caminho relativo de forma insensível a maiúsculas/minúsculas
const PATH_PREFIX = window.location.pathname.toLowerCase().includes('/html/') ? '../' : '';

/* 1) Função para carregar os ficheiros de suporte (Header/Footer) */
async function loadInclude(targetSelector, path) {
  // Procura o elemento onde será colocado o conteúdo.
  const target = document.querySelector(targetSelector);
  if (!target) return;
  
  try {
    // Faz um pedido ao ficheiro HTML.
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    target.innerHTML = await res.text();
  } catch (err) {
    // Mostra mensagem se der erro.
    console.warn("Falha ao carregar include:", path, err);
  }
}

/* 2) Função Principal: Carrega o SVG diretamente da pasta SVG/ */
async function loadSVGFloor(edificio, piso) {
  // Atualiza o edifício e piso atuais.
  CURRENT.edificio = edificio;
  CURRENT.piso = piso;

  const svgContainer = document.getElementById("svg-container");
  const emptyMsg = document.getElementById("floor-empty-msg");

  // Define o caminho do ficheiro adaptando ao prefixo relativo correto
  const ficheiroSVG = (edificio === "A")
    ? `${PATH_PREFIX}public/assets/SVG/EDIF-A.svg`
    : `${PATH_PREFIX}public/assets/SVG/EDIF-${edificio}-Piso-${piso}.svg`;

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

function renderDetail(roomKey) {
  const floor = getFloorData();
  const sala = floor && floor.salas[roomKey];
  const card = document.getElementById("detail-card");
  const empty = document.getElementById("detail-empty");
  if (!sala) return;

  document.querySelectorAll(".room, [data-room]").forEach((el) => {
    el.classList.toggle("is-selected", el.dataset.room === roomKey);
  });

  if (empty) empty.style.display = "none";
  if (card) card.classList.add("is-active");

  const img = document.getElementById("detail-image");
  if (img) {
    if (sala.imagem) {
      // Garante que o caminho da imagem tem o prefixo correto
      const imgPath = sala.imagem.startsWith('http') ? sala.imagem : `${PATH_PREFIX}${sala.imagem}`;
      img.style.backgroundImage = `url(${imgPath})`;
      img.style.backgroundSize = "cover";
      img.style.backgroundPosition = "center";

      const span = img.querySelector("span");
      if (span) span.textContent = "";
    } else {
      img.style.backgroundImage = "none";
      img.style.background = ROOM_COLORS[sala.cor] || "#3d7bab";
      const span = img.querySelector("span");
      if (span) span.textContent = initialsFor(sala.nome || sala.funcao);
    }

    const emailBtn = document.getElementById("detail-email");

    if (sala.email) {
      emailBtn.style.display = "inline-block";
      emailBtn.href = `mailto:${sala.email}?subject=Contacto`;
    } else {
      emailBtn.style.display = "none";
    }

    emailBtn.onclick = () => {
      window.open(
        `https://outlook.office.com/calendar/action/compose?to=${encodeURIComponent(sala.email)}`,
        "_blank"
      );
    };
  }

  const idEl = document.getElementById("detail-id");
  if (idEl) idEl.textContent = sala.id;

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

function wireRooms() {
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
  // Lê os parâmetros da URL para saber se já vem com Edifício e Piso selecionados
  const urlParams = new URLSearchParams(window.location.search);
  const edParam = urlParams.get('edificio');
  const pisoParam = urlParams.get('piso');

  if (edParam) CURRENT.edificio = edParam;
  if (pisoParam) CURRENT.piso = pisoParam;

  await Promise.all([
    loadInclude("#header-slot", `${PATH_PREFIX}public/INCLUDES/header.html`),
    loadInclude("#footer-slot", `${PATH_PREFIX}public/INCLUDES/footer.html`)
  ]);

  wireFloorSelectors();
  loadSVGFloor(CURRENT.edificio, CURRENT.piso);
});
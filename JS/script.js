/**
 * script.js
 * ---------------------------------------------------------------
 * Carrega dinamicamente os ficheiros da pasta SVG/ conforme
 * o Edifício e o Piso selecionados.
 */

const CURRENT = { edificio: "B", piso: "0" };

/* 1) Função para carregar os ficheiros de suporte (Header/Footer) */
async function loadInclude(targetSelector, path) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    target.innerHTML = await res.text();
  } catch (err) {
    console.warn("Falha ao carregar include:", path, err);
  }
}

/* 2) Função Principal: Carrega o SVG diretamente da pasta SVG/ */
async function loadSVGFloor(edificio, piso) {
  CURRENT.edificio = edificio;
  CURRENT.piso = piso;

  const svgContainer = document.getElementById("svg-container");
  const emptyMsg = document.getElementById("floor-empty-msg");

  // Define o caminho do ficheiro com base na estrutura de pastas
  const ficheiroSVG = (edificio === "A")
    ? `SVG/EDIF-A.svg`
    : `SVG/EDIF-${edificio}-Piso-${piso}.svg`;

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
      img.style.backgroundImage = `url(${sala.imagem})`;
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
  await Promise.all([
    loadInclude("#header-slot", "INCLUDES/header.html"),
    loadInclude("#footer-slot", "INCLUDES/footer.html")
  ]);

  wireFloorSelectors();
  loadSVGFloor(CURRENT.edificio, CURRENT.piso);
});
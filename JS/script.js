/**
 * script.js
 * ---------------------------------------------------------------
 * 1) Carrega header/footer de /INCLUDES/*.html para dentro da página.
 * 2) Liga os cliques de cada divisória do SVG à ficha de detalhe,
 *    usando os dados definidos em JS/rooms-data.js.
 *
 * NOTA IMPORTANTE sobre os includes:
 * Os browsers bloqueiam "fetch" de ficheiros locais abertos em
 * file:///. Para os includes funcionarem, corre o projeto com um
 * servidor local (ex.: extensão "Live Server" do VS Code, ou
 * `python3 -m http.server` na pasta do projeto e abrir
 * http://localhost:8000/index.html).
 */

const CURRENT = { edificio: "B", piso: "0" };

const FLOOR_VIEWBOX = {
  "B-0": "120 60 1100 620",
  "B-1": "40 130 900 300",
  "A-0": "20 130 960 320"
};

/* -------------------------------------------------------------- */
/* 1) Includes (header / footer)                                   */
/* -------------------------------------------------------------- */
async function loadInclude(targetSelector, path) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    target.innerHTML = await res.text();
  } catch (err) {
    target.innerHTML = `<p style="font-family:monospace;font-size:12px;padding:12px;">
      Não foi possível carregar ${path}. Corre o projeto num servidor local
      (ex.: Live Server) em vez de abrir o ficheiro diretamente.
    </p>`;
    console.warn("Falha ao carregar include:", path, err);
  }
}

/* -------------------------------------------------------------- */
/* 2) Troca de piso / edifício                                     */
/* -------------------------------------------------------------- */
function switchFloor(edificio, piso) {
  CURRENT.edificio = edificio;
  CURRENT.piso = piso;
  const key = `${edificio}-${piso}`;

  const svg = document.getElementById("floor-svg");
  const emptyMsg = document.getElementById("floor-empty-msg");

  // Força visibilidade via estilo inline em TODOS os grupos — não depender
  // só da classe CSS evita problemas de timing/especificidade entre browsers.
  document.querySelectorAll(".floor-group").forEach((g) => {
    g.classList.remove("is-active");
    g.style.display = "none";
  });
  const target = document.getElementById(`fg-${key}`);

  if (!target || !ROOMS_DATA[key]) {
    if (emptyMsg) emptyMsg.style.display = "block";
    if (svg) svg.style.display = "none";
    clearDetail();
    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  if (svg) {
    svg.style.display = "block";
    svg.setAttribute("viewBox", FLOOR_VIEWBOX[key] || "0 0 1000 600");
  }
  target.classList.add("is-active");
  target.style.display = "block";
  clearDetail();
  wireRooms();

  const footerPiso = document.getElementById("footer-piso-atual");
  const floor = ROOMS_DATA[key];
  if (footerPiso && floor) footerPiso.textContent = `${floor.edificio} · ${floor.piso}`;

  const heading = document.getElementById("map-heading-title");
  if (heading && floor) heading.textContent = `${floor.edificio} — ${floor.piso}`;
}

function wireFloorSelectors() {
  const selEdificio = document.getElementById("select-edificio");
  const selPiso = document.getElementById("select-piso");
  if (!selEdificio || !selPiso) return;
  const onChange = () => switchFloor(selEdificio.value, selPiso.value);
  selEdificio.addEventListener("change", onChange);
  selPiso.addEventListener("change", onChange);
}

/* -------------------------------------------------------------- */
/* 3) Mapa interativo                                               */
/* -------------------------------------------------------------- */
function getFloorData() {
  const key = `${CURRENT.edificio}-${CURRENT.piso}`;
  return ROOMS_DATA[key];
}

function initialsFor(nome) {
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
  aula: "#a15da8"
};

function renderDetail(roomKey) {
  const floor = getFloorData();
  const sala = floor && floor.salas[roomKey];
  const card = document.getElementById("detail-card");
  const empty = document.getElementById("detail-empty");
  if (!sala) return;

  document.querySelectorAll(".room").forEach((el) => {
    el.classList.toggle("is-selected", el.dataset.room === roomKey);
  });

  empty.style.display = "none";
  card.classList.add("is-active");

  const img = document.getElementById("detail-image");
  if (sala.imagem) {
    img.style.backgroundImage = `url(${sala.imagem})`;
    img.style.backgroundSize = "cover";
    img.style.backgroundPosition = "center";
    img.querySelector("span").textContent = "";
  } else {
    img.style.backgroundImage = "none";
    img.style.background = ROOM_COLORS[sala.cor] || "#3d7bab";
    img.querySelector("span").textContent = initialsFor(sala.nome);
  }

  document.getElementById("detail-id").textContent = sala.id;
  document.getElementById("detail-nome").textContent = sala.nome;
  document.getElementById("detail-funcao").textContent = sala.funcao;
  document.getElementById("detail-capacidade").textContent =
    sala.capacidade === null || sala.capacidade === undefined
      ? "—"
      : sala.capacidade === 0
      ? "Sem lotação (staff)"
      : `${sala.capacidade} pessoas`;
}

function clearDetail() {
  document.querySelectorAll(".room.is-selected").forEach((el) =>
    el.classList.remove("is-selected")
  );
  document.getElementById("detail-card").classList.remove("is-active");
  document.getElementById("detail-empty").style.display = "block";
}

function wireRooms() {
  document.querySelectorAll(".room").forEach((el) => {
    if (el.dataset.wired === "1") return;
    el.dataset.wired = "1";
    el.addEventListener("click", () => renderDetail(el.dataset.room));
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        renderDetail(el.dataset.room);
      }
    });
  });

  const closeBtn = document.getElementById("detail-close");
  if (closeBtn && closeBtn.dataset.wired !== "1") {
    closeBtn.dataset.wired = "1";
    closeBtn.addEventListener("click", clearDetail);
  }
}

/* -------------------------------------------------------------- */
/* Arranque                                                         */
/* -------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadInclude("#header-slot", "INCLUDES/header.html"),
    loadInclude("#footer-slot", "INCLUDES/footer.html")
  ]);
  wireRooms();
  wireFloorSelectors();

  // Sincroniza os <select> com o estado inicial e força a visibilidade
  // correta dos grupos de piso (não confiar só nas classes estáticas do HTML).
  const selEdificio = document.getElementById("select-edificio");
  const selPiso = document.getElementById("select-piso");
  if (selEdificio) selEdificio.value = CURRENT.edificio;
  if (selPiso) selPiso.value = CURRENT.piso;
  switchFloor(CURRENT.edificio, CURRENT.piso);
});
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
/* 2) Mapa interativo                                               */
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
    el.addEventListener("click", () => renderDetail(el.dataset.room));
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        renderDetail(el.dataset.room);
      }
    });
  });

  const closeBtn = document.getElementById("detail-close");
  if (closeBtn) closeBtn.addEventListener("click", clearDetail);
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
});
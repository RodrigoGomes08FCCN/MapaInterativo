/**
 * rooms-data.js
 * ---------------------------------------------------------------
 * Base de dados das salas do Mapa Interativo.
 * Cada piso é uma chave "EDIFICIO-PISO" (ex.: "B-0") que contém um
 * objeto com uma sala por cada divisória clicável do SVG (o atributo
 * data-room de cada <polygon>/<rect> no HTML corresponde à chave
 * usada aqui).
 *
 * Para adicionares uma nova planta:
 *   1. Desenha as divisórias em HTML (dentro de um novo <g class="floor">)
 *   2. Regista aqui os dados de cada divisória, com a mesma "chave"
 *   3. Adiciona a opção correspondente ao <select id="select-piso">
 *
 * Campo "imagem": deixa null para usar o ícone gerado automaticamente,
 * ou coloca o caminho de uma imagem (ex.: "IMG/b0-sala1.jpg").
 */

const ROOMS_DATA = {
  "B-0": {
    edificio: "Edifício B",
    piso: "Piso 0",
    salas: {
      b07: {
        id: "B0.7", funcao: "Sala do Diretor/a", capacidade: "2 / 3", imagem: "IMG/B0.7.jpg", cor: "gabinete"
      },
      b08: {
        id: "B0.8", funcao: "Sala do Diretor/a", capacidade: "2 / 3", imagem: "IMG/B0.8.jpg", cor: "gabinete"
      },
      openSpace: {
        id: "B0.1", funcao: "Open Space do DFA", capacidade: "46", imagem: "IMG/OpenSpaceDoDFA_B0.1.jpg", cor: "circulacao"
      },
      b02: {
        id: "B0.2", funcao: "Neste momento não tem nenhuma função...", capacidade: "2 / 3", imagem: "IMG/B0.2.jpg", cor: "apoio"
      },
      b03: {
        id: "B0.3", funcao: "Zona do trabalho", capacidade: "2 / 3", imagem: "IMG/B0.3.jpg", cor: "apoio"
      },
      b04: {
        id: "B0.4", funcao: "Sala de reuniões", capacidade: "2", imagem: null, cor: "apoio"
      },
      sala6: {
        id: "B0.06", nome: "Sala de Apoio 4", funcao: "Sala de trabalho", capacidade: 6, imagem: null, cor: "apoio", email: "cabine1%40fct.pt"
      },
      gabcentral: {
        id: "B0.07", nome: "Gabinete Central", funcao: "Gabinete", capacidade: 2, imagem: null, cor: "gabinete"
      },
      reunioes: {
        id: "B0.08", nome: "Sala de Reuniões", funcao: "Reuniões", capacidade: 12, imagem: null, cor: "reuniao"
      },
      escadas: {
        id: "B0.09", nome: "Escadas", funcao: "Circulação vertical", capacidade: null, imagem: null, cor: "circulacao"
      },
      arrumo1: {
        id: "B0.10", nome: "Arrumo 1", funcao: "Arrumos", capacidade: 0, imagem: null, cor: "apoio"
      },
      arrumo2: {
        id: "B0.11", nome: "Arrumo 2", funcao: "Arrumos", capacidade: 0, imagem: null, cor: "apoio"
      },
      gab3: {
        id: "B0.12", nome: "Gabinete 2.1", funcao: "Gabinete", capacidade: 3, imagem: null, cor: "gabinete"
      },
      gab4: {
        id: "B0.13", nome: "Gabinete 2.2", funcao: "Gabinete", capacidade: 3, imagem: null, cor: "gabinete"
      },
      recepcao: {
        id: "B0.14", nome: "Receção", funcao: "Receção / átrio de entrada", capacidade: 10, imagem: null, cor: "circulacao"
      },
      aula_magna: {
        id: "B0.15", nome: "Sala de Aula Magna", funcao: "Sala de aula", capacidade: 60, imagem: null, cor: "aula"
      },
      estudio: {
        id: "B0.16", nome: "Sala do estudio", funcao: "Estudio", capacidade: 60, imagem: null, cor: "estudio"
      }
    }
  },
  "B-1": {
    edificio: "Edifício B",
    piso: "Piso 1",
    /* Planta estrutural (sem mobiliário nem texto) — nomes genéricos, edita à vontade. */
    salas: {
      b1_t1: {
        id: "B1.01", nome: "Gabinete 1 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t2: {
        id: "B1.02", nome: "Gabinete 2 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t3: {
        id: "B1.03", nome: "Gabinete 3 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t4: {
        id: "B1.04", nome: "Gabinete 4 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t5: {
        id: "B1.05", nome: "Gabinete 5 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t6: {
        id: "B1.06", nome: "Gabinete 6 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t7: {
        id: "B1.07", nome: "Gabinete 7 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t8: {
        id: "B1.08", nome: "Gabinete 8 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t9: {
        id: "B1.09", nome: "Gabinete 9 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t10: {
        id: "B1.10", nome: "Gabinete 10 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_t11: {
        id: "B1.11", nome: "Gabinete 11 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_torre_a: {
        id: "B1.T1", nome: "Torre A", funcao: "Circulação vertical / técnico", capacidade: null, imagem: null, cor: "circulacao"
      },
      b1_torre_b: {
        id: "B1.T2", nome: "Torre B", funcao: "Circulação vertical / técnico", capacidade: null, imagem: null, cor: "circulacao"
      },
      b1_t13: {
        id: "B1.12", nome: "Gabinete 12 (fila superior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_corredor: {
        id: "B1.00", nome: "Corredor Central", funcao: "Circulação", capacidade: null, imagem: null, cor: "circulacao"
      },
      b1_b1: {
        id: "B1.21", nome: "Gabinete 1 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b2: {
        id: "B1.22", nome: "Gabinete 2 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b3: {
        id: "B1.23", nome: "Gabinete 3 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b4: {
        id: "B1.24", nome: "Gabinete 4 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b5: {
        id: "B1.25", nome: "Gabinete 5 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b6: {
        id: "B1.26", nome: "Gabinete 6 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b7: {
        id: "B1.27", nome: "Gabinete 7 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b8: {
        id: "B1.28", nome: "Gabinete 8 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b9: {
        id: "B1.29", nome: "Gabinete 9 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b10: {
        id: "B1.30", nome: "Gabinete 10 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b11: {
        id: "B1.31", nome: "Gabinete 11 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b12: {
        id: "B1.32", nome: "Gabinete 12 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b13: {
        id: "B1.33", nome: "Gabinete 13 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      b1_b14: {
        id: "B1.34", nome: "Gabinete 14 (fila inferior)", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      }
    }
  },
  "A-0": {
    edificio: "Edifício A",
    piso: "Piso 0",
    /* Planta estrutural (sem mobiliário nem texto) — nomes genéricos, edita à vontade. */
    salas: {
      a_tl1: {
        id: "A.01", nome: "Gabinete A1", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tl2: {
        id: "A.02", nome: "Gabinete A2", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tl3: {
        id: "A.03", nome: "Gabinete A3", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tl4: {
        id: "A.04", nome: "Gabinete A4", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tm1: {
        id: "A.11", nome: "Gabinete B1", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tm2: {
        id: "A.12", nome: "Gabinete B2", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tm3: {
        id: "A.13", nome: "Gabinete B3", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tm4: {
        id: "A.14", nome: "Gabinete B4", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr1: {
        id: "A.21", nome: "Gabinete C1", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr2: {
        id: "A.22", nome: "Gabinete C2", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr3: {
        id: "A.23", nome: "Gabinete C3", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr4: {
        id: "A.24", nome: "Gabinete C4", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr5: {
        id: "A.25", nome: "Gabinete C5", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr6: {
        id: "A.26", nome: "Gabinete C6", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr7: {
        id: "A.27", nome: "Gabinete C7", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_tr8: {
        id: "A.28", nome: "Gabinete C8", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_hall: {
        id: "A.00", nome: "Átrio / Hall Central", funcao: "Circulação / zona comum", capacidade: 30, imagem: null, cor: "circulacao"
      },
      a_br1: {
        id: "A.31", nome: "Gabinete D1", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br2: {
        id: "A.32", nome: "Gabinete D2", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br3: {
        id: "A.33", nome: "Gabinete D3", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br4: {
        id: "A.34", nome: "Gabinete D4", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br5: {
        id: "A.35", nome: "Gabinete D5", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br6: {
        id: "A.36", nome: "Gabinete D6", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br7: {
        id: "A.37", nome: "Gabinete D7", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_br8: {
        id: "A.38", nome: "Gabinete D8", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      a_arrumo1: {
        id: "A.40", nome: "Arrumo 1", funcao: "Arrumos", capacidade: 0, imagem: null, cor: "apoio"
      },
      a_arrumo2: {
        id: "A.41", nome: "Arrumo 2", funcao: "Arrumos", capacidade: 0, imagem: null, cor: "apoio"
      },
      a_mid1: {
        id: "A.42", nome: "Sala Técnica 1", funcao: "Instalações técnicas", capacidade: 0, imagem: null, cor: "apoio"
      },
      a_mid2: {
        id: "A.43", nome: "Sala Técnica 2", funcao: "Instalações técnicas", capacidade: 0, imagem: null, cor: "apoio"
      },
      a_mid3: {
        id: "A.44", nome: "Sala Técnica 3", funcao: "Instalações técnicas", capacidade: 0, imagem: null, cor: "apoio"
      },
      a_mid4: {
        id: "A.45", nome: "Sala Técnica 4", funcao: "Instalações técnicas", capacidade: 0, imagem: null, cor: "apoio"
      },
      a_direita: {
        id: "A.46", nome: "Ala Direita", funcao: "Circulação / sala de apoio", capacidade: 6, imagem: null, cor: "circulacao"
      }
    }
  }
};
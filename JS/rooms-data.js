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
    /*
     * NOTA: esta versão foi reconstruída a partir da planta real
     * "EDIF B - Planta do Piso 0 com identificação dos espaços".
     * O ficheiro original tem resolução baixa, pelo que a maioria dos
     * rótulos de texto (nomes das salas) não é totalmente legível —
     * "Corredor", "Frigorífico" e algo como "Formação Comercial" foram
     * os únicos que consegui confirmar com confiança. As restantes
     * divisórias foram identificadas pelas paredes, portas e mobiliário
     * desenhado (mesas redondas = reunião, grelhas de mesas = formação,
     * ícones de sanita = WC, escadas hachuradas, etc.) — os nomes/
     * funções abaixo são a minha melhor estimativa. Ajusta livremente
     * os campos "nome", "funcao" e "capacidade" consoante conheças o
     * edifício real; as chaves (ex.: "reuniao_pequena") têm de
     * corresponder ao atributo data-room do SVG em index.html.
     */
    salas: {
      reuniao_pequena: {
        id: "B0.01", nome: "Sala de Reuniões 1", funcao: "Reunião (mesa oval)", capacidade: 8, imagem: null, cor: "reuniao"
      },
      gab_a: {
        id: "B0.02", nome: "Gabinete A", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      gab_b: {
        id: "B0.03", nome: "Gabinete B", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      wc_esquerda: {
        id: "B0.04", nome: "Instalações Sanitárias — Ala Esquerda", funcao: "WC (inclui casa de banho adaptada)", capacidade: null, imagem: null, cor: "circulacao"
      },
      escadas_esquerda: {
        id: "B0.05", nome: "Escadas — Ala Esquerda", funcao: "Circulação vertical / zona de frigorífico", capacidade: null, imagem: null, cor: "circulacao"
      },
      open_space_esquerdo: {
        id: "B0.06", nome: "Open Space Esquerdo", funcao: "Postos de trabalho / zona de convívio", capacidade: 24, imagem: null, cor: "aula"
      },
      sala_formacao_esquerda: {
        id: "B0.07", nome: "Sala de Formação 1", funcao: "Sala de aula / formação", capacidade: 24, imagem: null, cor: "reuniao"
      },
      corredor_central: {
        id: "B0.08", nome: "Corredor", funcao: "Circulação", capacidade: null, imagem: null, cor: "circulacao"
      },
      sala_c2: {
        id: "B0.09", nome: "Sala Polivalente 1", funcao: "Sala polivalente / reunião", capacidade: 12, imagem: null, cor: "reuniao"
      },
      area_tecnica: {
        id: "B0.10", nome: "Área Técnica", funcao: "Instalações técnicas", capacidade: 0, imagem: null, cor: "apoio"
      },
      formacao_comercial: {
        id: "B0.11", nome: "Formação Comercial", funcao: "Sala de formação", capacidade: 16, imagem: null, cor: "reuniao"
      },
      wc_central: {
        id: "B0.12", nome: "Instalações Sanitárias — Zona Central", funcao: "WC", capacidade: null, imagem: null, cor: "circulacao"
      },
      escadas_central: {
        id: "B0.13", nome: "Escadas — Zona Central", funcao: "Circulação vertical", capacidade: null, imagem: null, cor: "circulacao"
      },
      terraco: {
        id: "B0.14", nome: "Terraço / Zona de Convívio Exterior", funcao: "Espaço exterior coberto com estar", capacidade: 20, imagem: null, cor: "aula"
      },
      wc_direita: {
        id: "B0.15", nome: "Instalações Sanitárias — Ala Direita", funcao: "WC (inclui casa de banho adaptada)", capacidade: null, imagem: null, cor: "circulacao"
      },
      sala_reuniao_direita: {
        id: "B0.16", nome: "Sala de Reuniões 2", funcao: "Reunião", capacidade: 6, imagem: null, cor: "reuniao"
      },
      copa_direita: {
        id: "B0.17", nome: "Copa", funcao: "Copa / kitchenette (com frigorífico)", capacidade: 8, imagem: null, cor: "apoio"
      },
      escadas_direita: {
        id: "B0.18", nome: "Escadas — Ala Direita", funcao: "Circulação vertical", capacidade: null, imagem: null, cor: "circulacao"
      },
      open_space_direito: {
        id: "B0.19", nome: "Open Space Direito", funcao: "Postos de trabalho", capacidade: 20, imagem: null, cor: "aula"
      },
      sala_formacao_direita: {
        id: "B0.20", nome: "Sala de Formação 2", funcao: "Sala de aula / formação", capacidade: 24, imagem: null, cor: "reuniao"
      },
      parqueamento: {
        id: "B0.21", nome: "Estacionamento", funcao: "Estacionamento coberto", capacidade: 4, imagem: null, cor: "apoio"
      },
      entrada_lateral: {
        id: "B0.22", nome: "Entrada Lateral", funcao: "Acesso / controlo de entrada", capacidade: null, imagem: null, cor: "circulacao"
      },
      cubiculo_1: {
        id: "B0.23", nome: "Gabinete C1", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      cubiculo_2: {
        id: "B0.24", nome: "Gabinete C2", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      cubiculo_3: {
        id: "B0.25", nome: "Gabinete C3", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      },
      cubiculo_4: {
        id: "B0.26", nome: "Gabinete C4", funcao: "Gabinete individual", capacidade: 2, imagem: null, cor: "gabinete"
      }
    }
  }
};
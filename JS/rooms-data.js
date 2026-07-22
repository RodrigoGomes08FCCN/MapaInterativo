/**
 * rooms-data.js
 * ---------------------------------------------------------------
 * Base de dados das salas do Mapa Interativo.
 */

const ROOMS_DATA = {
  "B-0": {
    edificio: "Edifício B",
    piso: "Piso 0",
    salas: {
      b06: { id: "B0.6", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/B0.6_1.jpg", cor: "gabinete" },
      b07: { id: "B0.7", funcao: "Sala do Diretor/a do DFA", capacidade: "2 / 3", imagem: "IMG/B0.7.jpg", cor: "gabinete" },
      b08: { id: "B0.8", funcao: "Sala do Diretor/a do DFA", capacidade: "2 / 3", imagem: "IMG/B0.8.jpg", cor: "gabinete" },
      openSpace1: { id: "---", funcao: "Open Space do DFA", capacidade: "46", imagem: "IMG/OpenSpaceDoDFA_B0.1.jpg", cor: "circulacao" },
      copa: { id: "B0.9", funcao: "Copa dos Funcionários", capacidade: "10 / 15", imagem: "IMG/B0.9_COPA_DFA.jpg", cor: "circulacao" },
      b02: { id: "B0.2", funcao: "Posto de Trabalho", capacidade: "2 / 3", imagem: "IMG/B0.2.jpg", cor: "apoio" },
      b03: { id: "B0.3", funcao: "Posto de Trabalho", capacidade: "2 / 3", imagem: "IMG/B0.3.jpg", cor: "apoio" },
      b04: { id: "B0.4", funcao: "Posto de Trabalho", capacidade: "2", imagem: "IMG/B0.4.jpg", cor: "apoio" },
      // tenho que tirar foto
      b05: { id: "B0.5", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/em_cons.png", cor: "apoio" },
      openSpace2: { id: "---", funcao: "Open Space do ASIF", capacidade: "32 / 34", imagem: "IMG/OpenSpaceDoASIF.jpg", cor: "circulacao" },
      sala_estar: { id: "B0.12", funcao: "Sala de Convívio / Estar", capacidade: "2 / 3", imagem: "IMG/em_cons.png", cor: "reuniao" },
      camarim: { id: "B0.13", funcao: "Camarim de Apoio", capacidade: "---", imagem: "IMG/em_cons.png", cor: "reuniao" },
      estudio1: { id: "B0.13", funcao: "Para editar som, videos e etc..", capacidade: "1 / 2", imagem: "IMG/EstudioFCCN-27.jpg", cor: "reuniao" },
      wc: { id: "B0.0.1 / B0.0.2", nome: "W.C.", funcao: "W.C.", capacidade: 2, imagem: "IMG/B0.0.1_B0.0.2.jpg", cor: "gabinete" },
      estudio2: { id: "B0.13", funcao: "Sala para Gravar som, musica e etc..", capacidade: "2", imagem: "IMG/EstudioFCCN-15.jpg", cor: "reuniao" },
      estudio3: { id: "B0.13", funcao: "Sala para controllar as camêras e etc..", capacidade: "2 / 3", imagem: "IMG/EstudioFCCN-37.jpg", cor: "reuniao" },
      estudio4: { id: "B0.13", funcao: "Gravações em Green Screen", capacidade: "---", imagem: "IMG/EstudioFCCN-25.jpg", cor: "reuniao" },
      wcASIF: { id: "B0.19.1 / B0.19.2", funcao: "W.C.", capacidade: "2", imagem: "IMG/B0.19_WC.jpg", cor: "aula" },
      // tenho que perguntar ao João
      b018: { id: "B0.18", funcao: "Arquivos", capacidade: "4", imagem: "IMG/B0.18.jpg", cor: "estudio" },
      b017: { id: "B0.17", funcao: "Sala de Reuniões", capacidade: "6", imagem: "IMG/B0.17.jpg", cor: "estudio" },
      // tenho que tirar foto
      b020: { id: "B0.20", funcao: "Sala Técnica", capacidade: "---", imagem: null, cor: "estudio" },
      b021: { id: "B0.21", funcao: "Sala do Diretor/a do ASIF", capacidade: "2", imagem: "IMG/B0.21.jpg", cor: "estudio" },
      
    }
  },
  "B-1": {
    edificio: "Edifício B",
    piso: "Piso 1",
    salas: {
      wc: { id: "B1.1 / B1.2", funcao: "W.C.", capacidade: "2", imagem: "IMG/B1.1_B1.2.jpg", cor: "gabinete" },
      b1_3: { id: "B1.3", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.3.jpg", cor: "gabinete" },
      b1_4: { id: "B1.4", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.4.jpg", cor: "gabinete" },
      b1_5: { id: "B1.5", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.5.jpg", cor: "gabinete" },
      b1_6: { id: "B1.6", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.6.jpg", cor: "gabinete" },
      b1_7: { id: "B1.7", funcao: "Posto do Trabalho", capacidade: "5 / 6", imagem: "IMG/B1.7.jpg", cor: "gabinete" },
      b1_8: { id: "B1.8", funcao: "Posto do Trabalho", capacidade: "5 / 6", imagem: "IMG/B1.8.jpg", cor: "gabinete" },
      b1_9: { id: "B1.9", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/B1.9.jpg", cor: "gabinete" },
      b1_10: { id: "B1.10", funcao: "Sala de Reuniões", capacidade: "10 / 15", imagem: "IMG/B1.10.jpg", cor: "gabinete" },
      b1_11: { id: "B1.11.1 / B1.11.2", funcao: "W.C.", capacidade: "6", imagem: "IMG/B1.11_1_2.jpg", cor: "gabinete" },
      b1_12: { id: "B1.12", funcao: "Sala dos Eventos / Reuniões da Presidencia", capacidade: "20 / 25", imagem: "IMG/B1.12.jpg", cor: "circulacao" },
      //tenho q tirar foto
      b1_13: { id: "B1.13", funcao: "Armarios para guardar material", capacidade: "---", imagem: null, cor: "gabinete" },
      b1_14: { id: "B1.14", funcao: "Copa dos Funcionarios", capacidade: "19 / 20", imagem: "IMG/B1.14.jpg", cor: "gabinete" },
      b1_15: { id: "B1.15", funcao: "Copa dos Funcionarios", capacidade: "8 / 9", imagem: "IMG/B1.15.jpg", cor: "gabinete" },
      b1_26: { id: "B1.26", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.26.jpg", cor: "gabinete" },
      b1_25: { id: "B1.25", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.25.jpg", cor: "gabinete" },
      b1_24: { id: "B1.24", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.24.jpg", cor: "gabinete" },
      b1_23: { id: "B1.23", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/B1.23.jpg", cor: "gabinete" },
      b1_22: { id: "B1.22", funcao: "Sala de Reuniões", capacidade: "6 / 7", imagem: "IMG/B1.22.jpg", cor: "gabinete" },
      b1_21: { id: "B1.21", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.21.jpg", cor: "gabinete" },
      b1_20: { id: "B1.20", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.20.jpg", cor: "gabinete" },
      b1_19: { id: "B1.19", funcao: "Posto do Trabalho", capacidade: "1", imagem: "IMG/B1.19.jpg", cor: "gabinete" },
      b1_18: { id: "B1.18", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.18.jpg", cor: "gabinete" },
      b1_17: { id: "B1.17", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.17.jpg", cor: "gabinete" },
      b1_16: { id: "B1.16", funcao: "Posto do Trabalho", capacidade: "2 / 3", imagem: "IMG/B1.16.jpg", cor: "gabinete" }
    }
  },
  "A-0": {
    edificio: "Edifício A",
    piso: "Piso 0",
    salas: {
      a_openSpace1: { id: "---", funcao: "Open Space do DPP/DIR/DAI e Contabalidade", capacidade: "126", imagem: "IMG/OpenSpaceDoFCT4.jpg", cor: "circulacao" },
      a_open_space2: { id: "---", funcao: "Open Space da Presidencia", capacidade: "3", imagem: "IMG/OpenSpaceDaPresedencia1.jpg", cor: "circulacao" },
      a_6: { id: "A0.6", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.6.jpg", cor: "gabinete" },
      a_7: { id: "A0.7", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.7.jpg", cor: "gabinete" },
      a_8: { id: "A0.8", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.8.jpg", cor: "gabinete" },
      a_9: { id: "A0.9", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.9.jpg", cor: "gabinete" },
      a_wc_1: { id: "A0.10.1 / A0.10.2", funcao: "W.C.", capacidade: "4", imagem: "IMG/wcPresi.jpeg", cor: "gabinete" },
      a_23: { id: "A0.23", funcao: "Sala do Diretor/a", capacidade: "2 / 3", imagem: "IMG/A0.23.jpg", cor: "gabinete" },
      a_15: { id: "A0.15", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.15.jpg", cor: "gabinete" },
      a_16: { id: "A.16", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.16.jpg", cor: "gabinete" },
      a_18: { id: "A0.18", funcao: "Posto de Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.18.jpg", cor: "gabinete" },
      a_14: { id: "A0.14", funcao: "Poste do Trabalho da Presidencia", capacidade: "2 / 3", imagem: "IMG/A0.14.jpg", cor: "gabinete" },
      a_24: { id: "A0.24", funcao: "Sala do Diretor/a", capacidade: "2 / 3", imagem: "IMG/A0.24.jpg", cor: "gabinete" },
      a_tm6: { id: "A.16", nome: "Gabinete B6", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_30: { id: "A0.30", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/A0.30_1.jpg", cor: "gabinete" },
      a_31: { id: "A0.31", funcao: "Sala do Diretor/a", capacidade: "2 / 3", imagem: "IMG/A0.31.jpg", cor: "gabinete" },
      a_32: { id: "A0.32", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/A0.32.jpg", cor: "gabinete" },
      a_wc_2: { id: "A0.38.1 / A0.38.2 / A0.38.3", funcao: "W.C.", capacidade: "6 / 7", imagem: "IMG/wc_Fct.jpeg", cor: "gabinete" },
      cabine1: { id: "Cabine 1", funcao: "Cabine marcado para reuniões", capacidade: "4", imagem: "IMG/Cabine1_1.jpg", cor: "gabinete" },
      cabine2: { id: "Cabine 2", funcao: "Cabine marcado para reuniões", capacidade: "4", imagem: "IMG/Cabine2_1.jpg", cor: "gabinete" },
      a_tr6: { id: "A.26", nome: "Gabinete C6", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_tr7: { id: "A.27", nome: "Gabinete C7", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_tr8: { id: "A.28", nome: "Gabinete C8", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_hall: { id: "A.00", nome: "Átrio Central", funcao: "Circulação / Zona Comum", capacidade: 30, imagem: null, cor: "circulacao" },
      a_5: { id: "A0.5", funcao: "Copa da Presidencia", capacidade: "10", imagem: "IMG/CopaDaPresidencia2_A0.5.jpg", cor: "gabinete" },
      a_3: { id: "A0.3", funcao: "Sala do Diretor/a", capacidade: "2 / 3", imagem: "IMG/A0.3.jpg", cor: "gabinete" },
      a_2: { id: "A0.2", funcao: "Sala de Reuniões", capacidade: "8", imagem: "IMG/A0.2_1.jpg", cor: "gabinete" },
      a_4: { id: "A0.4", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/A0.4.jpg", cor: "gabinete" },
      a_br3: { id: "A.33", nome: "Gabinete D3", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_entrada: { id: "---", funcao: "Atendimento", capacidade: "---", imagem: "IMG/OpenSpaceDoFCT1.jpg", cor: "gabinete" },
      a_quadro_de_distribuicao: { id: "A0.11", funcao: "Sala Técnica / Quadro elétrico", capacidade: "---", imagem: "IMG/no_img.png", cor: "gabinete" },
      a_br4: { id: "A.34", nome: "Gabinete D4", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_br5: { id: "A.35", nome: "Gabinete D5", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_br6: { id: "A.36", nome: "Gabinete D6", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_br7: { id: "A.37", nome: "Gabinete D7", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_br7_b: { id: "A.37B", nome: "Gabinete D7.1", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_br7_c: { id: "A.37C", nome: "Gabinete D7.2", funcao: "Gabinete Individual", capacidade: 2, imagem: null, cor: "gabinete" },
      a_35: { id: "A0.35", funcao: "Sala de Reuniões", capacidade: "2", imagem: "IMG/A0.35_1.jpg", cor: "gabinete" },
      a_arrumo1: { id: "A.40", nome: "Arrumo 1", funcao: "Arrumos", capacidade: 0, imagem: null, cor: "apoio" },
      a_arrumo2: { id: "A.41", nome: "Arrumo 2", funcao: "Arrumos", capacidade: 0, imagem: null, cor: "apoio" },
      a_mid1: { id: "A.42", nome: "Sala Técnica 1", funcao: "Instalações Técnicas", capacidade: 0, imagem: null, cor: "apoio" },
      a_mid2: { id: "A.43", nome: "Sala Técnica 2", funcao: "Instalações Técnicas", capacidade: 0, imagem: null, cor: "apoio" },
      a_mid3: { id: "A.44", nome: "Sala Técnica 3", funcao: "Instalações Técnicas", capacidade: 0, imagem: null, cor: "apoio" },
      a_mid4: { id: "A.45", nome: "Sala Técnica 4", funcao: "Instalações Técnicas", capacidade: 0, imagem: null, cor: "apoio" },
      a_39: { id: "A0.39", funcao: "Copa Do FCT", capacidade: "36 / 40", imagem: "IMG/CopaDosPobres2_A0.39.jpg", cor: "gabinete" }
    }
  }
};
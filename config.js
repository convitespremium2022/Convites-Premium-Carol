/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo.
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Carol",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5588994897535",
    mensagem: "Olá! Confirmo minha presença no aniversário da Carol."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://maps.app.goo.gl/kUAMioLLCSFJwqkv5",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // ----- PIX OPCIONAL (SUGESTÕES DE PRESENTES) ---------------------------
  // ativo: true  -> cria uma área clicável na tela de presentes.
  //        false -> não cria a área de PIX e o convite continua como antes.
  // chave: é exatamente o texto que será copiado quando o convidado clicar.
  // posicao: ajuste pelo editor visual (?editor=1), escolhendo “PIX (copiar chave)”.
  pix: {
    ativo: true,
    chave: "21986806616",
    posicao: {"left":25.387853184904152,"top":52.03222378760889,"width":50.255581694289134,"height":4.287459549504014}
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":21.54186239516773,"top":83.6,"width":57.24919815794728,"height":6.188951091718929} },
    dresscode: { mostrarTexto:false, posicao: {"left":23.738344898162936,"top":89.76237206387937,"width":53.329079722444085,"height":7.380895144816704} },
    manual: { mostrarTexto:false, posicao: {"left":22.920434804313096,"top":85.15937800506174,"width":54.55589806309904,"height":6.460303137173614} }
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:21.1557594716461, top:63.1127500990136, width:15.963035699920129, height:8.57238650880756 },
        map: { left:42.3313764835857, top:63.11272355350966, width:15.611963461541478, height:8.522989476077747 },
        gift: { left:63.393553426397915, top:63.216997250362894, width:16.091044953075077, height:8.643484137471408 },
        dress: { left:31.079881564496805, top:75.18478224226423, width:15.682105506190094, height:8.298251846116688 },
        manual: { left:53.578866300798886, top:75.29984650345045, width:16.29551467651757, height:8.528402317264716 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  // corNumero altera somente a cor dos números.
  // corLegenda altera a cor de Meses, Dias, Horas, Min e Seg.
  // Aceita hexadecimal, nome de cor ou rgb().
  contagem: {
    dataEvento: "2026-08-29T18:30:00",
    textoFinal: "A festa começou!",
    corNumero: "#ffffff",
    corLegenda: "#ffffff",
    posicao: { left:22.5175531649361, top:51.45224389795505, width:56.19169641074281, height:6.218642289127358 }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.60
  }
};

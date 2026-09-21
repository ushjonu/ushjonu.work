// ushjonu.work — exported static site behavior
// Ports the sort toggle, case overlay, sticky-stack mobile cards,
// and "carregar mais" (load more) buttons from the design canvas.

(function () {
  "use strict";

  var CASES = [
    {
      key: 1, sortYear: 2024,
      tagA: "KYC", tagAColor: "var(--accent-violet-text)", tagAChip: "var(--accent-violet-chip)",
      tagB: "Jornada", dateLabel: "2024–2025",
      title: "Biometria facial & revamp",
      cover: { src: "assets/img/kyc_banner.png", width: 1920, height: 1248, alt: "Tela de abertura do novo onboarding financeiro com verificação de identidade." },
      sectionMedia: {
        context: [
          { type: "image", src: "assets/img/kyc_contexto.png", width: 2246, height: 1338, alt: "Mapeamento do fluxo de onboarding existente e dos pontos de atrito na verificação de identidade." }
        ],
        design: [
          { type: "video", src: "assets/video/kyc_video.mp4", width: 1920, height: 1248 }
        ]
      },
      context: "O onboarding financeiro da plataforma precisava incorporar verificação de identidade e biometria facial como parte do processo de KYC, sem transformar a entrada num obstáculo para quem já confiava na plataforma. Meu papel foi desenhar os wireframes e entender o novo Design System a partir do novo onboarding, já que era, naquele momento, o único fluxo que seguia o novo DS.",
      process: "Mapeamento do fluxo de onboarding existente e identificação dos pontos em que a verificação de identidade mais gerava atrito, para decidir como melhorar etapas mais lentas. Um teste A/B comparou o KYC pré-venda com o modelo pós-venda vigente. Foram feitos alinhamentos, critiques e working sessions com Produto, Engenharia e outros times de Design.",
      hypothesis: "Incorporar biometria facial ao processo de KYC reduziria o tempo de verificação aumentando a segurança da checagem de identidade. Migrar a verificação para antes da venda melhoraria a base de usuários, além de seguir as determinações necessárias para operar no modelo de plataformas digitais nacional e internacionalmente.",
      design: "Redesenho do fluxo de onboarding com biometria facial integrada ao processo de KYC. Com a biometria facial, o tempo de análise saiu de 5 dias para até 10 minutos, e o teste A/B confirmou: a base de usuários com KYC pré-venda teve percentual de vendas ativas maior do que a base equivalente no modelo pós-venda."
    },
    {
      key: 2, sortYear: 2025,
      tagA: "Antifraude & CBK", tagAColor: "var(--accent-pink-text)", tagAChip: "var(--accent-pink-chip)",
      tagB: "Vignette", dateLabel: "2025–2026",
      title: "Prevenir a fraude antes que ela aconteça",
      cover: { src: "assets/img/contentops_processo.png", width: 2816, height: 1678, alt: "Mapa do processo de análise antifraude, construído a partir do shadowing com os agentes." },
      sectionMedia: {
        design: [
          { type: "image", src: "assets/img/contentops_desenho_1.png", width: 1512, height: 1741, alt: "Interface de análise de produtores: visão geral do caso." },
          { type: "image", src: "assets/img/contentops_desenho_2.png", width: 1512, height: 982, alt: "Interface de análise de produtores: início do monitoramento e motivo." },
          { type: "image", src: "assets/img/contentops_desenho_3.png", width: 1512, height: 982, alt: "Interface de análise de produtores: histórico e documentação do caso." }
        ]
      },
      context: "A operação de antifraude e chargeback funcionava de forma majoritariamente reativa, agindo depois que o problema já tinha acontecido. Um projeto de desenho de vignette propôs repensar essa lógica: e se a operação pudesse antecipar a fraude antes que ela se concretizasse?",
      process: "Comecei com um shadowing dos agentes que viviam a operação no dia a dia, mapeando cada processo, dor e insight trocado com eles. Depois, desenhei a jornada as-is de verificação dos produtos, para entender se estávamos captando todos os passos, e destrinchei o entendimento de todas as infrações possíveis e penalizáveis, com foco em não aplicar restrições excessivas que geravam estresse entre as equipes internas.",
      hypothesis: "Os agentes já sabiam, na prática, quando um produtor estava envolvido em atividade fraudulenta, mas não tinham como monitorar ou restringir sem evidências contundentes. Se os sinais que eles já reconheciam de forma intuitiva fossem sistematizados num fluxo comum, a operação poderia agir antes da fraude se completar, em vez de apenas reagir a ela.",
      design: "Um moonshot desenhado para que o sistema detectasse padrões junto com o entendimento dos próprios agentes: interface facilitada de análise dos clientes, nomenclaturas padronizadas em toda a interface, possibilidade de iniciar o monitoramento de um produtor e sinalizar o motivo, acompanhamento do processo de análise pelo próprio sistema, e documentação com histórico de cada caso; tudo num só lugar, facilitando inclusive a negociação dos Account Managers com os produtores antes de restrições mais duras. O time já conseguiu versionar a interface para o sistema atual e aplicar quick wins que não exigiam um sistema robusto, como o reembolso facilitado, uma das hipóteses de design para reduzir o chargeback: produtos de potencial fraudulento passaram a ter essa opção simplificada, ajudando a reduzir cerca de 2% o índice de chargeback."
    },
    {
      key: 3, sortYear: 2026,
      tagA: "Fiscal", tagAColor: "var(--accent-green-text)", tagAChip: "var(--accent-green-chip)",
      tagB: "Espanha", dateLabel: "2025-2026",
      title: "Melhorias na Jornada Fiscal",
      cover: { src: "assets/img/guiafiscal_banner.png", width: 1423, height: 492, alt: "Capa do guia fiscal internacional." },
      sectionMedia: {
        design: [
          { type: "video", src: "assets/video/guiafiscal_video.mp4", width: 1920, height: 1176 },
          { type: "video", src: "assets/video/guiafiscal_video_2.mp4", width: 1920, height: 970 }
        ]
      },
      context: "Usuários da América Latina e da Europa enfrentavam a jornada fiscal internacional da plataforma sem nenhum apoio, cada país com suas próprias regras, e nenhuma delas explicada num só lugar. Entrevistas com usuários e um deep dive em tickets mostraram que os principais casos de dor vinham da Espanha e do México (o caso mexicano tem desdobramento próprio, tratado à parte).",
      process: "Com a mudança do modelo de negócio para usuários fora do Brasil, seguindo a regulamentação do órgão regulatório holandês, produtores espanhóis passaram a ser afetados pela regulamentação de plataformas digitais da União Europeia, com fatores como quem emitia a invoice, a retenção de impostos e a alíquota fiscal variando conforme de onde e para onde o produtor vendia, e o tipo de produto envolvido. Antes, o produtor só precisava vender; desde 2024, essa complexidade e imprevisibilidade operacional passou a existir. Só no segundo semestre de 2025, foram identificados mais de 700 tickets relacionados à dificuldade de entender essa nova realidade.",
      hypothesis: "Um guia fiscal construído a partir das dúvidas reais dos usuários reduziria os contatos de suporte e o abandono na etapa fiscal, uma vez que muitos usuários não abriam tickets recorrentes depois do entendimento da regra. A melhoria pontual de interfaces, como a Coleta de Impostos (uma configuração avançada do produto), ajudaria a reduzir fricção.",
      design: "Desenhamos um guia fiscal para que o usuário entendesse as soluções disponíveis e as regras de cada caso. Validado com as equipes de Tax e CX (muito elogiado e agradecido), o guia foi ao ar no fim de agosto/2025, apenas para a Espanha. A melhoria da interface da Coleta de Impostos, essencial para o entendimento de algumas regras fiscais, foi ao ar em maio/2025, como um quick win da jornada fiscal para toda a base."
    },
    {
      key: 4, sortYear: 2026,
      tagA: "Regulatório", tagAColor: "var(--accent-violet-text)", tagAChip: "var(--accent-violet-chip)",
      tagB: "México", dateLabel: "2026",
      title: "Reforma Tributária no México",
      cover: { src: "assets/img/mexico_banner.png", width: 3840, height: 2496, alt: "Atualize seu documento e tenha o CFDI — tela de abertura do fluxo para o México." },
      sectionMedia: {
        process: [
          { type: "image", src: "assets/img/mexico_processo.png", width: 1396, height: 1594, alt: "Mapa do processo de adequação ao SAT para pessoas jurídicas no México." }
        ],
        design: [
          { type: "video", src: "assets/video/mexico_video.mp4", width: 1920, height: 1248 },
          { type: "image", src: "assets/img/mexico_contrato_social.png", width: 1280, height: 832, alt: "Onboarding México: envio do contrato social da pessoa jurídica." },
          { type: "image", src: "assets/img/mexico_onb_csf.png", width: 1280, height: 832, alt: "Onboarding México: envio da Constancia de Situación Fiscal (CSF)." },
          { type: "image", src: "assets/img/mexico_onb_sucess.png", width: 1280, height: 832, alt: "Onboarding México: confirmação de documentação enviada com sucesso." }
        ]
      },
      context: "O órgão regulatório do México (SAT) passou a exigir que plataformas digitais emitissem obrigatoriamente o CFDI (comprovante da retenção de impostos das vendas) para produtores pessoa jurídica com atividade fiscal no país, com foco em cessar a bitributação e mapear a receita gerada por cada produtor. A não emissão de CFDI (não era obrigatória) gerava uma grande dor nos usuários, que foram captadas na pesquisa.",
      process: "Mapeamento das exigências do SAT ponto a ponto, cruzado com o fluxo existente de pessoas jurídicas. A partir de um documento chamado CSF (o equivalente mexicano a um cartão CNPJ) seria possível reduzir bastante a carga tributária e evitar a bitributação. O desafio era que o fluxo de KYC internacional, mesmo após a virada para pré-venda, era genérico demais: a base legada podia não ter essa documentação, o onboarding internacional não pedia os documentos certos, e não havia uma forma assíncrona de atualizar os dados fiscais de quem já tinha passado pelo KYC.",
      hypothesis: "Adequar o fluxo de forma incremental, conectando a plataforma diretamente ao SAT para o envio assíncrono da CSF de quem já era verificado, permitiria atender à norma sem gerar fricção adicional para usuários que já confiavam na plataforma.",
      design: "Ajustes de copies para novos usuários, afim de padronizar a documentação exigida no México. Fluxo de conexão direta com o SAT e envio assíncrono da CSF, permitindo a emissão do CFDI e mantendo os dados fiscais sempre atualizados na plataforma, garantindo compliance total no México."
    },
    {
      key: 5, sortYear: 2026,
      tagA: "Produto físico", tagAColor: "var(--accent-pink-text)", tagAChip: "var(--accent-pink-chip)",
      tagB: "PoD", dateLabel: "2026",
      title: "Criar uma coleção a partir de uma imagem",
      cover: { src: "assets/img/threeclick_banner.png", width: 1366, height: 768, alt: "Tela inicial do fluxo 3-click-to-store: criação simplificada de produtos print on demand." },
      sectionMedia: {
        design: [
          { type: "image", src: "assets/img/threeclick_desenho_1.png", width: 1366, height: 768, alt: "Fluxo 3-click-to-store: envio da imagem única que gera os três produtos." },
          { type: "image", src: "assets/img/threeclick_desenho_2.png", width: 1366, height: 768, alt: "Fluxo 3-click-to-store: ajuste das variações dos produtos." },
          { type: "image", src: "assets/img/threeclick_desenho_3.png", width: 1366, height: 768, alt: "Fluxo 3-click-to-store: revisão e publicação dos produtos na loja." },
          { type: "video", src: "assets/video/threeclick_video.mp4", width: 1920, height: 1080 }
        ]
      },
      context: "Numa reestruturação interna, fui movimentado para a frente de produtos físicos. O fluxo de criação simplificada para produtos PoD (print on demand) já estava em desenvolvimento, mas com problemas claros de interface e usabilidade, copies não refinadas e estados de erro ainda não desenvolvidos.",
      process: "Ajustei o fluxo já existente, negociando com o Product Manager o que já tinha sido desenvolvido e até onde poderíamos mudar, para dar mais previsibilidade e entendimento da jornada ao usuário final.",
      hypothesis: "Refinar interface, copy e estados de erro do fluxo já em desenvolvimento seria suficiente para destravar o lançamento, sem precisar redesenhar a jornada do zero.",
      design: "Fluxo simplificado de criação de 3 produtos a partir de uma única imagem, com ajustes de variação totalmente integrados à Montink (parceira de PoD) sem que o usuário precise lidar com nenhuma questão logística ou de produção. Foi ao ar no Hotmart Fire para todos os usuários brasileiros."
    }
  ];

  var FAN = [
    { rotate: -5, translateY: 8, z: 6, marginRight: -100 },
    { rotate: -3, translateY: 0, z: 5, marginRight: -100 },
    { rotate: -1, translateY: 6, z: 4, marginRight: -100 },
    { rotate: 1, translateY: -6, z: 3, marginRight: -100 },
    { rotate: 3, translateY: 0, z: 2, marginRight: null }
  ];

  var TILTS = [-1.5, 1.2, -1, 1.5, -1.2];

  var state = { sortOrder: "newest", openKey: null };

  function sortedCases() {
    var sorted = CASES.slice().sort(function (a, b) {
      return state.sortOrder === "newest" ? b.sortYear - a.sortYear : a.sortYear - b.sortYear;
    });
    return sorted.map(function (item, i) {
      return Object.assign({}, item, { posLabel: String(i + 1).padStart(2, "0"), _i: i });
    });
  }

  function tagsHTML(c) {
    return '<span class="case-tag" style="background:' + c.tagAChip + ';color:' + c.tagAColor + '">' + c.tagA + '</span>' +
      '<span class="case-tag" style="background:var(--paper-200);color:var(--ink-muted)">' + c.tagB + '</span>' +
      '<span class="case-tag" style="background:var(--paper-200);color:var(--ink-muted)">' + c.dateLabel + '</span>';
  }

  function coverHTML(c) {
    var inner = c.cover
      ? '<img class="case-cover" src="' + c.cover.src + '" alt="" loading="lazy" width="' + c.cover.width + '" height="' + c.cover.height + '">'
      : '<div class="placeholder-img"><span>imagem em breve</span></div>';
    return '<div class="case-media">' + inner + '</div>';
  }

  function renderCaseCardDesktop(c) {
    var fan = FAN[c._i] || FAN[FAN.length - 1];
    var style = "width: 280px; transform: rotate(" + fan.rotate + "deg) translateY(" + fan.translateY + "px); z-index: " + fan.z + ";" + (fan.marginRight !== null ? " margin-right: " + fan.marginRight + "px;" : "");
    var el = document.createElement("button");
    el.type = "button";
    el.className = "case-card";
    el.setAttribute("aria-haspopup", "dialog");
    el.setAttribute("style", style);
    el.innerHTML =
      coverHTML(c) +
      '<div class="case-info">' +
        '<p class="case-pos">' + c.posLabel + '</p>' +
        '<div class="case-tags">' + tagsHTML(c) + '</div>' +
        '<h3 class="case-title">' + c.title + '</h3>' +
      '</div>';
    el.addEventListener("click", function () { openCase(c.key); });
    return el;
  }

  function renderCaseCardMobile(c) {
    var tilt = TILTS[c._i % TILTS.length];
    var el = document.createElement("button");
    el.type = "button";
    el.className = "case-card-m";
    el.setAttribute("aria-haspopup", "dialog");
    // Stick just below the sticky cases head; each card a little lower than the last.
    el.setAttribute("style", "top: calc(var(--header-h) + var(--cases-head-h) + var(--stack-gap) + " + (c._i * 14) + "px); transform: rotate(" + tilt + "deg);");
    el.innerHTML =
      coverHTML(c) +
      '<div class="case-info">' +
        '<p class="case-pos">' + c.posLabel + '</p>' +
        '<div class="case-tags">' + tagsHTML(c) + '</div>' +
        '<h3 class="case-title">' + c.title + '</h3>' +
      '</div>';
    el.addEventListener("click", function () { openCase(c.key); });
    return el;
  }

  function renderCases() {
    var list = sortedCases();
    var deskWrap = document.getElementById("cases-stack-desktop");
    var mobWrap = document.getElementById("cases-stack-mobile");
    if (deskWrap) {
      deskWrap.innerHTML = "";
      list.forEach(function (c) { deskWrap.appendChild(renderCaseCardDesktop(c)); });
    }
    if (mobWrap) {
      mobWrap.innerHTML = "";
      list.forEach(function (c) { mobWrap.appendChild(renderCaseCardMobile(c)); });
    }
    var sortLabel = state.sortOrder === "newest" ? "Mais recentes primeiro ↓" : "Mais antigos primeiro ↑";
    document.querySelectorAll(".sort-toggle").forEach(function (btn) {
      btn.textContent = sortLabel;
    });
  }

  function toggleSort() {
    state.sortOrder = state.sortOrder === "newest" ? "oldest" : "newest";
    renderCases();
  }

  function caseHash(key) { return "#case-" + key; }

  function openCase(key) {
    state.openKey = key;
    if (location.hash !== caseHash(key)) history.pushState(null, "", caseHash(key));
    renderOverlay();
  }
  function closeCase() {
    state.openKey = null;
    if (/^#case-/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
    renderOverlay();
  }
  function syncFromHash() {
    var m = /^#case-(\d+)$/.exec(location.hash);
    state.openKey = m ? Number(m[1]) : null;
    renderOverlay();
  }

  // Each item keeps its own proportions: portrait images are capped at 80vh,
  // landscape media spans the column. `placeholder` shows "imagem em breve"
  // when the list is empty (top media only; section media just collapses).
  function renderMediaInto(wrap, items, placeholder) {
    if (!wrap) return;
    wrap.innerHTML = "";
    items = items || [];
    wrap.classList.toggle("is-empty", items.length === 0);
    if (items.length === 0) {
      if (placeholder) wrap.innerHTML = '<div class="placeholder-img"><span>imagem em breve</span></div>';
      return;
    }
    items.forEach(function (m) {
      var fig = document.createElement("figure");
      fig.className = "media-" + m.type;
      fig.style.setProperty("--w", m.width);
      fig.style.setProperty("--h", m.height);
      var el;
      if (m.type === "video") {
        el = document.createElement("video");
        el.src = m.src;
        el.controls = true;
        el.playsInline = true;
        el.preload = "metadata";
      } else {
        el = document.createElement("img");
        el.src = m.src;
        el.alt = m.alt || "";
        el.loading = "lazy";
      }
      el.width = m.width;
      el.height = m.height;
      fig.appendChild(el);
      wrap.appendChild(fig);
    });
  }

  function renderMedia(c) {
    var top = c && c.cover ? [Object.assign({ type: "image" }, c.cover)] : [];
    renderMediaInto(document.getElementById("overlay-media"), top.concat(c && c.media ? c.media : []), true);
    document.querySelectorAll("[data-section-media]").forEach(function (wrap) {
      var key = wrap.getAttribute("data-section-media");
      renderMediaInto(wrap, c && c.sectionMedia ? c.sectionMedia[key] : [], false);
    });
  }

  function renderOverlay() {
    var overlay = document.getElementById("case-overlay");
    if (!overlay) return;
    var list = sortedCases();
    var openCaseData = CASES.find(function (c) { return c.key === state.openKey; });
    var openSorted = list.find(function (c) { return c.key === state.openKey; });
    if (!openCaseData) {
      state.openKey = null;
      renderMedia(null); // drops any playing video
      if (overlay.open) overlay.close();
      return;
    }

    var idx = list.indexOf(openSorted);
    var total = String(list.length).padStart(2, "0");
    document.getElementById("overlay-index").textContent = (openSorted ? openSorted.posLabel : "--") + " / " + total;
    document.getElementById("overlay-title").textContent = openCaseData.title;
    document.getElementById("overlay-tags").innerHTML = tagsHTML(openCaseData);
    renderMedia(openCaseData);
    document.getElementById("overlay-context").textContent = openCaseData.context;
    document.getElementById("overlay-process").textContent = openCaseData.process;
    document.getElementById("overlay-hypothesis").textContent = openCaseData.hypothesis;
    document.getElementById("overlay-design").textContent = openCaseData.design;

    var prev = idx > 0 ? list[idx - 1] : null;
    var next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;
    overlay.querySelectorAll('[data-nav="prev"]').forEach(function (btn) {
      btn.hidden = !prev;
      btn.dataset.key = prev ? prev.key : "";
    });
    overlay.querySelectorAll('[data-nav="next"]').forEach(function (btn) {
      btn.hidden = !next;
      btn.dataset.key = next ? next.key : "";
    });

    if (!overlay.open) overlay.showModal();
    overlay.scrollTop = 0;
  }

  function initOverlay() {
    var overlay = document.getElementById("case-overlay");
    if (!overlay) return;
    var closeBtn = document.getElementById("overlay-close");
    if (closeBtn) closeBtn.addEventListener("click", closeCase);
    overlay.querySelectorAll("[data-nav]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.dataset.key) openCase(Number(btn.dataset.key));
      });
    });
    // Escape closes the <dialog> natively; keep state and URL in sync.
    overlay.addEventListener("close", function () {
      if (state.openKey !== null) closeCase();
    });
    window.addEventListener("popstate", syncFromHash);
    syncFromHash();
  }

  function initSortButtons() {
    document.querySelectorAll(".sort-toggle").forEach(function (btn) {
      btn.addEventListener("click", toggleSort);
    });
  }

  function initLoadMore() {
    document.querySelectorAll("[data-load-more]").forEach(function (btn) {
      var list = document.getElementById(btn.getAttribute("data-load-more"));
      if (!list) return;
      btn.setAttribute("aria-controls", list.id);
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        var expand = btn.getAttribute("aria-expanded") !== "true";
        list.querySelectorAll(".timeline-extra").forEach(function (li) { li.hidden = !expand; });
        btn.setAttribute("aria-expanded", String(expand));
        btn.textContent = expand ? "Carregar menos ↑" : "Carregar mais ↓";
        // Collapsing from the bottom of a long list can leave the list above the
        // viewport; bring it back into view so the reader isn't lost.
        if (!expand && list.getBoundingClientRect().top < 0) {
          list.scrollIntoView({ block: "start" });
        }
      });
    });
  }

  // The cases head sticks under the site header, and the mobile card stack
  // sticks under the head; both heights change with the viewport.
  function initStickyOffsets() {
    var cases = document.getElementById("cases");
    var header = document.querySelector(".site-header");
    var head = document.querySelector(".cases-head");
    if (!cases || !header || !head) return;
    function update() {
      cases.style.setProperty("--header-h", header.offsetHeight + "px");
      cases.style.setProperty("--cases-head-h", head.offsetHeight + "px");
    }
    update();
    if ("ResizeObserver" in window) {
      var ro = new ResizeObserver(update);
      ro.observe(header);
      ro.observe(head);
    } else {
      window.addEventListener("resize", update);
    }
  }

  function initMenu() {
    var drawer = document.getElementById("menu-drawer");
    var toggle = document.querySelector(".menu-toggle");
    if (!drawer || !toggle) return;
    toggle.addEventListener("click", function () {
      drawer.showModal();
      toggle.setAttribute("aria-expanded", "true");
    });
    drawer.addEventListener("close", function () { toggle.setAttribute("aria-expanded", "false"); });
    var closeBtn = drawer.querySelector(".drawer-close");
    if (closeBtn) closeBtn.addEventListener("click", function () { drawer.close(); });
    // The dialog is the panel itself, so a click whose target is the dialog landed on the backdrop.
    drawer.addEventListener("click", function (e) { if (e.target === drawer) drawer.close(); });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { drawer.close(); });
    });
    // Widening past the breakpoint brings the inline nav back; drop the drawer.
    var wide = window.matchMedia("(min-width: 601px)");
    wide.addEventListener("change", function (e) { if (e.matches && drawer.open) drawer.close(); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMenu();
    initStickyOffsets();
    renderCases();
    initOverlay();
    initSortButtons();
    initLoadMore();
  });
})();

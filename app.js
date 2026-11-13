const $ = s => document.querySelector(s), R = n => Math.floor(Math.random() * n), pk = a => a[R(a.length)], cl = v => Math.round(Math.max(0, Math.min(100, v)));
const FN = ["Silvo", "Osmar", "Nilton", "Zeca", "Dino", "Mauro", "Waldir", "Jair", "Alcides", "Nelson", "Orlando", "Amaro", "Dedé", "Ivo", "Heleno", "Odair", "Tião", "Zito", "Beto", "Lauro", "Ary", "Cido", "Bento", "Nair", "Binho", "Gessica", "Pamella", "Marques","Pericles", "Jessica", "Luis", "Lewis", "Jake Harenrral","Tico", "João"];
const NK = ["Bigode", "Cabeção", "Pavão", "Gato", "Mineiro", "Baiano", "Careca", "Tatu", "Russo", "Paraíba", "Sapo", "Neném", "Pardal", "Touro", "Fumaça", "Canhoto", "Mosca", "Tigre", "Peixe", "Pelado", "Gaúcho", "Carioca", "Sargento", "Doutor", "Cabecinha", "Amilton", "Hamilton", "Bebel", "Urso", "Junior", "Paulista", "Estrela", "Dorme sujo"];
// nome, craque, posição do craque, cor, grupo, força base
const TD = [["Botafogo", "Garrincha", 10, "#2B2118", "A", 72], ["Flamengo", "Zico", 6, "#A32A1F", "A", 72], ["Corinthians", "Sócrates", 6, "#555", "A", 69], ["Cruzeiro", "Tostão", 8, "#2D5BA8", "A", 68], ["Internacional", "Falcão", 5, "#C4462B", "A", 67],
["Fluminense", "Rivelino", 6, "#7A2E3A", "B", 72], ["Vasco", "Roberto Dinamite", 9, "#3B4A6B", "B", 70], ["Santos", "Pelé", 9, "#8A8A7A", "B", 73], ["Palmeiras", "Ademir da Guia", 6, "#2F6B3A", "B", 70], ["São Paulo", "Gerson", 5, "#7D4E2D", "B", 68]];
const HP = [[50, 93], [14, 80], [38, 82], [62, 82], [86, 80], [24, 68], [50, 66], [76, 68], [22, 56], [50, 54], [78, 56]];
let G = null, NM = "", DD = 1950; const CLUBS = [["Flamengo", "#A32A1F", "A", 72], ["Botafogo", "#2B2118", "A", 72], ["Bangu", "#8C6B2F", "A", 64], ["Madureira", "#3F7F9A", "A", 60], ["Olaria", "#6B7F3A", "A", 60], ["Fluminense", "#7A2E3A", "B", 72], ["Vasco", "#3B4A6B", "B", 72], ["America", "#B04A4A", "B", 65], ["Bonsucesso", "#4A6B6B", "B", 60], ["São Cristóvão", "#9A6B3A", "B", 60]],
    STARS = { 1950: { Flamengo: ["Dida", 9], Fluminense: ["Didi", 6], Botafogo: ["Garrincha", 10], Vasco: ["Ademir", 9], Bangu: ["Zózimo", 2] }, 1960: { Flamengo: ["Gérson", 6], Fluminense: ["Castilho", 0], Botafogo: ["Jairzinho", 10], Vasco: ["Bellini", 2], America: ["Edu", 10] }, 1970: { Flamengo: ["Zico", 6], Fluminense: ["Rivelino", 6], Botafogo: ["Jairzinho", 10], Vasco: ["Roberto Dinamite", 9] }, 1980: { Flamengo: ["Zico", 6], Fluminense: ["Romerito", 8], Vasco: ["Roberto Dinamite", 9], Bangu: ["Marinho", 10] } },
    REAL = { 1950: [["Zizinho", "M", 86], ["Jair da Rosa Pinto", "M", 84], ["Danilo", "M", 82], ["Barbosa", "G", 84], ["Nilton Santos", "D", 88], ["Castilho", "G", 82], ["Zagallo", "A", 80]], 1960: [["Zagallo", "A", 84], ["Nilton Santos", "D", 85], ["Amarildo", "A", 85], ["Quarentinha", "A", 84], ["Manga", "G", 82], ["Didi", "M", 88], ["Garrincha", "A", 90], ["Gérson", "M", 88]], 1970: [["Paulo César Caju", "M", 86], ["Carlos Alberto Torres", "D", 86], ["Marinho Chagas", "D", 82], ["Gérson", "M", 86], ["Doval", "A", 82], ["Edinho", "D", 82], ["Dirceu", "M", 84], ["Jairzinho", "A", 88]], 1980: [["Júnior", "D", 88], ["Leandro", "D", 86], ["Adílio", "M", 84], ["Nunes", "A", 84], ["Andrade", "M", 82], ["Tita", "A", 82], ["Assis", "A", 82], ["Washington", "A", 82], ["Branco", "D", 82], ["Ricardo Gomes", "D", 82], ["Geovani", "M", 84], ["Mauricio", "A", 80]] }, PS = ["G", "D", "D", "D", "D", "M", "M", "M", "A", "A", "A", "G", "D", "M", "A", "A"], WX = ["sol forte", "garoa fina", "céu nublado", "chuva forte e gramado pesado", "calor de rachar"], RF = ["Aníbal Sampaio", "Gilberto Apito", "Ernesto Carvalho", "Jaime Cartão", "Olavo Silvestre"], ST = { Botafogo: "General Severiano", Flamengo: "da Gávea", Corinthians: "Parque São Jorge", Cruzeiro: "Barro Preto", Internacional: "dos Eucaliptos", Fluminense: "das Laranjeiras", Vasco: "São Januário", Santos: "Vila Belmiro", Palmeiras: "Palestra Itália", "São Paulo": "do Pacaembu" };
function mk() {
    return CLUBS.map(([n, c, g, b]) => {
        const st = (STARS[DD] || {})[n], s = st ? st[0] : "", si = st ? st[1] : 9, u = new Set([s]), p = []; for (let i = 0; i < 16; i++) { const o = { q: PS[i], e: 100, y: 0, inj: 0 }; if (i == si && s) { p.push({ ...o, n: s, k: s.split(" ")[0], r: b + 18 }); continue } let k, f; do { f = pk(FN); k = pk(NK) } while (u.has(f + k)); u.add(f + k); p.push({ ...o, n: f + " " + k, k, r: b + R(13) - 6 - (i > 10 ? 5 : 0) + (i == si ? 10 : 0) }) }
        return { n, c, g, s, p, str: p.slice(0, 11).reduce((a, x) => a + x.r, 0) / 11 }
    })
}
function rr(ids) { let a = [...ids, -1], n = a.length, Rs = []; for (let r = 0; r < n - 1; r++) { let m = []; for (let i = 0; i < n / 2; i++) { let x = a[i], y = a[n - 1 - i]; if (x >= 0 && y >= 0) m.push(r % 2 ? [y, x] : [x, y]) } Rs.push(m); a.splice(1, 0, a.pop()) } return Rs.concat(Rs.map(m => m.map(([x, y]) => [y, x]))) }
function save() { try { localStorage.setItem("tb2", JSON.stringify(G)) } catch (e) { } }
function load() { try { return JSON.parse(localStorage.getItem("tb2")) } catch (e) { return null } }
function sim(H, A, tH, tA, n = 9, lo = 4, sp = 86) {
    const mins = []; for (let i = 0; i < n; i++)mins.push(lo + R(sp)); mins.sort((a, b) => a - b); const st = [S(H) + (H == G.T[G.me] ? G.b.t / 17 : 3), S(A)], ev = [], g = [0, 0];
    mins.forEach(m => {
        const s = Math.random() < st[0] / (st[0] + st[1]) ? 0 : 1, T = s ? A : H, D = s ? H : A, ta = s ? tA : tH, td = s ? tH : tA, ai = pk(sl(T, "A").concat(sl(T, "A"), sl(T, "M"))), a = T.p[ai], k = D.p[0], d = D.p[pk(sl(D, "D"))];
        const pg = (.32 + (a.r - k.r) / 160 + .03 * ta - .02 * td + (T == G.T[G.me] ? FV()[0] : 0) - (D == G.T[G.me] ? FV()[1] : 0)) * (G.wxi == 3 ? .85 : 1), r = Math.random(); let t, x;
        if (r < pg) { x = "g"; g[s]++; t = pk([`GOOOL! ${a.k} manda para as redes!`, `Que pancada de ${a.k}! É gol, meus senhores!`]) }
        else if (r < pg + .33) { x = "d"; t = `${a.k} chuta forte... ${k.k} espalma! Que defesa!` }
        else if (r < pg + .48) { x = "t"; t = `Bola na trave! ${a.k} quase abre o placar!` }
        else if (r < pg + .65) { x = "f"; t = `${a.k} finaliza... pra fora, tirando tinta do travessão.` }
        else { x = "f"; t = `Falta de ${d.k} em ${a.k}.`; if (Math.random() < .5) { d.y++; t += ` Cartão amarelo para ${d.k}!`; if (d.y > 1) { d.y = 0; d.out = 1; d.rd = 1; d.inj = 2; t += ` É o segundo! ${d.k} está expulso!` } } if (Math.random() < .15) { a.inj = 2; t += ` ${a.k} fica caído... parece contusão.` } }
        ev.push({ m, s, ai, x, t, k: a.k })
    }); return { ev, g }
}
const quick = (h, a) => { const r = sim(G.T[h], G.T[a], 0, 0); r.ev.forEach(e => e.x == "g" && art(e.s ? a : h, e.k)); return r.g };
function rec(h, a, g, l, pen) { G.m.push({ h, a, gh: g[0], ga: g[1], l }) }
function tab(g) {
    const t = {}; G.T.forEach((x, i) => x.g == g && (t[i] = { i, P: 0, J: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0 }));
    G.m.filter(m => m.l && t[m.h]).forEach(m => { [[m.h, m.gh, m.ga], [m.a, m.ga, m.gh]].forEach(([i, f, c]) => { const o = t[i]; o.J++; o.GP += f; o.GC += c; if (f > c) { o.V++; o.P += 3 } else if (f == c) { o.E++; o.P++ } else o.D++ }) });
    return Object.values(t).sort((a, b) => b.P - a.P || (b.GP - b.GC) - (a.GP - a.GC) || b.GP - a.GP)
}
const win = (h, a, [x, y]) => x > y ? h : y > x ? a : (Math.random() < G.T[h].str / (G.T[h].str + G.T[a].str) ? h : a);
function start() {
    $("#app").innerHTML = `<h1>Técnico de Botão</h1><p style="text-align:center;margin:0">Campeonato Carioca, era de ouro. Rádio GS Bebel no ar.</p>
<div class="card"><label>Nome do treinador<input id="nm" maxlength="24" value="${NM}" placeholder="Ex.: Professor Aymoré"></label><label>Década do campeonato<select id="dc">${[1950, 1960, 1970, 1980].map(y => `<option ${y == DD ? "selected" : ""}>${y}</option>`).join("")}</select></label>
<p style="margin:8px 0 4px">Escolha o clube:</p><div class="grid" id="tms"></div></div><button class="g" id="go" style="width:100%" disabled>Assinar contrato</button>
${load() ? '<button id="ct" style="width:100%;margin-top:8px">Continuar jogo salvo</button>' : ""}<button id="ib" style="width:100%;margin-top:8px">Carregar backup</button>`;
    let sel = -1; const T = mk(); $("#tms").innerHTML = T.map((t, i) => `<button class="tm" data-i="${i}"><b>${t.n}</b><small>Grupo ${t.g} · craque ${t.s || "sem craque"}</small><small>Força ${Math.round(t.str)}</small></button>`).join("");
    document.querySelectorAll(".tm").forEach(b => b.onclick = () => { sel = +b.dataset.i; document.querySelectorAll(".tm").forEach(x => x.classList.toggle("on", x == b)); $("#go").disabled = false });
    $("#go").onclick = () => newGame($("#nm").value || "Professor", sel, T); if ($("#ct")) $("#ct").onclick = () => { G = load(); hub() }; $("#ib").onclick = bk; $("#dc").onchange = () => { NM = $("#nm").value; DD = +$("#dc").value; start() };
}
function newGame(coach, me, T) {
    G = { coach, me, T, yr: DD, r: 0, st: "liga", m: [], tac: 0, b: { t: 60, d: 60, v: 60 }, K: [], msg: "", tab: T[me].g };
    G.F = rr([0, 1, 2, 3, 4]).map((m, i) => m.map(([x, y]) => [x, y]).concat(rr([5, 6, 7, 8, 9])[i])); hub()
}
function bar(l, v, c) { return `<div class="bar"><div class="row" style="border:0;height:auto;background:none"><span>${l}</span><span>${v}</span></div><div><i style="width:${v}%;background:${c}"></i></div></div>` }
function table(g) { const t = tab(g); return `<table><tr><th></th><th>Clube</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>SG</th></tr>${t.map((x, i) => `<tr class="${x.i == G.me ? "me " : ""}${i < 2 ? "q" : ""}"><td>${i + 1}</td><td>${G.T[x.i].n}</td><td>${x.P}</td><td>${x.J}</td><td>${x.V}</td><td>${x.E}</td><td>${x.D}</td><td>${x.GP - x.GC}</td></tr>`).join("")}</table>` }
function hub() {
    G.art = G.art || {}; G.yr = G.yr || 1950; DD = Math.floor(G.yr / 10) * 10; if (G.cash == null) { G.cash = 3e6; G.mk = mkm() } bpz(); const kk = G.yr + G.st + G.r; if (G.nk != kk) { G.nk = kk; G.nw = news().sort(() => Math.random() - .5).slice(0, 3) } save(); const me = G.T[G.me], b = G.b; let nx = "";
    if (G.st == "liga") { const f = G.F[G.r].find(([h, a]) => h == G.me || a == G.me); nx = f ? `Rodada ${G.r + 1}/10: ${G.T[f[0]].n} x ${G.T[f[1]].n}${isCl(f[0], f[1]) ? " (CLÁSSICO)" : ""}` : `Rodada ${G.r + 1}/10: seu time folga` }
    else if (G.st == "fim") nx = "Temporada encerrada"; else { const f = G.K.find(([h, a]) => h == G.me || a == G.me); nx = (G.st == "semi" ? "Semifinal: " : "FINAL: ") + G.T[f[0]].n + " x " + G.T[f[1]].n }
    const warn = b.d < 30 ? "A diretoria já procura outro nome para o seu lugar." : b.t < 30 ? "A torcida lota a arquibancada de lenços brancos." : b.v < 30 ? "O vestiário está rachado." : "";
    $("#app").innerHTML = `<div class="card"><div class="row"><div><h2>${me.n}</h2>Téc. ${G.coach}</div><small>Grupo ${me.g} · ${G.yr}</small></div>
${bar("Torcida", b.t, "#C9A227")}${bar("Diretoria", b.d, "#5B3A6B")}${bar("Vestiário", b.v, "#4A5D3A")}${warn ? `<p style="color:var(--bad)">${warn}</p>` : ""}
<p style="margin:6px 0">Meta da diretoria: terminar entre os 2 primeiros do grupo.</p></div>
<div class="card"><b>${nx}</b>${G.msg ? `<p>${G.msg}</p>` : ""}
${G.st != "fim" ? `<p style="margin:8px 0 4px">Tática:</p><div class="tg">${[[1, "Ataque"], [0, "Equilíbrio"], [-1, "Retranca"]].map(([v, l]) => `<button data-t="${v}" class="${G.tac == v ? "on" : ""}">${l}</button>`).join("")}</div>
<button class="g" id="pl" style="width:100%;margin-top:10px">${G.st == "liga" && !G.F[G.r].some(([h, a]) => h == G.me || a == G.me) ? "Passar a rodada" : "Abrir prancheta"}</button>` : `<button class="g" id="ns" style="width:100%">Próxima temporada</button><button id="nv" style="width:100%;margin-top:8px">Nova carreira</button>`}</div>
${extra()}<div class="card"><div class="tg" style="margin-bottom:8px">${["A", "B"].map(g => `<button data-g="${g}" class="${G.tab == g ? "on" : ""}">Grupo ${g}</button>`).join("")}</div>${table(G.tab)}
<small>Barra verde: classificados ao mata-mata.</small></div>`;
    document.querySelectorAll("[data-t]").forEach(x => x.onclick = () => { G.tac = +x.dataset.t; hub() }); document.querySelectorAll("[data-g]").forEach(x => x.onclick = () => { G.tab = x.dataset.g; hub() });
    if ($("#pl")) $("#pl").onclick = adv; if ($("#mk")) $("#mk").onclick = mkt; if ($("#ns")) $("#ns").onclick = ns; if ($("#sv")) $("#sv").onclick = bk; if ($("#of1")) $("#of1").onclick = () => prop(1); if ($("#of0")) $("#of0").onclick = () => prop(0); if ($("#nv")) $("#nv").onclick = () => { try { localStorage.removeItem("tb2") } catch (e) { } G = null; start() }
}
function after(my, op, lg) {
    const d = my > op ? 2 : my == op ? 1 : 0; const k = G.cl ? 1.5 : 1; G.b.t = cl(G.b.t + [-9, -1, 8][d] * k); G.b.v = cl(G.b.v + [-6, 0, 5][d] * k); G.b.d = cl(G.b.d + [-7, 0, 5][d] * k);
    if (lg) { const p = tab(G.T[G.me].g).findIndex(x => x.i == G.me); G.b.d = cl(G.b.d + (p < 2 ? 2 : -3)) }
    G.msg = ["Derrota amarga. A imprensa não perdoa.", "Empate magro.", "Vitória! A GS Bebel só fala do senhor."][d]
}
function fired() {
    const o = G.T.map((t, i) => i).filter(i => i != G.me).sort((a, b) => G.T[a].str - G.T[b].str).slice(0, 3);
    $("#app").innerHTML = `<h1>Demitido!</h1><div class="card"><p>A diretoria do ${G.T[G.me].n} dispensou o treinador ${G.coach}. Você está sem clube. Três times menores aceitam o seu currículo:</p>${o.map(i => `<button class="tm" style="width:100%;margin:4px 0" data-i="${i}"><b>${G.T[i].n}</b><small>Força ${Math.round(G.T[i].str)}</small></button>`).join("")}</div>`;
    document.querySelectorAll(".tm").forEach(b => b.onclick = () => { const y = G.yr; newGame(G.coach, +b.dataset.i, mk()); G.yr = y; hub() })
}
function adv() {
    if (G.st == "liga") {
        let mine = null; G.F[G.r].forEach(([h, a]) => { if (h == G.me || a == G.me) mine = [h, a]; else rec(h, a, quick(h, a), 1) });
        const fin = () => { G.r++; rest(); if (G.b.d <= 0) return fired(); if (G.r >= 10) return endLg(); hub() };
        if (mine) play(mine[0], mine[1], g => { rec(mine[0], mine[1], g, 1); const me = mine[0] == G.me ? 0 : 1; after(g[me], g[1 - me], 1); fin() }); else { G.msg = "Dia de folga e de reunião com a diretoria."; fin() }
    }
    else {
        const w = []; let mine = null; G.K.forEach(([h, a]) => { if (h == G.me || a == G.me) mine = [h, a]; else w.push(win(h, a, quick(h, a))) });
        const fin = () => {
            if (G.b.d <= 0) return fired(); if (G.st == "final") { G.champ = w[0]; G.st = "fim"; G.msg = G.champ == G.me ? "CAMPEÃO! A cidade parou. A diretoria quer renovar por dez anos." : "Vice-campeão. A temporada foi digna."; return hub() }
            if (!w.includes(G.me)) { G.st = "fim"; G.msg = "Eliminado na semifinal. A diretoria reavalia o seu trabalho."; G.b.d = cl(G.b.d - 10); return hub() } G.K = [[w[0], w[1]]]; G.st = "final"; G.msg = "Você está na final!"; hub()
        };
        if (mine) play(mine[0], mine[1], g => { const me = mine[0] == G.me ? 0 : 1, x = [...g]; w.push(win(mine[0], mine[1], x)); after(g[me], g[1 - me], 0); fin() }); else fin()
    }
}
function endLg() {
    G.T.forEach(t => t.p.forEach(p => p.y = 0)); const ar = tp()[0]; if (ar && ar[0].startsWith(G.T[G.me].n + "|")) { G.b.t = cl(G.b.t + 6); G.b.v = cl(G.b.v + 4) } const A = tab("A"), B = tab("B"), q = [A[0].i, A[1].i, B[0].i, B[1].i];
    if (!q.includes(G.me)) { G.st = "fim"; G.b.d = cl(G.b.d - 30); G.msg = "Fora do mata-mata. A meta não foi cumprida."; return G.b.d <= 0 ? fired() : hub() }
    G.K = [[A[0].i, B[1].i], [B[0].i, A[1].i]]; G.st = "semi"; G.msg = "Classificado! Semifinais: 1ºA x 2ºB e 1ºB x 2ºA."; hub()
}
function playOld(h, a, cb) {
    const H = G.T[h], A = G.T[a], mt = h == G.me, r = sim(H, A, mt ? G.tac : 0, mt ? 0 : G.tac), sc = [0, 0];
    const P = [...H.p.map((p, i) => [p, HP[i], H.c, 0, i]), ...A.p.map((p, i) => [p, [100 - HP[i][0], 100 - HP[i][1]], A.c, 1, i])];
    $("#app").innerHTML = `<div class="card"><div class="row"><b>${H.n}</b><div class="score" id="sc">0 x 0</div><b>${A.n}</b></div><div id="mn" style="text-align:center">Apito inicial</div></div>
<div class="pitch">${P.map(([p, [x, y], c, s, i]) => `<div class="pl" id="p${s}${i}" style="left:${x}%;top:${y}%"><b style="background:${c}">${i + 1}</b><i>${p.k}</i></div>`).join("")}<div id="ball" style="left:50%;top:50%"></div></div>
<div class="radio" id="rd" style="margin-top:10px" aria-live="polite"><p>📻 Rádio GS Bebel: boa tarde, amigos do esporte! Vai rolar a bola!</p></div><button id="sk" style="width:100%;margin-top:10px">Pular para o fim</button>`;
    let i = 0, tm; const line = (t, c) => { $("#rd").insertAdjacentHTML("beforeend", `<p class="${c || ""}">${t}</p>`); $("#rd").scrollTop = 1e5 };
    const show = e => {
        const pe = HP[e.ai], [x, y] = e.s ? [100 - pe[0], 100 - pe[1]] : pe; document.querySelectorAll(".hot").forEach(z => z.classList.remove("hot")); $("#p" + e.s + e.ai).classList.add("hot");
        $("#ball").style.left = (e.x == "g" ? 50 : x) + "%"; $("#ball").style.top = (e.x == "g" ? (e.s ? 96 : 4) : y) + "%"; if (e.x == "g") sc[e.s]++; $("#sc").textContent = sc[0] + " x " + sc[1]; $("#mn").textContent = e.m + " minutos"; line(e.m + "’ " + e.t, e.x == "g" ? "gol" : "")
    };
    const end = () => { $("#sk").textContent = "Encerrar partida"; line("Apita o árbitro! Fim de jogo: " + H.n + " " + r.g[0] + " x " + r.g[1] + " " + A.n + ".", "gol"); $("#sk").onclick = () => cb(r.g) };
    const step = () => { if (i >= r.ev.length) return end(); show(r.ev[i++]); tm = setTimeout(step, 2400) };
    $("#sk").onclick = () => { clearTimeout(tm); while (i < r.ev.length) show(r.ev[i++]); end() }; tm = setTimeout(step, 1500)
}
start();
const S = T => T.p.slice(0, 11).reduce((a, x) => a + x.r * (1 - (100 - x.e) / 300) * (x.out ? 0 : x.inj ? .5 : 1), 0) / 11;
const tire = T => T.p.slice(0, 11).forEach(p => p.e = Math.max(15, p.e - 10 - R(8) - (G.wxi == 4 ? 5 : 0)));
function rest() { G.T.forEach(t => t.p.forEach(p => { p.e = Math.min(100, p.e + 12); if (p.inj > 0) p.inj--; if (!p.inj) p.rd = 0 })); G.mk = mkm(); G.cash += Math.round((G.b.t * 9000 - 300000) * infl()); G.of = null; { const my = G.T[G.me], s = my.p.find(p => p.n == my.s); if (s && Math.random() < .3) G.of = { c: pk(G.T.filter(t => t != my)).n, v: Math.round(val(s) * (1.2 + R(5) / 10) / 1000) * 1000 } } }
function board(ti, lb, lim, done) {
    const my = G.T[G.me]; let s = -1, n = 0;
    const draw = () => {
        $("#app").innerHTML = `<h2>${ti}</h2><div class="card"><div class="tg">${[[1, "Ataque"], [0, "Equilíbrio"], [-1, "Retranca"]].map(([v, l]) => `<button data-t="${v}" class="${G.tac == v ? "on" : ""}">${l}</button>`).join("")}</div><div class="tg" style="margin-top:6px;flex-wrap:wrap">${Object.keys(FM).map(f => `<button data-f="${f}" style="font-size:13px" class="${(G.fm || "4-3-3") == f ? "on" : ""}">${f}</button>`).join("")}</div><p style="margin:8px 0">Toque num titular e depois num reserva para trocar.${lim ? ` Trocas: ${n}/${lim}.` : ""} Barra: energia. 🟨 amarelo, 🩹 lesão.</p>${pitchHTML(my, s)}${my.p.map((p, i) => `${i == 0 ? "<b>Titulares</b>" : i == 11 ? "<b>Banco</b>" : ""}<button class="pr${i == s ? " on" : ""}${p.e < 55 ? " low" : ""}" data-i="${i}"><span>${i + 1}. ${p.n}</span><span>${p.q} ${Math.round(p.r)}</span><span>${p.rd ? "🟥" : p.inj ? "🩹" : ""}${p.y ? "🟨" : ""}</span><i style="width:${p.e}%"></i></button>`).join("")}</div><button class="g" id="ok" style="width:100%">${lb}</button>`;
        document.querySelectorAll("[data-t]").forEach(x => x.onclick = () => { G.tac = +x.dataset.t; draw() }); document.querySelectorAll("[data-f]").forEach(x => x.onclick = () => { G.fm = x.dataset.f; draw() });
        document.querySelectorAll(".pr,.pl").forEach(x => x.onclick = () => { const i = +x.dataset.i; if (s < 0) s = i; else if ((s < 11) != (i < 11)) { if (lim && n >= lim) { s = -1; return draw() } [my.p[s], my.p[i]] = [my.p[i], my.p[s]]; n++; s = -1 } else s = i; draw() }); $("#ok").onclick = done
    }; draw()
}
function play(h, a, cb) { G.cl = isCl(h, a); G.wxi = R(5); G.T.forEach(t => t.p.forEach(p => p.out = 0)); board("Prancheta: " + G.T[h].n + " x " + G.T[a].n + " (" + WX[G.wxi] + ")", "Entrar em campo", 0, () => match(h, a, cb)) }
function match(h, a, cb) {
    const H = G.T[h], A = G.T[a], mt = h == G.me, sc = [0, 0], tt = s => s == (mt ? 0 : 1) ? G.tac : 0; let rh = "", mn = "Apito inicial", tm, cur, fast = 0, gs = [[], []], cm = 0, ck; const clk = to => { clearInterval(ck); ck = setInterval(() => { if (cm < to) cm++; else clearInterval(ck); mn = cm + " minutos"; const o = $("#mn"); if (o) o.textContent = mn }, 40) };
    const line = (t, c) => { rh += `<p class="${c || ""}">${t}</p>`; $("#rd").innerHTML = rh; $("#rd").scrollTop = 1e5 };
    const pit = () => { $("#pt").innerHTML = [H, A].map((T, s) => T.p.slice(0, 11).map((p, i) => { const [x, y] = FF(T).p[i]; return `<div class="pl" id="p${s}${i}" data-x="${s ? 100 - x : x}" data-y="${s ? 100 - y : y}" data-s="${s}" data-q="${FF(T).r[i]}" style="left:${s ? 100 - x : x}%;top:${s ? 100 - y : y}%"><b style="background:${T.c}">${i + 1}</b><i>${p.k}</i></div>` }).join("")).join("") + `<div class="gl t"></div><div class="gl b"></div><div id="ball" style="left:50%;top:50%"></div>` };
    const ui = () => { $("#app").innerHTML = `<div class="card"><div class="row" style="align-items:flex-start"><div style="flex:1"><b>${H.n}</b><small id="g0" style="display:block"></small></div><div class="score" id="sc"></div><div style="flex:1;text-align:right"><b>${A.n}</b><small id="g1" style="display:block"></small></div></div><div id="mn" style="text-align:center"></div></div><div class="pitch" id="pt"></div><div class="radio" id="rd" style="margin-top:10px" aria-live="polite"></div><button id="sk" style="width:100%;margin-top:10px">Pular para o fim do tempo</button>`; pit(); $("#rd").innerHTML = rh; $("#rd").scrollTop = 1e5; $("#sc").textContent = sc[0] + " x " + sc[1]; $("#mn").textContent = mn; gl(); $("#sk").onclick = skip };
    const show = e => {
        const [bx, by] = FF(e.s ? A : H).p[e.ai], x = e.s ? 100 - bx : bx, y = e.s ? 100 - by : by, g = e.x == "g", t = e.x == "t"; document.querySelectorAll(".hot").forEach(z => z.classList.remove("hot")); const pl = $("#p" + e.s + e.ai); if (pl) pl.classList.add("hot");
        const bl = $("#ball"), fx = g ? 50 : t ? pk([38, 62]) : x, fy = g || t ? (e.s ? 96 : 4) : y; bl.style.left = (x + 50) / 2 + "%"; bl.style.top = "50%"; setTimeout(() => { bl.style.left = fx + "%"; bl.style.top = fy + "%" }, fast ? 0 : 500); document.querySelectorAll("#pt .pl").forEach(z => { const bx = +z.dataset.x, by = +z.dataset.y, q = z.dataset.q, at = +z.dataset.s == e.s, up = e.s ? 1 : -1, d = Math.hypot(bx - fx, by - fy), pr = !at && q != "G" && d < 30 ? .3 : 0, k = ({ G: 0, D: 2, M: 4, A: 7 })[q] * (at ? 1 : .4); z.style.left = (bx + (at ? (bx - 50) * .12 : -(bx - 50) * .1) + (fx - bx) * pr + R(5) - 2) + "%"; z.style.top = (by + up * k + (fy - by) * pr + R(5) - 2) + "%" }); if (g) { sc[e.s]++; gs[e.s].push(e.k + " " + e.m + "’"); art(e.s ? a : h, e.k); goal(e) } clk(e.m); $("#sc").textContent = sc[0] + " x " + sc[1]; line(e.m + "’ " + e.t, g ? "gol" : "")
    };
    const gl = () => [0, 1].forEach(s => { const o = $("#g" + s); if (o) o.innerHTML = gs[s].map(x => "⚽ " + x).join("<br>") });
    const goal = e => { gl(); if (fast) return; const p = $("#pt"); p.classList.add("sh"); p.insertAdjacentHTML("beforeend", `<div class="gool"><b>GOOOL!</b><span>${e.k} · ${(e.s ? A : H).n}</span>${Array.from({ length: 18 }, () => `<u style="left:${R(100)}%;background:${pk(["#C9A227", "#5B3A6B", "#E8DCC0", "#4A5D3A"])};animation-delay:${R(500)}ms"></u>`).join("")}</div>`); setTimeout(() => { p.classList.remove("sh"); const o = p.querySelector(".gool"); if (o) o.remove() }, 2300) };
    const run = (r, done) => { cur = { r, i: 0, done }; const st = () => { if (cur.i >= r.ev.length) return done(); show(r.ev[cur.i++]); tm = setTimeout(st, 2300) }; tm = setTimeout(st, 1400) };
    function skip() { clearTimeout(tm); fast = 1; while (cur.i < cur.r.ev.length) show(cur.r.ev[cur.i++]); fast = 0; cur.done() }
    const fim = () => { tire(H); tire(A); clk(90); line(`Apita o árbitro depois de 90 minutos mais ${2 + R(4)} de acréscimo! Fim de jogo: ${H.n} ${sc[0]} x ${sc[1]} ${A.n}.`, "gol"); if (mt && sc[0] < sc[1] && G.b.t < 45) line("Chuva de vaias no estádio!"); $("#sk").textContent = "Ir à sala de imprensa"; $("#sk").onclick = () => press(h, a, sc, cb) };
    const h2 = () => { tire(H); tire(A); clk(45); line(`Fim do primeiro tempo! 45 minutos mais ${1 + R(4)} de acréscimo. Os times vão para o vestiário.`, "gol"); $("#sk").textContent = "Ir ao intervalo"; $("#sk").onclick = () => board("Intervalo: substituições", "Voltar para o 2º tempo", 3, () => { cm = 45; mn = "45 minutos"; ui(); line("Bola rolando para a etapa final!"); run(sim(H, A, tt(0), tt(1), 5, 47, 43), fim) }) };
    ui(); line(`📻 Rádio GS Bebel no ar! Direto do estádio ${ST[H.n]}. Clima: ${WX[G.wxi]}. Arbitragem de ${pk(RF)}. Público: ${Math.round((mt ? G.b.t : 55) * 600).toLocaleString("pt-BR")} pagantes. ${G.cl ? "É CLÁSSICO! " : ""}Hoje: ${H.n} x ${A.n}.`); run(sim(H, A, tt(0), tt(1), 5, 2, 42), h2)
}
function press(h, a, sc, cb, n = 0) {
    const me = h == G.me ? 0 : 1, m = sc[me], o = sc[1 - me], d = m > o ? 2 : m == o ? 1 : 0, Q = pk(QS[d]);
    const O0 = [["Elogiar o elenco", [2, 0, 6], "Técnico blinda o elenco e o vestiário agradece"], ["Assumir a responsabilidade", [-1, 4, 2], "Técnico assume a culpa e conquista a diretoria"], ["Culpar o árbitro", [5, -6, 2], "Técnico culpa o apito e a diretoria fecha a cara"], ["Prometer o título", [6, 3, -4], "Técnico promete título e a pressão aumenta"]]; const O = OP.slice().sort(() => Math.random() - .5).slice(0, 3);
    $("#app").innerHTML = `<h2>Sala de imprensa</h2><div class="card"><p><b>Nestor Pena, do Jornal dos Esportes:</b> ${Q}</p>${O.map((x, i) => `<button data-i="${i}" style="width:100%;margin:4px 0">${x[0]}</button>`).join("")}</div>`;
    document.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { const x = O[+b.dataset.i], e = x[1]; G.b.t = cl(G.b.t + e[0]); G.b.d = cl(G.b.d + e[1]); G.b.v = cl(G.b.v + e[2]); $("#app").innerHTML = `<h2>Manchete de amanhã</h2><div class="card"><p>${x[2]}.</p><p>Torcida ${e[0] > 0 ? "+" : ""}${e[0]} · Diretoria ${e[1] > 0 ? "+" : ""}${e[1]} · Vestiário ${e[2] > 0 ? "+" : ""}${e[2]}</p><button class="g" id="c" style="width:100%">${n < 1 ? "Próxima pergunta" : "Voltar ao clube"}</button></div>`; $("#c").onclick = () => n < 1 ? press(h, a, sc, cb, 1) : cb(sc) })
}
const CL = [["Flamengo", "Fluminense"], ["Corinthians", "Palmeiras"], ["Santos", "São Paulo"], ["Botafogo", "Vasco"]];
const isCl = (h, a) => CL.some(p => p.slice().sort().join() == [G.T[h].n, G.T[a].n].sort().join());
const art = (t, k) => { const q = G.T[t].n + "|" + k; G.art[q] = (G.art[q] || 0) + 1 };
const tp = () => Object.entries(G.art).sort((a, b) => b[1] - a[1]).slice(0, 3);
const infl = () => 1 + ((G.yr || 1950) - 1950) * .15, fmt = n => "Cr$ " + Math.round(n).toLocaleString("pt-BR"), val = p => Math.round((p.r - 50) ** 2 * 1500 * infl() / 1000) * 1000;
function mkm() { return Array.from({ length: 6 }, () => { const f = pk(FN), k = pk(NK); return { n: f + " " + k, k, q: pk(["G", "D", "M", "A"]), r: 60 + R(20), e: 100, y: 0, inj: 0 } }) }
function extra() {
    const b = G.b, hl = b.d < 30 ? "Técnico no fio da navalha, diz a diretoria" : b.v < 30 ? "Vestiário em chamas após rodada tensa" : b.t > 75 ? "Torcida em festa pede o título" : b.t < 30 ? "Lenços brancos na arquibancada" : "Bastidores agitados no " + G.T[G.me].n;
    return `<div class="card"><b>📰 Jornal da Semana</b>${(G.nw || []).map(x => `<p style="margin:4px 0">• ${x}</p>`).join("")}<div class="row"><span>Caixa: ${fmt(G.cash)}</span><button class="g" id="mk">Mercado</button></div><button id="sv" style="width:100%;margin-top:8px">Backup do save</button></div>${G.of ? `<div class="card"><b>Proposta pelo craque ${G.T[G.me].s}</b><p style="margin:4px 0">${G.of.c} oferece ${fmt(G.of.v)}.</p><div class="tg"><button id="of1">Vender</button><button id="of0">Recusar</button></div></div>` : ""}${G.st == "fim" && G.bpw ? `<div class="card"><b>Bola de Prata ${G.yr}</b><p style="margin:4px 0">${G.bpw}</p></div>` : ""}<div class="card"><b>Artilharia</b>${tp().map(([k, n]) => `<div class="row"><span>${k.replace("|", " · ")}</span><span>${n}</span></div>`).join("") || "<br>Nenhum gol ainda."}</div>`
}
function mkt() {
    const my = G.T[G.me]; let m = ""; const draw = () => {
        $("#app").innerHTML = `<h2>Mercado de transferências</h2><div class="card"><b>Caixa: ${fmt(G.cash)}</b> ${m ? `<p style="color:var(--purp)">${m}</p>` : ""}<p style="margin:6px 0">Comprar (vai para o banco):</p>${G.mk.map((p, i) => `<button class="pr" data-b="${i}"><span>${p.n}</span><span>${p.q} ${p.r}</span><span>${fmt(val(p))}</span></button>`).join("") || "Ninguém à venda."}<p style="margin:10px 0 6px">Vender (só reservas; mínimo 14 no elenco):</p>${my.p.map((p, i) => i > 10 ? `<button class="pr" data-s="${i}"><span>${p.n}</span><span>${p.q} ${Math.round(p.r)}</span><span>${fmt(val(p) * .8)}</span></button>` : "").join("")}</div><button id="vb" style="width:100%">Voltar ao clube</button>`;
        document.querySelectorAll("[data-b]").forEach(x => x.onclick = () => { const p = G.mk[+x.dataset.b], c = val(p); if (G.cash < c) m = "Caixa insuficiente."; else { G.cash -= c; my.p.push(p); G.mk.splice(+x.dataset.b, 1); m = "Contratado: " + p.n + "!" } draw() });
        document.querySelectorAll("[data-s]").forEach(x => x.onclick = () => { const i = +x.dataset.s, p = my.p[i]; if (my.p.length <= 14) m = "Elenco curto demais."; else { G.cash += val(p) * .8; my.p.splice(i, 1); m = p.n + " vendido." } draw() }); $("#vb").onclick = hub
    }; draw()
}
function ns() { if (G.yr >= 1989) { G.msg = "Fim da era de ouro (1989). Hora de pendurar a prancheta!"; return hub() } G.yr++; if (G.yr % 10 == 0) { DD = G.yr; G.T = mk() } G.T.forEach(t => { t.p.forEach(p => { p.r += R(7) - 3; p.y = 0; p.inj = 0; p.rd = 0; p.e = 100 }); t.str = S(t) }); G.m = []; G.r = 0; G.st = "liga"; G.K = []; G.art = {}; G.cash += 2e6 * infl(); G.b.d = cl(G.b.d + 10); G.F = rr([0, 1, 2, 3, 4]).map((m, i) => m.map(([x, y]) => [x, y]).concat(rr([5, 6, 7, 8, 9])[i])); G.msg = "Temporada " + G.yr + ": a diretoria renovou o seu contrato."; hub() }
function bpz() { if (G.st != "fim" || G.bp == G.yr) return; G.bp = G.yr; let w = null, sc = -1; G.T.forEach(t => t.p.slice(0, 11).forEach(p => { const s = p.r + 3 * (G.art[t.n + "|" + p.k] || 0); if (s > sc) { sc = s; w = [t, p] } })); G.bpw = w[1].n + " (" + w[0].n + ")"; if (w[0] == G.T[G.me]) { G.b.d = cl(G.b.d + 4); G.b.t = cl(G.b.t + 3) } }
function prop(y) { const my = G.T[G.me], i = my.p.findIndex(p => p.n == my.s); if (y && i >= 0) { G.cash += G.of.v; if (i < 11) my.p[i] = my.p.splice(11, 1)[0]; else my.p.splice(i, 1); G.b.v = cl(G.b.v - 12); G.b.t = cl(G.b.t - 10); G.b.d = cl(G.b.d + 5); G.msg = my.s + " foi vendido para o " + G.of.c + ". A torcida protesta!" } else { G.b.v = cl(G.b.v + 2); G.b.d = cl(G.b.d - 2); G.msg = "Proposta recusada." } G.of = null; if (G.b.d <= 0) return fired(); hub() }
function bk() {
    const js = G ? JSON.stringify(G).replace(/&/g, "&amp;").replace(/</g, "&lt;") : "", st = "width:100%;background:var(--card);color:var(--ink);border:2px solid var(--ink);border-radius:6px"; $("#app").innerHTML = `<h2>Backup do save</h2><div class="card"><p>Copie este código e guarde num lugar seguro:</p><textarea id="ex" rows="4" style="${st}" readonly>${js}</textarea><p>Para restaurar, cole o código aqui:</p><textarea id="im" rows="4" style="${st}"></textarea><p id="er" style="color:var(--bad)"></p><button class="g" id="ld" style="width:100%">Carregar backup</button></div><button id="bv" style="width:100%">Voltar</button>`;
    $("#ex").onclick = e => e.target.select(); $("#ld").onclick = () => { try { const o = JSON.parse($("#im").value); if (!o.T || !o.b) throw 0; G = o; hub() } catch (e) { $("#er").textContent = "Código inválido." } }; $("#bv").onclick = () => G ? hub() : start()
}
Object.assign(ST, { Madureira: "Conselheiro Galvão", Bangu: "Moça Bonita", Olaria: "da Rua Bariri", Bonsucesso: "Teixeirão", America: "da Rua Campos Sales", "São Cristóvão": "Figueira de Melo" }); CL.push(["Flamengo", "Vasco"], ["Fluminense", "Botafogo"], ["America", "Bangu"]);
const PC = { G: "#C9A227", D: "#2D5BA8", M: "#5C8A3F", A: "#A32A1F" };
const QS = [["Professor, a torcida pede a sua cabeça. O que o senhor responde?", "A GS Bebel ouviu falar em demissão. O senhor confirma o clima ruim?", "Perder assim em casa tem desculpa, professor?"], ["Um empate magro. Está satisfeito?", "O time criou pouco. O que faltou?", "Dois pontos perdidos ou um ponto ganho?"], ["Grande vitória! O que mudou hoje?", "O elenco merece um prêmio, professor?", "Agora o título está no horizonte?"]];
const OP = [["Elogiar o elenco", [2, 0, 6], "Técnico blinda o elenco e o vestiário agradece"], ["Assumir a responsabilidade", [-1, 4, 2], "Técnico assume a culpa e conquista a diretoria"], ["Culpar o árbitro", [5, -6, 2], "Técnico culpa o apito e a diretoria fecha a cara"], ["Prometer o título", [6, 3, -4], "Técnico promete título e a pressão aumenta"], ["Elogiar o adversário", [-2, 3, 1], "Técnico respeita o rival e agrada os cartolas"], ["Cobrar reforços", [3, -5, 3], "Técnico cobra reforços e irrita a diretoria"], ["Pedir paciência à torcida", [-3, 3, 2], "Técnico pede calma e a arquibancada resmunga"], ["Provocar o rival", [7, -3, -3], "Técnico provoca o rival e a manchete esquenta"]];
const pitchHTML = (my, s) => `<div class="pitch" style="aspect-ratio:5/4;margin:8px 0">${my.p.slice(0, 11).map((p, i) => `<div class="pl${i == s ? " hot" : ""}" data-i="${i}" style="left:${FF(my).p[i][0]}%;top:${(FF(my).p[i][1] - 48) * 2.05}%;cursor:pointer"><b style="background:${PC[FF(my).r[i]]};${p.inj ? "opacity:.5" : ""}">${FF(my).r[i]}</b><i>${p.k}${p.rd ? "🟥" : p.inj ? "🩹" : p.y ? "🟨" : ""}</i></div>`).join("")}</div><div class="row" style="font-size:12px;margin-bottom:6px"><span>🟡 Goleiro</span><span>🔵 Defesa</span><span>🟢 Meio</span><span>🔴 Ataque</span></div>`;
function news() {
    const my = G.T[G.me], p = pk(my.p.slice(0, 11)), m = G.mk && G.mk.length ? pk(G.mk) : null, b = G.b, o = pk(G.T.filter(t => t != my));
    return [b.d < 30 ? `Diretoria do ${my.n} faz reunião secreta sobre o futuro de ${G.coach}.` : b.d > 75 ? `Presidente do ${my.n} elogia o trabalho de ${G.coach}.` : `Presidente do ${my.n} pede calma e confia no treinador.`,
    b.t < 30 ? `Torcida do ${my.n} promete protesto na porta do clube.` : b.t > 75 ? `Torcida do ${my.n} lota a sede e canta o nome do treinador.` : `Torcida do ${my.n} ainda divide opiniões sobre ${G.coach}.`,
    b.v < 30 ? `Vestiário do ${my.n} em clima pesado: ${p.k} teria discutido com a comissão.` : `${p.k} diz à GS Bebel que o grupo está unido.`,
    m ? `Mercado: ${m.n} é visto no ${o.n} e pode chegar por ${fmt(val(m))}.` : "Mercado da bola segue parado no Rio.",
    `Entrevista exclusiva: o técnico do ${o.n} manda recado ao ${my.n}.`, `Pré-jogo na GS Bebel: ${o.n} treina fechado e esconde a escalação.`, `${p.k} é elogiado pela crônica esportiva após o último treino.`]
}
function mkm() { const have = n => G.T.some(t => t.p.some(p => p.n == n)), rp = (REAL[DD] || []).filter(r => !have(r[0])).sort(() => Math.random() - .5).slice(0, 4).map(([n, q, r]) => ({ n, k: n.split(" ")[0], q, r, e: 100, y: 0, inj: 0 })), g = Array.from({ length: 2 }, () => { const f = pk(FN), k = pk(NK); return { n: f + " " + k, k, q: pk(["G", "D", "M", "A"]), r: 60 + R(20), e: 100, y: 0, inj: 0 } }); return rp.concat(g) }
const FM = {
    "4-3-3": { r: "GDDDDMMMAAA", p: [[50, 93], [14, 80], [38, 82], [62, 82], [86, 80], [24, 68], [50, 66], [76, 68], [22, 56], [50, 54], [78, 56]] },
    "4-4-2": { r: "GDDDDMMMMAA", p: [[50, 93], [14, 80], [38, 82], [62, 82], [86, 80], [14, 68], [38, 66], [62, 66], [86, 68], [36, 55], [64, 55]] },
    "3-5-2": { r: "GDDDMMMMMAA", p: [[50, 93], [22, 81], [50, 83], [78, 81], [10, 68], [32, 66], [50, 70], [68, 66], [90, 68], [36, 55], [64, 55]] },
    "5-3-2": { r: "GDDDDDMMMAA", p: [[50, 93], [8, 76], [28, 81], [50, 83], [72, 81], [92, 76], [26, 66], [50, 64], [74, 66], [36, 55], [64, 55]] },
    "WM": { r: "GDDDMMMMAAA", p: [[50, 93], [22, 82], [50, 84], [78, 82], [34, 72], [66, 72], [30, 62], [70, 62], [16, 54], [50, 52], [84, 54]] }
};
const FMV = { "4-3-3": [.02, -.01], "4-4-2": [0, 0], "3-5-2": [.01, .01], "5-3-2": [-.02, .03], "WM": [.01, 0] };
const FV = () => FMV[G.fm || "4-3-3"], FF = T => FM[T == G.T[G.me] ? G.fm || "4-3-3" : "4-3-3"], sl = (T, c) => FF(T).r.split("").map((x, i) => x == c ? i : -1).filter(i => i >= 0);

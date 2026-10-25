const SPR = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
const SPR_SHINY = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;

const ESPECIES = [
  { nome: 'Pikachu',   id: 25,  tipo: 'Elétrico', raridade: 0.20, hp: 60,  biome: 'planicie', evo: 1,  candy: 12 },
  { nome: 'Raichu',    id: 26,  tipo: 'Elétrico', raridade: 0.0,  hp: 90,  biome: 'planicie', base: 0 },
  { nome: 'Charmander',id: 4,   tipo: 'Fogo',     raridade: 0.15, hp: 70,  biome: 'planicie', evo: 3, candy: 12 },
  { nome: 'Charmeleon',id: 5,   tipo: 'Fogo',     raridade: 0.0,  hp: 85,  biome: 'planicie', base: 2, evo: 4, candy: 25 },
  { nome: 'Charizard', id: 6,   tipo: 'Fogo',     raridade: 0.0,  hp: 110, biome: 'planicie', base: 2, mega: { id: 10034, nome: 'Mega Charizard' } },
  { nome: 'Squirtle',  id: 7,   tipo: 'Água',     raridade: 0.15, hp: 70,  biome: 'praia',    evo: 6,  candy: 12 },
  { nome: 'Wartortle', id: 8,   tipo: 'Água',     raridade: 0.0,  hp: 85,  biome: 'praia',    base: 5, evo: 7, candy: 25 },
  { nome: 'Blastoise', id: 9,   tipo: 'Água',     raridade: 0.0,  hp: 110, biome: 'praia',    base: 5, mega: { id: 10036, nome: 'Mega Blastoise' } },
  { nome: 'Bulbasaur', id: 1,   tipo: 'Planta',   raridade: 0.15, hp: 75,  biome: 'planicie', evo: 9,  candy: 12 },
  { nome: 'Ivysaur',   id: 2,   tipo: 'Planta',   raridade: 0.0,  hp: 90,  biome: 'planicie', base: 8, evo: 10, candy: 25 },
  { nome: 'Venusaur',  id: 3,   tipo: 'Planta',   raridade: 0.0,  hp: 115, biome: 'planicie', base: 8, mega: { id: 10033, nome: 'Mega Venusaur' } },
  { nome: 'Eevee',     id: 133, tipo: 'Normal',   raridade: 0.18, hp: 60,  biome: 'cidade',   evo: 12, candy: 25 },
  { nome: 'Sylveon',   id: 700, tipo: 'Fada',     raridade: 0.0,  hp: 95,  biome: 'cidade',   base: 11 },
  { nome: 'Geodude',   id: 74,  tipo: 'Pedra',    raridade: 0.18, hp: 80,  biome: 'caverna',  evo: 14, candy: 12 },
  { nome: 'Graveler',  id: 75,  tipo: 'Pedra',    raridade: 0.0,  hp: 95,  biome: 'caverna',  base: 13, evo: 15, candy: 25 },
  { nome: 'Golem',     id: 76,  tipo: 'Pedra',    raridade: 0.0,  hp: 120, biome: 'caverna',  base: 13 },
  { nome: 'Zubat',     id: 41,  tipo: 'Voador',   raridade: 0.20, hp: 55,  biome: 'caverna',  evo: 17, candy: 12 },
  { nome: 'Golbat',    id: 42,  tipo: 'Veneno',   raridade: 0.0,  hp: 90,  biome: 'caverna',  base: 16 },
  { nome: 'Dratini',   id: 147, tipo: 'Dragão',   raridade: 0.05, hp: 75,  biome: 'praia',    evo: 19, candy: 25 },
  { nome: 'Dragonair', id: 148, tipo: 'Dragão',   raridade: 0.0,  hp: 100, biome: 'praia',    base: 18, evo: 20, candy: 25 },
  { nome: 'Dragonite', id: 149, tipo: 'Dragão',   raridade: 0.0,  hp: 140, biome: 'praia',    base: 18 },
  { nome: 'Snorlax',   id: 143, tipo: 'Normal',   raridade: 0.04, hp: 130, biome: 'caverna' },
  { nome: 'Gengar',    id: 94,  tipo: 'Fantasma', raridade: 0.03, hp: 95,  biome: 'caverna' },
  { nome: 'Mewtwo',    id: 150, tipo: 'Psíquico', raridade: 0.008,hp: 160, biome: 'caverna', lendario: true, mega: { id: 10043, nome: 'Mega Mewtwo X' } },
  { nome: 'Lugia',     id: 249, tipo: 'Psíquico', raridade: 0.008,hp: 160, biome: 'praia',   lendario: true },
  { nome: 'Rayquaza',  id: 384, tipo: 'Dragão',   raridade: 0.006,hp: 170, biome: 'planicie',lendario: true },
  { nome: 'Ho-Oh',     id: 250, tipo: 'Fogo',     raridade: 0.006,hp: 170, biome: 'cidade',  lendario: true },
  { nome: 'Pidgey',    id: 16,  tipo: 'Normal',   raridade: 0.16, hp: 50,  biome: 'cidade',   evo: 28, candy: 12 },
  { nome: 'Pidgeotto', id: 17,  tipo: 'Normal',   raridade: 0.0,  hp: 75,  biome: 'cidade',   base: 27, evo: 29, candy: 25 },
  { nome: 'Pidgeot',   id: 18,  tipo: 'Normal',   raridade: 0.0,  hp: 105, biome: 'cidade',   base: 27 },
  { nome: 'Rattata',   id: 19,  tipo: 'Normal',   raridade: 0.16, hp: 55,  biome: 'planicie', evo: 31, candy: 12 },
  { nome: 'Raticate',  id: 20,  tipo: 'Normal',   raridade: 0.0,  hp: 85,  biome: 'planicie', base: 30 },
  { nome: 'Caterpie',  id: 10,  tipo: 'Inseto',   raridade: 0.16, hp: 45,  biome: 'planicie', evo: 33, candy: 12 },
  { nome: 'Metapod',   id: 11,  tipo: 'Inseto',   raridade: 0.0,  hp: 60,  biome: 'planicie', base: 32, evo: 34, candy: 12 },
  { nome: 'Butterfree',id: 12,  tipo: 'Inseto',   raridade: 0.0,  hp: 80,  biome: 'planicie', base: 32 },
  { nome: 'Magikarp',  id: 129, tipo: 'Água',     raridade: 0.10, hp: 40,  biome: 'praia',    evo: 36, candy: 25 },
  { nome: 'Gyarados',  id: 130, tipo: 'Água',     raridade: 0.0,  hp: 120, biome: 'praia',    base: 35, mega: { id: 10041, nome: 'Mega Gyarados' } },
  { nome: 'Abra',      id: 63,  tipo: 'Psíquico', raridade: 0.08, hp: 55,  biome: 'cidade',   evo: 38, candy: 12 },
  { nome: 'Kadabra',   id: 64,  tipo: 'Psíquico', raridade: 0.0,  hp: 80,  biome: 'cidade',   base: 37, evo: 39, candy: 25 },
  { nome: 'Alakazam',  id: 65,  tipo: 'Psíquico', raridade: 0.0,  hp: 105, biome: 'cidade',   base: 37, mega: { id: 10037, nome: 'Mega Alakazam' } },
  { nome: 'Cubone',    id: 104, tipo: 'Terra',    raridade: 0.10, hp: 65,  biome: 'caverna',  evo: 41, candy: 12 },
  { nome: 'Marowak',   id: 105, tipo: 'Terra',    raridade: 0.0,  hp: 95,  biome: 'caverna',  base: 40 },
  { nome: 'Onix',      id: 95,  tipo: 'Pedra',    raridade: 0.10, hp: 90,  biome: 'caverna' },
  { nome: 'Lapras',    id: 131, tipo: 'Água',     raridade: 0.03, hp: 130, biome: 'praia' },
  { nome: 'Articuno',  id: 144, tipo: 'Gelo',     raridade: 0.008,hp: 160, biome: 'caverna',  lendario: true },
  { nome: 'Zapdos',    id: 145, tipo: 'Elétrico', raridade: 0.008,hp: 160, biome: 'cidade',   lendario: true },
  { nome: 'Moltres',   id: 146, tipo: 'Fogo',     raridade: 0.008,hp: 160, biome: 'planicie', lendario: true },
  { nome: 'Raikou',    id: 243, tipo: 'Elétrico', raridade: 0.008,hp: 160, biome: 'planicie', lendario: true },
  { nome: 'Entei',     id: 244, tipo: 'Fogo',     raridade: 0.008,hp: 160, biome: 'caverna',  lendario: true },
  { nome: 'Suicune',   id: 245, tipo: 'Água',     raridade: 0.008,hp: 160, biome: 'praia',    lendario: true },
];

// Carrega TODOS os Pokémon de todas as gerações pela PokéAPI
async function carregarTodos() {
  try {
    const ctrl = new AbortController();
    const limite = setTimeout(() => ctrl.abort(), 15000);
    const r = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000', { signal: ctrl.signal });
    clearTimeout(limite);
    const j = await r.json();
    for (const p of j.results) {
      if (p.name.includes('-mega') || p.name.includes('gmax')) continue;
      const id = parseInt(p.url.split('/').filter(Boolean).pop());
      if (ESPECIES.some(e => e.id === id)) continue;
      ESPECIES.push({ nome: p.name[0].toUpperCase() + p.name.slice(1), id, tipo: '?', raridade: 0.03, hp: 70, biome: 'todos' });
    }
    // Detecta megas automaticamente para todas as espécies
    for (const e of ESPECIES) {
      if (e.mega) continue;
      const base = e.nome.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const megaEntry = j.results.find(p => p.name === base + '-mega' || p.name === base + '-mega-x' || p.name === base + '-mega-y');
      if (megaEntry) {
        const mid = parseInt(megaEntry.url.split('/').filter(Boolean).pop());
        const sufixo = megaEntry.name.replace(base + '-mega', '').replace(/-/g, ' ').trim();
        e.mega = { id: mid, nome: 'Mega ' + e.nome + (sufixo ? ' ' + sufixo.toUpperCase() : '') };
      }
    }
  } catch (e) { /* offline: usa a lista local */ }
  const txt = document.getElementById('loading-text');
  if (txt) txt.textContent = ESPECIES.length + ' Pokémon carregados!';
  return ESPECIES.length;
}
const especiesProntas = carregarTodos();

const FORTE = {
  'Fogo': ['Planta', 'Inseto'], 'Água': ['Fogo', 'Pedra'], 'Planta': ['Água', 'Pedra'],
  'Elétrico': ['Água', 'Voador'], 'Gelo': ['Planta', 'Dragão', 'Voador'], 'Luta': ['Normal', 'Pedra'],
  'Veneno': ['Planta', 'Fada'], 'Terra': ['Fogo', 'Elétrico', 'Pedra', 'Veneno'], 'Voador': ['Planta', 'Luta'],
  'Psíquico': ['Luta', 'Veneno'], 'Fantasma': ['Fantasma', 'Psíquico'], 'Dragão': ['Dragão'],
  'Fada': ['Luta', 'Dragão'], 'Pedra': ['Fogo', 'Gelo', 'Voador', 'Inseto'], 'Normal': [],
};
const eff = (atk, def) => (FORTE[atk] || []).includes(def) ? 1.6 : 1.0;

const TIPO_COR = {
  'Normal': '#8d99ae', 'Fogo': '#f97316', 'Água': '#3b82f6', 'Planta': '#22c55e',
  'Elétrico': '#eab308', 'Gelo': '#67e8f9', 'Luta': '#dc2626', 'Veneno': '#a855f7',
  'Terra': '#b45309', 'Voador': '#818cf8', 'Psíquico': '#ec4899', 'Fantasma': '#7c3aed',
  'Dragão': '#4f46e5', 'Fada': '#f472b6', 'Pedra': '#a16207', 'Inseto': '#84cc16', '?': '#64748b',
};
const corTipo = t => TIPO_COR[t] || '#64748b';

const BIOMES = {
  planicie: { nome: '🌿 Planície', cor: 0x7ec850, arvores: 0x3f8f2f },
  caverna:  { nome: '🕳️ Caverna',  cor: 0x3d3d5c, arvores: 0x2c2c42 },
  praia:    { nome: '🏖️ Praia',    cor: 0xeeda8a, arvores: 0x2e9e5b },
  cidade:   { nome: '🏙️ Cidade',   cor: 0x9aa7b1, arvores: 0x6f7d88 },
};
let inventario = [], moedas = 100, pedras = 2, doces = {}, xp = 0, nivel = 1;
let biomeAtual = 'planicie';
let bolas = { great: 0, ultra: 0, master: 0 };
let dex = {};
let usuario = localStorage.getItem('pw_user');

function usuarios() { return JSON.parse(localStorage.getItem('pw_users') || '{}'); }
function dados() { return { inv: inventario, moedas, pedras, doces, xp, nivel, biome: biomeAtual, bolas, dex, incense: !!incense }; }
let incense = false;
function carregarConta() {
  const u = usuarios()[usuario];
  if (!u || !u.data) return;
  const d = u.data;
  inventario = (d.inv || []).map(p => {
    if (!p) return null;
    // Migração segura: salva o ID da espécie e reencontra o índice atual
    if (p.pokeId) {
      const idx = ESPECIES.findIndex(e => e.id === p.pokeId);
      if (idx >= 0) p.espec = idx;
    }
    if (typeof p.espec !== 'number' || !ESPECIES[p.espec]) return null;
    p.pokeId = ESPECIES[p.espec].id;
    p.pc = !!p.pc;
    return p;
  }).filter(Boolean);
  moedas = d.moedas ?? 100; pedras = d.pedras ?? 2; doces = d.doces || {};
  xp = d.xp || 0; nivel = d.nivel || 1; biomeAtual = d.biome || 'planicie';
  bolas = d.bolas || { great: 0, ultra: 0, master: 0 }; dex = d.dex || {};
  incense = !!d.incense;
}
{
  const u = usuarios();
  if (u['Guaranella']) { delete u['Guaranella']; }
  if (!u['Admin']) {
    u['Admin'] = { pass: 'admin', data: { inv: [], moedas: 1000, pedras: 5, doces: {}, xp: 0, nivel: 1, biome: 'planicie', bolas: { great: 10, ultra: 5, master: 1 }, dex: {}, incense: true } };
  }
  localStorage.setItem('pw_users', JSON.stringify(u));
}
const player = { x: 0, y: 0, alvo: null };
let selvagens = [];
let capturaAtual = null;
let anelT = 0, anelDir = -1;
let camAngulo = Math.PI;

const spriteCache = {};
function spriteMaterial(url) {
  if (!spriteCache[url]) spriteCache[url] = new THREE.SpriteMaterial({ map: new THREE.TextureLoader().load(url), transparent: true });
  return spriteCache[url];
}
function spriteUrl(s) {
  const e = ESPECIES[s.espec];
  if (s.mega && e.mega) return s.shiny ? SPR_SHINY(e.mega.id) : SPR(e.mega.id);
  return s.shiny ? SPR_SHINY(e.id) : SPR(e.id);
}
function nomeExibicao(s) {
  const e = ESPECIES[s.espec];
  const base = s.mega && e.mega ? e.mega.nome : e.nome;
  return (s.shiny ? '✨ Shiny ' : '') + base;
}

const xpProximo = () => nivel * 50;

function salvar() {
  if (!usuario) return;
  const u = usuarios();
  u[usuario] = u[usuario] || { pass: '', data: {} };
  u[usuario].data = dados();
  localStorage.setItem('pw_users', JSON.stringify(u));
  atualizarHud();
}

function atualizarHud() {
  const time = inventario.filter(p => !p.pc).length;
  const pc = inventario.filter(p => p.pc).length;
  document.getElementById('hud-moedas').textContent = '🪙 ' + moedas;
  document.getElementById('hud-capturados').textContent = '📦 ' + time;
  document.getElementById('hud-nivel').textContent = '⭐ Nv ' + nivel;
  document.getElementById('hud-pedras').textContent = '💎 ' + pedras;
  document.getElementById('xp-bar').style.width = Math.min(100, (xp / xpProximo()) * 100) + '%';
  document.getElementById('biome-nome').textContent = BIOMES[biomeAtual].nome;
  const ct = document.getElementById('cont-time');
  const cp = document.getElementById('cont-pc');
  const ci = document.getElementById('inv-contagem');
  if (ct) ct.textContent = time;
  if (cp) cp.textContent = pc;
  if (ci) ci.textContent = `${time} no time · ${pc} no PC · ${inventario.length} no total`;
}

let toastTimer = null;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visivel');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('visivel'), 2600);
}

function ganharXp(n) {
  xp += n;
  while (xp >= xpProximo()) { xp -= xpProximo(); nivel++; sfx('level'); toast('🎉 Subiu para o nível ' + nivel + '!'); }
  salvar();
}

function raizDe(idx) {
  let e = ESPECIES[idx];
  while (e.base !== undefined) e = ESPECIES[e.base];
  return ESPECIES.indexOf(e);
}

function especieAleatoria() {
  const pool = ESPECIES.filter(e => (e.biome === biomeAtual || e.biome === 'todos' || e.lendario) && e.raridade > 0);
  const principais = pool.filter(e => e.biome !== 'todos');
  const extras = pool.filter(e => e.biome === 'todos');
  const lista = (Math.random() < 0.5 && extras.length) ? extras : principais;
  if (!lista.length) return 0;
  const total = lista.reduce((s, e) => s + (e.raridade || 0.05), 0);
  let r = Math.random() * total;
  for (const e of lista) { r -= (e.raridade || 0.05); if (r <= 0) return ESPECIES.indexOf(e); }
  return ESPECIES.indexOf(lista[0]);
}

// ===== THREE.JS =====
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x9fc9ff, 70, 210);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(1.6, window.devicePixelRatio || 1));
const wrapCena = document.getElementById('cena-wrap');

function tamanhoCena() {
  const largura = Math.min(1500, Math.max(320, wrapCena.clientWidth || window.innerWidth - 44));
  const altura = Math.round(Math.min(820, Math.max(340, Math.min(largura * 9 / 16, window.innerHeight * 0.72))));
  return { largura, altura };
}
function ajustarTela() {
  const { largura, altura } = tamanhoCena();
  renderer.setSize(largura, altura, true);
  camera.aspect = largura / altura;
  camera.updateProjectionMatrix();
}
const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 700);
document.getElementById('cena').appendChild(renderer.domElement);
ajustarTela();

const hemi = new THREE.HemisphereLight(0xdff1ff, 0x2a3c22, 0.9);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 0.85);
sun.position.set(45, 80, 30);
scene.add(sun);
const preenchimento = new THREE.DirectionalLight(0x9ecbff, 0.3);
preenchimento.position.set(-40, 28, -30);
scene.add(preenchimento);

const CENARIOS = {
  planicie: { topo: '#2f7fe0', meio: '#8cc9ff', base: '#e6f7ff', neblina: 0xbfe0ff, luz: 0xffffff, sol: 0.9, amb: 0.9 },
  caverna:  { topo: '#05070f', meio: '#11182c', base: '#2a3350', neblina: 0x10182a, luz: 0x9fb6ff, sol: 0.42, amb: 0.62 },
  praia:    { topo: '#2b77c9', meio: '#ffb680', base: '#ffe9c7', neblina: 0xffd3a1, luz: 0xffd9a6, sol: 1.0, amb: 0.95 },
  cidade:   { topo: '#111a38', meio: '#3a4a7d', base: '#93a7d6', neblina: 0x54648f, luz: 0xc8d8ff, sol: 0.62, amb: 0.85 },
};
const CEU_CACHE = {};
function texturaCeu(cfg) {
  const chave = cfg.topo + cfg.meio + cfg.base;
  if (CEU_CACHE[chave]) return CEU_CACHE[chave];
  const c = document.createElement('canvas');
  c.width = 32; c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, cfg.topo);
  grad.addColorStop(0.55, cfg.meio);
  grad.addColorStop(1, cfg.base);
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 256);
  const t = new THREE.CanvasTexture(c);
  CEU_CACHE[chave] = t;
  return t;
}
function atualizarCeu() {
  const cfg = CENARIOS[biomeAtual] || CENARIOS.planicie;
  scene.background = texturaCeu(cfg);
  scene.fog.color.setHex(cfg.neblina);
  scene.fog.near = biomeAtual === 'caverna' ? 40 : 70;
  scene.fog.far = biomeAtual === 'caverna' ? 150 : 215;
  sun.color.setHex(cfg.luz);
  sun.intensity = cfg.sol;
  hemi.intensity = cfg.amb;
  hemi.groundColor.setHex(BIOMES[biomeAtual].arvores);
}

const ART = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
const ART_SHINY = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`;

function artUrl(s) {
  const e = ESPECIES[s.espec];
  if (s.mega && e.mega) return s.shiny ? ART_SHINY(e.mega.id) : ART(e.mega.id);
  return s.shiny ? ART_SHINY(e.id) : ART(e.id);
}

const groundMat = new THREE.MeshLambertMaterial({ map: makeGroundTex() });
function makeGroundTex() {
  const S = 512;
  const c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  const base = '#' + BIOMES[biomeAtual].cor.toString(16).padStart(6, '0');
  g.fillStyle = base; g.fillRect(0, 0, S, S);

  // manchas naturais de terreno
  for (let i = 0; i < 340; i++) {
    g.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.055)' : 'rgba(255,255,255,0.055)';
    g.beginPath();
    g.ellipse(Math.random() * S, Math.random() * S, 4 + Math.random() * 18, 3 + Math.random() * 12, Math.random() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }

  if (biomeAtual === 'planicie') {
    for (let i = 0; i < 900; i++) {
      const x = Math.random() * S, y = Math.random() * S;
      g.strokeStyle = Math.random() < 0.5 ? 'rgba(24,74,28,.28)' : 'rgba(120,190,90,.22)';
      g.lineWidth = 1.4;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + (Math.random() - 0.5) * 5, y - 4 - Math.random() * 5); g.stroke();
    }
    const flores = ['#f472b6', '#fde047', '#fff', '#a78bfa', '#fb923c'];
    for (let i = 0; i < 90; i++) {
      g.fillStyle = flores[i % flores.length];
      g.beginPath(); g.arc(Math.random() * S, Math.random() * S, 1.6 + Math.random() * 1.6, 0, Math.PI * 2); g.fill();
    }
  } else if (biomeAtual === 'caverna') {
    for (let i = 0; i < 34; i++) {
      g.strokeStyle = 'rgba(10,12,22,.5)'; g.lineWidth = 1 + Math.random() * 2;
      const x = Math.random() * S, y = Math.random() * S;
      g.beginPath(); g.moveTo(x, y);
      g.lineTo(x + (Math.random() - 0.5) * 70, y + (Math.random() - 0.5) * 70);
      g.stroke();
    }
    for (let i = 0; i < 55; i++) {
      g.fillStyle = Math.random() < 0.5 ? 'rgba(120,200,255,.55)' : 'rgba(167,139,250,.5)';
      g.beginPath(); g.arc(Math.random() * S, Math.random() * S, 1.5 + Math.random() * 2, 0, Math.PI * 2); g.fill();
    }
  } else if (biomeAtual === 'praia') {
    for (let i = 0; i < 26; i++) {
      g.strokeStyle = 'rgba(255,255,255,.22)'; g.lineWidth = 1.5;
      const y = Math.random() * S;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x <= S; x += 16) g.lineTo(x, y + Math.sin(x / 26 + i) * 3);
      g.stroke();
    }
    for (let i = 0; i < 40; i++) {
      g.fillStyle = Math.random() < 0.5 ? '#fff8e7' : '#ffd9a8';
      g.beginPath(); g.arc(Math.random() * S, Math.random() * S, 1.4 + Math.random() * 2, 0, Math.PI * 2); g.fill();
    }
  } else if (biomeAtual === 'cidade') {
    g.fillStyle = 'rgba(42,48,58,.85)';
    g.fillRect(0, S / 2 - 46, S, 92);
    g.fillRect(S / 2 - 46, 0, 92, S);
    g.fillStyle = 'rgba(190,200,215,.55)';
    for (let i = 0; i < S; i += 46) {
      g.fillRect(i, S / 2 - 2, 22, 4);
      g.fillRect(S / 2 - 2, i, 4, 22);
    }
    g.fillStyle = 'rgba(230,235,245,.75)';
    for (let i = 0; i < S; i += 64) {
      g.fillRect(i + 8, S / 2 - 40, 30, 4);
      g.fillRect(S / 2 - 40, i + 8, 4, 30);
    }
    g.fillStyle = 'rgba(255,255,255,.08)';
    for (let i = 0; i < 60; i++) g.fillRect(Math.random() * S, Math.random() * S, 2, 2);
  }

  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(16, 16);
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
const ground = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), groundMat);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const decoGrupo = new THREE.Group();
scene.add(decoGrupo);
const somCtx = {
  ctx: null, mudo: false, master: null, volume: 0.8,
  cries: new Map(), ruido: null,
};
function audio() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!somCtx.ctx) {
    try {
      somCtx.ctx = new AC();
      somCtx.master = somCtx.ctx.createGain();
      somCtx.master.gain.value = somCtx.mudo ? 0 : somCtx.volume;
      const comp = somCtx.ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 22;
      comp.ratio.value = 4;
      comp.attack.value = 0.004;
      comp.release.value = 0.25;
      somCtx.master.connect(comp);
      comp.connect(somCtx.ctx.destination);
    } catch (e) {
      somCtx.ctx = null;
      return null;
    }
  }
  if (somCtx.ctx.state === 'suspended') somCtx.ctx.resume().catch(() => {});
  return somCtx.ctx;
}
function aplicarSom() {
  if (somCtx.ctx && somCtx.master) {
    const t = somCtx.ctx.currentTime;
    somCtx.master.gain.cancelScheduledValues(t);
    somCtx.master.gain.setTargetAtTime(somCtx.mudo ? 0 : somCtx.volume, t, 0.03);
  }
  if (somCtx.mudo) {
    for (const a of somCtx.cries.values()) {
      try { a.pause(); } catch (e) {}
    }
  }
}
function tom(freq, dur, tipo = 'square', vol = 0.08, delay = 0, slide = 0) {
  if (somCtx.mudo) return;
  const a = audio();
  if (!a) return;
  try {
    const t0 = a.currentTime + Math.max(0, delay);
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = tipo;
    o.frequency.setValueAtTime(Math.max(20, freq), t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t0 + Math.min(0.025, dur * 0.2));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(somCtx.master || a.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.03);
  } catch (e) {}
}
function bufferRuido(a) {
  if (somCtx.ruido && somCtx.ruido.sampleRate === a.sampleRate) return somCtx.ruido;
  const len = Math.floor(a.sampleRate * 1.2);
  const b = a.createBuffer(1, len, a.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  somCtx.ruido = b;
  return b;
}
function ruido(dur = 0.2, vol = 0.08, freq = 1200, delay = 0, tipo = 'lowpass') {
  if (somCtx.mudo) return;
  const a = audio();
  if (!a) return;
  try {
    const t0 = a.currentTime + Math.max(0, delay);
    const src = a.createBufferSource();
    const f = a.createBiquadFilter();
    const g = a.createGain();
    src.buffer = bufferRuido(a);
    src.loop = true;
    f.type = tipo;
    f.frequency.setValueAtTime(Math.max(60, freq), t0);
    f.Q.value = tipo === 'bandpass' ? 1.2 : 0.7;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t0 + Math.min(0.03, dur * 0.2));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f);
    f.connect(g);
    g.connect(somCtx.master || a.destination);
    src.start(t0);
    src.stop(t0 + dur + 0.03);
  } catch (e) {}
}
const CRIE = id => `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
function tocarCrie(s, volume = 0.6) {
  if (somCtx.mudo || !s) return;
  const e = ESPECIES[s.espec];
  if (!e) return;
  const id = (s.mega && e.mega) ? e.mega.id : e.id;
  try {
    let a = somCtx.cries.get(id);
    if (!a) {
      a = new Audio();
      a.preload = 'auto';
      a.src = CRIE(id);
      a.style.cssText = 'position:absolute;width:0;height:0;opacity:0;pointer-events:none';
      document.body.appendChild(a);
      somCtx.cries.set(id, a);
      a.load();
    }
    a.pause();
    try { a.currentTime = 0; } catch (e) {}
    a.volume = Math.min(1, Math.max(0, volume));
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
  } catch (err) {}
}
function cry(s, volume = 0.6) { tocarCrie(s, volume); }

// Rugido grave sintetizado, somado ao grito original do Pokémon.
function rugidoSintetico(forca = 1, base = 1) {
  if (somCtx.mudo) return;
  const a = audio();
  if (!a) return;
  try {
    const t0 = a.currentTime;
    const dur = 1.05;
    const destino = somCtx.master || a.destination;

    const o = a.createOscillator();
    const f = a.createBiquadFilter();
    const g = a.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(52 * base, t0);
    o.frequency.exponentialRampToValueAtTime(88 * base, t0 + 0.18);
    o.frequency.exponentialRampToValueAtTime(42 * base, t0 + dur);
    f.type = 'lowpass';
    f.Q.value = 3.5;
    f.frequency.setValueAtTime(220, t0);
    f.frequency.linearRampToValueAtTime(700, t0 + 0.18);
    f.frequency.exponentialRampToValueAtTime(110, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.2 * forca, t0 + 0.07);
    g.gain.exponentialRampToValueAtTime(0.11 * forca, t0 + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(f); f.connect(g); g.connect(destino);
    o.start(t0); o.stop(t0 + dur + 0.03);

    const o2 = a.createOscillator();
    const g2 = a.createGain();
    o2.type = 'square';
    o2.frequency.setValueAtTime(104 * base, t0);
    o2.frequency.exponentialRampToValueAtTime(70 * base, t0 + dur * 0.8);
    g2.gain.setValueAtTime(0.0001, t0);
    g2.gain.exponentialRampToValueAtTime(0.05 * forca, t0 + 0.08);
    g2.gain.exponentialRampToValueAtTime(0.0001, t0 + dur * 0.75);
    o2.connect(g2); g2.connect(destino);
    o2.start(t0); o2.stop(t0 + dur * 0.8);

    const n = a.createBufferSource();
    const nf = a.createBiquadFilter();
    const ng = a.createGain();
    n.buffer = bufferRuido(a);
    n.loop = true;
    nf.type = 'bandpass';
    nf.Q.value = 0.9;
    nf.frequency.setValueAtTime(180, t0);
    nf.frequency.linearRampToValueAtTime(480, t0 + 0.2);
    nf.frequency.exponentialRampToValueAtTime(120, t0 + dur);
    ng.gain.setValueAtTime(0.0001, t0);
    ng.gain.exponentialRampToValueAtTime(0.08 * forca, t0 + 0.12);
    ng.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    n.connect(nf); nf.connect(ng); ng.connect(destino);
    n.start(t0); n.stop(t0 + dur);
  } catch (e) {}
}
function rugidoPokemon(s, modo = 'captura') {
  if (somCtx.mudo || !s) return;
  const e = ESPECIES[s.espec];
  if (!e) return;
  const porte = e.lendario ? 1 : Math.min(1.2, Math.max(0.75, (e.hp || 70) / 110));
  const forca = (modo === 'batalha' ? 1.08 : 0.92) * (1.15 - porte * 0.22);
  const base = 1.18 - porte * 0.28;
  rugidoSintetico(forca, base);
  tocarCrie(s, modo === 'batalha' ? 0.75 : 0.62);
}
function sfx(nome) {
  switch (nome) {
    case 'click': tom(560, 0.055, 'triangle', 0.035); break;
    case 'bola':
      ruido(0.09, 0.045, 900);
      tom(280, 0.14, 'sine', 0.09);
      tom(520, 0.2, 'sine', 0.06, 0.1);
      break;
    case 'hit':
      ruido(0.11, 0.07, 750);
      tom(150, 0.14, 'sawtooth', 0.11, 0, 70);
      break;
    case 'vitoria':
      tom(523, 0.12, 'triangle', 0.09);
      tom(659, 0.12, 'triangle', 0.09, 0.12);
      tom(784, 0.28, 'triangle', 0.09, 0.24);
      tom(1046, 0.4, 'sine', 0.06, 0.36);
      break;
    case 'falha':
      ruido(0.2, 0.04, 400);
      tom(220, 0.2, 'sawtooth', 0.08);
      tom(160, 0.32, 'sawtooth', 0.08, 0.15, 90);
      break;
    case 'coin':
      tom(880, 0.07, 'sine', 0.09);
      tom(1320, 0.14, 'sine', 0.07, 0.07);
      break;
    case 'evoluir':
      ruido(0.5, 0.025, 1200, 0, 'highpass');
      tom(400, 0.15, 'sine', 0.1);
      tom(600, 0.15, 'sine', 0.1, 0.12);
      tom(900, 0.32, 'sine', 0.1, 0.24);
      tom(1200, 0.4, 'triangle', 0.05, 0.4);
      break;
    case 'shiny':
      tom(1200, 0.09, 'sine', 0.07);
      tom(1600, 0.13, 'sine', 0.07, 0.09);
      tom(2100, 0.25, 'sine', 0.05, 0.2);
      break;
    case 'level':
      tom(500, 0.1, 'triangle', 0.08);
      tom(700, 0.1, 'triangle', 0.08, 0.1);
      tom(1000, 0.22, 'triangle', 0.08, 0.2);
      break;
    case 'captura':
      ruido(0.16, 0.035, 1400, 0, 'highpass');
      tom(360, 0.12, 'sine', 0.06);
      tom(540, 0.18, 'sine', 0.05, 0.1);
      tom(810, 0.28, 'sine', 0.04, 0.2);
      break;
    case 'batalha':
      ruido(0.22, 0.05, 500);
      tom(98, 0.22, 'sawtooth', 0.11, 0, 60);
      tom(196, 0.18, 'square', 0.06, 0.08);
      tom(147, 0.35, 'sawtooth', 0.07, 0.18, 110);
      break;
  }
}
document.addEventListener('click', e => { if (e.target.tagName === 'BUTTON') sfx('click'); });

const pokeStops = [];
const nuvens = [];

// Textura radial usada para brilhos (shiny, lendários e PokéStops)
let _brilhoTex = null;
function texturaBrilho() {
  if (_brilhoTex) return _brilhoTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,.65)');
  grad.addColorStop(0.6, 'rgba(255,255,255,.18)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  _brilhoTex = new THREE.CanvasTexture(c);
  return _brilhoTex;
}
function criarBrilho(cor, tamanho) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texturaBrilho(), color: cor, transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85,
  }));
  s.scale.set(tamanho, tamanho, 1);
  return s;
}

function posAleatoria(raioMin = 14, limite = 135) {
  let x = 0, z = 0, tentativas = 0;
  do {
    x = (Math.random() - 0.5) * limite * 2;
    z = (Math.random() - 0.5) * limite * 2;
    tentativas++;
  } while (Math.hypot(x, z) < raioMin && tentativas < 40);
  return { x, z };
}

function montarDeco() {
  while (decoGrupo.children.length) decoGrupo.remove(decoGrupo.children[0]);
  pokeStops.length = 0;
  nuvens.length = 0;

  const matTronco = new THREE.MeshLambertMaterial({ color: 0x6b4a2b });
  const matFolha = new THREE.MeshLambertMaterial({ color: BIOMES[biomeAtual].arvores });
  const matFolhaClara = new THREE.MeshLambertMaterial({ color: 0x4caf50 });
  const matPedra = new THREE.MeshLambertMaterial({ color: biomeAtual === 'caverna' ? 0x4a4a68 : 0x8d8d8d });

  const arvore = (x, z, escala = 1) => {
    const g = new THREE.Group();
    const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * escala, 0.32 * escala, 1.8 * escala, 7), matTronco);
    tronco.position.y = 0.9 * escala;
    g.add(tronco);
    const copas = [
      [0, 2.2, 0, 1.35], [-0.75, 1.9, 0.25, 0.95], [0.8, 2.0, -0.2, 1.0], [0.1, 2.8, 0.1, 0.8],
    ];
    for (const [cx, cy, cz, r] of copas) {
      const copa = new THREE.Mesh(new THREE.SphereGeometry(r * escala, 8, 7), Math.random() < 0.5 ? matFolha : matFolhaClara);
      copa.position.set(cx * escala, cy * escala, cz * escala);
      copa.scale.y = 0.85;
      g.add(copa);
    }
    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    decoGrupo.add(g);
  };

  const pedra = (x, z, escala = 1) => {
    const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.6 * escala, 0), matPedra);
    r.position.set(x, 0.35 * escala, z);
    r.rotation.set(Math.random(), Math.random(), Math.random());
    r.scale.set(1, 0.7 + Math.random() * 0.5, 0.85);
    decoGrupo.add(r);
  };

  if (biomeAtual === 'planicie') {
    for (let i = 0; i < 34; i++) { const p = posAleatoria(16); arvore(p.x, p.z, 0.75 + Math.random() * 0.7); }
    for (let i = 0; i < 46; i++) {
      const p = posAleatoria(10);
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.55 + Math.random() * 0.55, 7, 6), Math.random() < 0.5 ? matFolha : matFolhaClara);
      b.position.set(p.x, 0.5, p.z);
      b.scale.y = 0.75;
      decoGrupo.add(b);
    }
    for (let i = 0; i < 12; i++) { const p = posAleatoria(20); pedra(p.x, p.z, 0.5 + Math.random()); }
    const matFlor = [0xf472b6, 0xfde047, 0xffffff, 0xa78bfa].map(c => new THREE.MeshBasicMaterial({ color: c }));
    for (let i = 0; i < 90; i++) {
      const p = posAleatoria(8);
      const f = new THREE.Mesh(new THREE.SphereGeometry(0.16, 5, 4), matFlor[i % matFlor.length]);
      f.position.set(p.x, 0.16, p.z);
      decoGrupo.add(f);
    }
  } else if (biomeAtual === 'caverna') {
    for (let i = 0; i < 38; i++) {
      const p = posAleatoria(12);
      const h = 2 + Math.random() * 6;
      const st = new THREE.Mesh(new THREE.ConeGeometry(0.7 + Math.random() * 0.8, h, 6), matPedra);
      st.position.set(p.x, h / 2, p.z);
      decoGrupo.add(st);
    }
    const matCristal = new THREE.MeshLambertMaterial({ color: 0x67e8f9, emissive: 0x0891b2, emissiveIntensity: 0.7 });
    const matCristal2 = new THREE.MeshLambertMaterial({ color: 0xc4b5fd, emissive: 0x7c3aed, emissiveIntensity: 0.65 });
    for (let i = 0; i < 34; i++) {
      const p = posAleatoria(14);
      const cr = new THREE.Mesh(new THREE.OctahedronGeometry(0.5 + Math.random() * 0.8, 0), Math.random() < 0.5 ? matCristal : matCristal2);
      cr.position.set(p.x, 0.5 + Math.random() * 0.6, p.z);
      cr.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
      decoGrupo.add(cr);
    }
    for (let i = 0; i < 26; i++) { const p = posAleatoria(8); pedra(p.x, p.z, 0.5 + Math.random() * 1.2); }
  } else if (biomeAtual === 'praia') {
    const matPalha = new THREE.MeshLambertMaterial({ color: 0x2e9e5b });
    for (let i = 0; i < 16; i++) {
      const p = posAleatoria(18);
      const g = new THREE.Group();
      const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 4.4, 6), matTronco);
      tronco.position.y = 2.2; tronco.rotation.z = (Math.random() - 0.5) * 0.35;
      const folhas = new THREE.Group();
      for (let j = 0; j < 6; j++) {
        const folha = new THREE.Mesh(new THREE.ConeGeometry(0.42, 2.6, 4), matPalha);
        folha.position.set(Math.cos(j / 6 * Math.PI * 2) * 1.15, 4.5, Math.sin(j / 6 * Math.PI * 2) * 1.15);
        folha.rotation.z = Math.cos(j / 6 * Math.PI * 2) * 0.95;
        folha.rotation.x = -Math.sin(j / 6 * Math.PI * 2) * 0.95;
        folhas.add(folha);
      }
      g.add(tronco, folhas);
      g.position.set(p.x, 0, p.z);
      g.rotation.y = Math.random() * Math.PI;
      decoGrupo.add(g);
    }
    for (let i = 0; i < 14; i++) { const p = posAleatoria(10); pedra(p.x, p.z, 0.4 + Math.random() * 0.8); }
    const matAgua = new THREE.MeshLambertMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 });
    for (let i = 0; i < 3; i++) {
      const p = posAleatoria(40);
      const lago = new THREE.Mesh(new THREE.CircleGeometry(7 + Math.random() * 7, 28), matAgua);
      lago.rotation.x = -Math.PI / 2;
      lago.position.set(p.x, 0.02, p.z);
      decoGrupo.add(lago);
    }
  } else {
    const cores = [0x8fa3c8, 0xa7b6d6, 0x7d8fae, 0xb8c4dd, 0x93a3c1];
    for (let i = 0; i < 26; i++) {
      const p = posAleatoria(26, 130);
      const w = 5 + Math.random() * 10, d = 5 + Math.random() * 10, h = 6 + Math.random() * 26;
      const predio = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color: cores[i % cores.length] }));
      predio.position.set(p.x, h / 2, p.z);
      decoGrupo.add(predio);
      const topo = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, 1.2, d * 0.5), new THREE.MeshLambertMaterial({ color: 0x5c6b85 }));
      topo.position.set(p.x, h + 0.6, p.z);
      decoGrupo.add(topo);
      const janelaMat = new THREE.MeshBasicMaterial({ color: Math.random() < 0.5 ? 0xfff2b0 : 0x93c5fd, transparent: true, opacity: 0.8 });
      for (let j = 0; j < 6; j++) {
        const janela = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.3), janelaMat);
        janela.position.set(p.x + (Math.random() - 0.5) * (w - 1), 2 + Math.random() * (h - 3), p.z + d / 2 + 0.02);
        decoGrupo.add(janela);
      }
    }
    const matPoste = new THREE.MeshLambertMaterial({ color: 0x3f4a5c });
    const matLuz = new THREE.MeshBasicMaterial({ color: 0xfff3b0 });
    for (let i = 0; i < 14; i++) {
      const p = posAleatoria(18);
      const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 4.2, 6), matPoste);
      poste.position.set(p.x, 2.1, p.z);
      const luz = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 8), matLuz);
      luz.position.set(p.x, 4.25, p.z);
      decoGrupo.add(poste, luz);
    }
    for (let i = 0; i < 18; i++) { const p = posAleatoria(10); pedra(p.x, p.z, 0.35 + Math.random() * 0.5); }
  }

  // Nuvens (dão profundidade ao mapa)
  const matNuvem = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 });
  for (let i = 0; i < 7; i++) {
    const g = new THREE.Group();
    for (let j = 0; j < 4; j++) {
      const esfera = new THREE.Mesh(new THREE.SphereGeometry(3 + Math.random() * 2.5, 8, 6), matNuvem);
      esfera.position.set((j - 1.5) * 3.2, Math.random() * 1.2, Math.random() * 2);
      esfera.scale.y = 0.6;
      g.add(esfera);
    }
    g.position.set((Math.random() - 0.5) * 260, 38 + Math.random() * 14, (Math.random() - 0.5) * 260);
    g.userData.v = 0.02 + Math.random() * 0.04;
    decoGrupo.add(g);
    nuvens.push(g);
  }

  // PokéStops em volta do jogador, sempre acessíveis
  for (let i = 0; i < 6; i++) {
    const ang = (i / 6) * Math.PI * 2 + Math.random() * 0.4;
    const raio = 26 + Math.random() * 34;
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.3, 0.18, 12), new THREE.MeshLambertMaterial({ color: 0x1e3a8a }));
    base.position.y = 0.09;
    const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 2.3, 8), new THREE.MeshLambertMaterial({ color: 0xe6eefc }));
    poste.position.y = 1.2;
    const anel = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.2, 10, 24), new THREE.MeshLambertMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }));
    anel.position.y = 2.7;
    const esfera = new THREE.Mesh(new THREE.SphereGeometry(0.42, 14, 12), new THREE.MeshBasicMaterial({ color: 0x7dd3fc }));
    esfera.position.y = 2.7;
    const brilho = criarBrilho(0x38bdf8, 4.2);
    brilho.position.y = 2.7;
    g.add(base, poste, anel, esfera, brilho);
    g.position.set(Math.cos(ang) * raio, 0, Math.sin(ang) * raio);
    decoGrupo.add(g);
    pokeStops.push({ g, anel, esfera, brilho, prontoAt: 0 });
  }
  atualizarCeu();
}
montarDeco();

const playerMesh = new THREE.Group();
const mat = c => new THREE.MeshLambertMaterial({ color: c });
const skin = mat(0xffcf9e);

// pernas com pivô no quadril (para animar o andar)
function criarPerna(x) {
  const g = new THREE.Group();
  g.position.set(x, 1.05, 0);
  const coxa = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.22, 1.0, 10), mat(0x2c3e66));
  coxa.position.y = -0.5;
  const tenis = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.24, 0.66), mat(0xf5f7fa));
  tenis.position.set(0, -1.02, 0.12);
  g.add(coxa, tenis);
  return g;
}
const pernaEG = criarPerna(-0.36);
const pernaDG = criarPerna(0.36);

function criarBraco(x) {
  const g = new THREE.Group();
  g.position.set(x, 2.2, 0);
  g.rotation.z = x < 0 ? 0.18 : -0.18;
  const braco = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.15, 0.95, 8), mat(0x1d4ed8));
  braco.position.y = -0.47;
  const mao = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), skin);
  mao.position.y = -0.98;
  g.add(braco, mao);
  return g;
}
const bracoEG = criarBraco(-0.78);
const bracoDG = criarBraco(0.78);

const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.8, 1.35, 14), mat(0x2563eb)); torso.position.y = 1.72;
const gola = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.12, 8, 16), mat(0xf5f7fa)); gola.rotation.x = Math.PI / 2; gola.position.y = 2.32;
const mochila = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.0, 0.42), mat(0xffcb05)); mochila.position.set(0, 1.82, -0.78);
const alcaE = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.1), mat(0x1e293b)); alcaE.position.set(-0.34, 1.9, -0.56);
const alcaD = alcaE.clone(); alcaD.position.x = 0.34;

const cabeca = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 14), skin); cabeca.position.y = 2.95;
const olhoE = new THREE.Mesh(new THREE.SphereGeometry(0.075, 6, 6), new THREE.MeshBasicMaterial({ color: 0x1b2438 })); olhoE.position.set(-0.2, 3.02, 0.55);
const olhoD = olhoE.clone(); olhoD.position.x = 0.2;
const bone = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xef4444)); bone.position.y = 3.1;
const aba = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.62), mat(0xef4444)); aba.position.set(0, 3.05, 0.72);
const botaoBone = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), mat(0xffffff)); botaoBone.position.set(0, 3.65, 0.1);

const sombraJogador = new THREE.Mesh(
  new THREE.CircleGeometry(0.95, 20),
  new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.26, depthWrite: false })
);
sombraJogador.rotation.x = -Math.PI / 2; sombraJogador.position.y = 0.02;

playerMesh.add(pernaEG, pernaDG, bracoEG, bracoDG, torso, gola, mochila, alcaE, alcaD, cabeca, olhoE, olhoD, bone, aba, botaoBone, sombraJogador);
scene.add(playerMesh);
let faseAndar = 0;

const arteCache = {};
function materialArte(url) {
  if (!arteCache[url]) {
    arteCache[url] = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(url),
      transparent: true, alphaTest: 0.06, side: THREE.DoubleSide,
    });
  }
  return arteCache[url];
}

function spawnSelvagem() {
  const idx = especieAleatoria();
  const e = ESPECIES[idx];
  if (!e) return;
  const shiny = Math.random() < Math.min(0.08, 0.015 + nivel * 0.001);
  const cp = Math.round(10 + Math.random() * 15 * nivel * (e.lendario ? 2.5 : 1));
  const ang = Math.random() * Math.PI * 2;
  const dist = 10 + Math.random() * 25;
  const s = {
    espec: idx, pokeId: e.id, cp, shiny, mega: false,
    x: Math.max(-140, Math.min(140, player.x + Math.cos(ang) * dist)),
    y: Math.max(-140, Math.min(140, player.y + Math.sin(ang) * dist)),
    hp: e.hp, hpMax: e.hp, bob: Math.random() * 6,
  };

  const escala = (e.lendario ? 1.38 : 1) * (shiny ? 1.1 : 1);
  const mat3d = materialArte(artUrl(s));
  const g = new THREE.Group();
  const p1 = new THREE.Mesh(new THREE.PlaneGeometry(5 * escala, 5 * escala), mat3d);
  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(5 * escala, 5 * escala), mat3d);
  p2.rotation.y = Math.PI / 2;
  p1.position.y = 0.2; p2.position.y = 0.2;

  const sombra = new THREE.Mesh(
    new THREE.CircleGeometry(1.45 * escala, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.26, depthWrite: false })
  );
  sombra.rotation.x = -Math.PI / 2;
  sombra.position.y = -2.42;

  const corAnel = shiny ? 0xffd54f : e.lendario ? 0xa855f7 : new THREE.Color(corTipo(e.tipo)).getHex();
  const anel = new THREE.Mesh(
    new THREE.RingGeometry(2.0 * escala, 2.35 * escala, 32),
    new THREE.MeshBasicMaterial({ color: corAnel, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
  );
  anel.rotation.x = -Math.PI / 2;
  anel.position.y = -2.43;

  g.add(p1, p2, sombra, anel);
  if (shiny || e.lendario) {
    const brilho = criarBrilho(shiny ? 0xffe082 : 0xc084fc, 8 * escala);
    brilho.position.y = 0.2;
    brilho.material.opacity = 0.55;
    g.add(brilho);
  }
  g.position.set(s.x, 2.5, s.y);
  g.userData.s = s;
  g.userData.anel = anel;
  s.grupo = g;
  scene.add(g);
  selvagens.push(s);
}
setInterval(() => { if (selvagens.length < 6 && !capturaAtual) spawnSelvagem(); }, 2500);

function removerSelvagem(s) {
  scene.remove(s.grupo);
  selvagens = selvagens.filter(x => x !== s);
}

// ===== INPUT 3D =====
const teclas = {};
const MODAIS = ['tela-batalha', 'tela-inventario', 'tela-loja', 'tela-pokedex', 'tela-admin', 'tela-pvp', 'tela-troca'];

function fecharModais() {
  for (const id of MODAIS) {
    const el = document.getElementById(id);
    if (el) el.classList.add('oculto');
  }
}
function uiAberta() {
  for (const id of ['tela-captura', 'tela-login', 'tela-menu']) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('oculto')) return true;
  }
  return MODAIS.some(id => {
    const el = document.getElementById(id);
    return el && !el.classList.contains('oculto');
  });
}
function digitandoEm(el) {
  return el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
}

addEventListener('keydown', e => {
  if (e.key === 'Escape' && !digitandoEm(e.target)) { fecharModais(); return; }
  if (digitandoEm(e.target)) return;
  const k = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
  teclas[k] = true;
});
addEventListener('keyup', e => { teclas[e.key.toLowerCase()] = false; });

let mouseDown = null;
let camDist = 20;
const ray = new THREE.Raycaster();

renderer.domElement.addEventListener('pointerdown', e => {
  mouseDown = { x: e.clientX, y: e.clientY, px: e.clientX, py: e.clientY, moveu: false };
  try { renderer.domElement.setPointerCapture(e.pointerId); } catch (err) {}
});
renderer.domElement.addEventListener('pointermove', e => {
  if (!mouseDown) return;
  const dx = e.clientX - mouseDown.px;
  if (dx) { camAngulo -= dx * 0.006; mouseDown.px = e.clientX; }
  if (Math.hypot(e.clientX - mouseDown.x, e.clientY - mouseDown.y) > 8) mouseDown.moveu = true;
});
renderer.domElement.addEventListener('pointerup', e => {
  const d = mouseDown ? Math.hypot(e.clientX - mouseDown.x, e.clientY - mouseDown.y) : 999;
  const moveu = mouseDown && mouseDown.moveu;
  mouseDown = null;
  if (d > 10 || moveu) return;
  const r = renderer.domElement.getBoundingClientRect();
  const px = e.clientX - r.left, py = e.clientY - r.top;
  const v = new THREE.Vector3();
  for (const s of selvagens) {
    v.set(s.x, 2.5, s.y).project(camera);
    const sx = (v.x + 1) / 2 * r.width;
    const sy = (-v.y + 1) / 2 * r.height;
    const esp = ESPECIES[s.espec];
    const alcance = esp && esp.lendario ? 60 : 46;
    if (v.z < 1 && Math.hypot(sx - px, sy - py) < alcance) { abrirCaptura(s); return; }
  }
  const plano = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const ponto = new THREE.Vector3();
  ray.setFromCamera(new THREE.Vector2(((px / r.width) * 2) - 1, -((py / r.height) * 2) + 1), camera);
  if (ray.ray.intersectPlane(plano, ponto)) player.alvo = { x: ponto.x, y: ponto.z };
});
renderer.domElement.addEventListener('pointercancel', () => { mouseDown = null; });
renderer.domElement.addEventListener('wheel', e => {
  e.preventDefault();
  camDist = Math.max(12, Math.min(36, camDist + e.deltaY * 0.02));
}, { passive: false });

function update() {
  const v = 0.24;
  const bloqueado = uiAberta();
  let ix = 0, iz = 0;

  if (!bloqueado) {
    if (teclas['arrowup'] || teclas['w']) { ix -= Math.sin(camAngulo); iz -= Math.cos(camAngulo); }
    if (teclas['arrowdown'] || teclas['s']) { ix += Math.sin(camAngulo); iz += Math.cos(camAngulo); }
    if (teclas['arrowleft'] || teclas['a']) { ix -= Math.cos(camAngulo); iz += Math.sin(camAngulo); }
    if (teclas['arrowright'] || teclas['d']) { ix += Math.cos(camAngulo); iz -= Math.sin(camAngulo); }
  }

  if (ix || iz) {
    const len = Math.hypot(ix, iz);
    ix /= len; iz /= len;
    player.x += ix * v;
    player.y += iz * v;
    player.alvo = null;
  } else if (!bloqueado && player.alvo) {
    const ddx = player.alvo.x - player.x, ddy = player.alvo.y - player.y, d = Math.hypot(ddx, ddy);
    if (d > 0.4) { player.x += ddx / d * v; player.y += ddy / d * v; ix = ddx / d; iz = ddy / d; }
    else player.alvo = null;
  }

  const movendo = !!(ix || iz);
  if (movendo) {
    const alvo = Math.atan2(ix, iz);
    let diff = alvo - playerMesh.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    playerMesh.rotation.y += diff * 0.2;
    faseAndar += 0.3;
  }

  // Animação das pernas/braços
  const balanco = movendo ? Math.sin(faseAndar) * 0.55 : 0;
  pernaEG.rotation.x = balanco;
  pernaDG.rotation.x = -balanco;
  bracoEG.rotation.x = -balanco * 0.8;
  bracoDG.rotation.x = balanco * 0.8;
  playerMesh.position.y = movendo ? Math.abs(Math.sin(faseAndar)) * 0.07 : 0;

  player.x = Math.max(-145, Math.min(145, player.x));
  player.y = Math.max(-145, Math.min(145, player.y));
  playerMesh.position.x = player.x;
  playerMesh.position.z = player.y;

  for (const s of selvagens) {
    s.bob += 0.08;
    s.grupo.position.set(s.x, 2.5 + Math.sin(s.bob) * 0.3, s.y);
    const anel = s.grupo.userData.anel;
    if (anel) {
      const pulso = 1 + Math.sin(s.bob * 1.4) * 0.05;
      anel.scale.set(pulso, pulso, 1);
      anel.material.opacity = 0.32 + (Math.sin(s.bob * 1.4) + 1) * 0.11;
    }
  }

  for (const n of nuvens) {
    n.position.x += n.userData.v;
    if (n.position.x > 150) n.position.x = -150;
  }

  camera.position.lerp(new THREE.Vector3(
    player.x + Math.sin(camAngulo) * camDist,
    camDist * 0.9,
    player.y + Math.cos(camAngulo) * camDist
  ), 0.12);
  camera.lookAt(player.x, 1.6, player.y);

  const agora = Date.now();
  for (const s of pokeStops) {
    s.anel.rotation.y += 0.03;
    const pronto = agora >= s.prontoAt;
    s.esfera.position.y = 2.7 + Math.sin(agora / 500) * 0.28;
    s.anel.position.y = 2.7 + Math.sin(agora / 500) * 0.28;
    s.brilho.position.y = s.esfera.position.y;
    s.anel.material.color.setHex(pronto ? 0x38bdf8 : 0x56627a);
    s.anel.material.emissive.setHex(pronto ? 0x0284c7 : 0x222a3a);
    s.esfera.material.color.setHex(pronto ? 0x7dd3fc : 0x556074);
    s.brilho.material.opacity = pronto ? 0.55 + Math.sin(agora / 320) * 0.2 : 0.12;

    if (pronto && Math.hypot(s.g.position.x - player.x, s.g.position.z - player.y) < 6.5) {
      const r = Math.random();
      if (r < 0.38) { bolas.great += 2; toast('📍 PokéStop: +2 🔵 Great Balls!'); }
      else if (r < 0.58) { bolas.ultra += 1; toast('📍 PokéStop: +1 🟡 Ultra Ball!'); }
      else if (r < 0.73) { pedras += 1; toast('📍 PokéStop: +1 💎 Mega Pedra!'); }
      else if (r < 0.9) { moedas += 30; toast('📍 PokéStop: +30 🪙!'); }
      else { bolas.master += 1; toast('🎉 PokéStop raro: +1 🟣 Master Ball!'); }
      sfx('coin');
      s.prontoAt = agora + 40000;
      s.g.scale.set(1.5, 1.5, 1.5);
      setTimeout(() => s.g.scale.set(1, 1, 1), 320);
      salvar();
      renderItens();
    }
  }
}

function loop() {
  update();
  renderer.render(scene, camera);
  if (capturaAtual) {
    anelT -= 0.02;
    if (anelT < 0.12) anelT = 1;
    anelDir = -1;
    const ring = document.getElementById('ring');
    if (ring) ring.style.transform = `scale(${0.6 + anelT * 0.55})`;
  }
  requestAnimationFrame(loop);
}

// ===== CAPTURA =====
function abrirCaptura(s) {
  capturaAtual = s;
  const e = ESPECIES[s.espec];
  const lvl = s.nivel || Math.max(1, Math.round(s.cp / 15));
  document.getElementById('captura-nome').textContent = nomeExibicao(s);
  document.getElementById('captura-cp').textContent = 'CP ' + s.cp;
  document.getElementById('captura-tipo').textContent = e.tipo;
  document.getElementById('captura-nivel').textContent = 'Nv ' + lvl;
  document.getElementById('captura-tipo').style.background = corTipo(e.tipo);
  document.getElementById('captura-msg').textContent = '';

  // Marca como "visto" na Pokédex
  const d = dex[s.espec] = dex[s.espec] || { c: 0, s: false, v: 0 };
  d.v = (d.v || 0) + 1;

  resetBola();
  bolaEl.style.transform = '';
  if (capturaMesh) capturaMesh.scale.set(1, 1, 1);
  document.getElementById('captura-img').className = s.shiny ? 'shiny' : '';
  atualizarBarraHp();
  renderBolas();
  const dif = s.cp / (15 * nivel + 10);
  document.getElementById('ring').style.borderColor = dif < 0.4 ? '#4caf50' : dif < 0.8 ? '#ff9800' : '#f44336';
  document.getElementById('ring').style.transform = 'scale(1.15)';
  document.getElementById('tela-captura').classList.remove('oculto');
  anelT = 1;
  iniciarCenaCaptura(s);
  sfx('captura');
  if (s.shiny) sfx('shiny');
  rugidoPokemon(s, 'captura');
}

// ===== CENA 3D DA CAPTURA =====
let capturaRen = null, capturaScene = null, capturaCam = null, capturaMesh = null, capturaHalo = null;
let capturaRot = 0, capturaAberta = false, capturaT0 = 0, capturaTremor = 0;

function iniciarCenaCaptura(s) {
  const spot = document.getElementById('pokemon-spot');
  const lado = spot.clientWidth || 280;
  if (!capturaRen) {
    capturaRen = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    capturaRen.setPixelRatio(Math.min(1.6, window.devicePixelRatio || 1));
    capturaRen.setSize(lado, lado);
    capturaRen.domElement.style.position = 'absolute';
    capturaRen.domElement.style.inset = '0';
    spot.appendChild(capturaRen.domElement);
    capturaScene = new THREE.Scene();
    capturaCam = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    capturaCam.position.z = 4.4;
    capturaScene.add(new THREE.AmbientLight(0xffffff, 1.25));
    const luz = new THREE.DirectionalLight(0xffffff, 0.9);
    luz.position.set(3, 6, 8);
    capturaScene.add(luz);
    const luzCor = new THREE.PointLight(0x38bdf8, 1.1, 30);
    luzCor.position.set(-3, 2, 5);
    capturaScene.add(luzCor);
    requestAnimationFrame(animarCaptura3D);
  } else {
    capturaRen.setSize(lado, lado);
    capturaCam.aspect = 1;
    capturaCam.updateProjectionMatrix();
  }
  capturaAberta = true;
  capturaT0 = performance.now();
  capturaTremor = 0;

  if (capturaMesh) { capturaScene.remove(capturaMesh); capturaMesh = null; }
  if (capturaHalo) { capturaScene.remove(capturaHalo); capturaHalo = null; }

  const e = ESPECIES[s.espec];
  const img = document.getElementById('captura-img');
  img.style.display = 'block';
  img.src = spriteUrl(s);
  img.className = s.shiny ? 'shiny' : '';

  const tex = new THREE.TextureLoader().load(artUrl(s), () => { img.style.display = 'none'; });
  capturaMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.5, 3.5),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.02, side: THREE.DoubleSide })
  );
  capturaMesh.scale.set(1, 1, 1);
  capturaScene.add(capturaMesh);

  const cor = s.shiny ? 0xffd54f : e.lendario ? 0xa855f7 : new THREE.Color(corTipo(e.tipo)).getHex();
  capturaHalo = criarBrilho(cor, 4.8);
  capturaHalo.position.set(0, 0.1, -1.2);
  capturaHalo.material.opacity = 0.7;
  capturaScene.add(capturaHalo);
}

function animarCaptura3D() {
  requestAnimationFrame(animarCaptura3D);
  if (!capturaAberta || !capturaRen) return;
  const t = (performance.now() - capturaT0) / 1000;
  if (capturaMesh) {
    capturaMesh.position.y = Math.sin(t * 1.7) * 0.09;
    capturaMesh.rotation.y = Math.sin(t * 0.7) * 0.3;
    capturaMesh.rotation.z = Math.sin(t * 0.9) * 0.02;
    if (capturaTremor > 0) {
      capturaTremor = Math.max(0, capturaTremor - 0.02);
      capturaMesh.position.x = Math.sin(t * 58) * 0.09 * capturaTremor;
    } else {
      capturaMesh.position.x = 0;
    }
  }
  if (capturaHalo) {
    const k = 1 + Math.sin(t * 2.1) * 0.05;
    capturaHalo.scale.set(4.8 * k, 4.8 * k, 1);
    capturaHalo.material.opacity = 0.55 + Math.sin(t * 2.1) * 0.15;
  }
  capturaRen.render(capturaScene, capturaCam);
}
function escalaMesh(alvo, dur, cb) {
  if (!capturaMesh) return cb && cb();
  const ini = capturaMesh.scale.x || 1, t0 = performance.now();
  (function step(t) {
    const k = Math.min(1, (t - t0) / dur);
    const v = ini + (alvo - ini) * k;
    capturaMesh.scale.set(v, v, 1);
    if (k < 1) requestAnimationFrame(step); else cb && cb();
  })(performance.now());
}

function renderBolas(manterSelecao) {
  const sel = document.getElementById('bola-select');
  const anterior = manterSelecao ? sel.value : 'poke';
  sel.innerHTML = `<option value="poke">🔴 Pokébola (∞)</option>
    <option value="great" ${bolas.great < 1 ? 'disabled' : ''}>🔵 Great Ball ×${bolas.great}</option>
    <option value="ultra" ${bolas.ultra < 1 ? 'disabled' : ''}>🟡 Ultra Ball ×${bolas.ultra}</option>
    <option value="master" ${bolas.master < 1 ? 'disabled' : ''}>🟣 Master Ball ×${bolas.master}</option>`;
  const aindaExiste = [...sel.options].some(o => o.value === anterior && !o.disabled);
  sel.value = aindaExiste ? anterior : 'poke';
  atualizarChance();
}
const MULT_BOLA = { poke: 1, great: 1.5, ultra: 2, master: 99 };
document.getElementById('bola-select').addEventListener('change', atualizarChance);

// ===== LANÇAMENTO ARRASTANDO (estilo GO) =====
const bolaEl = document.getElementById('bola-captura');
const arenaEl = document.getElementById('captura-arena');
let arrastando = false;
bolaEl.addEventListener('pointerdown', e => { arrastando = true; bolaEl.classList.add('arrastando'); bolaEl.setPointerCapture(e.pointerId); e.preventDefault(); });
bolaEl.addEventListener('pointermove', e => {
  if (!arrastando) return;
  const r = arenaEl.getBoundingClientRect();
  bolaEl.style.left = (e.clientX - r.left - 27) + 'px';
  bolaEl.style.top = (e.clientY - r.top - 27) + 'px';
  bolaEl.style.bottom = 'auto';
});
bolaEl.addEventListener('pointerup', e => {
  if (!arrastando) return;
  arrastando = false;
  bolaEl.classList.remove('arrastando');
  const arena = arenaEl.getBoundingClientRect();
  const spot = document.getElementById('pokemon-spot').getBoundingClientRect();
  const bx = e.clientX - arena.left, by = e.clientY - arena.top;
  const sx = spot.left - arena.left + spot.width / 2, sy = spot.top - arena.top + spot.height / 2;
  if (Math.hypot(bx - sx, by - sy) < 70) {
    const dist = Math.hypot(bx - sx, by - sy);
    const bonusAnel = 1 - anelT;
    const rating = dist < 20 ? { t: '🎯 Excelente!', b: 0.18 } : dist < 40 ? { t: '⭐ Ótimo!', b: 0.09 } : { t: '👍 Bom!', b: 0.03 };
    document.getElementById('captura-msg').textContent = rating.t;
    bolaEl.style.left = (sx - 27) + 'px';
    bolaEl.style.top = (sy - 27) + 'px';
    bolaEl.style.transform = 'scale(0.35)';
    document.getElementById('captura-img').classList.add('capturando');
    setTimeout(() => {
      document.getElementById('captura-img').classList.remove('capturando');
      // Pokémon é sugado pela Pokébola
      escalaMesh(0.05, 450, () => {
        bolaEl.animate(
          [{ transform: 'scale(0.35) rotate(0)' }, { transform: 'scale(0.35) rotate(18deg)' }, { transform: 'scale(0.35) rotate(-18deg)' }, { transform: 'scale(0.35) rotate(0)' }],
          { duration: 350, iterations: 3 }
        ).onfinish = () => {
          resolverLancamento(bonusAnel, rating.b);
          resetBola();
          bolaEl.style.transform = '';
          const spot = document.getElementById('pokemon-spot');
          spot.classList.add('tremendo');
          setTimeout(() => spot.classList.remove('tremendo'), 900);
        };
      });
    }, 500);
  } else resetBola();
});
function resetBola() { bolaEl.style.left = ''; bolaEl.style.top = ''; bolaEl.style.bottom = ''; }

function resolverLancamento(bonusAnel = 0.5, bonusRating = 0) {
  if (!capturaAtual) return;
  const bola = document.getElementById('bola-select').value;
  if (bola !== 'poke') {
    if (bolas[bola] < 1) { toast('Sem essa bola!'); return; }
    bolas[bola]--;
    renderBolas(true);
  }
  sfx('bola');
  capturaTremor = 1;
  let chance = capturaComChance(0.3 + bonusAnel * 0.4 + bonusRating) * MULT_BOLA[bola];
  if (bola === 'master') chance = 1;
  if (Math.random() < chance) {
    efeitosCaptura();
    salvar();
    setTimeout(() => concluirCaptura(), 900);
    return;
  }
  sfx('falha');
  toast('A bola quebrou!');
  document.getElementById('captura-msg').textContent = '💨 Escapou! Enfraqueça mais ou use bola melhor.';
  escalaMesh(1, 400);
  capturaAtual.hp = Math.max(1, capturaAtual.hp - 5);
  atualizarBarraHp();
  if (Math.random() < 0.25) {
    toast('O Pokémon fugiu!');
    removerSelvagem(capturaAtual);
    capturaAtual = null;
    document.getElementById('tela-captura').classList.add('oculto');
  }
}

function atualizarBarraHp() {
  if (!capturaAtual) return;
  const p = Math.max(0, capturaAtual.hp / capturaAtual.hpMax);
  const bar = document.getElementById('captura-hp-bar');
  bar.style.width = (p * 100) + '%';
  bar.style.background = p > 0.5
    ? 'linear-gradient(90deg, #4ade80, #22c55e)'
    : p > 0.25
      ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
      : 'linear-gradient(90deg, #f87171, #ef4444)';
  atualizarChance();
}

function chanceExibida() {
  if (!capturaAtual) return 0;
  const sel = document.getElementById('bola-select');
  const bola = (sel && sel.value) || 'poke';
  if (bola === 'master') return 1;
  let c = capturaComChance(0.55) * (MULT_BOLA[bola] || 1);
  return Math.max(0.02, Math.min(1, c));
}
function atualizarChance() {
  const el = document.getElementById('captura-chance');
  if (!el || !capturaAtual) return;
  const c = chanceExibida();
  const cor = c > 0.6 ? '#4ade80' : c > 0.3 ? '#fbbf24' : '#f87171';
  el.innerHTML = `Chance de captura: <b style="color:${cor}">${Math.round(c * 100)}%</b>`;
  el.title = 'Solte a bola com o anel pequeno para aumentar a chance';
}

function capturaComChance(chanceBase) {
  const hpFrac = capturaAtual.hp / capturaAtual.hpMax;
  const cpPenalty = Math.min(0.35, capturaAtual.cp / 900);
  let chance = chanceBase + (1 - hpFrac) * 0.45 - cpPenalty;
  if (capturaAtual.shiny) chance -= 0.15;
  return Math.max(0.05, Math.min(0.95, chance));
}

function efeitosCaptura() {
  const spot = document.getElementById('pokemon-spot');
  const emojis = ['✨', '⭐', '🌟', '💫', '✨', '⭐'];
  for (let i = 0; i < emojis.length; i++) {
    const el = document.createElement('div');
    el.textContent = emojis[i];
    el.style.cssText = `position:absolute;left:${20 + Math.random() * 60}%;top:${10 + Math.random() * 60}%;font-size:28px;pointer-events:none;z-index:9;transition:all 1s;`;
    spot.appendChild(el);
    requestAnimationFrame(() => { el.style.transform = `translate(${(Math.random() - .5) * 120}px, ${-40 - Math.random() * 80}px) scale(1.6)`; el.style.opacity = '0'; });
    setTimeout(() => el.remove(), 1100);
  }
  sfx('vitoria');
}

function concluirCaptura() {
  if (!capturaAtual) return;
  const s = capturaAtual;
  capturaAtual = null;
  sfx('vitoria');
  toast('🎉 Capturado! ' + nomeExibicao(s));
  inventario.push({
    espec: s.espec, pokeId: ESPECIES[s.espec].id, cp: s.cp,
    nivel: s.nivel || Math.max(1, Math.round(s.cp / 15)),
    shiny: s.shiny, mega: false, pc: false,
  });
  moedas += 25;
  const raiz = raizDe(s.espec);
  doces[raiz] = (doces[raiz] || 0) + (s.shiny ? 6 : 3);
  if (Math.random() < 0.08) { pedras++; toast('💎 Achou uma Mega Pedra!'); }
  const d = dex[s.espec] = dex[s.espec] || { c: 0, s: false, v: 0 };
  d.c++;
  d.v = Math.max(1, d.v || 1);
  if (s.shiny) d.s = true;
  ganharXp(15 + Math.round(s.cp / 20));
  removerSelvagem(s);
  capturaAberta = false;
  resetBola();
  document.getElementById('tela-captura').classList.add('oculto');
  document.getElementById('tela-batalha').classList.add('oculto');
  salvar();
}

document.getElementById('btn-atacar').onclick = () => {
  if (!capturaAtual) return;
  sfx('hit');
  capturaAtual.hp -= 10 + Math.random() * 15;
  if (capturaAtual.hp <= 0) { capturaAtual.hp = 1; toast('Cuidado! Quase nocauteou!'); }
  atualizarBarraHp();
};

document.getElementById('btn-fugir').onclick = () => {
  capturaAtual = null;
  document.getElementById('tela-captura').classList.add('oculto');
};

// btn-bola removido (arraste a Pokébola)

// ===== BATALHA =====
let bVoce = null, bBusy = false;

document.getElementById('btn-batalha').onclick = () => {
  if (!capturaAtual) return;
  const time = inventario.filter(p => !p.pc);
  if (!time.length) return toast('Você não tem Pokémon no time!');
  const sel = document.getElementById('b-select');
  sel.innerHTML = time.map((p, i) => `<option value="${inventario.indexOf(p)}">${nomeExibicao(p)} CP ${p.cp} Nv ${p.nivel}</option>`).join('');
  novaBatalhaJogador();
  document.getElementById('tela-batalha').classList.remove('oculto');
  document.getElementById('captura-msg').textContent = '';
  const s = capturaAtual;
  document.getElementById('b-wild-img').src = spriteUrl(s);
  document.getElementById('b-wild-nome').textContent = nomeExibicao(s) + ' CP ' + s.cp;
  document.getElementById('b-wild-hp').style.width = (s.hp / s.hpMax * 100) + '%';
  log('Um ' + nomeExibicao(s) + ' selvagem apareceu!');
  sfx('batalha');
  rugidoPokemon(s, 'batalha');
};

function novoHpVoce(comSom = true) {
  const i = parseInt(document.getElementById('b-select').value);
  const p = inventario[i];
  bVoce = { ref: p, hpMax: Math.round(40 + p.cp / 4), hp: Math.round(40 + p.cp / 4) };
  document.getElementById('b-voce-img').src = spriteUrl(p);
  document.getElementById('b-voce-hp').style.width = '100%';
  montarMoves();
  if (comSom) cry(p, 0.5);
}
function novaBatalhaJogador() { novoHpVoce(false); }
document.getElementById('b-select').addEventListener('change', novoHpVoce);

const MOVES = {
  'Normal':   [{ n: 'Investida', p: 40 }, { n: 'Arranhão', p: 40 }, { n: 'Deslize', p: 70 }, { n: 'Hiper Raio', p: 150 }],
  'Fogo':     [{ n: 'Brasas', p: 40 }, { n: 'Labareda', p: 60 }, { n: 'Fogo Sagrado', p: 100 }, { n: 'Lança-Chamas', p: 90 }],
  'Água':     [{ n: 'Bolha', p: 40 }, { n: 'Jato de Água', p: 40 }, { n: 'Surfar', p: 90 }, { n: 'Hidrobomba', p: 110 }],
  'Planta':   [{ n: 'Folha Navalha', p: 55 }, { n: 'Vinhas Segurar', p: 45 }, { n: 'Raio Solar', p: 120 }, { n: 'Folha Daga', p: 70 }],
  'Elétrico': [{ n: 'Choque do Trovão', p: 40 }, { n: 'Faísca', p: 65 }, { n: 'Raio', p: 90 }, { n: 'Trovão', p: 110 }],
  'Psíquico': [{ n: 'Confusão', p: 50 }, { n: 'Giro Psíquico', p: 60 }, { n: 'Psi', p: 90 }, { n: 'Bola Sombra', p: 80 }],
  'Terra':    [{ n: 'Lama', p: 20 }, { n: 'Escavação', p: 80 }, { n: 'Terremoto', p: 100 }, { n: 'Corte de Terra', p: 70 }],
  'Pedra':    [{ n: 'Pedregulho', p: 50 }, { n: 'Avalancha', p: 75 }, { n: 'Força Bruta', p: 120 }, { n: 'Lança Pedra', p: 60 }],
  'Voador':   [{ n: 'Rajada', p: 40 }, { n: 'Ventania', p: 60 }, { n: 'Ataque Aéreo', p: 90 }, { n: 'Corte de Asa', p: 65 }],
  'Gelo':     [{ n: 'Pedaço de Gelo', p: 40 }, { n: 'Raio de Gelo', p: 95 }, { n: 'Nevasca', p: 110 }, { n: 'Vento Cortante', p: 55 }],
  'Luta':     [{ n: 'Soco', p: 40 }, { n: 'Onda de Impacto', p: 70 }, { n: 'Soco Trovão', p: 75 }, { n: 'Poder Oculto', p: 100 }],
  'Veneno':   [{ n: 'Tóxico Leve', p: 35 }, { n: 'Picada Venenosa', p: 15 }, { n: 'Bomba Lamacenta', p: 65 }, { n: 'Bomba Ácida', p: 80 }],
  'Fantasma': [{ n: 'Lamúria', p: 50 }, { n: 'Zumbido', p: 40 }, { n: 'Bola Sombra', p: 80 }, { n: 'Garra Noturna', p: 70 }],
  'Dragão':   [{ n: 'Fúria do Dragão', p: 60 }, { n: 'Garra do Dragão', p: 80 }, { n: 'Golpe de Dragem', p: 100 }, { n: 'Rugido Dragão', p: 45 }],
  'Fada':     [{ n: 'Toque de Fada', p: 40 }, { n: 'Brilho Mágico', p: 80 }, { n: 'Luar', p: 60 }, { n: 'Encanto', p: 50 }],
  'Inseto':   [{ n: 'Ferrão', p: 50 }, { n: 'Pontada', p: 45 }, { n: 'Corte Voador', p: 70 }, { n: 'Chuva de Insetos', p: 90 }],
  '?':        [{ n: 'Investida', p: 40 }, { n: 'Arranhão', p: 40 }, { n: 'Deslize', p: 70 }, { n: 'Hiper Raio', p: 150 }],
};
function movesDo(tipo) { return MOVES[tipo] || MOVES['Normal']; }

function montarMoves() {
  const p = bVoce.ref;
  const tipo = ESPECIES[p.espec].tipo;
  const moves = movesDo(tipo);
  document.getElementById('b-moves').innerHTML = moves.map((m, i) => `<button onclick="atacar(${i})">${m.n}</button>`).join('');
}

function log(m) { document.getElementById('b-log').textContent = m; }

function msgEff(mul) {
  if (mul > 1) return 'É super efetivo!';
  if (mul < 1) return 'Não é muito efetivo...';
  return '';
}

function eff2(atk, def) {
  if ((FORTE[atk] || []).includes(def)) return 1.6;
  if ((FORTE[def] || []).includes(atk)) return 0.625;
  return 1.0;
}

function atacar(i) {
  if (bBusy || !capturaAtual || !bVoce) return;
  bBusy = true;
  const p = bVoce.ref;
  const tipoP = ESPECIES[p.espec].tipo;
  const tipoW = ESPECIES[capturaAtual.espec].tipo;
  const mv = movesDo(tipoP)[i] || movesDo(tipoP)[0];
  const mul = eff2(tipoP, tipoW);
  const crit = Math.random() < 0.0625;
  const dmg = Math.max(1, Math.round((mv.p / 14) * (0.5 + p.cp / 400) * mul * (crit ? 1.5 : 1) * (0.85 + Math.random() * 0.3)));
  capturaAtual.hp = Math.max(0, capturaAtual.hp - dmg);
  document.getElementById('b-wild-hp').style.width = (capturaAtual.hp / capturaAtual.hpMax * 100) + '%';
  atualizarBarraHp();
  sfx('hit');
  log(`${nomeExibicao(p)} usou ${mv.n}!${crit ? ' Crítico!' : ''} ${msgEff(mul)}`);
  if (capturaAtual.hp <= 0) {
    setTimeout(() => {
      cry(capturaAtual, 0.55);
      log(`${nomeExibicao(capturaAtual)} desmaiou! Você ganhou XP!`);
      sfx('vitoria');
      ganharXp(25);
      removerSelvagem(capturaAtual);
      capturaAtual = null;
      setTimeout(() => { document.getElementById('tela-batalha').classList.add('oculto'); document.getElementById('tela-captura').classList.add('oculto'); bBusy = false; }, 1400);
    }, 900);
    return;
  }
  setTimeout(() => {
    const mvW = movesDo(tipoW)[Math.floor(Math.random() * movesDo(tipoW).length)];
    const mulW = eff2(tipoW, tipoP);
    const critW = Math.random() < 0.0625;
    const dmgW = Math.max(1, Math.round((mvW.p / 14) * (0.5 + capturaAtual.cp / 400) * mulW * (critW ? 1.5 : 1) * (0.85 + Math.random() * 0.3)));
    bVoce.hp = Math.max(0, bVoce.hp - dmgW);
    document.getElementById('b-voce-hp').style.width = (bVoce.hp / bVoce.hpMax * 100) + '%';
    sfx('hit');
    log(`${nomeExibicao(capturaAtual)} usou ${mvW.n}!${critW ? ' Crítico!' : ''} ${msgEff(mulW)}`);
    if (bVoce.hp <= 0) {
      setTimeout(() => {
        cry(bVoce.ref, 0.45);
        log(`${nomeExibicao(bVoce.ref)} desmaiou! O selvagem mantém ${Math.round(capturaAtual.hp / capturaAtual.hpMax * 100)}% de HP.`);
        sfx('falha');
        setTimeout(() => { document.getElementById('tela-batalha').classList.add('oculto'); bBusy = false; }, 1600);
      }, 900);
      return;
    }
    bBusy = false;
  }, 1100);
}

document.getElementById('b-capturar').onclick = () => {
  if (!capturaAtual || bBusy) return;
  const chance = capturaComChance(0.35);
  if (Math.random() < chance) concluirCaptura();
  else {
    log('Escapou! O selvagem fugiu!');
    removerSelvagem(capturaAtual);
    capturaAtual = null;
    setTimeout(() => { document.getElementById('tela-batalha').classList.add('oculto'); document.getElementById('tela-captura').classList.add('oculto'); }, 1200);
  }
};

document.getElementById('b-fugir').onclick = () => {
  bBusy = false;
  document.getElementById('tela-batalha').classList.add('oculto');
};

// ===== EVOLUÇÃO / PODER / PC =====
function evoluir(i) {
  const inst = inventario[i];
  const e = ESPECIES[inst.espec];
  if (!e.evo) return;
  if (inst.mega) return toast('Desfaça a mega evolução antes!');
  const raiz = raizDe(inst.espec);
  if ((doces[raiz] || 0) < e.candy) return toast('🍬 Doces insuficientes!');
  doces[raiz] -= e.candy;
  const antes = spriteUrl(inst);
  inst.espec = e.evo;
  inst.cp = Math.round(inst.cp * 1.6 + 20);
  inst.nivel += 3;
  mostrarEvo(antes, spriteUrl(inst), nomeExibicao(inst));
  sfx('evoluir');
  ganharXp(100);
  salvar(); renderListas();
}

function megaEvoluir(i) {
  const inst = inventario[i];
  const e = ESPECIES[inst.espec];
  if (!e.mega || inst.mega) return;
  if (pedras < 1) return toast('💎 Mega Pedra necessária!');
  pedras--; inst.mega = true;
  inst.cp = Math.round(inst.cp * 2);
  toast('💥 ' + e.mega.nome + ' ativado! CP dobrado!');
  ganharXp(150);
  salvar(); renderListas();
}

function mostrarEvo(antes, depois, nome) {
  const m = document.getElementById('evo-modal');
  document.getElementById('evo-antes').src = antes;
  document.getElementById('evo-depois').src = depois;
  document.getElementById('evo-nome').textContent = nome;
  m.classList.remove('oculto');
  setTimeout(() => m.classList.add('oculto'), 2200);
}

function cartaHtml(p) {
  const i = inventario.indexOf(p);
  const e = ESPECIES[p.espec];
  const raiz = raizDe(p.espec);
  const podeEvo = e.evo && !p.mega;
  const podeMega = e.mega && !p.mega;
  const cor = corTipo(e.tipo);
  const botoes = p.pc
    ? `<button onclick="trazerPC(${i})" title="Trazer para o time">🎮 Trazer</button>
       <button onclick="virarDoce(${i})" title="Transferir por 3 doces">🍬+3</button>`
    : `<button onclick="moverPC(${i})" title="Guardar no PC">🖥️ PC</button>
       <button onclick="virarDoce(${i})" title="Transferir por 3 doces">🍬+3</button>`;
  return `<div class="card ${p.shiny ? 'shiny' : ''}" style="--tc:${cor}">
    <img src="${spriteUrl(p)}" alt="${e.nome}" loading="lazy">
    <div class="card-info">
      <b>${nomeExibicao(p)}</b>
      <span class="tipo">${e.tipo}</span>
      <small class="cp">CP ${p.cp} · Nv ${p.nivel}</small>
      <small>🍬 ${doces[raiz] || 0} doces</small>
    </div>
    <div class="card-btns">
      ${podeEvo ? `<button onclick="evoluir(${i})" title="Evoluir (${e.candy} doces)">⬆️ ${e.candy}🍬</button>` : ''}
      ${podeMega ? `<button onclick="megaEvoluir(${i})" title="Mega evoluir (1 pedra)">💎 MEGA</button>` : ''}
      <button onclick="powerUp(${i})" title="Subir nível (3 doces)">🔼 Nv+</button>
      ${botoes}
    </div>
  </div>`;
}

function ordenarPokemons(lista) {
  const el = document.getElementById('ordenar');
  const modo = el ? el.value : 'recentes';
  const copia = [...lista];
  if (modo === 'cp') copia.sort((a, b) => b.cp - a.cp);
  else if (modo === 'nivel') copia.sort((a, b) => b.nivel - a.nivel || b.cp - a.cp);
  else if (modo === 'nome') copia.sort((a, b) => ESPECIES[a.espec].nome.localeCompare(ESPECIES[b.espec].nome));
  else if (modo === 'dex') copia.sort((a, b) => ESPECIES[a.espec].id - ESPECIES[b.espec].id);
  else copia.reverse();
  return copia;
}

function renderListas() {
  const campo = document.getElementById('busca');
  const filtro = (campo ? campo.value : '').trim().toLowerCase();
  const bate = p => {
    const e = ESPECIES[p.espec];
    return nomeExibicao(p).toLowerCase().includes(filtro)
      || e.nome.toLowerCase().includes(filtro)
      || (e.tipo || '').toLowerCase().includes(filtro)
      || String(e.id).includes(filtro)
      || ('cp ' + p.cp).includes(filtro);
  };
  const todosTime = inventario.filter(p => !p.pc);
  const todosPc = inventario.filter(p => p.pc);
  const time = ordenarPokemons(todosTime.filter(bate));
  const pc = ordenarPokemons(todosPc.filter(bate));
  const elTime = document.getElementById('lista-time');
  const elPc = document.getElementById('lista-pc');
  elTime.innerHTML = time.length ? time.map(cartaHtml).join('') : `<p>${filtro ? 'Nenhum Pokémon encontrado nessa busca.' : 'Seu time está vazio. Capture um Pokémon selvagem para começar!'}</p>`;
  elPc.innerHTML = pc.length ? pc.map(cartaHtml).join('') : `<p>${filtro ? 'Nenhum Pokémon encontrado nessa busca.' : 'PC vazio. Guarde Pokémon aqui para abrir espaço no time.'}</p>`;
  atualizarHud();
}

function moverPC(i) { inventario[i].pc = true; toast('🖥️ Guardado no PC'); salvar(); renderListas(); }
function trazerPC(i) { inventario[i].pc = false; toast('🎮 Trouxe para o time!'); salvar(); renderListas(); }
function virarDoce(i) {
  const p = inventario[i];
  const raiz = raizDe(p.espec);
  doces[raiz] = (doces[raiz] || 0) + 3;
  inventario.splice(i, 1);
  toast(`🍬 +3 doces de ${ESPECIES[raiz].nome}!`);
  salvar(); renderListas();
}
function powerUp(i) {
  const p = inventario[i];
  const raiz = raizDe(p.espec);
  if ((doces[raiz] || 0) < 3) return toast('🍬 Doces insuficientes!');
  doces[raiz] -= 3;
  p.nivel++;
  p.cp = Math.round(p.cp * 1.06 + 5);
  toast(`🔼 ${nomeExibicao(p)} subiu para o nível ${p.nivel}!`);
  ganharXp(20);
  salvar(); renderListas();
}

document.getElementById('busca').addEventListener('input', renderListas);
const ordenarEl = document.getElementById('ordenar');
if (ordenarEl) ordenarEl.addEventListener('change', renderListas);
document.getElementById('tab-itens').onclick = () => {
  document.getElementById('tab-itens').classList.add('ativo');
  document.getElementById('tab-time').classList.remove('ativo');
  document.getElementById('tab-pc').classList.remove('ativo');
  document.getElementById('lista-itens').classList.remove('oculto');
  document.getElementById('lista-time').classList.add('oculto');
  document.getElementById('lista-pc').classList.add('oculto');
  renderItens();
};
function renderItens() {
  const totalDoces = Object.values(doces).reduce((a, b) => a + b, 0);
  document.getElementById('lista-itens').innerHTML = `
    <div class="item-row"><b>🔴 Pokébola</b><span>∞</span></div>
    <div class="item-row"><b>🔵 Great Ball</b><span>× ${bolas.great}</span></div>
    <div class="item-row"><b>🟡 Ultra Ball</b><span>× ${bolas.ultra}</span></div>
    <div class="item-row"><b>🟣 Master Ball</b><span>× ${bolas.master}</span></div>
    <div class="item-row"><b>💎 Mega Pedras</b><span>× ${pedras}</span></div>
    <div class="item-row"><b>🍬 Doces</b><span>${totalDoces} no total</span></div>
    <div class="item-row"><b>🪙 Moedas</b><span>${moedas}</span></div>
    ${incense ? `<div class="item-row admin-row"><b>🪔 Incenso de Aventura</b><span>∞ usos</span><button onclick="abrirAdmin()">⚙️ Abrir Admin</button></div>` : ''}`;
}
window.abrirAdmin = function () {
  document.getElementById('tela-admin').classList.remove('oculto');
  document.getElementById('admin-poke-busca').value = '';
  renderAdminPokes('');
};
function renderAdminPokes(filtro) {
  const sel = document.getElementById('admin-poke');
  const f = (filtro || '').toLowerCase();
  sel.innerHTML = ESPECIES.map((e, i) => ({ e, i }))
    .filter(({ e }) => e.nome.toLowerCase().includes(f) || String(e.id).includes(f))
    .slice(0, 200)
    .map(({ e, i }) => `<option value="${i}">${e.nome} (#${e.id})</option>`).join('');
}
document.addEventListener('input', e => {
  if (e.target && e.target.id === 'admin-poke-busca') renderAdminPokes(e.target.value);
});
window.darPokemon = function () {
  const idx = parseInt(document.getElementById('admin-poke').value);
  if (!ESPECIES[idx]) return toast('Escolha um Pokémon!');
  const level = Math.max(1, parseInt(document.getElementById('admin-level').value) || 1);
  const shiny = document.getElementById('admin-shiny').checked;
  inventario.push({
    espec: idx, pokeId: ESPECIES[idx].id,
    cp: 10 + level * 7 + Math.floor(Math.random() * 12),
    nivel: level, shiny, mega: false, pc: false,
  });
  toast(`🎁 Recebeu ${shiny ? '✨ Shiny ' : ''}${ESPECIES[idx].nome} nível ${level}!`);
  salvar(); renderListas(); renderItens();
};
window.fecharAdmin = function () { document.getElementById('tela-admin').classList.add('oculto'); };
window.adminAdd = function (campo) {
  const v = parseInt(document.getElementById('admin-' + campo).value) || 0;
  if (v <= 0) return toast('Digite um valor positivo!');
  if (campo === 'moedas') moedas += v;
  else if (campo === 'xp') ganharXp(v);
  else if (campo === 'great') bolas.great += v;
  else if (campo === 'ultra') bolas.ultra += v;
  else if (campo === 'master') bolas.master += v;
  else if (campo === 'pedras') pedras += v;
  toast('✨ ' + v + ' adicionado em ' + campo + '!');
  salvar(); renderItens();
};
window.darIncenso = function () {
  const nome = prompt('Para qual usuário deseja dar o Incenso de Aventura?');
  if (!nome) return;
  const db = usuarios();
  if (!db[nome]) return toast('Usuário não encontrado!');
  db[nome].data = db[nome].data || {};
  db[nome].data.incense = true;
  localStorage.setItem('pw_users', JSON.stringify(db));
  toast('🪔 Incenso enviado para ' + nome + '!');
};
document.getElementById('tab-time').onclick = () => {
  document.getElementById('tab-time').classList.add('ativo');
  document.getElementById('tab-pc').classList.remove('ativo');
  document.getElementById('tab-itens').classList.remove('ativo');
  document.getElementById('lista-time').classList.remove('oculto');
  document.getElementById('lista-pc').classList.add('oculto');
  document.getElementById('lista-itens').classList.add('oculto');
};
document.getElementById('tab-pc').onclick = () => {
  document.getElementById('tab-pc').classList.add('ativo');
  document.getElementById('tab-time').classList.remove('ativo');
  document.getElementById('tab-itens').classList.remove('ativo');
  document.getElementById('lista-pc').classList.remove('oculto');
  document.getElementById('lista-time').classList.add('oculto');
  document.getElementById('lista-itens').classList.add('oculto');
};
document.getElementById('btn-inventario').onclick = () => { renderListas(); document.getElementById('tela-inventario').classList.remove('oculto'); };
document.getElementById('btn-fechar-inv').onclick = () => document.getElementById('tela-inventario').classList.add('oculto');

// ===== LOJA =====
const LOJA = [
  { key: 'great', nome: '🔵 Great Ball', preco: 50, desc: 'Taxa de captura ×1.5' },
  { key: 'ultra', nome: '🟡 Ultra Ball', preco: 120, desc: 'Taxa de captura ×2' },
  { key: 'master', nome: '🟣 Master Ball', preco: 500, desc: 'Captura garantida' },
  { key: 'pedras', nome: '💎 Mega Pedra', preco: 350, desc: 'Necessária para mega evoluir' },
];
function possuiItem(key) {
  return key === 'pedras' ? pedras : (bolas[key] || 0);
}
function renderLoja() {
  const el = document.getElementById('loja-moedas');
  if (el) el.textContent = `Você tem 🪙 ${moedas}`;
  document.getElementById('loja-lista').innerHTML = LOJA.map(i => `
    <div class="loja-item">
      <b>${i.nome}</b>
      <small>${i.desc}</small>
      <span>Possui: ${possuiItem(i.key)} · <b style="color:var(--yellow)">🪙 ${i.preco}</b></span>
      <button onclick="comprar('${i.key}')" ${moedas < i.preco ? 'disabled' : ''}>Comprar</button>
    </div>`).join('');
}
function comprar(key) {
  const item = LOJA.find(i => i.key === key);
  if (!item) return;
  if (moedas < item.preco) return toast('🪙 Moedas insuficientes!');
  moedas -= item.preco;
  if (key === 'pedras') pedras++;
  else bolas[key]++;
  sfx('coin');
  toast(`✅ Comprou ${item.nome}!`);
  salvar(); renderLoja(); renderItens();
}

// ===== POKÉDEX =====
function renderDex() {
  const total = ESPECIES.length;
  let capturados = 0, vistos = 0;
  for (let i = 0; i < total; i++) {
    const d = dex[i];
    if (!d) continue;
    vistos++;
    if (d.c > 0) capturados++;
  }
  const prog = document.getElementById('dex-progresso');
  if (prog) prog.textContent = `${capturados} capturados · ${vistos} vistos · ${total} espécies`;
  const bar = document.getElementById('dex-bar');
  if (bar) bar.style.width = (capturados / Math.max(1, total) * 100) + '%';

  const campo = document.getElementById('dex-busca');
  const f = (campo ? campo.value : '').trim().toLowerCase();
  const html = ESPECIES.map((e, i) => ({ e, i }))
    .filter(({ e, i }) => {
      const d = dex[i];
      if (!f) return true;
      return e.nome.toLowerCase().includes(f)
        || String(e.id).includes(f)
        || (e.tipo || '').toLowerCase().includes(f)
        || (f.includes('shiny') && d && d.s);
    })
    .map(({ e, i }) => {
      const d = dex[i];
      const num = '#' + String(e.id).padStart(4, '0');
      if (!d) return `<div class="dex-item bloqueado" title="Ainda não visto"><div class="dex-silhueta">❓</div><span class="dex-num">${num}</span><small>???</small></div>`;
      if (!d.c) return `<div class="dex-item visto" title="Visto — ainda não capturado"><img src="${SPR(e.id)}" loading="lazy" alt="${e.nome}"><span class="dex-num">${num}</span><b>${e.nome}</b><small>Visto</small></div>`;
      return `<div class="dex-item capturado ${d.s ? 'shiny-dex' : ''}" title="${e.nome}">
        <img src="${SPR(e.id)}" loading="lazy" alt="${e.nome}">
        <span class="dex-num">${num}</span><b>${e.nome}</b>
        <small>x${d.c}${d.s ? ' ✨' : ''}</small>
      </div>`;
    }).join('');
  document.getElementById('dex-lista').innerHTML = html || '<p style="grid-column:1/-1;color:var(--muted);padding:30px;text-align:center">Nenhum Pokémon encontrado.</p>';
}
const dexBuscaEl = document.getElementById('dex-busca');
if (dexBuscaEl) dexBuscaEl.addEventListener('input', renderDex);

document.getElementById('btn-loja').onclick = () => { renderLoja(); document.getElementById('tela-loja').classList.remove('oculto'); };
document.getElementById('btn-fechar-loja').onclick = () => document.getElementById('tela-loja').classList.add('oculto');
document.getElementById('btn-pokedex').onclick = () => { renderDex(); document.getElementById('tela-pokedex').classList.remove('oculto'); };
document.getElementById('btn-fechar-dex').onclick = () => document.getElementById('tela-pokedex').classList.add('oculto');

document.getElementById('btn-jogar').onclick = () => {
  document.getElementById('tela-menu').classList.add('oculto');
  toast('🌿 Boa aventura! Clique em um Pokémon para capturar.');
};
function entrarNaConta() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();
  const db = usuarios();
  const chave = Object.keys(db).find(k => k.toLowerCase() === u.toLowerCase());
  if (!chave || db[chave].pass !== p) { document.getElementById('login-erro').textContent = 'Usuário ou senha incorretos!'; return; }
  usuario = chave;
  localStorage.setItem('pw_user', chave);
  carregarConta();
  document.getElementById('tela-login').classList.add('oculto');
  document.getElementById('tela-menu').classList.remove('oculto');
  if (groundMat.map) groundMat.map.dispose();
  groundMat.map = makeGroundTex();
  groundMat.needsUpdate = true;
  montarDeco();
  atualizarHud();
  sfx('vitoria');
}
document.getElementById('btn-entrar').onclick = entrarNaConta;

function criarConta() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();
  if (!u || !p) { document.getElementById('login-erro').textContent = 'Preencha usuário e senha!'; return; }
  const db = usuarios();
  if (Object.keys(db).some(k => k.toLowerCase() === u.toLowerCase())) { document.getElementById('login-erro').textContent = 'Usuário já existe!'; return; }
  db[u] = { pass: p, data: {} };
  localStorage.setItem('pw_users', JSON.stringify(db));
  usuario = u;
  localStorage.setItem('pw_user', u);
  document.getElementById('tela-login').classList.add('oculto');
  document.getElementById('tela-menu').classList.remove('oculto');
  document.getElementById('login-erro').textContent = '';
  inventario = []; moedas = 100; pedras = 2; doces = {}; xp = 0; nivel = 1; dex = {};
  bolas = { great: 0, ultra: 0, master: 0 };
  incense = false;
  biomeAtual = 'planicie';
  for (const s of [...selvagens]) removerSelvagem(s);
  if (groundMat.map) groundMat.map.dispose();
  groundMat.map = makeGroundTex();
  groundMat.needsUpdate = true;
  montarDeco();
  for (let i = 0; i < 4; i++) spawnSelvagem();
  salvar();
  atualizarHud();
  sfx('vitoria');
}
document.getElementById('btn-criar').onclick = criarConta;

// Enter para entrar/criar conta
for (const id of ['login-user', 'login-pass']) {
  document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') entrarNaConta();
  });
}

somCtx.mudo = localStorage.getItem('pw_mudo') === '1';
document.getElementById('btn-som').textContent = somCtx.mudo ? '🔇' : '🔊';
document.getElementById('btn-som').onclick = () => {
  somCtx.mudo = !somCtx.mudo;
  localStorage.setItem('pw_mudo', somCtx.mudo ? '1' : '0');
  document.getElementById('btn-som').textContent = somCtx.mudo ? '🔇' : '🔊';
  aplicarSom();
};

document.getElementById('btn-sair').onclick = () => {
  salvar();
  localStorage.removeItem('pw_user');
  location.reload();
};
document.getElementById('btn-reset').onclick = () => {
  if (!usuario) return;
  if (confirm(`Apagar o progresso da conta "${usuario}"?\n\nAs outras contas deste navegador não serão afetadas.`)) {
    const db = usuarios();
    if (db[usuario]) db[usuario].data = {};
    localStorage.setItem('pw_users', JSON.stringify(db));
    location.reload();
  }
};
document.getElementById('btn-viajar').onclick = () => {
  const keys = Object.keys(BIOMES);
  biomeAtual = keys[(keys.indexOf(biomeAtual) + 1) % keys.length];
  for (const s of [...selvagens]) removerSelvagem(s);
  if (groundMat.map) groundMat.map.dispose();
  groundMat.map = makeGroundTex();
  groundMat.needsUpdate = true;
  montarDeco();
  for (const s of selvagens) removerSelvagem(s);
  for (let i = 0; i < 4; i++) spawnSelvagem();
  toast('✈️ Viajou para ' + BIOMES[biomeAtual].nome);
  sfx('evoluir');
  salvar();
};

addEventListener('resize', () => {
  clearTimeout(window._resizeT);
  window._resizeT = setTimeout(ajustarTela, 120);
});
if (window.ResizeObserver) {
  let ultimaLargura = 0;
  new ResizeObserver(() => {
    const w = wrapCena.clientWidth;
    if (w && w !== ultimaLargura) {
      ultimaLargura = w;
      ajustarTela();
    }
  }).observe(wrapCena);
}

// ===== PVP =====
let peer = null, conn = null, souHost = false, pvpTurno = false, pvpAtivo = false;
let pvpEu = null, pvpAdv = null, pvpEuHp = 0, pvpAdvHp = 0;

function abrirPvP() {
  const time = inventario.filter(p => !p.pc);
  if (!time.length) return toast('Você precisa de Pokémon no time!');
  document.getElementById('pvp-escolha').innerHTML = time.map(p => `<option value="${inventario.indexOf(p)}">${nomeExibicao(p)} CP ${p.cp} Nv ${p.nivel}</option>`).join('');
  document.getElementById('tela-pvp').classList.remove('oculto');
  document.getElementById('pvp-setup').classList.remove('oculto');
  document.getElementById('pvp-battle').classList.add('oculto');
  document.getElementById('pvp-status').textContent = '';
}
document.getElementById('btn-pvp').onclick = abrirPvP;
document.getElementById('pvp-fechar').onclick = () => document.getElementById('tela-pvp').classList.add('oculto');
document.getElementById('pvp-sair').onclick = () => {
  if (conn) conn.close(); if (peer) peer.destroy();
  peer = conn = null; pvpAtivo = false;
  document.getElementById('pvp-battle').classList.add('oculto');
  document.getElementById('pvp-setup').classList.remove('oculto');
};

document.getElementById('pvp-criar').onclick = () => {
  const codigo = document.getElementById('pvp-code').value.trim() || 'sala' + Math.floor(Math.random() * 900 + 100);
  document.getElementById('pvp-code').value = codigo;
  const c2 = document.getElementById('pvp-code2');
  if (c2) c2.value = codigo;
  peer = new Peer(codigo);
  souHost = true;
  pvpStatus('Aguardando amigo entrar com o código...');
  peer.on('connection', c => { conn = c; setupConn(); });
  peer.on('error', e => pvpStatus('Erro: ' + e.type));
};

document.getElementById('pvp-entrar').onclick = () => {
  const c2 = document.getElementById('pvp-code2');
  const codigo = ((c2 && c2.value.trim()) || document.getElementById('pvp-code').value.trim());
  if (!codigo) return pvpStatus('Digite o código da sala!');
  peer = new Peer();
  souHost = false;
  peer.on('open', () => { conn = peer.connect(codigo); setupConn(); pvpStatus('Conectando...'); });
  peer.on('error', e => pvpStatus('Erro: ' + e.type));
};

function pvpStatus(m) { document.getElementById('pvp-status').textContent = m; }

function meuPick() {
  const i = parseInt(document.getElementById('pvp-escolha').value);
  return inventario[i];
}

function setupConn() {
  conn.on('open', () => {
    pvpStatus('Conectado! Enviando seu Pokémon...');
    const p = meuPick();
    const e = ESPECIES[p.espec];
    const hpMax = Math.round(40 + p.cp / 4);
    pvpEu = { nome: nomeExibicao(p), cp: p.cp, tipo: e.tipo, url: spriteUrl(p), hpMax };
    pvpEuHp = hpMax;
    conn.send({ t: 'hi', ...pvpEu });
  });
  conn.on('data', msg => {
    if (msg.t === 'hi') {
      pvpAdv = msg; pvpAdvHp = msg.hpMax;
      iniciarBatalha();
    } else if (msg.t === 'atk') {
      pvpEuHp = Math.max(0, pvpEuHp - msg.dano);
      atualizarPvP();
      logPvp(`${pvpAdv.nome} usou ataque! (-${msg.dano})`);
      if (pvpEuHp <= 0) {
        conn.send({ t: 'ko' });
        fimPvP(false);
      } else { pvpTurno = true; }
    } else if (msg.t === 'ko') {
      fimPvP(true);
    }
  });
  conn.on('close', () => { logPvp('Oponente desconectou.'); pvpAtivo = false; });
}

function iniciarBatalha() {
  pvpAtivo = true;
  pvpTurno = souHost;
  document.getElementById('pvp-setup').classList.add('oculto');
  document.getElementById('pvp-battle').classList.remove('oculto');
  document.getElementById('pvp-eu-img').src = pvpEu.url;
  document.getElementById('pvp-eu-nome').textContent = pvpEu.nome + ' CP ' + pvpEu.cp;
  document.getElementById('pvp-adv-img').src = pvpAdv.url;
  document.getElementById('pvp-adv-nome').textContent = pvpAdv.nome + ' CP ' + pvpAdv.cp;
  const e = ESPECIES[meuPick().espec];
  document.getElementById('pvp-moves').innerHTML =
    `<button onclick="pvpAtacar(0)">💥 ${e.tipo} Rápido</button>
     <button onclick="pvpAtacar(1)">🤜 Investida</button>
     <button onclick="pvpAtacar(2)">⚡ Carga Rápida</button>`;
  atualizarPvP();
  logPvp(pvpTurno ? 'Sua vez de atacar!' : 'Vez do oponente...');
}

function atualizarPvP() {
  document.getElementById('pvp-eu-hp').style.width = (pvpEuHp / pvpEu.hpMax * 100) + '%';
  document.getElementById('pvp-adv-hp').style.width = (pvpAdvHp / pvpAdv.hpMax * 100) + '%';
}

function logPvp(m) { document.getElementById('pvp-log').textContent = m; }

window.pvpAtacar = function (i) {
  if (!pvpAtivo || !pvpTurno) return toast('Não é sua vez!');
  const e = ESPECIES[meuPick().espec];
  const meuTipo = i === 0 ? e.tipo : 'Normal';
  const dmg = Math.round((6 + pvpEu.cp / 30) * eff(meuTipo, pvpAdv.tipo || 'Normal') * (0.85 + Math.random() * 0.3));
  pvpAdvHp = Math.max(0, pvpAdvHp - dmg);
  conn.send({ t: 'atk', dano: dmg });
  atualizarPvP();
  logPvp(`Você atacou! (-${dmg})`);
  pvpTurno = false;
  if (pvpAdvHp <= 0) {
    conn.send({ t: 'ko' });
    fimPvP(true);
  }
};

function fimPvP(venceu) {
  pvpAtivo = false;
  if (venceu) {
    toast('🏆 Vitória no PvP! +50 XP e +50🪙');
    moedas += 50; ganharXp(50);
    logPvp('🏆 Você venceu!');
  } else {
    logPvp('💔 Você perdeu...');
    toast('Você perdeu a batalha PvP!');
  }
  salvar();
  pvpTurno = false;
}

// ===== TROCA =====
let tPeer = null, tConn = null, tOfertaMinha = null, tOfertaDele = null, tOfertaRef = null;
let tAceitei = false, tAceitou = false, tConcluida = false;

document.getElementById('btn-troca').onclick = () => {
  const disp = inventario.filter(p => !p.pc);
  if (!disp.length) return toast('Você precisa de Pokémon no time!');
  document.getElementById('troca-escolha').innerHTML = disp.map(p => `<option value="${inventario.indexOf(p)}">${nomeExibicao(p)} CP ${p.cp} Nv ${p.nivel}</option>`).join('');
  document.getElementById('troca-escolha').disabled = false;
  document.getElementById('tela-troca').classList.remove('oculto');
  document.getElementById('troca-status').textContent = '';
  document.getElementById('troca-oferta').textContent = '';
  document.getElementById('troca-aceitar').classList.add('oculto');
  tOfertaMinha = tOfertaDele = tOfertaRef = null;
  tAceitei = tAceitou = tConcluida = false;
};
document.getElementById('troca-fechar').onclick = () => {
  if (tConn) tConn.close();
  if (tPeer) tPeer.destroy();
  tPeer = tConn = null;
  document.getElementById('tela-troca').classList.add('oculto');
};
document.getElementById('troca-criar').onclick = () => {
  const codigo = document.getElementById('troca-code').value.trim() || 'troca' + Math.floor(Math.random() * 900 + 100);
  document.getElementById('troca-code').value = codigo;
  const c2 = document.getElementById('troca-code2');
  if (c2) c2.value = codigo;
  tPeer = new Peer(codigo);
  tStatus('Aguardando...');
  tPeer.on('connection', c => { tConn = c; tSetup(); });
  tPeer.on('error', e => tStatus('Erro: ' + e.type));
};
document.getElementById('troca-entrar').onclick = () => {
  const c2 = document.getElementById('troca-code2');
  const codigo = ((c2 && c2.value.trim()) || document.getElementById('troca-code').value.trim());
  if (!codigo) return tStatus('Digite o código!');
  tPeer = new Peer();
  tPeer.on('open', () => { tConn = tPeer.connect(codigo); tSetup(); tStatus('Conectando...'); });
  tPeer.on('error', e => tStatus('Erro: ' + e.type));
};
function tStatus(m) { document.getElementById('troca-status').textContent = m; }
function tMinhaOferta() {
  const i = parseInt(document.getElementById('troca-escolha').value);
  return inventario[i];
}
function enviarOfertaTroca() {
  const p = tMinhaOferta();
  if (!p || !tConn || !tConn.open) return;
  tOfertaRef = p;
  tOfertaMinha = {
    espec: p.espec, pokeId: p.pokeId || ESPECIES[p.espec].id,
    cp: p.cp, nivel: p.nivel, shiny: p.shiny, mega: p.mega,
  };
  tAceitei = false;
  tAceitou = false;
  document.getElementById('troca-aceitar').classList.add('oculto');
  tConn.send({ t: 'oferta', mon: tOfertaMinha });
  tStatus('Você ofereceu ' + nomeExibicao(p) + '. Aguardando o amigo...');
}
function tSetup() {
  tConn.on('open', () => {
    tStatus('Conectado! Escolha o Pokémon para trocar.');
    enviarOfertaTroca();
  });
  tConn.on('data', msg => {
    if (msg.t === 'oferta') {
      const mon = { ...msg.mon };
      if (mon.pokeId) {
        const idx = ESPECIES.findIndex(e => e.id === mon.pokeId);
        if (idx >= 0) mon.espec = idx;
      }
      tOfertaDele = mon;
      tAceitei = false;
      tAceitou = false;
      tConcluida = false;
      const e = ESPECIES[mon.espec];
      document.getElementById('troca-oferta').innerHTML = `Oferta do amigo: <b>${mon.shiny ? '✨ ' : ''}${e ? e.nome : '???'}</b> · CP ${mon.cp} · Nv ${mon.nivel}`;
      const btn = document.getElementById('troca-aceitar');
      btn.classList.remove('oculto');
      btn.disabled = false;
      document.getElementById('troca-escolha').disabled = false;
    } else if (msg.t === 'aceitou') {
      tAceitou = true;
      tStatus('O amigo aceitou!');
      if (tAceitei) tConcluir();
    }
  });
  tConn.on('close', () => tStatus('O oponente desconectou.'));
}
document.getElementById('troca-escolha').addEventListener('change', enviarOfertaTroca);
document.getElementById('troca-aceitar').onclick = () => {
  if (!tOfertaDele) return;
  if (!tOfertaMinha) return tStatus('Escolha o seu Pokémon primeiro!');
  tAceitei = true;
  document.getElementById('troca-aceitar').classList.add('oculto');
  document.getElementById('troca-escolha').disabled = true;
  tConn.send({ t: 'aceitou' });
  tStatus('Você aceitou! Aguardando o amigo...');
  if (tAceitou) tConcluir();
};
function tConcluir() {
  if (tConcluida || !tOfertaDele || !tOfertaRef) return;
  const meuIdx = inventario.indexOf(tOfertaRef);
  if (meuIdx < 0) return tStatus('Erro: seu Pokémon sumiu!');
  const recebido = { ...tOfertaDele, pc: false };
  if (recebido.pokeId) {
    const idx = ESPECIES.findIndex(e => e.id === recebido.pokeId);
    if (idx >= 0) recebido.espec = idx;
  }
  if (!ESPECIES[recebido.espec]) return tStatus('Erro: Pokémon recebido inválido.');
  tConcluida = true;
  inventario.splice(meuIdx, 1);
  inventario.push(recebido);
  toast(`🔁 Troca feita! Você recebeu ${ESPECIES[recebido.espec].nome}!`);
  tStatus('Troca concluída!');
  salvar(); renderListas();
  setTimeout(() => {
    if (tConn) tConn.close();
    if (tPeer) tPeer.destroy();
    tPeer = tConn = null;
    document.getElementById('tela-troca').classList.add('oculto');
  }, 1800);
}

for (let i = 0; i < 4; i++) spawnSelvagem();
loop();

// Só carrega a conta DEPOIS que todas as espécies chegaram.
// Isso evita que Pokémon salvos sejam apagados por um índice ainda inexistente.
especiesProntas.then(() => {
  if (usuario && usuarios()[usuario]) {
    carregarConta();
    document.getElementById('tela-login').classList.add('oculto');
    document.getElementById('tela-menu').classList.remove('oculto');
    if (groundMat.map) groundMat.map.dispose();
    groundMat.map = makeGroundTex();
    groundMat.needsUpdate = true;
    montarDeco();
  } else {
    usuario = null;
    localStorage.removeItem('pw_user');
  }
  atualizarHud();
  const loading = document.getElementById('loading');
  if (loading) {
    document.getElementById('loading-text').textContent = ESPECIES.length + ' Pokémon carregados!';
    setTimeout(() => loading.classList.add('oculto'), 500);
  }
});

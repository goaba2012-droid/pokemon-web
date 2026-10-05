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

// Carrega TODOS os Pokémon Gen 1 da PokéAPI
async function carregarTodos() {
  try {
    const r = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
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
      const base = e.nome.toLowerCase().replace(/[^a-z]/g, '-');
      const megaEntry = j.results.find(p => p.name === base + '-mega' || p.name === base + '-mega-x' || p.name === base + '-mega-y');
      if (megaEntry) {
        const mid = parseInt(megaEntry.url.split('/').filter(Boolean).pop());
        const sufixo = megaEntry.name.replace(base + '-mega', '').replace(/-/g, ' ').trim();
        e.mega = { id: mid, nome: 'Mega ' + e.nome + (sufixo ? ' ' + sufixo.toUpperCase() : '') };
      }
    }
  } catch (e) { /* offline: usa a lista local */ }
}
carregarTodos();

const FORTE = {
  'Fogo': ['Planta', 'Inseto'], 'Água': ['Fogo', 'Pedra'], 'Planta': ['Água', 'Pedra'],
  'Elétrico': ['Água', 'Voador'], 'Gelo': ['Planta', 'Dragão', 'Voador'], 'Luta': ['Normal', 'Pedra'],
  'Veneno': ['Planta', 'Fada'], 'Terra': ['Fogo', 'Elétrico', 'Pedra', 'Veneno'], 'Voador': ['Planta', 'Luta'],
  'Psíquico': ['Luta', 'Veneno'], 'Fantasma': ['Fantasma', 'Psíquico'], 'Dragão': ['Dragão'],
  'Fada': ['Luta', 'Dragão'], 'Pedra': ['Fogo', 'Gelo', 'Voador', 'Inseto'], 'Normal': [],
};
const eff = (atk, def) => (FORTE[atk] || []).includes(def) ? 1.6 : 1.0;

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
  inventario = (d.inv || []).filter(p => p && typeof p.espec === 'number' && ESPECIES[p.espec]);
  for (const p of inventario) p.pc = !!p.pc;
  moedas = d.moedas ?? 100; pedras = d.pedras ?? 2; doces = d.doces || {};
  xp = d.xp || 0; nivel = d.nivel || 1; biomeAtual = d.biome || 'planicie';
  bolas = d.bolas || { great: 0, ultra: 0, master: 0 }; dex = d.dex || {};
  incense = !!d.incense;
}
if (usuario && usuarios()[usuario]) carregarConta();
else usuario = null;
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
  document.getElementById('hud-moedas').textContent = '🪙 ' + moedas;
  document.getElementById('hud-capturados').textContent = '📦 ' + inventario.filter(p => !p.pc).length;
  document.getElementById('hud-nivel').textContent = '⭐ Nv ' + nivel;
  document.getElementById('hud-pedras').textContent = '💎 ' + pedras;
  document.getElementById('xp-bar').style.width = Math.min(100, (xp / xpProximo()) * 100) + '%';
  document.getElementById('biome-nome').textContent = BIOMES[biomeAtual].nome;
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.opacity = 1;
  clearTimeout(t._h); t._h = setTimeout(() => t.style.opacity = 0, 2500);
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
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 60, 160);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(Math.min(1500, window.innerWidth - 24), Math.min(850, window.innerHeight * 0.75));
const camera = new THREE.PerspectiveCamera(60, renderer.domElement.width / renderer.domElement.height, 0.1, 500);
document.getElementById('cena').appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(30, 60, 20);
scene.add(sun);

const ART = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
const ART_SHINY = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`;

function artUrl(s) {
  const e = ESPECIES[s.espec];
  if (s.mega && e.mega) return s.shiny ? ART_SHINY(e.mega.id) : ART(e.mega.id);
  return s.shiny ? ART_SHINY(e.id) : ART(e.id);
}

const groundMat = new THREE.MeshLambertMaterial({ map: makeGroundTex() });
function makeGroundTex() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const base = '#' + BIOMES[biomeAtual].cor.toString(16).padStart(6, '0');
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 220; i++) {
    g.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
    g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, 2 + Math.random() * 6, 0, Math.PI * 2); g.fill();
  }
  if (biomeAtual === 'planicie') {
    for (let i = 0; i < 25; i++) { g.fillStyle = Math.random() < 0.5 ? '#f48fb1' : '#fff176'; g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, 2.5, 0, Math.PI * 2); g.fill(); }
  } else if (biomeAtual === 'caverna') {
    for (let i = 0; i < 15; i++) { g.fillStyle = 'rgba(180,220,255,0.5)'; g.fillRect(Math.random() * 256, Math.random() * 256, 4, 4); }
  } else if (biomeAtual === 'praia') {
    g.fillStyle = 'rgba(33,150,243,0.25)'; g.fillRect(0, 226, 256, 30);
    for (let i = 0; i < 10; i++) { g.fillStyle = '#fff'; g.beginPath(); g.arc(Math.random() * 256, 226 + Math.random() * 30, 2, 0, Math.PI * 2); g.fill(); }
  } else if (biomeAtual === 'cidade') {
    g.strokeStyle = 'rgba(60,60,60,0.5)'; g.lineWidth = 10;
    g.beginPath(); g.moveTo(128, 0); g.lineTo(128, 256); g.stroke();
    g.beginPath(); g.moveTo(0, 128); g.lineTo(256, 128); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(14, 14);
  return t;
}
const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), groundMat);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const decoGrupo = new THREE.Group();
scene.add(decoGrupo);
const somCtx = { ctx: null, mudo: false };
function audio() {
  if (!somCtx.ctx) somCtx.ctx = new (window.AudioContext || window.webkitAudioContext)();
  return somCtx.ctx;
}
function tom(freq, dur, tipo = 'square', vol = 0.08, delay = 0) {
  if (somCtx.mudo) return;
  try {
    const a = audio();
    const o = a.createOscillator(); const g = a.createGain();
    o.type = tipo; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, a.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + delay + dur);
    o.connect(g); g.connect(a.destination);
    o.start(a.currentTime + delay); o.stop(a.currentTime + delay + dur);
  } catch (e) {}
}
const CRIE = id => `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
function cry(s) {
  if (somCtx.mudo || !s) return;
  const e = ESPECIES[s.espec];
  if (!e) return;
  const id = (s.mega && e.mega) ? e.mega.id : e.id;
  try { const a = new Audio(CRIE(id)); a.volume = 0.5; a.play(); } catch (e) {}
}
function sfx(nome) {
  switch (nome) {
    case 'click': tom(600, 0.06, 'square', 0.05); break;
    case 'bola': tom(300, 0.15, 'sine', 0.1); tom(500, 0.2, 'sine', 0.08, 0.12); break;
    case 'hit': tom(160, 0.12, 'sawtooth', 0.12); break;
    case 'vitoria': tom(523, 0.12); tom(659, 0.12, 'square', 0.08, 0.12); tom(784, 0.25, 'square', 0.08, 0.24); break;
    case 'falha': tom(220, 0.2, 'sawtooth', 0.08); tom(160, 0.3, 'sawtooth', 0.08, 0.15); break;
    case 'coin': tom(880, 0.08, 'sine', 0.1); tom(1320, 0.15, 'sine', 0.08, 0.08); break;
    case 'evoluir': tom(400, 0.15, 'sine', 0.1); tom(600, 0.15, 'sine', 0.1, 0.12); tom(900, 0.3, 'sine', 0.1, 0.24); break;
    case 'shiny': tom(1200, 0.1, 'sine', 0.08); tom(1600, 0.2, 'sine', 0.08, 0.1); break;
    case 'level': tom(500, 0.1); tom(700, 0.1, 'square', 0.08, 0.1); tom(1000, 0.2, 'square', 0.08, 0.2); break;
  }
}
document.addEventListener('click', e => { if (e.target.tagName === 'BUTTON') sfx('click'); });

const pokeStops = [];

function montarDeco() {
  while (decoGrupo.children.length) decoGrupo.remove(decoGrupo.children[0]);
  pokeStops.length = 0;
  const matArvore = new THREE.MeshLambertMaterial({ color: BIOMES[biomeAtual].arvores });
  for (let i = 0; i < 50; i++) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(1.5 + Math.random() * 1.5, 4 + Math.random() * 4, 6), matArvore);
    t.position.set((Math.random() - 0.5) * 280, 2, (Math.random() - 0.5) * 280);
    if (Math.abs(t.position.x) < 5 && Math.abs(t.position.z) < 5) t.position.x += 15;
    decoGrupo.add(t);
  }
  const matArbusto = new THREE.MeshLambertMaterial({ color: BIOMES[biomeAtual].arvores });
  for (let i = 0; i < 40; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.8 + Math.random(), 8, 8), matArbusto);
    b.position.set((Math.random() - 0.5) * 280, 0.7, (Math.random() - 0.5) * 280);
    decoGrupo.add(b);
  }
  for (let i = 0; i < 6; i++) {
    const g = new THREE.Group();
    const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2, 8), new THREE.MeshLambertMaterial({ color: 0xeeeeee }));
    poste.position.y = 1.1;
    const anel = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.22, 10, 20), new THREE.MeshLambertMaterial({ color: 0x2196f3 }));
    anel.position.y = 2.6;
    const esfera = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), new THREE.MeshLambertMaterial({ color: 0x64b5f6, emissive: 0x2196f3, emissiveIntensity: 0.5 }));
    esfera.position.y = 2.6;
    g.add(poste, anel, esfera);
    g.position.set((Math.random() - 0.5) * 200, 0, (Math.random() - 0.5) * 200);
    decoGrupo.add(g);
    pokeStops.push({ g, anel, esfera, prontoAt: 0 });
  }
}
montarDeco();

const playerMesh = new THREE.Group();
const mat = c => new THREE.MeshLambertMaterial({ color: c });
const pernaE = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1, 10), mat(0x3d3d5c)); pernaE.position.set(-0.35, 0.5, 0);
const pernaD = pernaE.clone(); pernaD.position.x = 0.35;
const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 1.3, 12), mat(0x1565c0)); torso.position.y = 1.7;
const mochila = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1, 0.4), mat(0xffcb05)); mochila.position.set(0, 1.8, -0.75);
const cabeca = new THREE.Mesh(new THREE.SphereGeometry(0.6, 14, 14), mat(0xffd9b3)); cabeca.position.y = 2.9;
const bone = new THREE.Mesh(new THREE.SphereGeometry(0.65, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xe53935)); bone.position.y = 3.05;
const aba = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.6), mat(0xe53935)); aba.position.set(0, 3.0, 0.7);
playerMesh.add(pernaE, pernaD, torso, mochila, cabeca, bone, aba);
scene.add(playerMesh);

function spawnSelvagem() {
  const idx = especieAleatoria();
  const e = ESPECIES[idx];
  const shiny = Math.random() < Math.min(0.08, 0.015 + nivel * 0.001);
  const cp = Math.round(10 + Math.random() * 15 * nivel * (e.lendario ? 2.5 : 1));
  const ang = Math.random() * Math.PI * 2;
  const dist = 10 + Math.random() * 25;
  const s = {
    espec: idx, cp, shiny, mega: false,
    x: Math.max(-140, Math.min(140, player.x + Math.cos(ang) * dist)),
    y: Math.max(-140, Math.min(140, player.y + Math.sin(ang) * dist)),
    hp: e.hp, hpMax: e.hp, bob: Math.random() * 6,
  };
  const mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(artUrl(s)), transparent: true, alphaTest: 0.1, side: THREE.DoubleSide });
  const g = new THREE.Group();
  const p1 = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), mat);
  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), mat);
  p2.rotation.y = Math.PI / 2;
  const sombra = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 }));
  sombra.rotation.x = -Math.PI / 2;
  sombra.position.y = -2.4;
  p1.position.y = 0.2; p2.position.y = 0.2;
  g.add(p1, p2, sombra);
  g.position.set(s.x, 2.5, s.y);
  g.userData.s = s;
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
addEventListener('keydown', e => teclas[e.key.toLowerCase()] = true);
addEventListener('keyup', e => teclas[e.key.toLowerCase()] = false);

let mouseDown = null;
const ray = new THREE.Raycaster();
renderer.domElement.addEventListener('mousedown', e => { mouseDown = { x: e.clientX, y: e.clientY }; });
renderer.domElement.addEventListener('mousemove', e => {
  if (!mouseDown) return;
  const dx = e.clientX - mouseDown.px;
  if (mouseDown.px !== undefined) camAngulo -= (e.movementX || 0) * 0.006;
  mouseDown.px = e.clientX; mouseDown.py = e.clientY;
});
renderer.domElement.addEventListener('mouseup', e => {
  const d = mouseDown ? Math.hypot(e.clientX - mouseDown.x, e.clientY - mouseDown.y) : 999;
  mouseDown = null;
  if (d > 10) return;
  const r = renderer.domElement.getBoundingClientRect();
  const px = e.clientX - r.left, py = e.clientY - r.top;
  const v = new THREE.Vector3();
  for (const s of selvagens) {
    v.set(s.x, 2.5, s.y).project(camera);
    const sx = (v.x + 1) / 2 * r.width;
    const sy = (-v.y + 1) / 2 * r.height;
    if (v.z < 1 && Math.hypot(sx - px, sy - py) < 45) { abrirCaptura(s); return; }
  }
  const plano = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const ponto = new THREE.Vector3();
  ray.setFromCamera(new THREE.Vector2(((px / r.width) * 2) - 1, -((py / r.height) * 2) + 1), camera);
  if (ray.ray.intersectPlane(plano, ponto)) player.alvo = { x: ponto.x, y: ponto.z };
});

function update() {
  const v = 0.22;
  let mvx = 0, mvy = 0;
  if (teclas['arrowup'] || teclas['w']) { player.x += -Math.sin(camAngulo) * v; player.y += -Math.cos(camAngulo) * v; player.alvo = null; mvx = -Math.sin(camAngulo); mvy = -Math.cos(camAngulo); }
  if (teclas['arrowdown'] || teclas['s']) { player.x += Math.sin(camAngulo) * v; player.y += Math.cos(camAngulo) * v; player.alvo = null; mvx = Math.sin(camAngulo); mvy = Math.cos(camAngulo); }
  if (teclas['arrowleft'] || teclas['a']) { player.x += -Math.cos(camAngulo) * v; player.y += Math.sin(camAngulo) * v; player.alvo = null; mvx = -Math.cos(camAngulo); mvy = Math.sin(camAngulo); }
  if (teclas['arrowright'] || teclas['d']) { player.x += Math.cos(camAngulo) * v; player.y += -Math.sin(camAngulo) * v; player.alvo = null; mvx = Math.cos(camAngulo); mvy = -Math.sin(camAngulo); }
  if (player.alvo && !teclas['arrowup'] && !teclas['arrowdown'] && !teclas['arrowleft'] && !teclas['arrowright'] && !teclas['w'] && !teclas['a'] && !teclas['s'] && !teclas['d']) {
    const ddx = player.alvo.x - player.x, ddy = player.alvo.y - player.y, d = Math.hypot(ddx, ddy);
    if (d > 0.4) { player.x += ddx / d * v; player.y += ddy / d * v; mvx = ddx / d; mvy = ddy / d; } else player.alvo = null;
  }
  if (mvx || mvy) {
    const alvo = Math.atan2(mvx, mvy);
    let diff = alvo - playerMesh.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    playerMesh.rotation.y += diff * 0.2;
  }
  player.x = Math.max(-145, Math.min(145, player.x));
  player.y = Math.max(-145, Math.min(145, player.y));
  playerMesh.position.set(player.x, 0, player.y);
  for (const s of selvagens) { s.bob += 0.08; s.grupo.position.set(s.x, 2.5 + Math.sin(s.bob) * 0.4, s.y); }
  const R = 20;
  camera.position.lerp(new THREE.Vector3(player.x + Math.sin(camAngulo) * R, 18, player.y + Math.cos(camAngulo) * R), 0.15);
  camera.lookAt(player.x, 1.5, player.y);

  const agora = Date.now();
  for (const s of pokeStops) {
    s.anel.rotation.y += 0.03;
    s.esfera.position.y = 2.6 + Math.sin(agora / 500) * 0.3;
    const pronto = agora >= s.prontoAt;
    s.anel.material.color.setHex(pronto ? 0x2196f3 : 0x9e9e9e);
    if (pronto && Math.hypot(s.g.position.x - player.x, s.g.position.z - player.y) < 4) {
      const r = Math.random();
      if (r < 0.4) { bolas.great += 2; toast('📍 PokéStop: +2 🔵 Great Balls!'); }
      else if (r < 0.6) { bolas.ultra += 1; toast('📍 PokéStop: +1 🟡 Ultra Ball!'); }
      else if (r < 0.75) { pedras += 1; toast('📍 PokéStop: +1 💎 Mega Pedra!'); }
      else { moedas += 30; toast('📍 PokéStop: +30 🪙!'); }
      sfx('coin');
      s.prontoAt = agora + 45000;
      s.g.scale.set(1.4, 1.4, 1.4);
      setTimeout(() => s.g.scale.set(1, 1, 1), 300);
      salvar();
    }
  }
}

function loop() {
  update();
  renderer.render(scene, camera);
  if (capturaAtual) {
    anelT += anelDir * 0.014;
    if (anelT <= 0) { anelT = 0; anelDir = 1; }
    if (anelT >= 1) { anelT = 1; anelDir = -1; }
    const ring = document.getElementById('ring');
    if (ring) ring.style.transform = `scale(${0.6 + anelT * 0.55})`;
  }
  requestAnimationFrame(loop);
}

// ===== CAPTURA =====
function abrirCaptura(s) {
  capturaAtual = s;
  document.getElementById('captura-nome').textContent = nomeExibicao(s) + ' (' + ESPECIES[s.espec].tipo + ')';
  document.getElementById('captura-cp').textContent = 'CP ' + s.cp;
  document.getElementById('captura-img').src = spriteUrl(s);
  document.getElementById('captura-img').className = s.shiny ? 'shiny' : '';
  document.getElementById('captura-msg').textContent = '';
  atualizarBarraHp();
  renderBolas();
  const dif = s.cp / (15 * nivel + 10);
  document.getElementById('ring').style.borderColor = dif < 0.4 ? '#4caf50' : dif < 0.8 ? '#ff9800' : '#f44336';
  document.getElementById('tela-captura').classList.remove('oculto');
  anelT = 1;
}

function renderBolas() {
  const sel = document.getElementById('bola-select');
  sel.innerHTML = `<option value="poke">🔴 Pokébola (∞)</option>
    <option value="great" ${bolas.great < 1 ? 'disabled' : ''}>🔵 Great Ball ×${bolas.great}</option>
    <option value="ultra" ${bolas.ultra < 1 ? 'disabled' : ''}>🟡 Ultra Ball ×${bolas.ultra}</option>
    <option value="master" ${bolas.master < 1 ? 'disabled' : ''}>🟣 Master Ball ×${bolas.master}</option>`;
}
const MULT_BOLA = { poke: 1, great: 1.5, ultra: 2, master: 99 };

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
    bolaEl.style.left = (sx - 27) + 'px';
    bolaEl.style.top = (sy - 27) + 'px';
    bolaEl.style.transform = 'scale(0.35)';
    document.getElementById('captura-img').classList.add('capturando');
    setTimeout(() => {
      resolverLancamento();
      resetBola();
      bolaEl.style.transform = '';
      document.getElementById('captura-img').classList.remove('capturando');
      const spot = document.getElementById('pokemon-spot');
      spot.classList.add('tremendo');
      setTimeout(() => spot.classList.remove('tremendo'), 900);
    }, 500);
  } else resetBola();
});
function resetBola() { bolaEl.style.left = ''; bolaEl.style.top = ''; bolaEl.style.bottom = ''; }

function resolverLancamento() {
  if (!capturaAtual) return;
  const bola = document.getElementById('bola-select').value;
  if (bola !== 'poke') {
    if (bolas[bola] < 1) { toast('Sem essa bola!'); return; }
    bolas[bola]--;
  }
  sfx('bola');
  let chance = capturaComChance(0.3 + (1 - anelT) * 0.4) * MULT_BOLA[bola];
  if (bola === 'master') chance = 1;
  if (Math.random() < chance) { concluirCaptura(); salvar(); return; }
  sfx('falha');
  toast('A bola quebrou!');
  document.getElementById('captura-msg').textContent = '💨 Escapou! Enfraqueça mais ou use bola melhor.';
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
  const p = Math.max(0, capturaAtual.hp / capturaAtual.hpMax);
  const bar = document.getElementById('captura-hp-bar');
  bar.style.width = (p * 100) + '%';
  bar.style.background = p > 0.5 ? '#4caf50' : p > 0.25 ? '#ff9800' : '#f44336';
}

function capturaComChance(chanceBase) {
  const hpFrac = capturaAtual.hp / capturaAtual.hpMax;
  const cpPenalty = Math.min(0.35, capturaAtual.cp / 900);
  let chance = chanceBase + (1 - hpFrac) * 0.45 - cpPenalty;
  if (capturaAtual.shiny) chance -= 0.15;
  return Math.max(0.05, Math.min(0.95, chance));
}

function concluirCaptura() {
  sfx('vitoria');
  toast('🎉 Capturado! ' + nomeExibicao(capturaAtual));
  inventario.push({ espec: capturaAtual.espec, cp: capturaAtual.cp, nivel: Math.max(1, Math.round(capturaAtual.cp / 15)), shiny: capturaAtual.shiny, mega: false, pc: false });
  moedas += 25;
  const raiz = raizDe(capturaAtual.espec);
  doces[raiz] = (doces[raiz] || 0) + 3;
  if (Math.random() < 0.08) { pedras++; toast('💎 Achou uma Mega Pedra!'); }
  const d = dex[capturaAtual.espec] = dex[capturaAtual.espec] || { c: 0, s: false };
  d.c++; if (capturaAtual.shiny) d.s = true;
  ganharXp(15 + Math.round(capturaAtual.cp / 20));
  removerSelvagem(capturaAtual);
  capturaAtual = null;
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
  cry(s);
};

function novoHpVoce() {
  const i = parseInt(document.getElementById('b-select').value);
  const p = inventario[i];
  bVoce = { ref: p, hpMax: Math.round(40 + p.cp / 4), hp: Math.round(40 + p.cp / 4) };
  document.getElementById('b-voce-img').src = spriteUrl(p);
  document.getElementById('b-voce-hp').style.width = '100%';
  montarMoves();
  cry(p);
}
function novaBatalhaJogador() { novoHpVoce(); }
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
      cry(capturaAtual);
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
        cry(bVoce.ref);
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
  const botoes = p.pc
    ? `<button onclick="trazerPC(${i})">🎮 Trazer</button>
       <button onclick="virarDoce(${i})">🍬+3</button>`
    : `<button onclick="moverPC(${i})">🖥️ PC</button>
       <button onclick="virarDoce(${i})">🍬+3</button>`;
  return `<div class="card ${p.shiny ? 'shiny' : ''}">
    <img src="${spriteUrl(p)}" alt="${e.nome}">
    <div class="card-info">
      <b>${nomeExibicao(p)}</b>
      <span class="tipo">${e.tipo}</span>
      <small>CP ${p.cp} · Nv ${p.nivel}</small>
      <small>🍬 ${doces[raiz] || 0} doces</small>
    </div>
    <div class="card-btns">
      ${podeEvo ? `<button onclick="evoluir(${i})">⬆️ ${e.candy}🍬</button>` : ''}
      ${podeMega ? `<button onclick="megaEvoluir(${i})">💎</button>` : ''}
      <button onclick="powerUp(${i})">🔼 Nv+</button>
      ${botoes}
    </div>
  </div>`;
}

function renderListas() {
  const filtro = document.getElementById('busca').value.trim().toLowerCase();
  const bate = p => {
    const e = ESPECIES[p.espec];
    return nomeExibicao(p).toLowerCase().includes(filtro)
      || e.nome.toLowerCase().includes(filtro)
      || (e.tipo || '').toLowerCase().includes(filtro)
      || String(e.id).includes(filtro);
  };
  const time = inventario.filter(p => !p.pc && bate(p));
  const pc = inventario.filter(p => p.pc && bate(p));
  document.getElementById('lista-time').innerHTML = time.length ? time.map(cartaHtml).join('') : '<p>Nenhum Pokémon no time.</p>';
  document.getElementById('lista-pc').innerHTML = pc.length ? pc.map(cartaHtml).join('') : '<p>PC vazio.</p>';
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
  const level = Math.max(1, parseInt(document.getElementById('admin-level').value) || 1);
  const shiny = document.getElementById('admin-shiny').checked;
  inventario.push({ espec: idx, cp: 10 + level * 7 + Math.floor(Math.random() * 12), nivel: level, shiny, mega: false, pc: false });
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
];
function renderLoja() {
  document.getElementById('loja-lista').innerHTML = LOJA.map(i => `
    <div class="loja-item">
      <b>${i.nome}</b> <small>${i.desc}</small>
      <span>Possui: ${bolas[i.key]} · 🪙 ${i.preco}</span>
      <button onclick="comprar('${i.key}')">Comprar</button>
    </div>`).join('');
}
function comprar(key) {
  const item = LOJA.find(i => i.key === key);
  if (moedas < item.preco) return toast('🪙 Moedas insuficientes!');
  moedas -= item.preco;
  bolas[key]++;
  toast(`Comprou ${item.nome}!`);
  salvar(); renderLoja();
}

// ===== POKÉDEX =====
function renderDex() {
  document.getElementById('dex-lista').innerHTML = ESPECIES.map((e, i) => {
    const d = dex[i];
    if (!d) return `<div class="dex-item bloqueado"><img src="${SPR(e.id)}" style="filter:brightness(0)"><small>???</small></div>`;
    return `<div class="dex-item"><img src="${SPR(e.id)}"><b>${e.nome}</b><small>x${d.c}${d.s ? ' ✨' : ''}</small></div>`;
  }).join('');
}

document.getElementById('btn-loja').onclick = () => { renderLoja(); document.getElementById('tela-loja').classList.remove('oculto'); };
document.getElementById('btn-fechar-loja').onclick = () => document.getElementById('tela-loja').classList.add('oculto');
document.getElementById('btn-pokedex').onclick = () => { renderDex(); document.getElementById('tela-pokedex').classList.remove('oculto'); };
document.getElementById('btn-fechar-dex').onclick = () => document.getElementById('tela-pokedex').classList.add('oculto');

document.getElementById('btn-jogar').onclick = () => document.getElementById('tela-menu').classList.add('oculto');
document.getElementById('btn-entrar').onclick = () => {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();
  const db = usuarios();
  const chave = Object.keys(db).find(k => k.toLowerCase() === u.toLowerCase());
  if (!chave || db[chave].pass !== p) { document.getElementById('login-erro').textContent = 'Usuário ou senha incorretos!'; return; }
  usuario = chave; localStorage.setItem('pw_user', chave); carregarConta();
  document.getElementById('tela-login').classList.add('oculto');
  document.getElementById('tela-menu').classList.remove('oculto');
  groundMat.map = makeGroundTex(); groundMat.needsUpdate = true; montarDeco();
  atualizarHud();
};
document.getElementById('btn-criar').onclick = () => {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();
  if (!u || !p) { document.getElementById('login-erro').textContent = 'Preencha usuário e senha!'; return; }
  const db = usuarios();
  if (Object.keys(db).some(k => k.toLowerCase() === u.toLowerCase())) { document.getElementById('login-erro').textContent = 'Usuário já existe!'; return; }
  db[u] = { pass: p, data: {} };
  localStorage.setItem('pw_users', JSON.stringify(db));
  usuario = u; localStorage.setItem('pw_user', u);
  document.getElementById('tela-login').classList.add('oculto');
  document.getElementById('tela-menu').classList.remove('oculto');
  atualizarHud();
};
document.getElementById('btn-som').onclick = () => {
  somCtx.mudo = !somCtx.mudo;
  document.getElementById('btn-som').textContent = somCtx.mudo ? '🔇' : '🔊';
};

document.getElementById('btn-sair').onclick = () => {
  localStorage.removeItem('pw_user');
  location.reload();
};
document.getElementById('btn-reset').onclick = () => { if (confirm('Apagar todo o progresso?')) { localStorage.removeItem('pw_users'); localStorage.removeItem('pw_user'); location.reload(); } };
document.getElementById('btn-viajar').onclick = () => {
  const keys = Object.keys(BIOMES);
  biomeAtual = keys[(keys.indexOf(biomeAtual) + 1) % keys.length];
  for (const s of [...selvagens]) removerSelvagem(s);
  groundMat.map = makeGroundTex(); groundMat.needsUpdate = true;
  montarDeco();
  toast('✈️ Viajou para ' + BIOMES[biomeAtual].nome);
  salvar();
};

addEventListener('resize', () => {
  camera.aspect = renderer.domElement.width / renderer.domElement.height;
  camera.updateProjectionMatrix();
});

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
  peer = new Peer(codigo);
  souHost = true;
  pvpStatus('Aguardando amigo entrar com o código...');
  peer.on('connection', c => { conn = c; setupConn(); });
  peer.on('error', e => pvpStatus('Erro: ' + e.type));
};

document.getElementById('pvp-entrar').onclick = () => {
  const codigo = document.getElementById('pvp-code').value.trim();
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
let tPeer = null, tConn = null, tOfertaMinha = null, tOfertaDele = null, tAceitei = false, tAceitou = false;

document.getElementById('btn-troca').onclick = () => {
  const disp = inventario.filter(p => !p.pc);
  if (!disp.length) return toast('Você precisa de Pokémon no time!');
  document.getElementById('troca-escolha').innerHTML = disp.map(p => `<option value="${inventario.indexOf(p)}">${nomeExibicao(p)} CP ${p.cp} Nv ${p.nivel}</option>`).join('');
  document.getElementById('tela-troca').classList.remove('oculto');
  document.getElementById('troca-status').textContent = '';
  document.getElementById('troca-oferta').textContent = '';
  document.getElementById('troca-aceitar').classList.add('oculto');
  tOfertaMinha = tOfertaDele = null; tAceitei = tAceitou = false;
};
document.getElementById('troca-fechar').onclick = () => {
  if (tConn) tConn.close(); if (tPeer) tPeer.destroy();
  tPeer = tConn = null;
  document.getElementById('tela-troca').classList.add('oculto');
};
document.getElementById('troca-criar').onclick = () => {
  const codigo = document.getElementById('troca-code').value.trim() || 'troca' + Math.floor(Math.random() * 900 + 100);
  document.getElementById('troca-code').value = codigo;
  tPeer = new Peer(codigo);
  tStatus('Aguardando...');
  tPeer.on('connection', c => { tConn = c; tSetup(); });
  tPeer.on('error', e => tStatus('Erro: ' + e.type));
};
document.getElementById('troca-entrar').onclick = () => {
  const codigo = document.getElementById('troca-code').value.trim();
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
function tSetup() {
  tConn.on('open', () => { tStatus('Conectado! Escolha o Pokémon para trocar.'); });
  tConn.on('data', msg => {
    if (msg.t === 'oferta') {
      tOfertaDele = msg.mon;
      document.getElementById('troca-oferta').innerHTML = `Oferta dele: <b>${msg.mon.shiny ? '✨ ' : ''}${ESPECIES[msg.mon.espec].nome}</b> CP ${msg.mon.cp} Nv ${msg.mon.nivel}`;
      document.getElementById('troca-aceitar').classList.remove('oculto');
    } else if (msg.t === 'aceitou') {
      tAceitou = true;
      tStatus('O amigo aceitou!');
      if (tAceitei) tConcluir();
    }
  });
  tConn.on('close', () => tStatus('Oponente desconectou.'));
}
document.getElementById('troca-escolha').addEventListener('change', () => {
  const p = tMinhaOferta();
  if (!p || !tConn || tConn.open === false) return;
  tOfertaMinha = { espec: p.espec, cp: p.cp, nivel: p.nivel, shiny: p.shiny, mega: p.mega };
  tConn.send({ t: 'oferta', mon: tOfertaMinha });
  tStatus('Você ofereceu ' + nomeExibicao(p));
});
document.getElementById('troca-aceitar').onclick = () => {
  if (!tOfertaDele) return;
  tAceitei = true;
  tConn.send({ t: 'aceitou' });
  document.getElementById('troca-aceitar').classList.add('oculto');
  tStatus('Você aceitou! Aguardando...');
  if (tAceitou) tConcluir();
};
function tConcluir() {
  const meuIdx = inventario.indexOf(tMinhaOferta());
  if (meuIdx < 0) return tStatus('Erro: seu Pokémon sumiu!');
  inventario.splice(meuIdx, 1);
  inventario.push({ ...tOfertaDele, pc: false });
  toast(`🔁 Troca feita! Você recebeu ${ESPECIES[tOfertaDele.espec].nome}!`);
  tStatus('Troca concluída!');
  salvar(); renderListas();
  setTimeout(() => { if (tConn) tConn.close(); if (tPeer) tPeer.destroy(); tPeer = tConn = null; document.getElementById('tela-troca').classList.add('oculto'); }, 1800);
}

for (let i = 0; i < 4; i++) spawnSelvagem();
salvar();
if (usuario) {
  document.getElementById('tela-login').classList.add('oculto');
  document.getElementById('tela-menu').classList.remove('oculto');
}
loop();

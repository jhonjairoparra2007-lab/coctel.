// ============================================
//   COCTELES CALI — cocteles.js
// ============================================

// ======= DATA =======
const cocktails = [
  { id:1, name:"Cali Sunset", cat:"Clásicos", emoji:"🍊", desc:"Ron añejo, maracuyá, jugo de naranja y un toque de jengibre. El sabor de Cali en un vaso.", price:"$22.000", color:"#f72585", tag1:"Dulce", tag2:"Cítrico", isNew:false },
  { id:2, name:"Neon Mojito", cat:"Refrescantes", emoji:"🍃", desc:"Menta fresca, lima, ron blanco, agua con gas y hielo picado. Clásico reinventado.", price:"$20.000", color:"#00f5d4", tag1:"Refrescante", tag2:"Menta", isNew:false },
  { id:3, name:"Purple Reign", cat:"Creativos", emoji:"🍇", desc:"Ginebra premium, lavanda, limón y soda de arándanos. Floral, ácido y memorable.", price:"$28.000", color:"#7209b7", tag1:"Floral", tag2:"Gin", isNew:true },
  { id:4, name:"Mango Spicy", cat:"Creativos", emoji:"🥭", desc:"Tequila, mango fresco, chile tajín en el borde y limón. Dulce con kick picante.", price:"$25.000", color:"#f77f00", tag1:"Picante", tag2:"Tropical", isNew:true },
  { id:5, name:"Espresso Martini", cat:"Clásicos", emoji:"☕", desc:"Vodka, licor de café, espresso doble y espuma de leche. Para los que lo quieren todo.", price:"$26.000", color:"#4a2000", tag1:"Café", tag2:"Fuerte", isNew:false },
  { id:6, name:"Lulo Frizzante", cat:"Refrescantes", emoji:"🫧", desc:"Lulo colombiano, agua tónica, vodka citrus y hierbabuena. 100% local.", price:"$21.000", color:"#7fd400", tag1:"Local", tag2:"Ácido", isNew:false },
  { id:7, name:"Piña Tropical", cat:"Sin Alcohol", emoji:"🍍", desc:"Piña natural, coco, leche de coco y agua de panela. Sin alcohol pero lleno de sabor.", price:"$16.000", color:"#ffd60a", tag1:"Sin Alcohol", tag2:"Tropical", isNew:false },
  { id:8, name:"Dark Negroni", cat:"Clásicos", emoji:"🍷", desc:"Gin, vermut rojo, campari y una piel de naranja flameada. Para los entendidos.", price:"$29.000", color:"#c1121f", tag1:"Amargo", tag2:"Sofisticado", isNew:false },
  { id:9, name:"Limonada de Coco", cat:"Sin Alcohol", emoji:"🥥", desc:"Limonada natural con crema de coco y leche condensada. La favorita del house.", price:"$14.000", color:"#f8f8f0", tag1:"Sin Alcohol", tag2:"Cremoso", isNew:false },
  { id:10, name:"Guaro Sour", cat:"Creativos", emoji:"🌿", desc:"Aguardiente antioqueño, limón, clara de huevo y bitter de angostura. Identidad colombiana.", price:"$23.000", color:"#00b4d8", tag1:"Colombiano", tag2:"Ácido", isNew:true },
  { id:11, name:"Mezcal Mule", cat:"Clásicos", emoji:"🌵", desc:"Mezcal artesanal, ginger beer, lima y sal ahumada. Rústico y profundo.", price:"$30.000", color:"#6b4226", tag1:"Ahumado", tag2:"Mezcal", isNew:false },
  { id:12, name:"Berry Vodka", cat:"Refrescantes", emoji:"🫐", desc:"Vodka, frutos rojos macerados, limón y soda de grosella. Ligero y muy photogenic.", price:"$24.000", color:"#9d4edd", tag1:"Frutal", tag2:"Rosa", isNew:false },
];

const galleries = [
  { cat:"Bar Principal", title:"La Barra Principal", desc:"El corazón de Cocteles Cali — donde la magia sucede.", icon:"🍸", colors:["#060610","#0d0d1e","#14142e"], accent:"#00f5d4", el:"bar" },
  { cat:"Ambiente", title:"Terraza Nocturna", desc:"Nuestra terraza al aire libre, perfecta para las noches caleñas.", icon:"🌃", colors:["#04080f","#080f1c","#0d1829"], accent:"#f72585", el:"terrace" },
  { cat:"Cocteles", title:"Creaciones de la Casa", desc:"Cocteles que son obras de arte antes de ser bebidas.", icon:"🍹", colors:["#0a040e","#140a1c","#1e1028"], accent:"#7209b7", el:"cocktails" },
  { cat:"Productos", title:"Destilados & Licores", desc:"Más de 200 etiquetas premium de todo el mundo.", icon:"🥃", colors:["#0f0a04","#1c1408","#2a1e0e"], accent:"#f77f00", el:"spirits" },
  { cat:"Eventos", title:"Noches de Live Music", desc:"Viernes y sábados con bandas en vivo desde las 9 PM.", icon:"🎵", colors:["#060c0a","#0d1c18","#142e24"], accent:"#7fd400", el:"music" },
  { cat:"Ambiente", title:"Zona Lounge", desc:"Sofás y mesas bajas para quienes prefieren la comodidad.", icon:"🛋", colors:["#08060c","#100c18","#181024"], accent:"#b5179e", el:"lounge" },
  { cat:"Cocteles", title:"Tragos Signature", desc:"Nuestras 5 creaciones exclusivas que no encontrarás en otro lugar.", icon:"⭐", colors:["#080c04","#121c08","#1c2c0e"], accent:"#00f5d4", el:"signature" },
  { cat:"Productos", title:"Herramientas del Bartender", desc:"Equipos profesionales para el arte de la mixología.", icon:"🔧", colors:["#0c0c0c","#181818","#222222"], accent:"#adb5bd", el:"tools" },
];

const tables = [
  { id:1, label:"Mesa 1", cap:2, emoji:"🪑", occupied:false },
  { id:2, label:"Mesa 2", cap:4, emoji:"🪑", occupied:true },
  { id:3, label:"Mesa 3", cap:2, emoji:"🪑", occupied:false },
  { id:4, label:"Mesa 4", cap:6, emoji:"🪑", occupied:false },
  { id:5, label:"Barra", cap:3, emoji:"🍸", occupied:false },
  { id:6, label:"Mesa 6", cap:4, emoji:"🪑", occupied:true },
  { id:7, label:"Terraza 1", cap:4, emoji:"🌿", occupied:false },
  { id:8, label:"Terraza 2", cap:6, emoji:"🌿", occupied:false },
  { id:9, label:"VIP 1", cap:8, emoji:"⭐", occupied:false },
  { id:10, label:"VIP 2", cap:8, emoji:"⭐", occupied:true },
  { id:11, label:"Mesa 11", cap:2, emoji:"🪑", occupied:false },
  { id:12, label:"Mesa 12", cap:4, emoji:"🪑", occupied:false },
];

// ======= STATE =======
let res = { date: null, time: null, pax: 2, table: null, ocasion: '' };
let currentCar = 0;
let carInterval = null;

// ======= INIT =======
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initCursor();
  initBubbles();
  initScrollAnim();
  renderMenu();
  initMenuFilters();
  initCarousel();
  initDateInput();
  renderFloorMap();
  initSummaryWatchers();
});

// ======= LOADER =======
function initLoader() {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2000);
}

// ======= NAVBAR =======
function initNavbar() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// ======= CURSOR =======
function initCursor() {
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ======= BUBBLES =======
function initBubbles() {
  const container = document.getElementById('bubbles');
  const colors = ['rgba(0,245,212,0.4)', 'rgba(247,37,133,0.4)', 'rgba(114,9,183,0.3)', 'rgba(255,255,255,0.3)'];
  for (let i = 0; i < 25; i++) {
    const b = document.createElement('div');
    b.classList.add('bubble');
    const size = Math.random() * 8 + 3;
    b.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*8}s;
    `;
    container.appendChild(b);
  }
}

// ======= SCROLL ANIMATIONS =======
function initScrollAnim() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// ======= MENU =======
function renderMenu(filter = 'Todos') {
  const grid = document.getElementById('menuGrid');
  const filtered = filter === 'Todos' ? cocktails : cocktails.filter(c => c.cat === filter);
  grid.innerHTML = filtered.map((c, i) => `
    <div class="menu-card fade-up" style="animation-delay:${i*0.06}s">
      ${c.isNew ? '<div class="badge-new">Nuevo</div>' : ''}
      <div class="menu-card-top">
        <div class="menu-card-glow" style="background:radial-gradient(circle at center, ${c.color}40 0%, transparent 70%)"></div>
        <div class="menu-card-emoji">${c.emoji}</div>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-cat" style="color:${c.color}">${c.cat}</div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <div class="menu-card-foot">
          <span class="menu-price" style="color:${c.color}">${c.price}</span>
          <div class="menu-tags">
            <span class="menu-tag">${c.tag1}</span>
            <span class="menu-tag">${c.tag2}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  setTimeout(() => initScrollAnim(), 50);
}

function initMenuFilters() {
  const cats = ['Todos', ...new Set(cocktails.map(c => c.cat))];
  const cont = document.getElementById('menuFilters');
  cont.innerHTML = cats.map(c => `
    <button class="filter-btn ${c==='Todos'?'active':''}" onclick="filterMenu('${c}', this)">${c}</button>
  `).join('');
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}

// ======= CAROUSEL =======
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carDots');
  const thumbs = document.getElementById('carThumbs');

  track.innerHTML = galleries.map(g => `
    <div class="car-slide">
      <div class="car-slide-inner">
        <div class="car-bg">${buildSlide(g)}</div>
        <div class="car-overlay"></div>
      </div>
    </div>
  `).join('');

  dots.innerHTML = galleries.map((_, i) =>
    `<button class="car-dot ${i===0?'active':''}" onclick="goSlide(${i})"></button>`
  ).join('');

  thumbs.innerHTML = galleries.map((g, i) => `
    <div class="car-thumb ${i===0?'active':''}" onclick="goSlide(${i})">
      <div class="car-thumb-inner">${buildThumb(g)}</div>
      <div class="thumb-lbl">${g.cat}</div>
    </div>
  `).join('');

  document.getElementById('carPrev').addEventListener('click', () => { stopCar(); goSlide(currentCar - 1); });
  document.getElementById('carNext').addEventListener('click', () => { stopCar(); goSlide(currentCar + 1); });

  let tx = 0;
  const wrap = document.querySelector('.carousel-wrap');
  wrap.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, {passive:true});
  wrap.addEventListener('touchend', e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { stopCar(); diff > 0 ? goSlide(currentCar+1) : goSlide(currentCar-1); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { stopCar(); goSlide(currentCar-1); }
    if (e.key === 'ArrowRight') { stopCar(); goSlide(currentCar+1); }
  });

  updateCaption();
  startCar();
}

function buildSlide(g) {
  const c = g.colors, acc = g.accent, el = g.el;

  const svgs = {
    bar: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <rect x="0" y="300" width="1200" height="200" fill="${c[1]}"/>
      <rect x="0" y="296" width="1200" height="8" rx="2" fill="${acc}" opacity="0.5"/>
      ${Array.from({length:6},(_,i)=>`<line x1="${i*200}" y1="0" x2="${i*200}" y2="300" stroke="${acc}" stroke-width="0.5" opacity="0.07"/>`).join('')}
      <!-- Neon sign -->
      <rect x="350" y="40" width="500" height="70" rx="8" fill="rgba(0,0,0,0.4)" stroke="${acc}" stroke-width="2" opacity="0.8"/>
      <text x="600" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="700" fill="${acc}" letter-spacing="6" opacity="0.9">COCTELES CALI</text>
      <!-- Bar counter -->
      <rect x="100" y="230" width="1000" height="80" rx="8" fill="${c[2]}"/>
      <rect x="100" y="228" width="1000" height="10" rx="4" fill="${acc}" opacity="0.4"/>
      <!-- Bottles shelf -->
      <rect x="80" y="140" width="1040" height="10" rx="3" fill="${c[2]}"/>
      ${Array.from({length:18},(_,i)=>{
        const x=100+i*56, h=60+i%4*20, col=['#c0392b','#2980b9','#27ae60','#8e44ad','#d35400','#f39c12'][i%6];
        return `<rect x="${x}" y="${145}" width="${24+i%3*4}" height="${h}" rx="${4+i%2*3}" fill="${col}" opacity="0.85"/>
                <rect x="${x+2}" y="${150}" width="${20+i%3*4}" height="12" rx="2" fill="rgba(255,255,255,0.15)"/>`;
      }).join('')}
      <!-- Bar stools -->
      ${[200,400,600,800,1000].map(x=>`
        <rect x="${x-15}" y="305" width="30" height="8" rx="4" fill="${acc}" opacity="0.7"/>
        <rect x="${x-4}" y="310" width="8" height="50" rx="3" fill="${c[2]}"/>
        <rect x="${x-20}" y="355" width="40" height="6" rx="3" fill="${c[2]}"/>
      `).join('')}
      <!-- Glasses on bar -->
      ${[250,450,650,850].map((x,i)=>`
        <path d="M${x-14} 270 L${x+14} 270 L${x+8} 300 L${x-8} 300 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <rect x="${x-3}" y="300" width="6" height="24" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        <rect x="${x-14}" y="${270}" width="28" height="${10+i%3*5}" rx="1" fill="${['rgba(247,37,133,0.5)','rgba(0,245,212,0.5)','rgba(114,9,183,0.5)','rgba(247,127,0,0.5)'][i]}"/>
      `).join('')}
      <!-- Ambient glow -->
      <ellipse cx="600" cy="150" rx="300" ry="80" fill="${acc}" opacity="0.04"/>
    `,
    terrace: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <!-- Night sky -->
      ${Array.from({length:50},(_,i)=>`<circle cx="${Math.floor(i*24.1+13)}" cy="${Math.floor(i*9.7+5)}" r="${0.5+i%3*0.5}" fill="white" opacity="${0.3+i%4*0.15}"/>`).join('')}
      <!-- City skyline silhouette -->
      ${[{x:0,w:80,h:180},{x:90,w:60,h:220},{x:160,w:100,h:150},{x:270,w:70,h:260},{x:350,w:90,h:190},{x:450,w:50,h:310},{x:510,w:80,h:240},{x:600,w:110,h:200},{x:720,w:60,h:280},{x:790,w:90,h:160},{x:890,w:70,h:230},{x:970,w:100,h:190},{x:1080,w:80,h:250},{x:1170,w:30,h:170}].map(b=>`
        <rect x="${b.x}" y="${500-b.h}" width="${b.w}" height="${b.h}" fill="${c[1]}"/>
        ${Array.from({length:Math.floor(b.w/15)},(_,i)=>`<rect x="${b.x+4+i*15}" y="${500-b.h+10+Math.random()*40}" width="7" height="10" rx="1" fill="${Math.random()>0.6?'#ffd60a':'transparent'}" opacity="0.7"/>`).join('')}
      `).join('')}
      <!-- Floor / terrace -->
      <rect x="0" y="380" width="1200" height="120" fill="${c[2]}"/>
      <!-- Terrace railing -->
      <rect x="0" y="378" width="1200" height="6" fill="${g.accent}" opacity="0.5"/>
      ${Array.from({length:25},(_,i)=>`<rect x="${i*48+10}" y="330" width="4" height="55" rx="2" fill="${g.accent}" opacity="0.3"/>`).join('')}
      <!-- Tables on terrace -->
      ${[150,450,750,1050].map((x,i)=>`
        <ellipse cx="${x}" cy="408" rx="55" ry="20" fill="${c[2]}"/>
        <rect x="${x-4}" y="408" width="8" height="40" rx="3" fill="${c[1]}"/>
        <!-- Cocktail on table -->
        <path d="M${x-12} 390 L${x+12} 390 L${x+7} 408 L${x-7} 408 Z" fill="${['rgba(247,37,133,0.6)','rgba(0,245,212,0.6)','rgba(114,9,183,0.6)','rgba(127,212,0,0.6)'][i%4]}" opacity="0.8"/>
        <rect x="${x-2}" y="408" width="4" height="14" rx="1" fill="rgba(255,255,255,0.12)"/>
      `).join('')}
      <!-- Moon -->
      <circle cx="1060" cy="80" r="45" fill="#ffd60a" opacity="0.15"/>
      <circle cx="1060" cy="80" r="38" fill="#ffd60a" opacity="0.1"/>
      <!-- Neon lights string -->
      ${Array.from({length:12},(_,i)=>`
        <circle cx="${50+i*100}" cy="${50+Math.sin(i*0.8)*20}" r="5" fill="${g.accent}" opacity="0.8"/>
        <line x1="${50+i*100}" y1="${50+Math.sin(i*0.8)*20}" x2="${50+(i+1)*100}" y2="${50+Math.sin((i+1)*0.8)*20}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      `).join('')}
    `,
    cocktails: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <rect x="0" y="0" width="1200" height="500" fill="${c[0]}"/>
      ${Array.from({length:5},(_,i)=>`
        <ellipse cx="${120+i*220}" cy="260" rx="${60+i%2*20}" ry="${100+i%3*30}" fill="${g.accent}" opacity="0.04"/>
      `).join('')}
      <!-- 5 cocktail glasses in a row -->
      ${[100,300,580,860,1080].map((x,i)=>{
        const cols=['#f72585','#00f5d4','#7209b7','#f77f00','#7fd400'];
        const emojis=['🍸','🥂','🍹','🥃','🍾'];
        const h=150+i%3*30;
        return `
          <!-- Glass ${i+1} -->
          <path d="M${x-40} ${250-h} L${x+40} ${250-h} L${x+20} 250 L${x-20} 250 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
          <path d="M${x-40} ${250-h} L${x+40} ${250-h} L${x+20} ${250-h+50} L${x-20} ${250-h+50} Z" fill="${cols[i]}" opacity="0.7"/>
          <path d="M${x-40} ${250-h} Q${x} ${250-h-10} ${x+40} ${250-h}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
          <rect x="${x-4}" y="250" width="8" height="70" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="${x-30}" y="316" width="60" height="8" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <!-- garnish -->
          <circle cx="${x+35}" cy="${250-h-5}" r="12" fill="${cols[i]}" opacity="0.8"/>
          <!-- glow under -->
          <ellipse cx="${x}" cy="330" rx="40" ry="10" fill="${cols[i]}" opacity="0.1"/>
          <!-- label -->
          <text x="${x}" y="380" text-anchor="middle" font-size="22" fill="${cols[i]}" opacity="0.6">${emojis[i]}</text>
        `;
      }).join('')}
      <text x="600" y="470" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${g.accent}" opacity="0.5" letter-spacing="10">COCTELES ARTESANALES</text>
    `,
    spirits: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <rect x="40" y="50" width="1120" height="420" rx="8" fill="${c[1]}"/>
      <!-- Shelves -->
      ${[160,280,400].map(y=>`<rect x="60" y="${y}" width="1080" height="8" rx="3" fill="${c[2]}"/>`).join('')}
      <!-- Bottles rows -->
      ${Array.from({length:3},(_,row)=>
        Array.from({length:20},(_,i)=>{
          const x=80+i*56, y=row*120+75, h=70+i%4*15;
          const col=['#c0392b','#2980b9','#27ae60','#8e44ad','#d35400','#f39c12','#16a085','#8b4513'][i%8];
          return `<rect x="${x}" y="${y}" width="${28+i%3*4}" height="${h}" rx="${5+i%2*4}" fill="${col}" opacity="0.88"/>
                  <rect x="${x+2}" y="${y+5}" width="${24+i%3*4}" height="12" rx="2" fill="rgba(255,255,255,0.18)"/>
                  <ellipse cx="${x+(28+i%3*4)/2}" cy="${y}" rx="${(28+i%3*4)/2}" ry="5" fill="${col}" opacity="0.7"/>`;
        }).join('')
      ).join('')}
      <!-- Price tags hanging -->
      ${[120,320,560,780,1000].map((x,i)=>`
        <rect x="${x-20}" y="${420}" width="40" height="24" rx="4" fill="${g.accent}" opacity="0.8"/>
        <text x="${x}" y="${435}" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="${c[0]}">$${20+i*8}.000</text>
        <line x1="${x}" y1="410" x2="${x}" y2="420" stroke="${g.accent}" stroke-width="1.5" opacity="0.6"/>
      `).join('')}
      <text x="600" y="490" text-anchor="middle" font-family="sans-serif" font-size="13" fill="${g.accent}" opacity="0.5" letter-spacing="8">200+ ETIQUETAS PREMIUM</text>
    `,
    music: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <!-- Stage lights from above -->
      ${[150,350,600,850,1050].map((x,i)=>`
        <polygon points="${x},0 ${x-60},500 ${x+60},500" fill="${['#f72585','#00f5d4','#7209b7','#f77f00','#7fd400'][i]}" opacity="0.05"/>
        <circle cx="${x}" cy="10" r="14" fill="${['#f72585','#00f5d4','#7209b7','#f77f00','#7fd400'][i]}" opacity="0.7"/>
        <line x1="${x}" y1="0" x2="${x}" y2="10" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
      `).join('')}
      <!-- Stage platform -->
      <rect x="200" y="280" width="800" height="20" rx="4" fill="${c[2]}"/>
      <rect x="200" y="298" width="800" height="120" rx="0" fill="${c[1]}"/>
      <!-- Speaker boxes -->
      <rect x="200" y="200" width="80" height="90" rx="6" fill="#111" stroke="${g.accent}" stroke-width="1.5"/>
      <circle cx="240" cy="230" r="18" fill="#222" stroke="${g.accent}" stroke-width="1" opacity="0.8"/>
      <circle cx="240" cy="265" r="12" fill="#222" stroke="${g.accent}" stroke-width="1" opacity="0.6"/>
      <rect x="920" y="200" width="80" height="90" rx="6" fill="#111" stroke="${g.accent}" stroke-width="1.5"/>
      <circle cx="960" cy="230" r="18" fill="#222" stroke="${g.accent}" stroke-width="1" opacity="0.8"/>
      <circle cx="960" cy="265" r="12" fill="#222" stroke="${g.accent}" stroke-width="1" opacity="0.6"/>
      <!-- Microphone stand -->
      <line x1="600" y1="140" x2="600" y2="285" stroke="#888" stroke-width="3"/>
      <ellipse cx="600" cy="135" rx="14" ry="18" fill="#333" stroke="#aaa" stroke-width="2"/>
      <!-- Drum kit silhouette -->
      <ellipse cx="700" cy="285" rx="40" ry="15" fill="${c[2]}" stroke="${g.accent}" stroke-width="1" opacity="0.8"/>
      <ellipse cx="760" cy="280" rx="28" ry="11" fill="${c[2]}" stroke="${g.accent}" stroke-width="1" opacity="0.7"/>
      <ellipse cx="640" cy="275" rx="22" ry="9" fill="${c[2]}" stroke="${g.accent}" stroke-width="1" opacity="0.6"/>
      <!-- Musical notes floating -->
      ${['♪','♫','♩','♬'].map((n,i)=>`
        <text x="${300+i*170}" y="${80+i%2*40}" font-size="${28+i%2*14}" fill="${g.accent}" opacity="${0.3+i%2*0.2}">${n}</text>
      `).join('')}
      <!-- Crowd silhouettes -->
      ${Array.from({length:14},(_,i)=>`
        <ellipse cx="${120+i*72}" cy="430" rx="22" ry="40" fill="${c[2]}" opacity="${0.4+i%3*0.15}"/>
        <circle cx="${120+i*72}" cy="385" r="14" fill="${c[2]}" opacity="${0.4+i%3*0.15}"/>
        ${i%3===0?`<rect x="${120+i*72-4}" y="368" width="8" height="25" rx="2" fill="${g.accent}" opacity="0.5"/>`:``}
      `).join('')}
    `,
    lounge: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <!-- Wall panels -->
      ${Array.from({length:5},(_,i)=>`
        <rect x="${i*240}" y="0" width="238" height="320" fill="${i%2===0?c[1]:c[0]}"/>
        <rect x="${i*240+12}" y="20" width="214" height="280" rx="2" fill="none" stroke="${g.accent}" stroke-width="0.8" opacity="0.25"/>
      `).join('')}
      <!-- Floor -->
      <rect x="0" y="320" width="1200" height="180" fill="${c[1]}"/>
      <!-- Low sofas -->
      ${[80,460,860].map((x,i)=>`
        <rect x="${x}" y="280" width="280" height="80" rx="14" fill="${c[2]}"/>
        <rect x="${x}" y="268" width="280" height="22" rx="8" fill="${c[1]}" opacity="0.8"/>
        <rect x="${x}" y="268" width="38" height="92" rx="10" fill="${c[1]}" opacity="0.7"/>
        <rect x="${x+242}" y="268" width="38" height="92" rx="10" fill="${c[1]}" opacity="0.7"/>
        <rect x="${x+40}" y="320" width="200" height="12" rx="4" fill="${g.accent}" opacity="0.3"/>
      `).join('')}
      <!-- Low coffee tables -->
      ${[210,590,990].map(x=>`
        <rect x="${x-40}" y="330" width="80" height="40" rx="6" fill="${c[2]}" opacity="0.9"/>
        <!-- Cocktails on table -->
        <path d="M${x-15} 318 L${x+15} 318 L${x+10} 330 L${x-10} 330 Z" fill="${g.accent}" opacity="0.7"/>
        <rect x="${x-2}" y="330" width="4" height="12" rx="1" fill="rgba(255,255,255,0.1)"/>
      `).join('')}
      <!-- Warm pendant lights -->
      ${[200,600,1000].map(x=>`
        <line x1="${x}" y1="0" x2="${x}" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <ellipse cx="${x}" cy="56" rx="28" ry="12" fill="${g.accent}" opacity="0.5"/>
        <ellipse cx="${x}" cy="140" rx="90" ry="30" fill="${g.accent}" opacity="0.03"/>
      `).join('')}
      <!-- Decorative plants -->
      <ellipse cx="1140" cy="280" rx="30" ry="40" fill="#1a3a1a" opacity="0.8"/>
      <ellipse cx="1160" cy="260" rx="22" ry="32" fill="#244a24" opacity="0.7"/>
      <rect x="1128" y="316" width="24" height="40" rx="4" fill="${c[2]}"/>
      <ellipse cx="60" cy="270" rx="30" ry="40" fill="#1a3a1a" opacity="0.8"/>
      <rect x="48" y="306" width="24" height="40" rx="4" fill="${c[2]}"/>
    `,
    signature: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <!-- Dark dramatic background -->
      <ellipse cx="600" cy="250" rx="500" ry="300" fill="${g.accent}" opacity="0.03"/>
      <!-- 5 signature drinks on pedestals -->
      ${[100,300,580,860,1080].map((x,i)=>{
        const cols=['#f72585','#00f5d4','#7209b7','#f77f00','#b5179e'];
        const names=['Cali\\nSunset','Neon\\nMojito','Purple\\nReign','Mango\\nSpicy','Dark\\nNegroni'];
        return `
          <!-- Pedestal -->
          <rect x="${x-30}" y="340" width="60" height="80" rx="4" fill="${c[1]}" opacity="0.8"/>
          <rect x="${x-40}" y="415" width="80" height="10" rx="3" fill="${c[2]}" opacity="0.7"/>
          <!-- Glass -->
          <path d="M${x-28} ${200} L${x+28} ${200} L${x+16} 340 L${x-16} 340 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
          <path d="M${x-28} ${200} L${x+28} ${200} L${x+22} ${230} L${x-22} ${230} Z" fill="${cols[i]}" opacity="0.75"/>
          <rect x="${x-5}" y="340" width="10" height="50" rx="4" fill="rgba(255,255,255,0.07)"/>
          <!-- Glow around drink -->
          <ellipse cx="${x}" cy="270" rx="50" ry="80" fill="${cols[i]}" opacity="0.06"/>
          <ellipse cx="${x}" cy="360" rx="30" ry="8" fill="${cols[i]}" opacity="0.15"/>
          <!-- Number badge -->
          <circle cx="${x}" cy="${190}" r="18" fill="${cols[i]}" opacity="0.9"/>
          <text x="${x}" y="${195}" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="white">${i+1}</text>
        `;
      }).join('')}
      <rect x="0" y="460" width="1200" height="40" fill="${c[1]}" opacity="0.5"/>
      <text x="600" y="488" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${g.accent}" letter-spacing="8" opacity="0.7">FIRMA DE LA CASA</text>
    `,
    tools: `
      <rect width="1200" height="500" fill="${c[0]}"/>
      <rect x="0" y="300" width="1200" height="200" fill="${c[1]}"/>
      <rect x="0" y="298" width="1200" height="5" fill="${g.accent}" opacity="0.3"/>
      <!-- Shaker -->
      <g transform="translate(180,160)">
        <rect x="-28" y="-100" width="56" height="140" rx="12" fill="#c0c0c0" opacity="0.85"/>
        <rect x="-22" y="-95" width="44" height="20" rx="6" fill="rgba(255,255,255,0.2)"/>
        <rect x="-28" y="-115" width="56" height="22" rx="8" fill="#a0a0a0" opacity="0.9"/>
        <rect x="-28" y="-100" width="56" height="8" fill="${g.accent}" opacity="0.4"/>
      </g>
      <!-- Strainer -->
      <g transform="translate(340,170) rotate(-20)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#a0a0a0" stroke-width="3"/>
        <circle cx="0" cy="0" r="30" fill="rgba(160,160,160,0.1)" stroke="#888" stroke-width="1"/>
        ${Array.from({length:6},(_,i)=>`<line x1="${Math.cos(i*60*Math.PI/180)*10}" y1="${Math.sin(i*60*Math.PI/180)*10}" x2="${Math.cos(i*60*Math.PI/180)*30}" y2="${Math.sin(i*60*Math.PI/180)*30}" stroke="#888" stroke-width="1"/>`).join('')}
        <rect x="35" y="-6" width="80" height="12" rx="6" fill="#888" opacity="0.8"/>
      </g>
      <!-- Bar spoon -->
      <g transform="translate(540,140) rotate(15)">
        <line x1="0" y1="-130" x2="0" y2="130" stroke="#b0b0b0" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="0" cy="130" rx="10" ry="6" fill="#a0a0a0"/>
        <circle cx="0" cy="-130" r="8" fill="#a0a0a0"/>
      </g>
      <!-- Muddler -->
      <g transform="translate(680,150)">
        <rect x="-10" y="-110" width="20" height="150" rx="8" fill="#8B6914" opacity="0.9"/>
        <rect x="-14" y="35" width="28" height="20" rx="5" fill="#6b4a0a"/>
      </g>
      <!-- Jigger -->
      <g transform="translate(820,190)">
        <path d="M-18,-50 L18,-50 L10,0 L-10,0 Z" fill="#c0c0c0" opacity="0.85"/>
        <path d="M-10,0 L10,0 L18,50 L-18,50 Z" fill="#a0a0a0" opacity="0.85"/>
      </g>
      <!-- Peeler and knife -->
      <g transform="translate(960,160) rotate(-10)">
        <rect x="-4" y="-100" width="8" height="130" rx="3" fill="#e0e0e0"/>
        <rect x="-4" y="-100" width="8" height="10" rx="2" fill="${g.accent}" opacity="0.6"/>
        <rect x="-4" y="30" width="8" height="40" rx="4" fill="#5a3a1a"/>
      </g>
      <!-- Cutting board -->
      <rect x="1050" y="200" width="120" height="80" rx="6" fill="#8B6914" opacity="0.6"/>
      <rect x="1056" y="206" width="108" height="68" rx="4" fill="#a07820" opacity="0.4"/>
      <!-- Lime slices on board -->
      <circle cx="1090" cy="240" r="18" fill="#7fd400" opacity="0.7"/>
      <circle cx="1090" cy="240" r="10" fill="none" stroke="#5aa000" stroke-width="1.5"/>
      <text x="600" y="480" text-anchor="middle" font-family="sans-serif" font-size="13" fill="${g.accent}" opacity="0.5" letter-spacing="8">MIXOLOGÍA PROFESIONAL</text>
    `
  };

  return `<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;display:block" preserveAspectRatio="xMidYMid slice">
    ${svgs[el] || svgs.bar}
  </svg>`;
}

function buildThumb(g) {
  return `<svg viewBox="0 0 100 64" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%" preserveAspectRatio="xMidYMid slice">
    <rect width="100" height="64" fill="${g.colors[0]}"/>
    <rect width="100" height="64" fill="${g.accent}" opacity="0.08"/>
    <text x="50" y="34" text-anchor="middle" dominant-baseline="middle" font-size="22" fill="${g.accent}" opacity="0.8">${g.icon}</text>
    <rect x="0" y="0" width="100" height="3" fill="${g.accent}" opacity="0.7"/>
  </svg>`;
}

function goSlide(idx) {
  currentCar = (idx + galleries.length) % galleries.length;
  document.getElementById('carouselTrack').style.transform = `translateX(-${currentCar*100}%)`;
  document.querySelectorAll('.car-dot').forEach((d,i) => d.classList.toggle('active', i===currentCar));
  document.querySelectorAll('.car-thumb').forEach((t,i) => t.classList.toggle('active', i===currentCar));
  const thumbs = document.getElementById('carThumbs');
  const thumb = document.querySelectorAll('.car-thumb')[currentCar];
  if (thumb && thumbs) {
    thumbs.scrollLeft = thumb.offsetLeft - thumbs.offsetWidth / 2 + thumb.offsetWidth / 2;
  }
  updateCaption();
}

function updateCaption() {
  const g = galleries[currentCar];
  document.getElementById('carCaption').innerHTML = `
    <div class="cap-tag">${g.cat}</div>
    <div class="cap-title">${g.title}</div>
    <div class="cap-desc">${g.desc}</div>
  `;
}

function startCar() { carInterval = setInterval(() => goSlide(currentCar+1), 4500); }
function stopCar() { clearInterval(carInterval); }

// ======= BOOKING =======
function initDateInput() {
  const input = document.getElementById('resDate');
  input.min = new Date().toISOString().split('T')[0];
  input.addEventListener('change', () => {
    res.date = input.value;
    res.time = null;
    renderTimeSlots(input.value);
    updateResSummary();
  });
}

function renderTimeSlots(dateStr) {
  const cont = document.getElementById('timeSlots');
  const d = new Date(dateStr + 'T12:00:00');
  const day = d.getDay();
  let open = 17, close = day >= 5 ? 27 : (day === 0 ? 24 : 25);
  const full = ['18:00','19:30','21:00','22:30'];
  const slots = [];
  for (let h = open; h < close; h++) {
    slots.push(`${(h%24).toString().padStart(2,'0')}:00`);
    if (h + 0.5 < close) slots.push(`${(h%24).toString().padStart(2,'0')}:30`);
  }
  cont.innerHTML = `<div class="slots-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;">
    ${slots.map(s=>`
      <button class="time-btn ${full.includes(s)?'full':''}" onclick="selectTime('${s}',this)">
        ${s}${full.includes(s)?'<br><small>Lleno</small>':''}
      </button>
    `).join('')}
  </div>`;
}

function selectTime(t, el) {
  document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  res.time = t;
  updateResSummary();
}

let pax = 2;
function changePax(delta) {
  pax = Math.max(1, Math.min(15, pax + delta));
  res.pax = pax;
  document.getElementById('paxCount').textContent = pax;
  document.getElementById('sumPax').textContent = pax + ' personas';
}

function renderFloorMap() {
  const map = document.getElementById('floorMap');
  map.innerHTML = tables.map(t => `
    <button class="table-btn ${t.occupied?'occupied':''}" id="tb_${t.id}" onclick="selectTable(${t.id}, this)">
      <span class="t-icon">${t.occupied ? '🚫' : t.emoji}</span>
      <span>${t.label}</span>
      <span style="font-size:0.6rem;opacity:0.6">${t.cap} pers.</span>
    </button>
  `).join('');
}

function selectTable(id, el) {
  document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  res.table = tables.find(t => t.id === id);
  document.getElementById('sumTable').textContent = res.table.label;
}

function goBookStep(step) {
  if (step === 2) {
    if (!res.date || !res.time) { showBookingAlert('Selecciona fecha y hora primero'); return; }
  }
  if (step === 3) {
    if (!res.table) { showBookingAlert('Elige una mesa primero'); return; }
  }
  document.querySelectorAll('.book-step').forEach(s => s.classList.remove('active'));
  document.getElementById('bstep' + step).classList.add('active');
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('si' + i);
    el.classList.remove('active','done');
    if (i < step) el.classList.add('done');
    else if (i === step) el.classList.add('active');
  }
}

function showBookingAlert(msg) {
  const hint = document.createElement('div');
  hint.style.cssText = 'position:fixed;top:90px;right:20px;background:var(--magenta);color:white;padding:12px 20px;border-radius:8px;font-size:0.88rem;z-index:5000;animation:fadeUp 0.3s ease';
  hint.textContent = '⚠️ ' + msg;
  document.body.appendChild(hint);
  setTimeout(() => hint.remove(), 2500);
}

function initSummaryWatchers() {
  document.getElementById('resDate').addEventListener('change', () => {
    const d = new Date(document.getElementById('resDate').value + 'T12:00:00');
    document.getElementById('sumDate').textContent = d.toLocaleDateString('es-CO', {weekday:'short', day:'numeric', month:'short'});
  });
  document.getElementById('resOcasion').addEventListener('change', function() {
    res.ocasion = this.value;
    document.getElementById('sumOcasion').textContent = this.value || '—';
  });
}

function updateResSummary() {
  if (res.date) {
    const d = new Date(res.date + 'T12:00:00');
    document.getElementById('sumDate').textContent = d.toLocaleDateString('es-CO',{weekday:'short',day:'numeric',month:'short'});
  }
  if (res.time) document.getElementById('sumTime').textContent = res.time;
  document.getElementById('sumPax').textContent = res.pax + ' personas';
}

function confirmReservation() {
  const name = document.getElementById('resName').value.trim();
  const phone = document.getElementById('resPhone').value.trim();
  if (!name || !phone) { showBookingAlert('Completa nombre y teléfono'); return; }
  if (!res.date || !res.time || !res.table) { showBookingAlert('Faltan datos de reserva'); return; }

  // Mark table occupied
  const tbl = tables.find(t => t.id === res.table.id);
  if (tbl) tbl.occupied = true;

  const d = new Date(res.date + 'T12:00:00');
  const dateStr = d.toLocaleDateString('es-CO', {weekday:'long', day:'numeric', month:'long'});

  document.getElementById('modalBody').innerHTML = `
    <strong>${name}</strong>, tu mesa está reservada 🎉<br><br>
    📅 <strong>Fecha:</strong> ${dateStr}<br>
    🕐 <strong>Hora:</strong> ${res.time}<br>
    🪑 <strong>Mesa:</strong> ${res.table.label}<br>
    👥 <strong>Personas:</strong> ${res.pax}<br>
    ${res.ocasion ? `🎊 <strong>Ocasión:</strong> ${res.ocasion}<br>` : ''}
    <br><em style="font-size:0.85rem">Te contactaremos al ${phone} para confirmar. ¡Nos vemos!</em>
  `;
  document.getElementById('confirmModal').classList.add('open');
}

function closeModal() {
  document.getElementById('confirmModal').classList.remove('open');
  res = { date: null, time: null, pax: 2, table: null, ocasion: '' };
  document.getElementById('resName').value = '';
  document.getElementById('resPhone').value = '';
  document.getElementById('resEmail').value = '';
  document.getElementById('resNote').value = '';
  document.getElementById('resDate').value = '';
  document.getElementById('resOcasion').value = '';
  document.getElementById('timeSlots').innerHTML = '<p class="hint-text">Selecciona una fecha primero</p>';
  document.querySelectorAll('.table-btn,.time-btn').forEach(b => b.classList.remove('selected'));
  renderFloorMap();
  ['sumDate','sumTime','sumTable','sumOcasion'].forEach(id => document.getElementById(id).textContent = '—');
  document.getElementById('sumPax').textContent = '2';
  pax = 2; document.getElementById('paxCount').textContent = '2';
  goBookStep(1);
}

// ======= BARTENDERS DATA =======
const bartenders = [
  { id:1, name:"Jhon Jairo Parra", role:"Master Mixólogo & Co-Fundador", initials:"JJ", color:"#00f5d4", bg:"linear-gradient(135deg,#060f14,#0d1f28)", rating:4.9, votes:312, drinksMade:8420, specialties:["Cocteles Clásicos","Fermentados","Técnica Japonesa","Flores & Botanicals"], signature:"Cali Sunset", onDuty:true },
  { id:2, name:"Sebastián Banguera", role:"Director Creativo & Co-Fundador", initials:"SB", color:"#f72585", bg:"linear-gradient(135deg,#140612,#200820)", rating:4.8, votes:287, drinksMade:7650, specialties:["Mixología Molecular","Cocteles Fumados","Tiki & Tropicales","Shots Creativos"], signature:"Purple Reign", onDuty:true },
  { id:3, name:"Valentina Ríos", role:"Senior Bartender", initials:"VR", color:"#7209b7", bg:"linear-gradient(135deg,#0c0416,#160828)", rating:4.7, votes:198, drinksMade:5300, specialties:["Mocktails","Fruta Fresca","Spritz & Burbujas","Gin & Tónica"], signature:"Lulo Frizzante", onDuty:true },
  { id:4, name:"Diego Montoya", role:"Bartender", initials:"DM", color:"#f77f00", bg:"linear-gradient(135deg,#140c04,#201408)", rating:4.5, votes:142, drinksMade:3800, specialties:["Shots & Chupitos","Mezcal & Tequila","Cervezas Craft","Maridajes"], signature:"Mezcal Mule", onDuty:false },
  { id:5, name:"Camila Torres", role:"Junior Bartender", initials:"CT", color:"#7fd400", bg:"linear-gradient(135deg,#080e04,#101808)", rating:4.4, votes:89, drinksMade:1900, specialties:["Cócteles Tropicales","Sin Alcohol","Smoothies","Café Especial"], signature:"Mango Spicy", onDuty:true },
  { id:6, name:"Felipe Ospina", role:"Bar Back & Trainee", initials:"FO", color:"#b5179e", bg:"linear-gradient(135deg,#100812,#18101a)", rating:4.2, votes:54, drinksMade:800, specialties:["Aperitivos","Clásicos Básicos","Limpieza","Mise en Place"], signature:"Neon Mojito", onDuty:false },
];
const votedBartenders = new Set();

// ======= DELIVERY DATA =======
const deliveryProducts = cocktails.slice(0, 10).map(c => ({ ...c, qty: 0 }));
const cart = {};

// ======= REVIEWS DATA =======
let reviews = [
  { id:1, name:"María Fernanda G.", rating:5, text:"El mejor bar de Cali sin duda. El Cali Sunset es una obra maestra, llegué por primera vez y ya voy cada semana. El ambiente y la música están increíbles.", coctel:"Cali Sunset", date:"12 Mar 2024", color:"#f72585", isNew:false },
  { id:2, name:"Andrés Castaño", rating:5, text:"Jhon Jairo es un crack, el tipo sabe exactamente qué recomendarte. Pedí el Guaro Sour y quedé enamorado. La zona de terraza de noche es pura magia caleña.", coctel:"Guaro Sour", date:"8 Mar 2024", color:"#00f5d4", isNew:false },
  { id:3, name:"Laura Jiménez", rating:4, text:"Muy buen ambiente urbano, la música y la iluminación crean un mood increíble. Los cocteles sin alcohol son sorprendentemente buenos. Lo único: a veces el servicio tarda un poco.", coctel:"Limonada de Coco", date:"5 Mar 2024", color:"#7209b7", isNew:false },
  { id:4, name:"Carlos Eduardo M.", rating:5, text:"Vinimos para mi cumpleaños y Sebastián nos preparó unos cocteles personalizados. Un detalle que no esperábamos. El Purple Reign es simplemente brutal.", coctel:"Purple Reign", date:"1 Mar 2024", color:"#f77f00", isNew:false },
  { id:5, name:"Sofía Restrepo", rating:4, text:"El domicilio llegó rapidísimo y los cocteles venían perfectamente empacados en kit. El Neon Mojito viaja bien. Volveré a pedir seguro.", coctel:"Neon Mojito", date:"28 Feb 2024", color:"#7fd400", isNew:false },
  { id:6, name:"Juan Pablo V.", rating:5, text:"Fui con unos amigos del trabajo y quedamos todos felices. La barra tiene de todo, los bartenders son muy profesionales y amables. Lugar top de Granada.", coctel:"Espresso Martini", date:"24 Feb 2024", color:"#b5179e", isNew:false },
];
let selectedStars = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderBartenders();
  renderDeliveryProducts();
  initStarPicker();
  renderReviews();
  renderRatingOverview();
});

// ======= BARTENDERS =======
function renderBartenders() {
  const grid = document.getElementById('bartendersGrid');
  if (!grid) return;
  const sorted = [...bartenders].sort((a,b) => b.rating - a.rating || b.votes - a.votes);
  grid.innerHTML = sorted.map((b, i) => {
    const rank = i + 1;
    const rankClass = rank===1?'rank-1':rank===2?'rank-2':rank===3?'rank-3':'rank-other';
    const rankLabel = rank <= 3 ? rank : '#'+rank;
    const pct = ((b.rating/5)*100).toFixed(0);
    const hasVoted = votedBartenders.has(b.id);
    return `
      <div class="bartender-card fade-up" style="animation-delay:${i*0.08}s">
        <div class="bt-avatar-wrap">
          <div class="bt-avatar-bg" style="background:${b.bg}"></div>
          <div class="bt-initials" style="color:${b.color}">${b.initials}</div>
          <div class="bt-rank-badge ${rankClass}">${rankLabel}</div>
          <div class="bt-status ${b.onDuty?'bt-on':'bt-off'}">${b.onDuty?'● En turno':'○ Libre'}</div>
        </div>
        <div class="bt-body">
          <h3>${b.name}</h3>
          <span class="bt-role" style="color:${b.color}">${b.role}</span>
          <div class="bt-stars-row">${renderBtStars(b.rating)}<span class="bt-rating-num">${b.rating} / 5.0</span></div>
          <div class="bt-votes">${b.votes.toLocaleString()} votos de la comunidad</div>
          <div class="bt-rating-bar-wrap">
            <label>Índice de popularidad</label>
            <div class="bt-bar-track"><div class="bt-bar-fill" style="width:${pct}%"></div></div>
          </div>
          <div class="bt-specialties">${b.specialties.map(s=>`<span class="bt-spec">${s}</span>`).join('')}</div>
          <div class="bt-drinks-made">🍹 <strong>${b.drinksMade.toLocaleString()}</strong> tragos · Firma: <strong>${b.signature}</strong></div>
          <button class="vote-btn ${hasVoted?'voted':''}" id="vbtn_${b.id}" onclick="voteBartender(${b.id})">
            ${hasVoted?'⭐ ¡Ya votaste!':'<i class="fas fa-star"></i> Votar por este coctelero'}
          </button>
        </div>
      </div>`;
  }).join('');
  setTimeout(() => initScrollAnim(), 80);
}

function renderBtStars(rating) {
  let html = '';
  for (let i=1;i<=5;i++) {
    if (i<=Math.floor(rating)) html+=`<span class="bt-star on">★</span>`;
    else if (i-0.5<=rating) html+=`<span class="bt-star half-on">★</span>`;
    else html+=`<span class="bt-star">★</span>`;
  }
  return html;
}

function voteBartender(id) {
  if (votedBartenders.has(id)) return;
  votedBartenders.add(id);
  const b = bartenders.find(x=>x.id===id);
  if (!b) return;
  b.votes++;
  b.rating = Math.min(5, parseFloat((b.rating+0.01).toFixed(2)));
  renderBartenders();
  showToast(`⭐ ¡Votaste por ${b.name}!`, 'cyan');
}

// ======= DELIVERY =======
function renderDeliveryProducts() {
  const cont = document.getElementById('delProducts');
  if (!cont) return;
  cont.innerHTML = deliveryProducts.map(p => `
    <div class="del-product-card" id="dprod_${p.id}">
      <div class="del-prod-top">
        <span class="del-prod-emoji">${p.emoji}</span>
        <span class="del-prod-name">${p.name}</span>
      </div>
      <div class="del-prod-price">${p.price} c/u</div>
      <div class="del-qty-row">
        <button class="del-qty-btn" onclick="changeQty(${p.id},-1)">−</button>
        <span class="del-qty-num" id="dqty_${p.id}">0</span>
        <button class="del-qty-btn" onclick="changeQty(${p.id},+1)">+</button>
      </div>
    </div>`).join('');
}

function changeQty(id, delta) {
  const item = deliveryProducts.find(p=>p.id===id);
  if (!item) return;
  item.qty = Math.max(0, (item.qty||0)+delta);
  document.getElementById(`dqty_${id}`).textContent = item.qty;
  if (item.qty>0) cart[id]=item; else delete cart[id];
  const card = document.getElementById(`dprod_${id}`);
  if (card) card.style.borderColor = item.qty>0?'rgba(0,245,212,0.4)':'';
  updateCartDisplay();
}

function updateCartDisplay() {
  const itemsCont = document.getElementById('cartItems');
  const totalRow = document.getElementById('cartTotalRow');
  const items = Object.values(cart).filter(i=>i.qty>0);
  if (items.length===0) { itemsCont.innerHTML='<p class="hint-text">Aún no has agregado nada</p>'; totalRow.style.display='none'; return; }
  let subtotal = 0;
  itemsCont.innerHTML = items.map(i => { const lt=i.priceNum*i.qty; subtotal+=lt; return `<div class="cart-item-row"><span>${i.emoji} ${i.name} ×${i.qty}</span><strong>$${lt.toLocaleString('es-CO')}</strong></div>`; }).join('');
  const delivery = subtotal>=80000?0:5000;
  document.getElementById('cartSubtotal').textContent='$'+subtotal.toLocaleString('es-CO');
  document.getElementById('cartDelivery').textContent=delivery===0?'¡GRATIS!':'$'+delivery.toLocaleString('es-CO');
  document.getElementById('cartTotal').textContent='$'+(subtotal+delivery).toLocaleString('es-CO');
  totalRow.style.display='flex';
}

function confirmDelivery() {
  const name=document.getElementById('delName').value.trim();
  const phone=document.getElementById('delPhone').value.trim();
  const address=document.getElementById('delAddress').value.trim();
  const pay=document.getElementById('delPay').value;
  const items=Object.values(cart).filter(i=>i.qty>0);
  if (items.length===0){showToast('Agrega al menos un coctel','magenta');return;}
  if (!name||!phone||!address){showToast('Completa nombre, teléfono y dirección','magenta');return;}
  if (!pay){showToast('Selecciona método de pago','magenta');return;}
  const total=items.reduce((s,i)=>s+i.priceNum*i.qty,0);
  const delivery=total>=80000?0:5000;
  document.getElementById('deliveryModalBody').innerHTML=`
    <strong>${name}</strong>, tu pedido está en camino 🛵<br><br>
    ${items.map(i=>`🍹 <strong>${i.name}</strong> ×${i.qty} — $${(i.priceNum*i.qty).toLocaleString('es-CO')}`).join('<br>')}<br><br>
    📍 <strong>Dirección:</strong> ${address}<br>
    💳 <strong>Pago:</strong> ${pay}<br>
    💰 <strong>Total:</strong> $${(total+delivery).toLocaleString('es-CO')} ${delivery===0?'(domicilio gratis 🎉)':''}<br>
    ⏱ <strong>Tiempo estimado:</strong> 30-50 min<br><br>
    <em style="font-size:0.82rem">Te escribiremos al ${phone} cuando salga el pedido.</em>`;
  document.getElementById('deliveryModal').classList.add('open');
}

function closeDeliveryModal() {
  document.getElementById('deliveryModal').classList.remove('open');
  deliveryProducts.forEach(p=>{p.qty=0;delete cart[p.id];});
  renderDeliveryProducts(); updateCartDisplay();
  ['delName','delPhone','delAddress','delBarrio','delNote'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('delPay').value='';
}

// ======= REVIEWS =======
function initStarPicker() {
  const cont = document.getElementById('spStars');
  if (!cont) return;
  cont.innerHTML=[1,2,3,4,5].map(n=>`<span class="sp-star" data-val="${n}" onmouseenter="hoverStars(${n})" onmouseleave="resetStarHover()" onclick="setStars(${n})">★</span>`).join('');
}
function hoverStars(n) { document.querySelectorAll('.sp-star').forEach(s=>{const v=parseInt(s.dataset.val);s.style.color=v<=n?'#ffd700':'rgba(255,255,255,0.15)';s.style.transform=v<=n?'scale(1.2)':'scale(1)';}); }
function resetStarHover() { document.querySelectorAll('.sp-star').forEach(s=>{const v=parseInt(s.dataset.val);s.style.color=v<=selectedStars?'#ffd700':'rgba(255,255,255,0.15)';s.style.transform=v<=selectedStars?'scale(1.2)':'scale(1)';}); }
function setStars(n) { selectedStars=n; const labels=['','😐 Muy malo','😕 Malo','😊 Regular','😄 Bueno','🤩 ¡Excelente!']; document.getElementById('spValue').textContent=labels[n]; resetStarHover(); }

function renderReviews() {
  const grid=document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML=reviews.map((r,i)=>`
    <div class="review-card fade-up" style="animation-delay:${i*0.07}s">
      <div class="rv-header">
        <div class="rv-avatar" style="background:${r.color}22;border:2px solid ${r.color}44;color:${r.color}">${r.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
        <div class="rv-info"><h4>${r.name}${r.isNew?'<span class="rv-new-badge">Nueva</span>':''}</h4><span class="rv-date">${r.date}</span></div>
      </div>
      <div class="rv-stars">${[1,2,3,4,5].map(n=>`<span class="${n<=r.rating?'rv-star-on':'rv-star-off'}">★</span>`).join('')}</div>
      <p class="rv-text">"${r.text}"</p>
      ${r.coctel?`<div class="rv-coctel">🍹 ${r.coctel}</div>`:''}
    </div>`).join('');
  setTimeout(()=>initScrollAnim(),80);
}

function renderRatingOverview() {
  const cont=document.getElementById('ratingOverview');
  if (!cont) return;
  const avg=(reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1);
  const dist=[5,4,3,2,1].map(s=>({s,count:reviews.filter(r=>r.rating===s).length}));
  const total=reviews.length;
  cont.innerHTML=`
    <div class="rov-score">
      <div class="rov-num">${avg}</div>
      <div>
        <div class="rov-stars">${[1,2,3,4,5].map(n=>`<span style="color:${n<=Math.round(avg)?'#ffd700':'rgba(255,255,255,0.15)'}">★</span>`).join('')}</div>
        <div class="rov-count">${total} reseñas</div>
      </div>
    </div>
    <div class="rov-bars">
      ${dist.map(d=>`<div class="rov-bar-row"><span class="rov-bar-label">${d.s} ★</span><div class="rov-bar-track"><div class="rov-bar-fill" style="width:${total?((d.count/total)*100).toFixed(0):0}%"></div></div><span class="rov-bar-pct">${d.count}</span></div>`).join('')}
    </div>
    <div class="rov-tags">
      <span class="rov-tag">✨ Ambiente increíble</span><span class="rov-tag">🍹 Cocteles únicos</span>
      <span class="rov-tag">💯 Excelente servicio</span><span class="rov-tag">🎵 Buena música</span>
      <span class="rov-tag">🛵 Domicilio rápido</span><span class="rov-tag">📍 Fácil de encontrar</span>
    </div>`;
}

function submitReview() {
  const name=document.getElementById('wrName').value.trim();
  const text=document.getElementById('wrText').value.trim();
  const coctel=document.getElementById('wrCoctel').value;
  if (!name){showToast('Escribe tu nombre','magenta');return;}
  if (selectedStars===0){showToast('Selecciona estrellas','magenta');return;}
  if (text.length<15){showToast('Escribe al menos 15 caracteres','magenta');return;}
  const colors=['#00f5d4','#f72585','#7209b7','#f77f00','#7fd400','#b5179e'];
  reviews.unshift({id:reviews.length+1,name,rating:selectedStars,text,coctel:coctel||null,date:new Date().toLocaleDateString('es-CO',{day:'numeric',month:'short',year:'numeric'}),color:colors[Math.floor(Math.random()*colors.length)],isNew:true});
  renderReviews(); renderRatingOverview();
  document.getElementById('wrName').value=''; document.getElementById('wrText').value=''; document.getElementById('wrCoctel').value='';
  selectedStars=0; document.getElementById('spValue').textContent='— estrellas';
  document.querySelectorAll('.sp-star').forEach(s=>{s.style.color='';s.style.transform='';});
  showToast('¡Reseña publicada! Gracias 🍹','cyan');
}

// ======= TOAST =======
function showToast(msg, type='cyan') {
  const color=type==='cyan'?'var(--cyan)':'var(--magenta)';
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;bottom:28px;right:28px;background:var(--dark3);border:1.5px solid ${color};color:${color};padding:14px 22px;border-radius:10px;font-size:0.9rem;font-weight:500;z-index:9999;box-shadow:0 8px 30px rgba(0,0,0,0.5);animation:fadeUp 0.3s ease;max-width:320px;line-height:1.4`;
  t.textContent=msg; document.body.appendChild(t);
  setTimeout(()=>t.style.opacity='0',2200); setTimeout(()=>t.remove(),2700);
}

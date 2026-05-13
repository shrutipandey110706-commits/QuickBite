// ═══════════════════════════════════════════
//  QuickBite – Campus Food Ordering
//  Main Script (QuickBite.js)
// ═══════════════════════════════════════════

// ══════════════════════════════════════════
// DATABASE
// ══════════════════════════════════════════
const DB = {
  canteens: [
    { id:'main',    name:'Main Canteen',  icon:'🍽️', color:'#ff6b2b', desc:'Full meals, snacks & daily specials. The campus hub for hearty food.',  hours:'8 AM – 8 PM',   opEmail:'op1@qb.com' },
    { id:'nescafe', name:'Nescafé Corner', icon:'☕',  color:'#3b82f6', desc:'Beverages, sandwiches, pastries & light bites. Your caffeine fix!',     hours:'7:30 AM – 9 PM', opEmail:'op2@qb.com' },
    { id:'juice',   name:'Juice Point',   icon:'🥤',  color:'#2ecc71', desc:'Fresh juices, smoothies, shakes & healthy snacks all day long.',         hours:'9 AM – 7 PM',   opEmail:'op3@qb.com' }
  ],
  cats: {
    main:    ['All','Breakfast','Meals','Snacks','Beverages','Combos'],
    nescafe: ['All','Beverages','Snacks','Sandwiches','Desserts'],
    juice:   ['All','Juices','Smoothies','Shakes','Healthy Bites']
  },
  menu: {
    main: [
      { id:'m1',  nm:'Masala Dosa',     em:'🥞', pr:45,  cat:'Breakfast', dc:'Crispy dosa with spiced potato filling & chutneys', av:true  },
      { id:'m2',  nm:'Idli Sambar',     em:'🍛', pr:35,  cat:'Breakfast', dc:'Soft idlis with sambar and coconut chutney',         av:true  },
      { id:'m3',  nm:'Veg Thali',       em:'🍱', pr:80,  cat:'Meals',     dc:'Dal, sabzi, rice, roti, salad & papad',              av:true  },
      { id:'m4',  nm:'Chicken Biryani', em:'🍚', pr:120, cat:'Meals',     dc:'Aromatic basmati rice with spiced chicken',          av:true  },
      { id:'m5',  nm:'Paneer Roll',     em:'🌯', pr:55,  cat:'Snacks',    dc:'Spiced paneer in a flaky paratha roll',              av:true  },
      { id:'m6',  nm:'Samosa',          em:'🥟', pr:15,  cat:'Snacks',    dc:'Crispy fried pastry with spiced potato filling',     av:true  },
      { id:'m7',  nm:'Masala Chai',     em:'🍵', pr:20,  cat:'Beverages', dc:'Spiced Indian milk tea',                             av:true  },
      { id:'m8',  nm:'Lassi',           em:'🥛', pr:40,  cat:'Beverages', dc:'Chilled sweet or salted yogurt drink',               av:false },
      { id:'m9',  nm:'Meal Combo A',    em:'🍽️', pr:95,  cat:'Combos',   dc:'Thali + Chai + Dessert',                             av:true  },
      { id:'m10', nm:'Breakfast Combo', em:'🌅', pr:70,  cat:'Combos',    dc:'Dosa + Chai + Samosa',                               av:true  },
      { id:'m11', nm:'Pav Bhaji',       em:'🍞', pr:60,  cat:'Snacks',    dc:'Spiced vegetable mash with buttered pav',            av:true  },
      { id:'m12', nm:'Chole Bhature',   em:'🫓', pr:65,  cat:'Meals',     dc:'Fluffy bhature with spicy chickpea curry',           av:true  }
    ],
    nescafe: [
      { id:'n1',  nm:'Cappuccino',     em:'☕', pr:60, cat:'Beverages',  dc:'Rich espresso topped with velvety milk foam', av:true  },
      { id:'n2',  nm:'Cold Coffee',    em:'🧊', pr:65, cat:'Beverages',  dc:'Chilled blended coffee with whipped cream',  av:true  },
      { id:'n3',  nm:'Hot Chocolate',  em:'🍫', pr:55, cat:'Beverages',  dc:'Rich creamy Belgian hot chocolate',           av:true  },
      { id:'n4',  nm:'Club Sandwich',  em:'🥪', pr:80, cat:'Sandwiches', dc:'Layered sandwich with veggies and cheese',   av:true  },
      { id:'n5',  nm:'Grilled Cheese', em:'🫕', pr:70, cat:'Sandwiches', dc:'Golden toasted bread with melted cheese',    av:true  },
      { id:'n6',  nm:'Croissant',      em:'🥐', pr:50, cat:'Snacks',     dc:'Buttery flaky French pastry',                av:true  },
      { id:'n7',  nm:'Cookie',         em:'🍪', pr:30, cat:'Desserts',   dc:'Freshly baked chocolate chip cookie',        av:true  },
      { id:'n8',  nm:'Brownie',        em:'🍫', pr:45, cat:'Desserts',   dc:'Fudgy walnut chocolate brownie',             av:false },
      { id:'n9',  nm:'Latte',          em:'🥤', pr:65, cat:'Beverages',  dc:'Smooth espresso with steamed milk',          av:true  },
      { id:'n10', nm:'Muffin',         em:'🧁', pr:40, cat:'Snacks',     dc:'Blueberry or chocolate chip muffin',         av:true  }
    ],
    juice: [
      { id:'j1',  nm:'Orange Juice',     em:'🍊', pr:50, cat:'Juices',        dc:'Freshly squeezed pure orange juice',     av:true  },
      { id:'j2',  nm:'Watermelon Juice', em:'🍉', pr:45, cat:'Juices',        dc:'Chilled fresh watermelon juice',         av:true  },
      { id:'j3',  nm:'Mango Juice',      em:'🥭', pr:55, cat:'Juices',        dc:'Sweet Alphonso mango blend',             av:true  },
      { id:'j4',  nm:'Mixed Fruit',      em:'🍹', pr:60, cat:'Juices',        dc:'Seasonal fruit blend',                   av:false },
      { id:'j5',  nm:'Banana Shake',     em:'🍌', pr:65, cat:'Shakes',        dc:'Thick creamy banana milkshake',          av:true  },
      { id:'j6',  nm:'Chocolate Shake',  em:'🍫', pr:70, cat:'Shakes',        dc:'Rich chocolate milkshake',               av:true  },
      { id:'j7',  nm:'Mango Smoothie',   em:'🥭', pr:75, cat:'Smoothies',     dc:'Mango, yogurt & honey blend',            av:true  },
      { id:'j8',  nm:'Green Detox',      em:'🥬', pr:70, cat:'Smoothies',     dc:'Spinach, cucumber, apple & ginger',      av:true  },
      { id:'j9',  nm:'Fruit Bowl',       em:'🫐', pr:80, cat:'Healthy Bites', dc:'Seasonal fruit bowl with honey drizzle', av:true  },
      { id:'j10', nm:'Granola Bar',      em:'🌾', pr:40, cat:'Healthy Bites', dc:'Oats, honey & mixed nuts bar',           av:true  }
    ]
  },
  users: [
    { email:'student@qb.com', role:'student',  nm:'Rahul Kumar',  sid:'STU2024001' },
    { email:'op1@qb.com',     role:'operator', nm:'Priya Singh',  canteen:'main'    },
    { email:'op2@qb.com',     role:'operator', nm:'Amit Sharma',  canteen:'nescafe' },
    { email:'op3@qb.com',     role:'operator', nm:'Neha Patel',   canteen:'juice'   },
    { email:'admin@qb.com',   role:'admin',    nm:'Admin Kumar'                     }
  ],
  orders: [
    { id:'QB101', canteen:'main',    sEmail:'student@qb.com', sNm:'Rahul Kumar',  items:[{nm:'Masala Dosa',q:2,pr:45},{nm:'Masala Chai',q:1,pr:20}],  total:110, status:'Delivered', slot:'9:00 AM – 9:15 AM',   time:new Date(Date.now()-3600000).toISOString() },
    { id:'QB102', canteen:'nescafe', sEmail:'anjali@qb.com',  sNm:'Anjali Verma', items:[{nm:'Cappuccino',q:1,pr:60},{nm:'Club Sandwich',q:1,pr:80}], total:140, status:'Ready',     slot:'11:00 AM – 11:15 AM', time:new Date(Date.now()-1800000).toISOString() },
    { id:'QB103', canteen:'juice',   sEmail:'karan@qb.com',   sNm:'Karan Mehta',  items:[{nm:'Mango Smoothie',q:2,pr:75}],                            total:150, status:'Preparing', slot:'12:00 PM – 12:15 PM', time:new Date(Date.now()-900000).toISOString()  },
    { id:'QB104', canteen:'main',    sEmail:'student@qb.com', sNm:'Rahul Kumar',  items:[{nm:'Veg Thali',q:1,pr:80},{nm:'Samosa',q:2,pr:15}],         total:110, status:'Pending',   slot:'12:15 PM – 12:30 PM', time:new Date(Date.now()-300000).toISOString()  },
    { id:'QB105', canteen:'nescafe', sEmail:'dev@qb.com',     sNm:'Dev Kapoor',   items:[{nm:'Cold Coffee',q:2,pr:65},{nm:'Cookie',q:1,pr:30}],        total:160, status:'Pending',   slot:'1:00 PM – 1:15 PM',   time:new Date().toISOString()                  }
  ],
  tkCtr: 106
};

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
const S = {
  user:      null,
  loginRole: 'student',
  canteen:   null,
  cart:      [],
  menuCat:   'All',
  menuQ:     '',
  stuTab:    'canteens',
  opTab:     'orders',
  adTab:     'dashboard'
};

// ══════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════
function toast(msg, type = 'info') {
  const icons = { success:'fa-check-circle', error:'fa-times-circle', info:'fa-bolt' };
  const cols  = { success:'var(--green)',    error:'var(--red)',       info:'var(--orange)' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fas ${icons[type]}" style="color:${cols[type]};flex-shrink:0"></i><span>${msg}</span>`;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => {
    el.style.animation = 'tOut .3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

function openModal(title, html, lg = false) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML   = html;
  document.getElementById('modal-bx').className    = lg ? 'mbox lg' : 'mbox';
  document.getElementById('modal-ov').classList.remove('hidden');
}
function closeModal() { document.getElementById('modal-ov').classList.add('hidden'); }
function modalOvClick(e) { if (e.target === document.getElementById('modal-ov')) closeModal(); }

function getCanteen(id) {
  return DB.canteens.find(c => c.id === id) || { icon:'🍽️', nm:'Unknown', color:'#888', name:'Unknown' };
}
function isToday(iso) {
  const d = new Date(iso), n = new Date();
  return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear();
}

const SC = { Pending:'badge-yellow', Preparing:'badge-orange', Ready:'badge-blue', Delivered:'badge-green' };
const SN = { Pending:'Preparing', Preparing:'Ready', Ready:'Delivered' };
const SI = { Pending:'fa-clock', Preparing:'fa-fire', Ready:'fa-bell', Delivered:'fa-check' };

function setMain(html) {
  document.getElementById('main').innerHTML = `<div class="anim">${html}</div>`;
}

// ══════════════════════════════════════════
// AUTH
// ══════════════════════════════════════════
function switchAuthTab(t) {
  document.getElementById('at-login').classList.toggle('active', t === 'login');
  document.getElementById('at-reg').classList.toggle('active',   t === 'reg');
  document.getElementById('frm-login').classList.toggle('hidden', t !== 'login');
  document.getElementById('frm-reg').classList.toggle('hidden',   t !== 'reg');
}

function setRole(r) {
  S.loginRole = r;
  ['student','operator','admin'].forEach(x =>
    document.getElementById(`rp-${x}`).classList.toggle('active', x === r)
  );
}

function doLogin() {
  const em = document.getElementById('li-em').value.trim().toLowerCase();
  const pw = document.getElementById('li-pw').value;
  if (!em || !pw) { toast('Fill all fields', 'error'); return; }
  const u = DB.users.find(u => u.email === em);
  if (!u) { toast('Account not found', 'error'); return; }
  if (u.role !== S.loginRole) { toast(`That is a ${u.role} account. Switch role tab.`, 'error'); return; }
  S.user = u;
  launchApp();
}

function doRegister() {
  const nm  = document.getElementById('rg-nm').value.trim();
  const em  = document.getElementById('rg-em').value.trim().toLowerCase();
  const sid = document.getElementById('rg-sid').value.trim();
  const pw  = document.getElementById('rg-pw').value;
  if (!nm || !em || !sid || !pw) { toast('Fill all fields', 'error'); return; }
  if (pw.length < 6) { toast('Password min 6 chars', 'error'); return; }
  if (DB.users.find(u => u.email === em)) { toast('Email already registered', 'error'); return; }
  const u = { email:em, role:'student', nm, sid };
  DB.users.push(u);
  S.user = u;
  toast('Account created! Welcome 🎉', 'success');
  launchApp();
}

function doLogout() {
  S.user = null; S.canteen = null; S.cart = []; S.stuTab = 'canteens';
  document.getElementById('pg-auth').style.display = 'flex';
  document.getElementById('pg-app').classList.add('hidden');
  updateBadge();
}

// ══════════════════════════════════════════
// APP LAUNCH
// ══════════════════════════════════════════
function launchApp() {
  const u = S.user;
  document.getElementById('tb-av').textContent = u.nm.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('tb-nm').textContent = u.nm;
  document.getElementById('tb-rl').textContent = u.role.charAt(0).toUpperCase() + u.role.slice(1);
  document.getElementById('cart-wrap').classList.toggle('hidden', u.role !== 'student');
  document.getElementById('pg-auth').style.display = 'none';
  document.getElementById('pg-app').classList.remove('hidden');
  buildSidebar();
  if      (u.role === 'student')  renderStudent();
  else if (u.role === 'operator') renderOperator();
  else                            renderAdmin();
  toast(`Welcome back, ${u.nm.split(' ')[0]}! 👋`, 'success');
}

// ══════════════════════════════════════════
// SIDEBAR BUILDER
// ══════════════════════════════════════════
function buildSidebar() {
  const role = S.user.role;
  let hd = '', nav = '', mob = [];

  if (role === 'student') {
    hd = `<div style="font-size:12px;color:var(--text2)">Student Portal</div>
          <div style="font-size:11px;color:var(--text3)">${S.user.sid || ''}</div>`;
    const items = [
      { icon:'fa-store',    lbl:'Canteens',  key:'canteens', fn:"navStu('canteens')" },
      { icon:'fa-utensils', lbl:'Menu',      key:'menu',     fn:"navStu('menu')"     },
      { icon:'fa-receipt',  lbl:'My Orders', key:'myorders', fn:"navStu('myorders')" },
      { icon:'fa-user',     lbl:'Profile',   key:'profile',  fn:"navStu('profile')"  }
    ];
    nav = mkNav(items, S.stuTab);
    mob = items.map(i => ({ icon:i.icon, lbl:i.lbl, fn:i.fn }));

  } else if (role === 'operator') {
    const c       = getCanteen(S.user.canteen);
    const pendCnt = DB.orders.filter(o => o.canteen === S.user.canteen && o.status === 'Pending').length;
    hd = `<div style="font-size:12px;color:var(--text2)">Operator Panel</div>
          <div style="font-size:11px;color:var(--orange)">${c.icon} ${c.name}</div>`;
    const items = [
      { icon:'fa-chart-bar', lbl:'Dashboard',   key:'orders', fn:"navOp('orders')",  badge:pendCnt || 0 },
      { icon:'fa-list-alt',  lbl:'All Orders',  key:'orders', fn:"navOp('orders')"                      },
      { icon:'fa-hamburger', lbl:'Menu Items',  key:'menu',   fn:"navOp('menu')"                        },
      { icon:'fa-qrcode',    lbl:'Verify Token',key:'verify', fn:"navOp('verify')"                      }
    ];
    nav = mkNav(items, S.opTab);
    mob = items.map(i => ({ icon:i.icon, lbl:i.lbl, fn:i.fn }));

  } else {
    hd = `<div style="font-size:12px;color:var(--text2)">Admin Panel</div>
          <div style="font-size:11px;color:var(--orange)">Full Access</div>`;
    nav = `
      <div class="sb-section">Overview</div>
      ${mkNav([{ icon:'fa-chart-pie', lbl:'Dashboard', key:'dashboard', fn:"navAd('dashboard')" }], S.adTab)}
      <div class="sb-section">Manage</div>
      ${mkNav([
        { icon:'fa-store',     lbl:'Canteens',   key:'canteens', fn:"navAd('canteens')" },
        { icon:'fa-hamburger', lbl:'Menu Items', key:'menu',     fn:"navAd('menu')"     },
        { icon:'fa-users',     lbl:'Users',      key:'users',    fn:"navAd('users')"    }
      ], S.adTab)}
      <div class="sb-section">Data</div>
      ${mkNav([
        { icon:'fa-file-alt', lbl:'Reports',    key:'reports',   fn:"navAd('reports')"   },
        { icon:'fa-history',  lbl:'All Orders', key:'allorders', fn:"navAd('allorders')" }
      ], S.adTab)}`;
    mob = [
      { icon:'fa-chart-pie', lbl:'Dashboard', fn:"navAd('dashboard')" },
      { icon:'fa-store',     lbl:'Canteens',  fn:"navAd('canteens')"  },
      { icon:'fa-hamburger', lbl:'Menu',      fn:"navAd('menu')"      },
      { icon:'fa-users',     lbl:'Users',     fn:"navAd('users')"     },
      { icon:'fa-file-alt',  lbl:'Reports',   fn:"navAd('reports')"   }
    ];
  }

  document.getElementById('sb-head').innerHTML = hd;
  document.getElementById('sb-nav').innerHTML  = nav;
  document.getElementById('mob-nav').innerHTML = mob.map(m =>
    `<button class="mnbtn" onclick="${m.fn}"><i class="fas ${m.icon}"></i>${m.lbl}</button>`
  ).join('');
}

function mkNav(items, active) {
  return items.map(i => `
    <button class="snav ${i.key === active ? 'active' : ''}" onclick="${i.fn}">
      <i class="fas ${i.icon}"></i>${i.lbl}
      ${i.badge ? `<span class="sbadge">${i.badge}</span>` : ''}
    </button>`).join('');
}

// Nav dispatcher functions — plain globals, safe for onclick strings
function navStu(tab) { S.stuTab = tab; buildSidebar(); renderStudent();  }
function navOp(tab)  { S.opTab  = tab; buildSidebar(); renderOperator(); }
function navAd(tab)  { S.adTab  = tab; buildSidebar(); renderAdmin();    }

// ══════════════════════════════════════════
// STUDENT ROUTER
// ══════════════════════════════════════════
function renderStudent() {
  if      (S.stuTab === 'canteens') pgCanteens();
  else if (S.stuTab === 'menu')     { if (S.canteen) pgMenu(); else pgCanteens(); }
  else if (S.stuTab === 'myorders') pgMyOrders();
  else if (S.stuTab === 'profile')  pgProfile();
}

// ── Canteen Select ──
function pgCanteens() {
  const cards = DB.canteens.map(c => `
    <div class="c-card" onclick="pickCanteen('${c.id}')">
      <div class="c-icon" style="background:${c.color}22;color:${c.color}">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <div class="c-meta">
        <span class="c-hrs"><i class="fas fa-clock"></i> ${c.hours}</span>
        <span class="badge badge-green"><i class="fas fa-circle" style="font-size:6px"></i> Open</span>
      </div>
    </div>`).join('');
  setMain(`
    <div class="c-hero">
      <h2>Choose Your Canteen 🍽️</h2>
      <p>Select a canteen to view menu & place an order</p>
    </div>
    <div class="c-grid">${cards}</div>`);
}

function pickCanteen(id) {
  S.canteen = id; S.cart = []; S.menuCat = 'All'; S.menuQ = '';
  updateBadge();
  toast(`${getCanteen(id).name} selected`, 'success');
  S.stuTab = 'menu'; buildSidebar(); pgMenu();
}

// ── Menu ──
function pgMenu() {
  if (!S.canteen) { S.stuTab = 'canteens'; buildSidebar(); pgCanteens(); return; }
  const c    = getCanteen(S.canteen);
  const cats = DB.cats[S.canteen];
  const all  = DB.menu[S.canteen];
  const list = all.filter(i => {
    const cOk = S.menuCat === 'All' || i.cat === S.menuCat;
    const qOk = !S.menuQ || i.nm.toLowerCase().includes(S.menuQ.toLowerCase());
    return cOk && qOk;
  });
  const catBar = cats.map(x => `<div class="cpill ${x === S.menuCat ? 'active' : ''}" onclick="setMCat('${x}')">${x}</div>`).join('');
  const grid = list.length
    ? list.map(i => `
        <div class="mi ${i.av ? '' : 'oos'}">
          <span class="mi-em">${i.em}</span>
          <div class="mi-nm">${i.nm}</div>
          <div class="mi-dc">${i.dc}</div>
          <div style="margin-bottom:8px">${i.av ? '<span class="badge badge-green">Available</span>' : '<span class="badge badge-red">Out of Stock</span>'}</div>
          <div class="mi-ft">
            <div class="mi-pr">₹${i.pr} <small>each</small></div>
            <button class="addbtn" onclick="addCart('${i.id}')" ${!i.av ? 'disabled' : ''}>+</button>
          </div>
        </div>`).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:50px;color:var(--text3)">
         <i class="fas fa-search" style="font-size:34px;display:block;margin-bottom:10px"></i>No items found
       </div>`;
  setMain(`
    <div class="ph">
      <div style="display:flex;align-items:center;gap:10px">
        <button class="btn btn-secondary btn-sm" onclick="S.stuTab='canteens';buildSidebar();pgCanteens()"><i class="fas fa-arrow-left"></i></button>
        <div>
          <h2>${c.icon} ${c.name}</h2>
          <span style="font-size:12px;color:var(--text2)">${all.filter(i => i.av).length} available</span>
        </div>
      </div>
      <div class="sw">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search items..." value="${S.menuQ}" oninput="S.menuQ=this.value;pgMenu()" style="width:185px">
      </div>
    </div>
    <div class="catbar">${catBar}</div>
    <div class="mgrid">${grid}</div>`);
}
function setMCat(c) { S.menuCat = c; pgMenu(); }

// ── My Orders ──
function pgMyOrders() {
  const mine  = DB.orders.filter(o => o.sEmail === S.user.email || o.sNm === S.user.nm).reverse();
  const steps = ['Pending','Preparing','Ready','Delivered'];
  const cards = mine.length
    ? mine.map(o => {
        const c  = getCanteen(o.canteen);
        const si = steps.indexOf(o.status);
        const tl = steps.map((s, i) => `
          <div class="tl-step ${i < si ? 'done' : i === si ? 'cur' : ''}">
            <div class="tl-dot"><i class="fas ${SI[s]}" style="font-size:11px"></i></div>
            <label>${s}</label>
          </div>`).join('');
        return `
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px;margin-bottom:13px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:13px;flex-wrap:wrap;gap:7px">
              <div>
                <div style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:var(--orange)">${o.id}</div>
                <div style="font-size:12px;color:var(--text2)">${c.icon} ${c.name} · <i class="fas fa-clock"></i> ${o.slot}</div>
              </div>
              <span class="badge ${SC[o.status]}">${o.status}</span>
            </div>
            <div class="tl">${tl}</div>
            <div style="background:var(--bg3);border-radius:var(--radius-sm);padding:11px;margin-top:13px">
              ${o.items.map(i => `<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px"><span>${i.nm} × ${i.q}</span><span>₹${i.pr * i.q}</span></div>`).join('')}
              <div style="display:flex;justify-content:space-between;font-weight:700;margin-top:7px;border-top:1px solid var(--border);padding-top:7px">
                <span>Total</span><span style="color:var(--orange)">₹${o.total}</span>
              </div>
            </div>
          </div>`;
      }).join('')
    : `<div style="text-align:center;padding:60px;color:var(--text3)">
         <i class="fas fa-receipt" style="font-size:42px;display:block;margin-bottom:13px"></i>
         <div style="font-size:17px;font-weight:700;margin-bottom:5px">No orders yet</div>
         <p>Place your first order from the menu!</p>
         <button class="btn btn-primary" style="margin-top:18px" onclick="S.stuTab='canteens';buildSidebar();pgCanteens()">Browse Canteens</button>
       </div>`;
  setMain(`
    <div class="ph">
      <h2>My Orders</h2>
      <button class="btn btn-primary btn-sm" onclick="S.stuTab='canteens';buildSidebar();pgCanteens()"><i class="fas fa-plus"></i> New Order</button>
    </div>${cards}`);
}

// ── Profile ──
function pgProfile() {
  const u     = S.user;
  const mine  = DB.orders.filter(o => o.sEmail === u.email || o.sNm === u.nm);
  const spent = mine.reduce((s, o) => s + o.total, 0);
  setMain(`
    <div class="ph"><h2>My Profile</h2></div>
    <div style="max-width:480px">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:26px;margin-bottom:14px">
        <div style="width:68px;height:68px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:#fff;margin-bottom:14px">
          ${u.nm.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2)}
        </div>
        <h3 style="font-size:20px;margin-bottom:3px">${u.nm}</h3>
        <div style="font-size:13px;color:var(--text2);margin-bottom:3px"><i class="fas fa-envelope"></i> ${u.email}</div>
        ${u.sid ? `<div style="font-size:13px;color:var(--text2)"><i class="fas fa-id-card"></i> ${u.sid}</div>` : ''}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
          <div style="text-align:center;padding:10px;background:var(--bg3);border-radius:var(--radius-sm)">
            <div style="font-size:22px;font-weight:800;font-family:'Syne',sans-serif;color:var(--orange)">${mine.length}</div>
            <div style="font-size:11px;color:var(--text2)">Total Orders</div>
          </div>
          <div style="text-align:center;padding:10px;background:var(--bg3);border-radius:var(--radius-sm)">
            <div style="font-size:22px;font-weight:800;font-family:'Syne',sans-serif;color:var(--green)">₹${spent}</div>
            <div style="font-size:11px;color:var(--text2)">Total Spent</div>
          </div>
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px">
        <h4 style="margin-bottom:12px">Change Password</h4>
        <div class="fg"><label>New Password</label><input type="password" id="np" placeholder="Min 6 chars"></div>
        <button class="btn btn-primary btn-sm" onclick="chgPass()"><i class="fas fa-save"></i> Update</button>
      </div>
    </div>`);
}
function chgPass() {
  const p = document.getElementById('np').value;
  if (p.length < 6) { toast('Min 6 chars', 'error'); return; }
  toast('Password updated!', 'success');
}

// ══════════════════════════════════════════
// CART
// ══════════════════════════════════════════
function addCart(id) {
  const item = DB.menu[S.canteen].find(i => i.id === id);
  if (!item || !item.av) return;
  const ex = S.cart.find(c => c.id === id);
  if (ex) ex.q++; else S.cart.push({ ...item, q:1 });
  updateBadge(); drawCart();
  toast(`${item.nm} added`, 'success');
}

function updateBadge() {
  const n = S.cart.reduce((s, i) => s + i.q, 0);
  const b = document.getElementById('cart-badge');
  if (b) { b.textContent = n; b.classList.toggle('hidden', n === 0); }
}

function drawCart() {
  const bd = document.getElementById('cart-bd');
  const ft = document.getElementById('cart-ft');
  if (!S.cart.length) {
    bd.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i><div style="font-size:14px;font-weight:600;margin-bottom:3px">Cart is empty</div><p style="font-size:12px">Add items from the menu</p></div>`;
    ft.classList.add('hidden'); return;
  }
  const total = S.cart.reduce((s, i) => s + i.pr * i.q, 0);
  bd.innerHTML = S.cart.map(i => `
    <div class="ci">
      <span class="ci-em">${i.em}</span>
      <div class="ci-info">
        <div class="ci-nm">${i.nm}</div>
        <div class="ci-pr">₹${i.pr * i.q}</div>
      </div>
      <div class="qctrl">
        <button class="qbtn" onclick="chgQ('${i.id}',-1)"><i class="fas fa-minus" style="font-size:9px"></i></button>
        <span class="qv">${i.q}</span>
        <button class="qbtn" onclick="chgQ('${i.id}',1)"><i class="fas fa-plus" style="font-size:9px"></i></button>
      </div>
    </div>`).join('');
  ft.classList.remove('hidden');
  document.getElementById('cart-total').textContent = `₹${total}`;
}

function chgQ(id, d) {
  const idx = S.cart.findIndex(i => i.id === id);
  if (idx < 0) return;
  S.cart[idx].q += d;
  if (S.cart[idx].q <= 0) S.cart.splice(idx, 1);
  updateBadge(); drawCart();
}

function toggleCart() {
  const sb = document.getElementById('cart-sb');
  const ov = document.getElementById('cart-ov');
  const open = sb.classList.toggle('open');
  ov.classList.toggle('show', open);
  if (open) drawCart();
}

function placeOrder() {
  if (!S.cart.length) { toast('Cart is empty', 'error'); return; }
  const slot = document.getElementById('slot-sel').value;
  if (!slot) { toast('Select a pickup time slot', 'error'); return; }
  const token = `QB${DB.tkCtr++}`;
  const order = {
    id: token, canteen: S.canteen,
    sEmail: S.user.email, sNm: S.user.nm,
    items: S.cart.map(i => ({ nm:i.nm, q:i.q, pr:i.pr })),
    total: S.cart.reduce((s, i) => s + i.pr * i.q, 0),
    status: 'Pending', slot, time: new Date().toISOString()
  };
  DB.orders.push(order);
  S.cart = []; updateBadge(); drawCart();
  document.getElementById('cart-sb').classList.remove('open');
  document.getElementById('cart-ov').classList.remove('show');
  const c = getCanteen(order.canteen);
  openModal('Order Placed! 🎉', `
    <div class="token-box">
      <div style="font-size:12px;color:var(--text2);margin-bottom:5px">Your Token Number</div>
      <div class="tok-num">${token}</div>
      <div class="tok-sub">Show this token at the counter</div>
    </div>
    <div style="margin-top:16px;padding:13px;background:var(--bg3);border-radius:var(--radius-sm)">
      <div style="font-size:13px;color:var(--text2);margin-bottom:5px"><i class="fas fa-store" style="color:var(--orange)"></i> ${c.icon} ${c.name}</div>
      <div style="font-size:13px;color:var(--text2)"><i class="fas fa-clock" style="color:var(--orange)"></i> Pickup: ${slot}</div>
    </div>
    <button class="btn btn-primary btn-full" style="margin-top:16px" onclick="closeModal();navStu('myorders')">
      <i class="fas fa-eye"></i> Track My Order
    </button>`);
}

// ══════════════════════════════════════════
// OPERATOR ROUTER
// ══════════════════════════════════════════
function renderOperator() {
  if      (S.opTab === 'orders') pgOpOrders();
  else if (S.opTab === 'menu')   pgOpMenu();
  else if (S.opTab === 'verify') pgOpVerify();
}

function pgOpOrders() {
  const cid     = S.user.canteen;
  const c       = getCanteen(cid);
  const todayOr = DB.orders.filter(o => o.canteen === cid && isToday(o.time)).sort((a,b) => b.time.localeCompare(a.time));
  const pend    = todayOr.filter(o => o.status === 'Pending').length;
  const prep    = todayOr.filter(o => o.status === 'Preparing').length;
  const rdy     = todayOr.filter(o => o.status === 'Ready').length;
  const dlv     = todayOr.filter(o => o.status === 'Delivered').length;
  const rows    = todayOr.length
    ? todayOr.map(o => `
        <tr>
          <td><strong style="color:var(--orange);font-family:'Syne',sans-serif">${o.id}</strong></td>
          <td>${o.sNm}</td>
          <td style="max-width:170px;font-size:12px">${o.items.map(i => `${i.nm}×${i.q}`).join(', ')}</td>
          <td><strong>₹${o.total}</strong></td>
          <td style="white-space:nowrap;font-size:12px">${o.slot}</td>
          <td><span class="badge ${SC[o.status]}">${o.status}</span></td>
          <td>
            ${SN[o.status]
              ? `<button class="btn btn-sm btn-primary" onclick="updStatus('${o.id}','${SN[o.status]}')"><i class="fas fa-arrow-right"></i> ${SN[o.status]}</button>`
              : `<span style="color:var(--green);font-size:12px;font-weight:700"><i class="fas fa-check-circle"></i> Done</span>`}
          </td>
        </tr>`).join('')
    : `<tr><td colspan="7" style="text-align:center;padding:34px;color:var(--text3)">No orders today yet</td></tr>`;

  setMain(`
    <div class="ph">
      <div>
        <h2>${c.icon} ${c.name}</h2>
        <span style="font-size:13px;color:var(--text2)">Operator: ${S.user.nm}</span>
      </div>
    </div>
    <div class="sgrid">
      ${[['fa-clock','var(--yellow)',pend,'Pending'],['fa-fire','var(--orange)',prep,'Preparing'],['fa-bell','var(--blue)',rdy,'Ready'],['fa-check-circle','var(--green)',dlv,'Delivered']].map(([ico,col,val,lbl]) => `
        <div class="scard">
          <div class="sicon" style="background:${col}22;color:${col}"><i class="fas ${ico}"></i></div>
          <div class="sval">${val}</div>
          <div class="slbl">${lbl}</div>
        </div>`).join('')}
    </div>
    <div class="twrap">
      <div class="thead"><h3>Today's Orders</h3><span class="badge badge-orange">${todayOr.length} total</span></div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Token</th><th>Student</th><th>Items</th><th>Total</th><th>Slot</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}

function pgOpMenu() {
  const cid   = S.user.canteen;
  const c     = getCanteen(cid);
  const items = DB.menu[cid];
  const cards = items.map(i => `
    <div class="aic">
      <span style="font-size:26px">${i.em}</span>
      <div class="ai-info">
        <div class="ai-nm">${i.nm}</div>
        <div class="ai-mt">₹${i.pr} · ${i.cat} · <span style="color:${i.av ? 'var(--green)' : 'var(--red)'}">${i.av ? 'Available' : 'Out of Stock'}</span></div>
      </div>
      <button class="btn btn-sm ${i.av ? 'btn-danger' : 'btn-success'}" onclick="togAvail('${cid}','${i.id}')">
        <i class="fas ${i.av ? 'fa-ban' : 'fa-check'}"></i> ${i.av ? 'Disable' : 'Enable'}
      </button>
    </div>`).join('');
  setMain(`
    <div class="ph">
      <h2>${c.icon} Menu Management</h2>
      <span class="badge badge-orange">${items.filter(i => i.av).length}/${items.length} available</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:10px">${cards}</div>`);
}

function pgOpVerify() {
  const cid         = S.user.canteen;
  const readyOrders = DB.orders.filter(o => o.canteen === cid && (o.status === 'Ready' || o.status === 'Preparing')).sort((a,b) => a.slot.localeCompare(b.slot));
  const rows        = readyOrders.length
    ? readyOrders.map(o => `
        <tr>
          <td><strong style="color:var(--orange)">${o.id}</strong></td>
          <td>${o.sNm}</td>
          <td style="font-size:12px">${o.items.map(i => `${i.nm}×${i.q}`).join(', ')}</td>
          <td>${o.slot}</td>
          <td><span class="badge ${SC[o.status]}">${o.status}</span></td>
          <td>
            ${o.status === 'Ready'
              ? `<button class="btn btn-sm btn-success" onclick="updStatus('${o.id}','Delivered');pgOpVerify()"><i class="fas fa-check"></i> Mark Delivered</button>`
              : `<button class="btn btn-sm btn-warning" onclick="updStatus('${o.id}','Ready');pgOpVerify()"><i class="fas fa-bell"></i> Mark Ready</button>`}
          </td>
        </tr>`).join('')
    : `<tr><td colspan="6" style="text-align:center;padding:28px;color:var(--text3)">No orders ready for pickup</td></tr>`;

  setMain(`
    <div class="ph"><h2>Verify Token</h2></div>
    <div class="vbox">
      <label style="margin-bottom:8px">Enter token number shown by student</label>
      <div style="display:flex;gap:9px;margin-bottom:12px">
        <input id="vt-inp" placeholder="e.g. QB101" style="text-transform:uppercase;font-weight:700;font-size:16px;letter-spacing:2px">
        <button class="btn btn-primary" onclick="doVerify()"><i class="fas fa-search"></i> Check</button>
      </div>
      <div id="vt-res"></div>
    </div>
    <div class="twrap">
      <div class="thead"><h3>Ready / Preparing Orders</h3></div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Token</th><th>Student</th><th>Items</th><th>Slot</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}

function doVerify() {
  const tok = document.getElementById('vt-inp').value.trim().toUpperCase();
  const el  = document.getElementById('vt-res');
  if (!tok) { el.innerHTML = ''; return; }
  const o = DB.orders.find(o => o.id === tok && o.canteen === S.user.canteen);
  if (!o) {
    el.innerHTML = `<div style="padding:13px;background:var(--red-dim);border:1px solid rgba(231,76,60,.2);border-radius:var(--radius-sm);color:var(--red)"><i class="fas fa-times-circle"></i> Token <strong>${tok}</strong> not found for this canteen.</div>`;
    return;
  }
  const action = SN[o.status]
    ? `<button class="btn btn-sm btn-primary" style="margin-top:9px" onclick="updStatus('${o.id}','${SN[o.status]}');pgOpVerify()"><i class="fas fa-arrow-right"></i> Move to ${SN[o.status]}</button>`
    : `<span style="color:var(--green);font-weight:700"><i class="fas fa-check-circle"></i> Order Fully Delivered</span>`;
  el.innerHTML = `
    <div style="padding:14px;background:var(--green-dim);border:1px solid rgba(46,204,113,.2);border-radius:var(--radius-sm)">
      <div style="font-weight:700;color:var(--green);margin-bottom:7px"><i class="fas fa-check-circle"></i> Valid Token: ${o.id}</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:3px"><i class="fas fa-user"></i> ${o.sNm}</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:3px"><i class="fas fa-clock"></i> ${o.slot}</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:6px"><i class="fas fa-list"></i> ${o.items.map(i => `${i.nm}×${i.q}`).join(', ')}</div>
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">₹${o.total} &nbsp;·&nbsp; <span class="badge ${SC[o.status]}">${o.status}</span></div>
      ${action}
    </div>`;
}

function togAvail(cid, id) {
  const item = DB.menu[cid].find(i => i.id === id);
  if (!item) return;
  item.av = !item.av;
  toast(`${item.nm} → ${item.av ? 'Available' : 'Out of Stock'}`, 'info');
  pgOpMenu();
}

function updStatus(orderId, newStatus) {
  const o = DB.orders.find(o => o.id === orderId);
  if (!o) return;
  o.status = newStatus;
  toast(`${orderId} → ${newStatus}`, 'success');
  buildSidebar();
}

// ══════════════════════════════════════════
// ADMIN ROUTER
// ══════════════════════════════════════════
function renderAdmin() {
  if      (S.adTab === 'dashboard') pgAdDash();
  else if (S.adTab === 'canteens')  pgAdCanteens();
  else if (S.adTab === 'menu')      pgAdMenu();
  else if (S.adTab === 'users')     pgAdUsers();
  else if (S.adTab === 'reports')   pgAdReports();
  else if (S.adTab === 'allorders') pgAdAllOrders();
}

function pgAdDash() {
  const ords   = DB.orders;
  const rev    = ords.reduce((s,o) => s + o.total, 0);
  const stus   = DB.users.filter(u => u.role === 'student').length;
  const dlv    = ords.filter(o => o.status === 'Delivered').length;
  const pend   = ords.filter(o => o.status === 'Pending').length;
  const prep   = ords.filter(o => o.status === 'Preparing').length;
  const rdy    = ords.filter(o => o.status === 'Ready').length;
  const cRev   = {};
  DB.canteens.forEach(c => cRev[c.id] = 0);
  ords.forEach(o => { cRev[o.canteen] = (cRev[o.canteen] || 0) + o.total; });
  const maxRev = Math.max(...Object.values(cRev), 1);
  const iCnt   = {};
  ords.forEach(o => o.items.forEach(i => { iCnt[i.nm] = (iCnt[i.nm] || 0) + i.q; }));
  const pop    = Object.entries(iCnt).sort((a,b) => b[1]-a[1]).slice(0, 5);
  const maxPop = pop[0]?.[1] || 1;

  setMain(`
    <div class="ph"><h2>Admin Dashboard</h2><span style="font-size:13px;color:var(--text2)">All Canteens Overview</span></div>
    <div class="sgrid">
      ${[['fa-receipt','var(--orange)',ords.length,'Total Orders'],['fa-rupee-sign','var(--green)',`₹${rev}`,'Total Revenue'],['fa-users','var(--blue)',stus,'Students'],['fa-check-double','var(--yellow)',dlv,'Delivered']].map(([ico,col,val,lbl]) => `
        <div class="scard">
          <div class="sicon" style="background:${col}22;color:${col}"><i class="fas ${ico}"></i></div>
          <div class="sval">${val}</div><div class="slbl">${lbl}</div>
        </div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(295px,1fr));gap:16px;margin-bottom:20px">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px">
        <h3 style="font-size:15px;margin-bottom:13px">Revenue by Canteen</h3>
        <div class="bchart">
          ${DB.canteens.map(c => {
            const rv = cRev[c.id] || 0;
            const h  = Math.max(Math.round(rv / maxRev * 115), 4);
            return `<div class="bcol"><div class="bbar" style="height:${h}px;background:${c.color}44"><span class="bval" style="color:${c.color}">₹${rv}</span></div><div class="blbl">${c.name.split(' ')[0]}</div></div>`;
          }).join('')}
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px">
        <h3 style="font-size:15px;margin-bottom:13px">Order Status Breakdown</h3>
        ${[['Pending',pend,'var(--yellow)'],['Preparing',prep,'var(--orange)'],['Ready',rdy,'var(--blue)'],['Delivered',dlv,'var(--green)']].map(([lbl,val,col]) => {
          const pct = Math.round(val / Math.max(ords.length,1) * 100);
          return `<div style="margin-bottom:11px">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span style="color:var(--text2)">${lbl}</span><span style="font-weight:700">${val}</span></div>
            <div class="prg"><div class="prg-bar" style="width:${pct}%;background:${col}"></div></div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px">
      <h3 style="font-size:15px;margin-bottom:13px">🔥 Most Popular Items</h3>
      ${pop.map(([nm,cnt],i) => `
        <div class="pop-i">
          <div class="pop-rk">${i+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600">${nm}</div>
            <div style="font-size:12px;color:var(--text2)">${cnt} ordered</div>
          </div>
          <div style="width:90px;height:5px;background:var(--border);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${Math.round(cnt/maxPop*100)}%;background:var(--orange);border-radius:3px"></div>
          </div>
        </div>`).join('')}
    </div>`);
}

function pgAdCanteens() {
  const cards = DB.canteens.map(c => {
    const op  = DB.users.find(u => u.role === 'operator' && u.canteen === c.id);
    const ors = DB.orders.filter(o => o.canteen === c.id);
    const rv  = ors.reduce((s,o) => s + o.total, 0);
    return `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:22px">
        <div style="display:flex;align-items:center;gap:13px;margin-bottom:14px">
          <div style="width:52px;height:52px;border-radius:13px;background:${c.color}22;display:flex;align-items:center;justify-content:center;font-size:24px">${c.icon}</div>
          <div><h3 style="font-size:16px">${c.name}</h3><span style="font-size:11px;color:var(--text2)"><i class="fas fa-clock"></i> ${c.hours}</span></div>
        </div>
        <p style="font-size:13px;color:var(--text2);margin-bottom:14px;line-height:1.5">${c.desc}</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:12px">
          ${[['Items',DB.menu[c.id].length],['Orders',ors.length],['Revenue','₹'+rv]].map(([l,v]) => `
            <div style="text-align:center;padding:9px;background:var(--bg3);border-radius:var(--radius-sm)">
              <div style="font-size:16px;font-weight:800;font-family:'Syne',sans-serif;color:var(--orange)">${v}</div>
              <div style="font-size:10px;color:var(--text2)">${l}</div>
            </div>`).join('')}
        </div>
        <div style="padding:9px 12px;background:var(--bg3);border-radius:var(--radius-sm);font-size:13px;display:flex;align-items:center;gap:7px">
          <i class="fas fa-user-tie" style="color:var(--orange)"></i>
          <span style="color:var(--text2)">Operator:</span>
          <strong>${op ? op.nm : 'Unassigned'}</strong>
          ${op ? `<span style="font-size:11px;color:var(--text3)">(${op.email})</span>` : ''}
        </div>
      </div>`;
  }).join('');
  setMain(`<div class="ph"><h2>Canteen Management</h2></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:16px">${cards}</div>`);
}

function pgAdMenu() {
  let html = '';
  DB.canteens.forEach(c => {
    const items = DB.menu[c.id];
    html += `
      <div style="margin-bottom:26px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;flex-wrap:wrap;gap:7px">
          <h3 style="font-size:16px">${c.icon} ${c.name} <span style="font-size:12px;color:var(--text2);font-family:'DM Sans',sans-serif">(${items.length} items)</span></h3>
          <button class="btn btn-primary btn-sm" onclick="openAddItem('${c.id}')"><i class="fas fa-plus"></i> Add Item</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:9px">
          ${items.map(i => `
            <div class="aic">
              <span style="font-size:24px">${i.em}</span>
              <div class="ai-info">
                <div class="ai-nm">${i.nm}</div>
                <div class="ai-mt">₹${i.pr} · ${i.cat} · <span style="color:${i.av ? 'var(--green)' : 'var(--red)'}">${i.av ? 'Available' : 'Out of Stock'}</span></div>
              </div>
              <div class="ai-act">
                <button class="btn btn-sm btn-secondary" onclick="openEditItem('${c.id}','${i.id}')" title="Edit"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger" onclick="delItem('${c.id}','${i.id}')" title="Delete"><i class="fas fa-trash"></i></button>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  });
  setMain(`<div class="ph"><h2>Menu Items</h2></div>${html}`);
}

function openAddItem(cid) {
  const c    = getCanteen(cid);
  const cats = DB.cats[cid].filter(x => x !== 'All');
  openModal(`Add Item – ${c.name}`, `
    <div class="frow">
      <div class="fg"><label>Item Name</label><input id="ai-nm" placeholder="e.g. Paneer Tikka"></div>
      <div class="fg"><label>Emoji</label><input id="ai-em" placeholder="🍽️" style="font-size:18px"></div>
    </div>
    <div class="frow">
      <div class="fg"><label>Price (₹)</label><input id="ai-pr" type="number" min="1" placeholder="0"></div>
      <div class="fg"><label>Category</label><select id="ai-cat">${cats.map(x => `<option>${x}</option>`).join('')}</select></div>
    </div>
    <div class="fg"><label>Description</label><input id="ai-dc" placeholder="Short description"></div>
    <button class="btn btn-primary btn-full" onclick="saveAddItem('${cid}')"><i class="fas fa-plus"></i> Add Item</button>`);
}
function saveAddItem(cid) {
  const nm  = document.getElementById('ai-nm').value.trim();
  const em  = document.getElementById('ai-em').value.trim() || '🍽️';
  const pr  = parseInt(document.getElementById('ai-pr').value) || 0;
  const cat = document.getElementById('ai-cat').value;
  const dc  = document.getElementById('ai-dc').value.trim();
  if (!nm || !pr) { toast('Name & price required', 'error'); return; }
  DB.menu[cid].push({ id: cid[0] + Date.now(), nm, em, pr, cat, dc, av:true });
  toast(`${nm} added!`, 'success');
  closeModal(); pgAdMenu();
}

function openEditItem(cid, id) {
  const i = DB.menu[cid].find(x => x.id === id);
  openModal(`Edit: ${i.nm}`, `
    <div class="frow">
      <div class="fg"><label>Name</label><input id="ei-nm" value="${i.nm}"></div>
      <div class="fg"><label>Emoji</label><input id="ei-em" value="${i.em}" style="font-size:18px"></div>
    </div>
    <div class="frow">
      <div class="fg"><label>Price (₹)</label><input id="ei-pr" type="number" value="${i.pr}"></div>
      <div class="fg"><label>Status</label><select id="ei-av"><option value="1" ${i.av ? 'selected' : ''}>Available</option><option value="0" ${!i.av ? 'selected' : ''}>Out of Stock</option></select></div>
    </div>
    <div class="fg"><label>Description</label><input id="ei-dc" value="${i.dc}"></div>
    <button class="btn btn-primary btn-full" onclick="saveEditItem('${cid}','${id}')"><i class="fas fa-save"></i> Save</button>`);
}
function saveEditItem(cid, id) {
  const i  = DB.menu[cid].find(x => x.id === id);
  i.nm     = document.getElementById('ei-nm').value.trim() || i.nm;
  i.em     = document.getElementById('ei-em').value.trim() || i.em;
  i.pr     = parseInt(document.getElementById('ei-pr').value) || i.pr;
  i.dc     = document.getElementById('ei-dc').value.trim();
  i.av     = document.getElementById('ei-av').value === '1';
  toast('Item updated!', 'success');
  closeModal(); pgAdMenu();
}
function delItem(cid, id) {
  const i = DB.menu[cid].find(x => x.id === id);
  if (!confirm(`Delete "${i.nm}"?`)) return;
  DB.menu[cid] = DB.menu[cid].filter(x => x.id !== id);
  toast('Item deleted', 'info'); pgAdMenu();
}

function pgAdUsers() {
  const stus   = DB.users.filter(u => u.role === 'student');
  const ops    = DB.users.filter(u => u.role === 'operator');
  const stuRows = stus.map(u => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:7px">
        <div style="width:29px;height:29px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0">${u.nm.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        ${u.nm}</div></td>
      <td>${u.email}</td>
      <td>${u.sid || '—'}</td>
      <td><span class="badge badge-green">Active</span></td>
      <td><button class="btn btn-sm btn-danger" onclick="delUser('${u.email}')"><i class="fas fa-trash"></i></button></td>
    </tr>`).join('');
  const opRows = ops.map(u => {
    const c = getCanteen(u.canteen);
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:7px">
        <div style="width:29px;height:29px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0">${u.nm.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        ${u.nm}</div></td>
      <td>${u.email}</td>
      <td>${c.icon} ${c.name}</td>
      <td><span class="badge badge-blue">Operator</span></td>
      <td><button class="btn btn-sm btn-secondary" onclick="openReassign('${u.email}')"><i class="fas fa-exchange-alt"></i> Reassign</button></td>
    </tr>`;
  }).join('');
  setMain(`
    <div class="ph"><h2>User Management</h2><button class="btn btn-primary btn-sm" onclick="openAddStu()"><i class="fas fa-user-plus"></i> Add Student</button></div>
    <div class="twrap" style="margin-bottom:18px">
      <div class="thead"><h3>Students (${stus.length})</h3></div>
      <div style="overflow-x:auto"><table>
        <thead><tr><th>Name</th><th>Email</th><th>Student ID</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${stuRows || '<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--text3)">No students</td></tr>'}</tbody>
      </table></div>
    </div>
    <div class="twrap">
      <div class="thead"><h3>Operators (${ops.length})</h3></div>
      <div style="overflow-x:auto"><table>
        <thead><tr><th>Name</th><th>Email</th><th>Canteen</th><th>Role</th><th>Action</th></tr></thead>
        <tbody>${opRows}</tbody>
      </table></div>
    </div>`);
}
function openAddStu() {
  openModal('Add Student', `
    <div class="fg"><label>Full Name</label><input id="as-nm" placeholder="Student name"></div>
    <div class="fg"><label>Email</label><input id="as-em" type="email" placeholder="email@college.com"></div>
    <div class="fg"><label>Student ID</label><input id="as-sid" placeholder="STU2024XXX"></div>
    <button class="btn btn-primary btn-full" onclick="saveAddStu()"><i class="fas fa-user-plus"></i> Add</button>`);
}
function saveAddStu() {
  const nm  = document.getElementById('as-nm').value.trim();
  const em  = document.getElementById('as-em').value.trim().toLowerCase();
  const sid = document.getElementById('as-sid').value.trim();
  if (!nm || !em || !sid) { toast('All fields required', 'error'); return; }
  if (DB.users.find(u => u.email === em)) { toast('Email already exists', 'error'); return; }
  DB.users.push({ email:em, role:'student', nm, sid });
  toast('Student added!', 'success'); closeModal(); pgAdUsers();
}
function delUser(email) {
  if (email === S.user.email) { toast("Can't delete yourself", 'error'); return; }
  if (!confirm('Delete this user?')) return;
  const idx = DB.users.findIndex(u => u.email === email);
  if (idx >= 0) DB.users.splice(idx, 1);
  toast('User deleted', 'info'); pgAdUsers();
}
function openReassign(email) {
  const u = DB.users.find(x => x.email === email);
  openModal(`Reassign: ${u.nm}`, `
    <div class="fg"><label>Assign to Canteen</label>
      <select id="rc-sel">
        ${DB.canteens.map(c => `<option value="${c.id}" ${c.id === u.canteen ? 'selected' : ''}>${c.icon} ${c.name}</option>`).join('')}
      </select>
    </div>
    <button class="btn btn-primary btn-full" onclick="saveReassign('${email}')"><i class="fas fa-save"></i> Save</button>`);
}
function saveReassign(email) {
  const u   = DB.users.find(x => x.email === email);
  u.canteen = document.getElementById('rc-sel').value;
  toast(`${u.nm} reassigned to ${getCanteen(u.canteen).name}`, 'success');
  closeModal(); pgAdUsers();
}

function pgAdReports() {
  const ords   = DB.orders;
  const rev    = ords.reduce((s,o) => s + o.total, 0);
  const cStats = DB.canteens.map(c => {
    const co = ords.filter(o => o.canteen === c.id);
    return { c, cnt:co.length, rev:co.reduce((s,o) => s+o.total,0), pend:co.filter(o => o.status==='Pending').length };
  });
  const iCnt = {};
  ords.forEach(o => o.items.forEach(i => { iCnt[i.nm] = (iCnt[i.nm] || 0) + i.q; }));
  const pop = Object.entries(iCnt).sort((a,b) => b[1]-a[1]).slice(0, 8);
  setMain(`
    <div class="ph"><h2>Reports & Analytics</h2></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px;margin-bottom:20px">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px">
        <h3 style="font-size:15px;margin-bottom:13px">📊 Canteen Summary</h3>
        ${cStats.map(s => `
          <div style="padding:11px;background:var(--bg3);border-radius:var(--radius-sm);margin-bottom:7px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
              <span style="font-weight:600">${s.c.icon} ${s.c.name}</span>
              <span class="badge badge-orange">₹${s.rev}</span>
            </div>
            <div style="font-size:12px;color:var(--text2)">${s.cnt} orders · ${s.pend} pending · ${DB.menu[s.c.id].filter(i => i.av).length} items available</div>
          </div>`).join('')}
        <div style="display:flex;justify-content:space-between;padding:11px;background:var(--orange-dim);border-radius:var(--radius-sm)">
          <strong>Grand Total</strong><strong style="color:var(--orange)">₹${rev}</strong>
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px">
        <h3 style="font-size:15px;margin-bottom:13px">🏆 Top Selling Items</h3>
        ${pop.map(([nm,cnt],i) => `
          <div class="pop-i">
            <div class="pop-rk">${i+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600">${nm}</div>
              <div class="prg" style="margin-top:3px"><div class="prg-bar" style="width:${Math.round(cnt/pop[0][1]*100)}%;background:var(--orange)"></div></div>
            </div>
            <span class="badge badge-orange">${cnt}×</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="sgrid">
      ${[['fa-receipt','var(--orange)',ords.length,'Total Orders'],['fa-check-circle','var(--green)',ords.filter(o=>o.status==='Delivered').length,'Delivered'],['fa-clock','var(--yellow)',ords.filter(o=>o.status==='Pending').length,'Pending'],['fa-users','var(--blue)',DB.users.filter(u=>u.role==='student').length,'Students']].map(([ico,col,val,lbl]) => `
        <div class="scard"><div class="sicon" style="background:${col}22;color:${col}"><i class="fas ${ico}"></i></div><div class="sval">${val}</div><div class="slbl">${lbl}</div></div>`).join('')}
    </div>`);
}

function pgAdAllOrders() {
  const ords = [...DB.orders].reverse();
  const rows = ords.map(o => {
    const c = getCanteen(o.canteen);
    return `<tr>
      <td><strong style="color:var(--orange)">${o.id}</strong></td>
      <td>${o.sNm}</td>
      <td>${c.icon} ${c.name}</td>
      <td style="font-size:12px;max-width:160px">${o.items.map(i => `${i.nm}×${i.q}`).join(', ')}</td>
      <td><strong>₹${o.total}</strong></td>
      <td style="white-space:nowrap;font-size:12px">${o.slot}</td>
      <td><span class="badge ${SC[o.status]}">${o.status}</span></td>
      <td>
        ${SN[o.status]
          ? `<button class="btn btn-sm btn-primary" onclick="updStatus('${o.id}','${SN[o.status]}');pgAdAllOrders()"><i class="fas fa-arrow-right"></i> ${SN[o.status]}</button>`
          : `<span style="color:var(--green);font-size:12px"><i class="fas fa-check-circle"></i> Done</span>`}
      </td>
    </tr>`;
  }).join('');
  setMain(`
    <div class="ph"><h2>All Orders</h2><span class="badge badge-orange">${ords.length} total</span></div>
    <div class="twrap">
      <div style="overflow-x:auto"><table>
        <thead><tr><th>Token</th><th>Student</th><th>Canteen</th><th>Items</th><th>Total</th><th>Slot</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="8" style="text-align:center;padding:30px;color:var(--text3)">No orders</td></tr>'}</tbody>
      </table></div>
    </div>`);
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
// QuickBite – quickbite.js

// ══════════════════════════════════════
// DATABASE
// ══════════════════════════════════════
const DB = {
  canteens:[
    {id:'main',   name:'Main Canteen',  icon:'🍽️',color:'#ff6b2b',desc:'Full meals, snacks & daily specials.',hours:'8 AM – 8 PM'},
    {id:'nescafe',name:'Nescafé Corner',icon:'☕', color:'#3b82f6',desc:'Beverages, sandwiches & light bites.',hours:'7:30 AM – 9 PM'},
    {id:'juice',  name:'Juice Point',   icon:'🥤', color:'#2ecc71',desc:'Fresh juices, smoothies & healthy snacks.',hours:'9 AM – 7 PM'}
  ],
  cats:{
    main:    ['All','Breakfast','Meals','Snacks','Beverages','Combos'],
    nescafe: ['All','Beverages','Snacks','Sandwiches','Desserts'],
    juice:   ['All','Juices','Smoothies','Shakes','Healthy Bites']
  },
  menu:{
    main:[
      {id:'m1', nm:'Masala Dosa',    em:'🥞',pr:45, cat:'Breakfast',dc:'Crispy dosa with potato filling',av:true, limited:false},
      {id:'m2', nm:'Idli Sambar',    em:'🍛',pr:35, cat:'Breakfast',dc:'Soft idlis with sambar & chutney', av:true, limited:false},
      {id:'m3', nm:'Veg Thali',      em:'🍱',pr:80, cat:'Meals',    dc:'Dal, sabzi, rice, roti & papad',   av:true, limited:false},
      {id:'m4', nm:'Chicken Biryani',em:'🍚',pr:120,cat:'Meals',    dc:'Aromatic basmati with chicken',    av:true, limited:false},
      {id:'m5', nm:'Paneer Roll',    em:'🌯',pr:55, cat:'Snacks',   dc:'Spiced paneer in paratha roll',    av:true, limited:false},
      {id:'m6', nm:'Samosa',         em:'🥟',pr:15, cat:'Snacks',   dc:'Crispy fried potato pastry',       av:true, limited:false},
      {id:'m7', nm:'Masala Chai',    em:'🍵',pr:20, cat:'Beverages',dc:'Spiced Indian milk tea',           av:true, limited:false},
      {id:'m8', nm:'Lassi',          em:'🥛',pr:40, cat:'Beverages',dc:'Chilled sweet yogurt drink',       av:false,limited:false},
      {id:'m9', nm:'Meal Combo A',   em:'🍽️',pr:95,cat:'Combos',   dc:'Thali + Chai + Dessert',           av:true, limited:false},
      {id:'m10',nm:'Breakfast Combo',em:'🌅',pr:70, cat:'Combos',   dc:'Dosa + Chai + Samosa',             av:true, limited:false},
      {id:'m11',nm:'Pav Bhaji',      em:'🍞',pr:60, cat:'Snacks',   dc:'Spiced mash with buttered pav',    av:true, limited:false},
      {id:'m12',nm:'Chole Bhature',  em:'🫓',pr:65, cat:'Meals',    dc:'Bhature with chickpea curry',      av:true, limited:false}
    ],
    nescafe:[
      {id:'n1', nm:'Cappuccino',    em:'☕',pr:60,cat:'Beverages', dc:'Espresso with velvety milk foam',av:true, limited:false},
      {id:'n2', nm:'Cold Coffee',   em:'🧊',pr:65,cat:'Beverages', dc:'Chilled coffee + whipped cream',  av:true, limited:false},
      {id:'n3', nm:'Hot Chocolate', em:'🍫',pr:55,cat:'Beverages', dc:'Rich Belgian hot chocolate',       av:true, limited:false},
      {id:'n4', nm:'Club Sandwich', em:'🥪',pr:80,cat:'Sandwiches',dc:'Layered veggies & cheese',        av:true, limited:false},
      {id:'n5', nm:'Grilled Cheese',em:'🫕',pr:70,cat:'Sandwiches',dc:'Golden toasted bread & cheese',   av:true, limited:false},
      {id:'n6', nm:'Croissant',     em:'🥐',pr:50,cat:'Snacks',    dc:'Buttery flaky French pastry',     av:true, limited:false},
      {id:'n7', nm:'Cookie',        em:'🍪',pr:30,cat:'Desserts',  dc:'Freshly baked choco chip cookie', av:true, limited:false},
      {id:'n8', nm:'Brownie',       em:'🍫',pr:45,cat:'Desserts',  dc:'Fudgy walnut chocolate brownie',  av:false,limited:false},
      {id:'n9', nm:'Latte',         em:'🥤',pr:65,cat:'Beverages', dc:'Smooth espresso + steamed milk',  av:true, limited:false},
      {id:'n10',nm:'Muffin',        em:'🧁',pr:40,cat:'Snacks',    dc:'Blueberry or chocolate muffin',   av:true, limited:false}
    ],
    juice:[
      {id:'j1', nm:'Orange Juice',    em:'🍊',pr:50,cat:'Juices',       dc:'Fresh squeezed orange juice',  av:true, limited:false},
      {id:'j2', nm:'Watermelon Juice',em:'🍉',pr:45,cat:'Juices',       dc:'Chilled watermelon juice',     av:true, limited:false},
      {id:'j3', nm:'Mango Juice',     em:'🥭',pr:55,cat:'Juices',       dc:'Sweet Alphonso mango blend',   av:true, limited:false},
      {id:'j4', nm:'Mixed Fruit',     em:'🍹',pr:60,cat:'Juices',       dc:'Seasonal fruit blend',         av:false,limited:false},
      {id:'j5', nm:'Banana Shake',    em:'🍌',pr:65,cat:'Shakes',       dc:'Creamy banana milkshake',      av:true, limited:false},
      {id:'j6', nm:'Chocolate Shake', em:'🍫',pr:70,cat:'Shakes',       dc:'Rich chocolate milkshake',     av:true, limited:false},
      {id:'j7', nm:'Mango Smoothie',  em:'🥭',pr:75,cat:'Smoothies',    dc:'Mango, yogurt & honey',        av:true, limited:false},
      {id:'j8', nm:'Green Detox',     em:'🥬',pr:70,cat:'Smoothies',    dc:'Spinach, cucumber & ginger',   av:true, limited:false},
      {id:'j9', nm:'Fruit Bowl',      em:'🫐',pr:80,cat:'Healthy Bites',dc:'Seasonal fruit with honey',    av:true, limited:false},
      {id:'j10',nm:'Granola Bar',     em:'🌾',pr:40,cat:'Healthy Bites',dc:'Oats, honey & mixed nuts',     av:true, limited:false}
    ]
  },
  users:[],
  orders:[
    // seed one order so admin can see data right away
    {id:'QB100',canteen:'main',sEmail:'',sNm:'Demo Student',items:[{nm:'Masala Dosa',q:1,pr:45}],total:45,status:'Ready',slot:'12:00 PM – 12:15 PM',time:new Date().toISOString()}
  ],
  tkCtr:101
};

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
const S = {
  user:null, role:'student',
  canteen:null, cart:[], mcat:'All', mq:'',
  stuTab:'canteens', opTab:'orders', adTab:'dash'
};
const ADMIN_TOKEN = 'shruuuuuti';

// ══════════════════════════════════════
// UTILS
// ══════════════════════════════════════
function toast(msg,type='info'){
  const IC={success:'fa-check-circle',error:'fa-times-circle',info:'fa-bolt',warning:'fa-exclamation-triangle'};
  const CL={success:'var(--green)',error:'var(--red)',info:'var(--orange)',warning:'var(--yellow)'};
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<i class="fas ${IC[type]}" style="color:${CL[type]};flex-shrink:0"></i><span>${msg}</span>`;
  document.getElementById('toasts').appendChild(el);
  setTimeout(()=>{el.style.animation='tOut .3s ease forwards';setTimeout(()=>el.remove(),300);},3200);
}
function openModal(title,html,lg=false){
  document.getElementById('mtitle').textContent=title;
  document.getElementById('mbody').innerHTML=html;
  document.getElementById('mbox').className=lg?'mbox lg':'mbox';
  document.getElementById('modal-ov').classList.remove('hidden');
}
function closeModal(){document.getElementById('modal-ov').classList.add('hidden');}
function modalBg(e){if(e.target===document.getElementById('modal-ov'))closeModal();}
function gc(id){return DB.canteens.find(c=>c.id===id)||{icon:'🍽️',name:id,color:'#888'};}
function isToday(iso){const d=new Date(iso),n=new Date();return d.getDate()===n.getDate()&&d.getMonth()===n.getMonth()&&d.getFullYear()===n.getFullYear();}
const SC={Pending:'b-yellow',Preparing:'b-orange',Ready:'b-blue',Delivered:'b-green'};
const SN={Pending:'Preparing',Preparing:'Ready',Ready:'Delivered'};
const SI={Pending:'fa-clock',Preparing:'fa-fire',Ready:'fa-bell',Delivered:'fa-check'};
function sm(id,html){document.getElementById(id).innerHTML=`<div class="anim">${html}</div>`;}
function show(id){document.getElementById(id).classList.remove('hidden');}
function hide(id){document.getElementById(id).classList.add('hidden');}
function initials(nm){return nm.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);}

// ══════════════════════════════════════
// LANDING
// ══════════════════════════════════════
function goLanding(){
  show('pg-landing');
  ['pg-auth','pg-student','pg-operator','pg-admin'].forEach(hide);
}
function goAuth(role){
  S.role=role;
  hide('pg-landing');show('pg-auth');
  const map={student:['👨‍🎓','Student Portal'],operator:['🍽️','Operator Portal'],admin:['🛠️','Admin Portal']};
  document.getElementById('auth-ico').textContent=map[role][0];
  document.getElementById('auth-lbl').textContent=map[role][1];
  buildRegForm(role);
  switchTab('reg');
}
function buildRegForm(role){
  let h='';
  if(role==='student'){
    h=`
      <div class="fg"><label>Full Name</label><input id="rg-nm" placeholder="Your full name"></div>
      <div class="fg"><label>Email Address</label><input id="rg-em" type="email" placeholder="your@college.com"></div>
      <div class="fg"><label>Password</label><input id="rg-pw" type="password" placeholder="Min 6 characters"></div>`;
  } else if(role==='operator'){
    h=`
      <div class="fg"><label>Full Name</label><input id="rg-nm" placeholder="Your full name"></div>
      <div class="fg"><label>Email Address</label><input id="rg-em" type="email" placeholder="staff@college.com"></div>
      <div class="fg"><label>College / Staff ID</label><input id="rg-sid" placeholder="e.g. STAFF2024001"></div>
      <div class="fg"><label>Assigned Canteen</label>
        <select id="rg-can">
          <option value="">Select your canteen...</option>
          ${DB.canteens.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}
        </select></div>
      <div class="fg"><label>Password</label><input id="rg-pw" type="password" placeholder="Min 6 characters"></div>`;
  } else {
    h=`
      <div class="fg"><label>Full Name</label><input id="rg-nm" placeholder="Your full name"></div>
      <div class="fg"><label>Email Address</label><input id="rg-em" type="email" placeholder="admin@college.com"></div>
      <div class="fg"><label>Password</label><input id="rg-pw" type="password" placeholder="Min 6 characters"></div>
      <div class="fg">
        <label>Admin Secret Token</label>
        <input id="rg-tok" type="password" placeholder="Enter secret token">
        <div class="field-hint">Contact the platform owner for the token</div>
      </div>`;
  }
  document.getElementById('reg-body').innerHTML=h;
}
function switchTab(t){
  document.getElementById('tab-reg').classList.toggle('active',t==='reg');
  document.getElementById('tab-login').classList.toggle('active',t==='login');
  document.getElementById('frm-reg').classList.toggle('hidden',t!=='reg');
  document.getElementById('frm-login').classList.toggle('hidden',t!=='login');
}

// ══════════════════════════════════════
// REGISTER
// ══════════════════════════════════════
function doRegister(){
  const role=S.role;
  const nm=document.getElementById('rg-nm')?.value.trim();
  const em=document.getElementById('rg-em')?.value.trim().toLowerCase();
  const pw=document.getElementById('rg-pw')?.value;
  if(!nm||!em||!pw){toast('Please fill all fields','error');return;}
  if(pw.length<6){toast('Password must be at least 6 characters','error');return;}
  if(DB.users.find(u=>u.email===em)){toast('Email already registered – please sign in','error');return;}
  const u={email:em,role,nm,pw};
  if(role==='student'){
    // no college ID required per spec
  } else if(role==='operator'){
    const sid=document.getElementById('rg-sid')?.value.trim();
    const can=document.getElementById('rg-can')?.value;
    if(!sid){toast('Staff / College ID is required','error');return;}
    if(!can){toast('Please select your assigned canteen','error');return;}
    u.sid=sid; u.canteen=can;
  } else {
    const tok=document.getElementById('rg-tok')?.value;
    if(!tok){toast('Admin token is required','error');return;}
    if(tok!==ADMIN_TOKEN){toast('Invalid admin token – access denied','error');return;}
  }
  DB.users.push(u);
  // Registration done – redirect to Sign In tab (do NOT auto-login)
  toast('Account created! Please sign in to continue.','success');
  setTimeout(()=>{
    switchTab('login');
    const liEm=document.getElementById('li-em');
    const liPw=document.getElementById('li-pw');
    if(liEm) liEm.value=em;
    if(liPw){ liPw.value=''; liPw.focus(); }
  }, 700);
}

// ══════════════════════════════════════
// LOGIN
// ══════════════════════════════════════
function doLogin(){
  const em=document.getElementById('li-em').value.trim().toLowerCase();
  const pw=document.getElementById('li-pw').value;
  if(!em||!pw){toast('Please enter your email and password','error');return;}
  const u=DB.users.find(u=>u.email===em);
  if(!u){toast('No account found with this email. Please register first.','error');return;}
  if(u.pw!==pw){toast('Incorrect password. Please try again.','error');return;}
  if(u.role!==S.role){toast(`This is a ${u.role} account. Go back and select the correct role.`,'error');return;}
  S.user=u;
  toast(`Welcome back, ${u.nm.split(' ')[0]}! Logged in successfully.`,'success');
  setTimeout(launch,400);
}

// ══════════════════════════════════════
// LAUNCH
// ══════════════════════════════════════
function launch(){
  hide('pg-auth');
  const u=S.user;
  if(u.role==='student'){
    document.getElementById('s-av').textContent=initials(u.nm);
    document.getElementById('s-nm').textContent=u.nm;
    document.getElementById('s-sid').textContent=u.sid||u.email;
    show('pg-student');
    stuGo('canteens');
  } else if(u.role==='operator'){
    const c=gc(u.canteen);
    document.getElementById('op-av').textContent=initials(u.nm);
    document.getElementById('op-nm').textContent=u.nm;
    document.getElementById('op-can-lbl').textContent=c.icon+' '+c.name;
    document.getElementById('op-can-sb').textContent=c.icon+' '+c.name;
    show('pg-operator');
    opGo('orders');
  } else {
    document.getElementById('ad-av').textContent=initials(u.nm);
    document.getElementById('ad-nm').textContent=u.nm;
    show('pg-admin');
    adGo('dash');
  }
}

// ══════════════════════════════════════
// LOGOUT (shared confirm modal)
// ══════════════════════════════════════
function doLogout(){
  openModal('Confirm Logout',`
    <div style="text-align:center;padding:10px 0">
      <div style="font-size:48px;margin-bottom:14px">👋</div>
      <p style="font-size:15px;color:var(--txt2);margin-bottom:22px">Are you sure you want to logout?</p>
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn btn-sec" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="confirmLogout()"><i class="fas fa-sign-out-alt"></i> Logout</button>
      </div>
    </div>`);
}
function confirmLogout(){
  closeModal();
  const role=S.user?.role||'student';
  ['pg-student','pg-operator','pg-admin'].forEach(hide);
  S.user=null; S.canteen=null; S.cart=[]; S.stuTab='canteens';
  updateBadge();
  goLanding();
  toast('Logged out successfully','info');
}

// ══════════════════════════════════════
// STUDENT NAV
// ══════════════════════════════════════
function stuGo(tab){
  S.stuTab=tab;
  ['canteens','menu','orders','profile'].forEach(t=>{
    document.getElementById('sn-'+t)?.classList.toggle('active',t===tab);
  });
  if(tab==='canteens') pgCanteens();
  else if(tab==='menu'){if(S.canteen)pgMenu();else pgCanteens();}
  else if(tab==='orders') pgMyOrders();
  else if(tab==='profile') pgProfile();
}

// ── CANTEENS ──
function pgCanteens(){
  const cards=DB.canteens.map(c=>`
    <div class="c-card" onclick="pickCanteen('${c.id}')">
      <div class="c-ico" style="background:${c.color}22;color:${c.color}">${c.icon}</div>
      <h3>${c.name}</h3><p>${c.desc}</p>
      <div class="c-meta">
        <span class="c-hrs"><i class="fas fa-clock"></i> ${c.hours}</span>
        <span class="badge b-green"><i class="fas fa-circle" style="font-size:6px"></i> Open</span>
      </div>
    </div>`).join('');
  sm('s-main',`
    <div class="c-hero"><h2>Choose Your Canteen 🍽️</h2><p>Select a canteen to browse menu & place an order</p></div>
    <div class="c-grid">${cards}</div>`);
}
function pickCanteen(id){
  S.canteen=id; S.cart=[]; S.mcat='All'; S.mq='';
  updateBadge(); toast(`${gc(id).name} selected`,'success');
  stuGo('menu');
}

// ── MENU ──
function pgMenu(){
  if(!S.canteen){stuGo('canteens');return;}
  const c=gc(S.canteen), cats=DB.cats[S.canteen], all=DB.menu[S.canteen];
  const list=all.filter(i=>(S.mcat==='All'||i.cat===S.mcat)&&(!S.mq||i.nm.toLowerCase().includes(S.mq.toLowerCase())));
  const catBar=cats.map(x=>`<div class="cpill ${x===S.mcat?'active':''}" onclick="setMCat('${x}')">${x}</div>`).join('');
  const grid=list.length?list.map(i=>`
    <div class="mi ${i.av?'':'oos'}">
      <span class="mi-em">${i.em}</span>
      <div class="mi-nm">${i.nm}</div>
      <div class="mi-dc">${i.dc}</div>
      <div style="margin-bottom:8px">
        ${i.av?
          (i.limited?'<span class="badge b-yellow"><i class="fas fa-exclamation-triangle"></i> Limited</span>':
                     '<span class="badge b-green">Available</span>'):
          '<span class="badge b-red">Out of Stock</span>'}
      </div>
      <div class="mi-ft">
        <div class="mi-pr">₹${i.pr} <small>each</small></div>
        <button class="add-btn" onclick="addCart('${i.id}')" ${!i.av?'disabled':''}>+</button>
      </div>
    </div>`).join(''):`<div style="grid-column:1/-1;text-align:center;padding:50px;color:var(--txt3)"><i class="fas fa-search" style="font-size:34px;display:block;margin-bottom:10px"></i>No items found</div>`;
  sm('s-main',`
    <div class="ph">
      <div style="display:flex;align-items:center;gap:10px">
        <button class="btn btn-sec btn-sm" onclick="stuGo('canteens')"><i class="fas fa-arrow-left"></i></button>
        <div><h2>${c.icon} ${c.name}</h2><span style="font-size:12px;color:var(--txt2)">${all.filter(i=>i.av).length} items available</span></div>
      </div>
      <div class="sw"><i class="fas fa-search"></i><input type="text" placeholder="Search..." value="${S.mq}" oninput="S.mq=this.value;pgMenu()" style="width:175px"></div>
    </div>
    <div class="catbar">${catBar}</div>
    <div class="mgrid">${grid}</div>`);
}
function setMCat(c){S.mcat=c;pgMenu();}

// ── MY ORDERS ──
function pgMyOrders(){
  const mine=DB.orders.filter(o=>o.sEmail===S.user.email||o.sNm===S.user.nm).reverse();
  const steps=['Pending','Preparing','Ready','Delivered'];
  const cards=mine.length?mine.map(o=>{
    const c=gc(o.canteen), si=steps.indexOf(o.status);
    const tl=steps.map((s,i)=>`
      <div class="tls ${i<si?'done':i===si?'cur':''}">
        <div class="tld"><i class="fas ${SI[s]}" style="font-size:11px"></i></div>
        <label>${s}</label>
      </div>`).join('');
    return `
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:18px;margin-bottom:13px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:13px;flex-wrap:wrap;gap:7px">
          <div>
            <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:var(--orange)">${o.id}</div>
            <div style="font-size:12px;color:var(--txt2)">${c.icon} ${c.name} · <i class="fas fa-clock"></i> ${o.slot}</div>
          </div>
          <span class="badge ${SC[o.status]}">${o.status}</span>
        </div>
        <div class="tl">${tl}</div>
        <div style="background:var(--bg3);border-radius:var(--rs);padding:11px;margin-top:13px">
          ${o.items.map(i=>`<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px"><span>${i.nm} × ${i.q}</span><span>₹${i.pr*i.q}</span></div>`).join('')}
          <div style="display:flex;justify-content:space-between;font-weight:700;margin-top:7px;border-top:1px solid var(--bdr);padding-top:7px"><span>Total</span><span style="color:var(--orange)">₹${o.total}</span></div>
        </div>
      </div>`;
  }).join(''):`
    <div style="text-align:center;padding:60px;color:var(--txt3)">
      <i class="fas fa-receipt" style="font-size:42px;display:block;margin-bottom:13px"></i>
      <div style="font-size:17px;font-weight:700;margin-bottom:5px">No orders yet</div>
      <p>Place your first order from the menu!</p>
      <button class="btn btn-primary" style="margin-top:18px" onclick="stuGo('canteens')">Browse Canteens</button>
    </div>`;
  sm('s-main',`<div class="ph"><h2>My Orders</h2><button class="btn btn-primary btn-sm" onclick="stuGo('canteens')"><i class="fas fa-plus"></i> New Order</button></div>${cards}`);
}

// ── PROFILE ──
function pgProfile(){
  const u=S.user;
  const mine=DB.orders.filter(o=>o.sEmail===u.email);
  const spent=mine.reduce((s,o)=>s+o.total,0);
  sm('s-main',`
    <div class="ph"><h2>My Profile</h2></div>
    <div style="max-width:480px">
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:26px;margin-bottom:14px">
        <div style="width:68px;height:68px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:#fff;margin-bottom:14px">${initials(u.nm)}</div>
        <h3 style="font-size:20px;margin-bottom:4px">${u.nm}</h3>
        <div style="font-size:13px;color:var(--txt2);margin-bottom:3px"><i class="fas fa-envelope"></i> ${u.email}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px;padding-top:16px;border-top:1px solid var(--bdr)">
          <div style="text-align:center;padding:10px;background:var(--bg3);border-radius:var(--rs)">
            <div style="font-size:22px;font-weight:800;font-family:'Syne',sans-serif;color:var(--orange)">${mine.length}</div>
            <div style="font-size:11px;color:var(--txt2)">Total Orders</div>
          </div>
          <div style="text-align:center;padding:10px;background:var(--bg3);border-radius:var(--rs)">
            <div style="font-size:22px;font-weight:800;font-family:'Syne',sans-serif;color:var(--green)">₹${spent}</div>
            <div style="font-size:11px;color:var(--txt2)">Total Spent</div>
          </div>
        </div>
      </div>
    </div>`);
}

// ══════════════════════════════════════
// CART
// ══════════════════════════════════════
function addCart(id){
  const item=DB.menu[S.canteen].find(i=>i.id===id);
  if(!item||!item.av)return;
  const ex=S.cart.find(c=>c.id===id);
  if(ex)ex.q++;else S.cart.push({...item,q:1});
  updateBadge();drawCart();toast(`${item.nm} added`,'success');
}
function updateBadge(){
  const n=S.cart.reduce((s,i)=>s+i.q,0);
  const b=document.getElementById('cart-badge');
  if(b){b.textContent=n;b.classList.toggle('hidden',n===0);}
}
function drawCart(){
  const bd=document.getElementById('cart-body-el');
  const ft=document.getElementById('cart-foot-el');
  if(!S.cart.length){
    bd.innerHTML=`<div class="cart-empty-msg"><i class="fas fa-shopping-cart"></i><div style="font-size:14px;font-weight:600;margin-bottom:3px">Cart is empty</div><p style="font-size:12px">Add items from the menu</p></div>`;
    ft.classList.add('hidden');return;
  }
  const total=S.cart.reduce((s,i)=>s+i.pr*i.q,0);
  bd.innerHTML=S.cart.map(i=>`
    <div class="ci">
      <span class="ci-em">${i.em}</span>
      <div class="ci-info"><div class="ci-nm">${i.nm}</div><div class="ci-pr">₹${i.pr*i.q}</div></div>
      <div class="qc">
        <button class="qb" onclick="chgQ('${i.id}',-1)"><i class="fas fa-minus" style="font-size:9px"></i></button>
        <span class="qv">${i.q}</span>
        <button class="qb" onclick="chgQ('${i.id}',1)"><i class="fas fa-plus" style="font-size:9px"></i></button>
      </div>
    </div>`).join('');
  ft.classList.remove('hidden');
  document.getElementById('cart-total-el').textContent=`₹${total}`;
}
function chgQ(id,d){
  const idx=S.cart.findIndex(i=>i.id===id);
  if(idx<0)return;
  S.cart[idx].q+=d;
  if(S.cart[idx].q<=0)S.cart.splice(idx,1);
  updateBadge();drawCart();
}
function toggleCart(){
  const sb=document.getElementById('cart-sb'),ov=document.getElementById('cart-ov');
  const open=sb.classList.toggle('open');
  ov.classList.toggle('show',open);
  if(open)drawCart();
}
function placeOrder(){
  if(!S.cart.length){toast('Cart is empty','error');return;}
  const slot=document.getElementById('slot-sel').value;
  if(!slot){toast('Select a pickup time slot','error');return;}
  const token=`QB${DB.tkCtr++}`;
  const order={
    id:token,canteen:S.canteen,
    sEmail:S.user.email,sNm:S.user.nm,
    items:S.cart.map(i=>({nm:i.nm,q:i.q,pr:i.pr})),
    total:S.cart.reduce((s,i)=>s+i.pr*i.q,0),
    status:'Pending',slot,time:new Date().toISOString()
  };
  DB.orders.push(order);
  S.cart=[];updateBadge();drawCart();
  document.getElementById('cart-sb').classList.remove('open');
  document.getElementById('cart-ov').classList.remove('show');
  const c=gc(order.canteen);
  openModal('Order Placed! 🎉',`
    <div class="tok-box">
      <div style="font-size:12px;color:var(--txt2);margin-bottom:5px">Your Token Number</div>
      <div class="tok-num">${token}</div>
      <div class="tok-sub">Show this token at the counter during pickup</div>
    </div>
    <div style="margin-top:16px;padding:13px;background:var(--bg3);border-radius:var(--rs)">
      <div style="font-size:13px;color:var(--txt2);margin-bottom:5px"><i class="fas fa-store" style="color:var(--orange)"></i> ${c.icon} ${c.name}</div>
      <div style="font-size:13px;color:var(--txt2)"><i class="fas fa-clock" style="color:var(--orange)"></i> Pickup: ${slot}</div>
    </div>
    <button class="btn btn-primary btn-full" style="margin-top:16px" onclick="closeModal();stuGo('orders')">
      <i class="fas fa-eye"></i> Track My Order
    </button>`);
}

// ══════════════════════════════════════
// OPERATOR NAV
// ══════════════════════════════════════
function opGo(tab){
  S.opTab=tab;
  ['orders','menu','verify'].forEach(t=>{
    document.getElementById('sn-op-'+t)?.classList.toggle('active',t===tab);
  });
  if(tab==='orders') opOrders();
  else if(tab==='menu') opMenu();
  else if(tab==='verify') opVerify();
}

// ── OPERATOR ORDERS ──
function opOrders(){
  const cid=S.user.canteen, c=gc(cid);
  const today=DB.orders.filter(o=>o.canteen===cid&&isToday(o.time)).sort((a,b)=>b.time.localeCompare(a.time));
  const all=DB.orders.filter(o=>o.canteen===cid).sort((a,b)=>b.time.localeCompare(a.time));
  const pend=today.filter(o=>o.status==='Pending').length;
  const prep=today.filter(o=>o.status==='Preparing').length;
  const rdy =today.filter(o=>o.status==='Ready').length;
  const dlv =today.filter(o=>o.status==='Delivered').length;

  const mkRow=o=>`
    <tr>
      <td><strong style="color:var(--orange);font-family:'Syne',sans-serif">${o.id}</strong></td>
      <td>
        <div style="font-weight:600">${o.sNm}</div>
        <div style="font-size:11px;color:var(--txt3)">${o.sEmail||'—'}</div>
      </td>
      <td style="font-size:12px;max-width:160px">${o.items.map(i=>`${i.nm}×${i.q}`).join(', ')}</td>
      <td><strong style="color:var(--orange)">₹${o.total}</strong></td>
      <td style="font-size:12px;white-space:nowrap">${o.slot}</td>
      <td><span class="badge ${SC[o.status]}">${o.status}</span></td>
      <td>
        <div class="sa">
          ${o.status==='Pending'   ?`<button class="btn btn-sm btn-warn" onclick="updSt('${o.id}','Preparing');opOrders()"><i class="fas fa-fire"></i> Preparing</button>`:''}
          ${o.status==='Preparing' ?`<button class="btn btn-sm btn-blue" onclick="updSt('${o.id}','Ready');opOrders()"><i class="fas fa-bell"></i> Ready</button>`:''}
          ${o.status==='Ready'     ?`<button class="btn btn-sm btn-success" onclick="updSt('${o.id}','Delivered');opOrders()"><i class="fas fa-check"></i> Delivered</button>`:''}
          ${o.status==='Delivered' ?`<span style="color:var(--green);font-size:12px;font-weight:600"><i class="fas fa-check-circle"></i> Done</span>`:''}
          <button class="btn btn-sm btn-sec" onclick="opOrderDetail('${o.id}')"><i class="fas fa-eye"></i></button>
        </div>
      </td>
    </tr>`;

  sm('op-main',`
    <div class="ph"><h2>${c.icon} Incoming Orders</h2></div>
    <div class="sgrid">
      ${[['fa-clock','var(--yellow)',pend,'Pending'],['fa-fire','var(--orange)',prep,'Preparing'],['fa-bell','var(--blue)',rdy,'Ready'],['fa-check-circle','var(--green)',dlv,'Delivered']].map(([ico,col,val,lbl])=>`
        <div class="scard">
          <div class="sico" style="background:${col}22;color:${col}"><i class="fas ${ico}"></i></div>
          <div class="sval">${val}</div><div class="slbl">${lbl}</div>
        </div>`).join('')}
    </div>
    <!-- TODAY -->
    <div class="tw">
      <div class="tr-head"><h3>Today's Orders</h3><span class="badge b-orange">${today.length} orders</span></div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Token</th><th>Student</th><th>Items</th><th>Total</th><th>Slot</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${today.length?today.map(mkRow).join(''):'<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--txt3)">No orders today yet</td></tr>'}</tbody>
        </table>
      </div>
    </div>
    <!-- ALL -->
    <div class="tw">
      <div class="tr-head"><h3>All Orders (History)</h3><span class="badge b-blue">${all.length} total</span></div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Token</th><th>Student</th><th>Items</th><th>Total</th><th>Slot</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${all.length?all.map(mkRow).join(''):'<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--txt3)">No orders yet</td></tr>'}</tbody>
        </table>
      </div>
    </div>`);
}

function opOrderDetail(oid){
  const o=DB.orders.find(x=>x.id===oid);
  if(!o)return;
  const c=gc(o.canteen);
  openModal(`Order – ${o.id}`,`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:var(--orange)">${o.id}</div>
      <span class="badge ${SC[o.status]}" style="font-size:14px">${o.status}</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div style="padding:12px;background:var(--bg3);border-radius:var(--rs)">
        <div style="font-size:11px;color:var(--txt3);margin-bottom:3px">STUDENT</div>
        <div style="font-weight:600">${o.sNm}</div>
        <div style="font-size:12px;color:var(--txt2)">${o.sEmail||'—'}</div>
      </div>
      <div style="padding:12px;background:var(--bg3);border-radius:var(--rs)">
        <div style="font-size:11px;color:var(--txt3);margin-bottom:3px">PICKUP SLOT</div>
        <div style="font-weight:600">${o.slot}</div>
        <div style="font-size:12px;color:var(--txt2)">${c.icon} ${c.name}</div>
      </div>
    </div>
    <div style="background:var(--bg3);border-radius:var(--rs);padding:14px;margin-bottom:16px">
      <div style="font-size:11px;color:var(--txt3);margin-bottom:10px;font-weight:700">ORDER ITEMS</div>
      ${o.items.map(i=>`
        <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:8px">
          <span>${i.nm} <span style="color:var(--txt3)">×${i.q}</span></span>
          <span style="font-weight:600">₹${i.pr*i.q}</span>
        </div>`).join('')}
      <div style="display:flex;justify-content:space-between;font-weight:800;font-size:16px;margin-top:10px;border-top:1px solid var(--bdr);padding-top:10px">
        <span>Total</span><span style="color:var(--orange)">₹${o.total}</span>
      </div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${o.status==='Pending'?   `<button class="btn btn-warn btn-full" onclick="updSt('${o.id}','Preparing');closeModal();opOrders()"><i class="fas fa-fire"></i> Mark Preparing</button>`:''}
      ${o.status==='Preparing'? `<button class="btn btn-blue btn-full" onclick="updSt('${o.id}','Ready');closeModal();opOrders()"><i class="fas fa-bell"></i> Mark Ready</button>`:''}
      ${o.status==='Ready'?     `<button class="btn btn-success btn-full" onclick="updSt('${o.id}','Delivered');closeModal();opOrders()"><i class="fas fa-check"></i> Mark Delivered</button>`:''}
      ${o.status==='Delivered'? `<div style="text-align:center;width:100%;padding:12px;background:var(--gdim);border-radius:var(--rs);color:var(--green);font-weight:600"><i class="fas fa-check-circle"></i> Order Completed</div>`:''}
    </div>`);
}

// ── OPERATOR MENU ──
function opMenu(){
  const cid=S.user.canteen, c=gc(cid), items=DB.menu[cid];
  const cards=items.map(i=>`
    <div class="op-item">
      <div class="op-item-top">
        <span class="op-em">${i.em}</span>
        <div class="op-inf">
          <div class="op-nm">${i.nm}</div>
          <div class="op-cat">${i.cat}</div>
        </div>
        <span class="badge ${i.av?'b-green':'b-red'}" style="flex-shrink:0">${i.av?'Available':'Out of Stock'}</span>
      </div>
      <!-- PRICE CONTROL -->
      <div class="price-row">
        <span class="price-lbl"><i class="fas fa-rupee-sign"></i> Price:</span>
        <div class="price-ctrl">
          <button class="pbtn" onclick="chgPrice('${cid}','${i.id}',-5)" title="Decrease by ₹5">−</button>
          <span class="pval" id="pv-${i.id}">₹${i.pr}</span>
          <button class="pbtn" onclick="chgPrice('${cid}','${i.id}',5)" title="Increase by ₹5">+</button>
        </div>
        <button class="btn btn-sec btn-sm" onclick="setPriceModal('${cid}','${i.id}')" title="Set custom price"><i class="fas fa-edit"></i></button>
      </div>
      <!-- ACTION BUTTONS -->
      <div class="op-btns">
        <button class="btn btn-sm ${i.av?'btn-danger':'btn-success'}" onclick="togAv('${cid}','${i.id}')">
          <i class="fas ${i.av?'fa-ban':'fa-check'}"></i> ${i.av?'Out of Stock':'Available'}
        </button>
        <button class="btn btn-sm ${i.limited?'btn-sec':'btn-warn'}" onclick="togLim('${cid}','${i.id}')">
          <i class="fas fa-exclamation-triangle"></i> ${i.limited?'Remove Limited':'Set Limited'}
        </button>
      </div>
      ${i.limited?`<div style="margin-top:8px;padding:7px 11px;background:var(--ydim);border-radius:var(--rs);font-size:12px;color:var(--yellow)"><i class="fas fa-exclamation-triangle"></i> Limited availability</div>`:''}
    </div>`).join('');
  sm('op-main',`
    <div class="ph">
      <div><h2>${c.icon} Menu & Prices</h2><span style="font-size:13px;color:var(--txt2)">${items.filter(i=>i.av).length}/${items.length} available</span></div>
      <button class="btn btn-primary btn-sm" onclick="opAddItemModal('${cid}')"><i class="fas fa-plus"></i> Add Food Item</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">${cards}</div>`);
}

function chgPrice(cid,id,d){
  const item=DB.menu[cid].find(i=>i.id===id);
  if(!item)return;
  item.pr=Math.max(5,item.pr+d);
  const el=document.getElementById('pv-'+id);
  if(el)el.textContent='₹'+item.pr;
  toast(`${item.nm} price → ₹${item.pr}`,'info');
}
function setPriceModal(cid,id){
  const item=DB.menu[cid].find(i=>i.id===id);
  openModal(`Edit Price – ${item.nm}`,`
    <div class="fg"><label>New Price (₹)</label><input id="np-v" type="number" min="5" value="${item.pr}" placeholder="Enter price"></div>
    <button class="btn btn-primary btn-full" onclick="savePriceModal('${cid}','${id}')"><i class="fas fa-save"></i> Save Price</button>`);
}
function savePriceModal(cid,id){
  const v=parseInt(document.getElementById('np-v').value)||0;
  if(v<5){toast('Price must be at least ₹5','error');return;}
  const item=DB.menu[cid].find(i=>i.id===id);
  item.pr=v; toast(`${item.nm} price set to ₹${v}`,'success');
  closeModal();opMenu();
}
function togAv(cid,id){
  const item=DB.menu[cid].find(i=>i.id===id);
  if(!item)return;
  item.av=!item.av;
  toast(`${item.nm} → ${item.av?'Available':'Out of Stock'}`,'info');
  opMenu();
}
function togLim(cid,id){
  const item=DB.menu[cid].find(i=>i.id===id);
  if(!item)return;
  item.limited=!item.limited;
  toast(`${item.nm} → ${item.limited?'Limited availability':'Normal availability'}`,'info');
  opMenu();
}
function opAddItemModal(cid){
  const cats=DB.cats[cid].filter(x=>x!=='All');
  openModal('Add Food Item',`
    <div class="frow">
      <div class="fg"><label>Item Name</label><input id="ai-nm" placeholder="e.g. Paneer Tikka"></div>
      <div class="fg"><label>Emoji</label><input id="ai-em" placeholder="🍽️" style="font-size:18px"></div>
    </div>
    <div class="frow">
      <div class="fg"><label>Price (₹)</label><input id="ai-pr" type="number" min="5" placeholder="0"></div>
      <div class="fg"><label>Category</label><select id="ai-cat">${cats.map(x=>`<option>${x}</option>`).join('')}</select></div>
    </div>
    <div class="fg"><label>Description</label><input id="ai-dc" placeholder="Short description"></div>
    <button class="btn btn-primary btn-full" onclick="opSaveItem('${cid}')"><i class="fas fa-plus"></i> Add Item</button>`);
}
function opSaveItem(cid){
  const nm=document.getElementById('ai-nm').value.trim();
  const em=document.getElementById('ai-em').value.trim()||'🍽️';
  const pr=parseInt(document.getElementById('ai-pr').value)||0;
  const cat=document.getElementById('ai-cat').value;
  const dc=document.getElementById('ai-dc').value.trim();
  if(!nm||!pr){toast('Name & price are required','error');return;}
  DB.menu[cid].push({id:cid[0]+Date.now(),nm,em,pr,cat,dc,av:true,limited:false});
  toast(`${nm} added!`,'success');closeModal();opMenu();
}

// ── OPERATOR VERIFY ──
function opVerify(){
  const cid=S.user.canteen;
  const readyList=DB.orders.filter(o=>o.canteen===cid&&(o.status==='Ready'||o.status==='Preparing')).sort((a,b)=>a.slot.localeCompare(b.slot));
  const rows=readyList.length?readyList.map(o=>`
    <tr>
      <td><strong style="color:var(--orange)">${o.id}</strong></td>
      <td>${o.sNm}</td>
      <td style="font-size:12px">${o.items.map(i=>`${i.nm}×${i.q}`).join(', ')}</td>
      <td>₹${o.total}</td>
      <td style="font-size:12px">${o.slot}</td>
      <td><span class="badge ${SC[o.status]}">${o.status}</span></td>
      <td>
        ${o.status==='Ready'
          ?`<button class="btn btn-sm btn-success" onclick="updSt('${o.id}','Delivered');opVerify()"><i class="fas fa-check"></i> Delivered</button>`
          :`<button class="btn btn-sm btn-blue" onclick="updSt('${o.id}','Ready');opVerify()"><i class="fas fa-bell"></i> Ready</button>`}
      </td>
    </tr>`).join(''):`<tr><td colspan="7" style="text-align:center;padding:28px;color:var(--txt3)">No orders ready for pickup</td></tr>`;
  sm('op-main',`
    <div class="ph"><h2>Verify Token</h2></div>
    <div class="vbox">
      <label style="margin-bottom:8px;font-size:14px">Enter token number shown by student</label>
      <div style="display:flex;gap:9px;margin-bottom:12px">
        <input id="vt" placeholder="QB101" style="text-transform:uppercase;font-weight:700;font-size:18px;letter-spacing:3px">
        <button class="btn btn-primary" onclick="doVerify()"><i class="fas fa-search"></i> Verify</button>
      </div>
      <div id="vt-res"></div>
    </div>
    <div class="tw">
      <div class="tr-head"><h3>Ready / Preparing</h3><span class="badge b-blue">${readyList.length}</span></div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Token</th><th>Student</th><th>Items</th><th>Total</th><th>Slot</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}
function doVerify(){
  const tok=document.getElementById('vt').value.trim().toUpperCase();
  const el=document.getElementById('vt-res');
  if(!tok){el.innerHTML='';return;}
  const o=DB.orders.find(o=>o.id===tok&&o.canteen===S.user.canteen);
  if(!o){
    el.innerHTML=`<div style="padding:12px;background:var(--rdim);border:1px solid rgba(231,76,60,.2);border-radius:var(--rs);color:var(--red)"><i class="fas fa-times-circle"></i> Token <strong>${tok}</strong> not found for this canteen.</div>`;
    return;
  }
  const act=SN[o.status]
    ?`<button class="btn btn-primary" style="margin-top:9px" onclick="updSt('${o.id}','${SN[o.status]}');opVerify()"><i class="fas fa-arrow-right"></i> Move to ${SN[o.status]}</button>`
    :`<span style="color:var(--green);font-weight:700"><i class="fas fa-check-circle"></i> Fully Delivered</span>`;
  el.innerHTML=`
    <div style="padding:14px;background:var(--gdim);border:1px solid rgba(46,204,113,.2);border-radius:var(--rs)">
      <div style="font-weight:700;color:var(--green);margin-bottom:7px"><i class="fas fa-check-circle"></i> Valid Token: ${o.id}</div>
      <div style="font-size:13px;color:var(--txt2);margin-bottom:3px"><i class="fas fa-user"></i> ${o.sNm}</div>
      <div style="font-size:13px;color:var(--txt2);margin-bottom:3px"><i class="fas fa-clock"></i> ${o.slot}</div>
      <div style="font-size:13px;color:var(--txt2);margin-bottom:6px"><i class="fas fa-list"></i> ${o.items.map(i=>`${i.nm}×${i.q}`).join(', ')}</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:10px">₹${o.total} &nbsp;·&nbsp; <span class="badge ${SC[o.status]}">${o.status}</span></div>
      ${act}
    </div>`;
}
function updSt(oid,ns){
  const o=DB.orders.find(o=>o.id===oid);
  if(!o)return; o.status=ns;
  toast(`${oid} → ${ns}`,'success');
}

// ══════════════════════════════════════
// ADMIN NAV
// ══════════════════════════════════════
function adGo(tab){
  S.adTab=tab;
  ['dash','users','ops','orders','canteens'].forEach(t=>{
    document.getElementById('sn-ad-'+t)?.classList.toggle('active',t===tab);
  });
  if(tab==='dash')     adDash();
  else if(tab==='users')    adUsers();
  else if(tab==='ops')      adOps();
  else if(tab==='orders')   adOrders();
  else if(tab==='canteens') adCanteens();
}

// ── ADMIN DASHBOARD ──
function adDash(){
  const ords=DB.orders, rev=ords.reduce((s,o)=>s+o.total,0);
  const stus=DB.users.filter(u=>u.role==='student').length;
  const ops=DB.users.filter(u=>u.role==='operator').length;
  const dlv=ords.filter(o=>o.status==='Delivered').length;
  const pend=ords.filter(o=>o.status==='Pending').length;
  const prep=ords.filter(o=>o.status==='Preparing').length;
  const rdy=ords.filter(o=>o.status==='Ready').length;
  const cRev={};
  DB.canteens.forEach(c=>cRev[c.id]=0);
  ords.forEach(o=>{cRev[o.canteen]=(cRev[o.canteen]||0)+o.total;});
  const maxRev=Math.max(...Object.values(cRev),1);
  const iCnt={};
  ords.forEach(o=>o.items.forEach(i=>{iCnt[i.nm]=(iCnt[i.nm]||0)+i.q;}));
  const pop=Object.entries(iCnt).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxPop=pop[0]?.[1]||1;

  sm('ad-main',`
    <div class="ph"><h2>Admin Dashboard</h2><span class="badge b-purple">Full Access</span></div>
    <div class="sgrid">
      ${[['fa-receipt','var(--orange)',ords.length,'Total Orders'],
         ['fa-rupee-sign','var(--green)',`₹${rev}`,'Revenue'],
         ['fa-graduation-cap','var(--blue)',stus,'Students'],
         ['fa-utensils','var(--purple)',ops,'Operators'],
         ['fa-check-double','var(--yellow)',dlv,'Delivered'],
         ['fa-clock','var(--red)',pend,'Pending']].map(([ico,col,val,lbl])=>`
        <div class="scard">
          <div class="sico" style="background:${col}22;color:${col}"><i class="fas ${ico}"></i></div>
          <div class="sval">${val}</div><div class="slbl">${lbl}</div>
        </div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px;margin-bottom:20px">
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:18px">
        <h3 style="font-size:15px;margin-bottom:13px">Revenue by Canteen</h3>
        <div class="bchart">
          ${DB.canteens.map(c=>{const rv=cRev[c.id]||0,h=Math.max(Math.round(rv/maxRev*110),4);return `<div class="bcol"><div class="bbar" style="height:${h}px;background:${c.color}44"><span class="bv" style="color:${c.color}">₹${rv}</span></div><div class="bl">${c.name.split(' ')[0]}</div></div>`;}).join('')}
        </div>
      </div>
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:18px">
        <h3 style="font-size:15px;margin-bottom:13px">Order Breakdown</h3>
        ${[['Pending',pend,'var(--yellow)'],['Preparing',prep,'var(--orange)'],['Ready',rdy,'var(--blue)'],['Delivered',dlv,'var(--green)']].map(([lbl,val,col])=>{
          const pct=Math.round(val/Math.max(ords.length,1)*100);
          return `<div style="margin-bottom:11px"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span style="color:var(--txt2)">${lbl}</span><span style="font-weight:700">${val}</span></div><div class="prg"><div class="prg-bar" style="width:${pct}%;background:${col}"></div></div></div>`;
        }).join('')}
      </div>
    </div>
    ${pop.length?`<div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:18px">
      <h3 style="font-size:15px;margin-bottom:13px">🔥 Popular Items</h3>
      ${pop.map(([nm,cnt],i)=>`
        <div class="pop-i">
          <div class="pop-rk">${i+1}</div>
          <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">${nm}</div><div style="font-size:12px;color:var(--txt2)">${cnt} ordered</div></div>
          <div style="width:80px;height:5px;background:var(--bdr);border-radius:3px;overflow:hidden"><div style="height:100%;width:${Math.round(cnt/maxPop*100)}%;background:var(--orange);border-radius:3px"></div></div>
        </div>`).join('')}
    </div>`:''}
  `);
}

// ── ADMIN VIEW USERS ──
function adUsers(){
  const stus=DB.users.filter(u=>u.role==='student');
  const rows=stus.length?stus.map(u=>`
    <tr>
      <td><div style="display:flex;align-items:center;gap:7px">
        <div style="width:28px;height:28px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">${initials(u.nm)}</div>
        <div><div style="font-weight:600">${u.nm}</div></div>
      </div></td>
      <td>${u.email}</td>
      <td><span class="badge b-green">Active</span></td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="adDelUser('${u.email}')"><i class="fas fa-trash"></i> Remove</button>
      </td>
    </tr>`).join(''):`<tr><td colspan="4" style="text-align:center;padding:32px;color:var(--txt3)">No students registered yet</td></tr>`;
  sm('ad-main',`
    <div class="ph"><h2>All Users (Students)</h2><span class="badge b-green">${stus.length} registered</span></div>
    <div class="tw">
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}
function adDelUser(email){
  if(!confirm('Remove this student?'))return;
  const idx=DB.users.findIndex(u=>u.email===email);
  if(idx>=0)DB.users.splice(idx,1);
  toast('Student removed','info');adUsers();
}

// ── ADMIN VIEW OPERATORS ──
function adOps(){
  const ops=DB.users.filter(u=>u.role==='operator');
  const rows=ops.length?ops.map(u=>{
    const c=gc(u.canteen);
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:7px">
        <div style="width:28px;height:28px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">${initials(u.nm)}</div>
        <div><div style="font-weight:600">${u.nm}</div></div>
      </div></td>
      <td>${u.email}</td>
      <td>${u.sid||'—'}</td>
      <td>${c.icon} ${c.name}</td>
      <td><span class="badge b-blue">Operator</span></td>
      <td>
        <button class="btn btn-sm btn-sec" onclick="adReassign('${u.email}')"><i class="fas fa-exchange-alt"></i> Reassign</button>
        <button class="btn btn-sm btn-danger" style="margin-left:4px" onclick="adDelUser('${u.email}')"><i class="fas fa-trash"></i></button>
      </td>
    </tr>`;
  }).join(''):`<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--txt3)">No operators registered yet</td></tr>`;
  sm('ad-main',`
    <div class="ph"><h2>All Operators</h2><span class="badge b-blue">${ops.length} registered</span></div>
    <div class="tw">
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Staff ID</th><th>Canteen</th><th>Role</th><th>Actions</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}
function adReassign(email){
  const u=DB.users.find(x=>x.email===email);
  openModal(`Reassign: ${u.nm}`,`
    <div class="fg"><label>Assign to Canteen</label>
      <select id="rc-sel">${DB.canteens.map(c=>`<option value="${c.id}" ${c.id===u.canteen?'selected':''}>${c.icon} ${c.name}</option>`).join('')}</select>
    </div>
    <button class="btn btn-primary btn-full" onclick="adSaveReassign('${email}')"><i class="fas fa-save"></i> Save</button>`);
}
function adSaveReassign(email){
  const u=DB.users.find(x=>x.email===email);
  u.canteen=document.getElementById('rc-sel').value;
  toast(`${u.nm} reassigned to ${gc(u.canteen).name}`,'success');
  closeModal();adOps();
}

// ── ADMIN VIEW ALL ORDERS ──
function adOrders(){
  const ords=[...DB.orders].reverse();
  const rows=ords.map(o=>{
    const c=gc(o.canteen);
    return `<tr>
      <td><strong style="color:var(--orange)">${o.id}</strong></td>
      <td>${o.sNm}</td>
      <td>${c.icon} ${c.name}</td>
      <td style="font-size:12px;max-width:150px">${o.items.map(i=>`${i.nm}×${i.q}`).join(', ')}</td>
      <td><strong>₹${o.total}</strong></td>
      <td style="font-size:12px">${o.slot}</td>
      <td><span class="badge ${SC[o.status]}">${o.status}</span></td>
      <td>
        ${SN[o.status]
          ?`<button class="btn btn-sm btn-primary" onclick="updSt('${o.id}','${SN[o.status]}');adOrders()"><i class="fas fa-arrow-right"></i> ${SN[o.status]}</button>`
          :`<span style="color:var(--green);font-size:12px"><i class="fas fa-check-circle"></i> Done</span>`}
      </td>
    </tr>`;
  }).join('');
  sm('ad-main',`
    <div class="ph"><h2>All Orders</h2><span class="badge b-orange">${ords.length} total</span></div>
    <div class="tw">
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>Token</th><th>Student</th><th>Canteen</th><th>Items</th><th>Total</th><th>Slot</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${rows||'<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--txt3)">No orders yet</td></tr>'}</tbody>
        </table>
      </div>
    </div>`);
}

// ── ADMIN MANAGE CANTEENS ──
function adCanteens(){
  const cards=DB.canteens.map(c=>{
    const op=DB.users.find(u=>u.role==='operator'&&u.canteen===c.id);
    const ors=DB.orders.filter(o=>o.canteen===c.id);
    const rv=ors.reduce((s,o)=>s+o.total,0);
    const items=DB.menu[c.id];
    return `
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:22px">
        <div style="display:flex;align-items:center;gap:13px;margin-bottom:14px">
          <div style="width:52px;height:52px;border-radius:13px;background:${c.color}22;display:flex;align-items:center;justify-content:center;font-size:24px">${c.icon}</div>
          <div><h3 style="font-size:16px">${c.name}</h3><span style="font-size:11px;color:var(--txt2)"><i class="fas fa-clock"></i> ${c.hours}</span></div>
        </div>
        <p style="font-size:13px;color:var(--txt2);margin-bottom:14px;line-height:1.5">${c.desc}</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:12px">
          ${[['Menu Items',items.length],['Orders',ors.length],['Revenue','₹'+rv]].map(([l,v])=>`
            <div style="text-align:center;padding:9px;background:var(--bg3);border-radius:var(--rs)">
              <div style="font-size:16px;font-weight:800;font-family:'Syne',sans-serif;color:var(--orange)">${v}</div>
              <div style="font-size:10px;color:var(--txt2)">${l}</div>
            </div>`).join('')}
        </div>
        <div style="padding:9px 12px;background:var(--bg3);border-radius:var(--rs);font-size:13px;display:flex;align-items:center;gap:7px">
          <i class="fas fa-user-tie" style="color:var(--orange)"></i>
          <span style="color:var(--txt2)">Operator:</span>
          <strong>${op?op.nm:'Not assigned yet'}</strong>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px">
          <button class="btn btn-sec btn-sm btn-full" onclick="adCanteenMenu('${c.id}')"><i class="fas fa-hamburger"></i> Manage Menu</button>
        </div>
      </div>`;
  }).join('');
  sm('ad-main',`<div class="ph"><h2>Manage Canteens</h2></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:16px">${cards}</div>`);
}
function adCanteenMenu(cid){
  const c=gc(cid), items=DB.menu[cid];
  const cards=items.map(i=>`
    <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:var(--r);padding:13px;display:flex;align-items:center;gap:11px">
      <span style="font-size:24px">${i.em}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600">${i.nm}</div>
        <div style="font-size:12px;color:var(--txt2)">₹${i.pr} · ${i.cat} · <span style="color:${i.av?'var(--green)':'var(--red)'}">${i.av?'Available':'Out of Stock'}</span></div>
      </div>
      <div style="display:flex;gap:5px">
        <button class="btn btn-sm btn-sec" onclick="adEditItem('${cid}','${i.id}')"><i class="fas fa-edit"></i></button>
        <button class="btn btn-sm btn-danger" onclick="adDelItem('${cid}','${i.id}')"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join('');
  openModal(`${c.icon} ${c.name} – Menu`,`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <span class="badge b-orange">${items.length} items</span>
      <button class="btn btn-primary btn-sm" onclick="adAddItemModal('${cid}')"><i class="fas fa-plus"></i> Add Item</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:9px">${cards||'<div style="text-align:center;padding:24px;color:var(--txt3)">No items yet</div>'}</div>`,true);
}
function adAddItemModal(cid){
  const cats=DB.cats[cid].filter(x=>x!=='All');
  openModal(`Add Item`,`
    <div class="frow">
      <div class="fg"><label>Name</label><input id="ai-nm" placeholder="Item name"></div>
      <div class="fg"><label>Emoji</label><input id="ai-em" placeholder="🍽️"></div>
    </div>
    <div class="frow">
      <div class="fg"><label>Price (₹)</label><input id="ai-pr" type="number" min="5"></div>
      <div class="fg"><label>Category</label><select id="ai-cat">${cats.map(x=>`<option>${x}</option>`).join('')}</select></div>
    </div>
    <div class="fg"><label>Description</label><input id="ai-dc" placeholder="Short description"></div>
    <button class="btn btn-primary btn-full" onclick="adSaveAddItem('${cid}')"><i class="fas fa-plus"></i> Add</button>`);
}
function adSaveAddItem(cid){
  const nm=document.getElementById('ai-nm').value.trim();
  const em=document.getElementById('ai-em').value.trim()||'🍽️';
  const pr=parseInt(document.getElementById('ai-pr').value)||0;
  const cat=document.getElementById('ai-cat').value;
  const dc=document.getElementById('ai-dc').value.trim();
  if(!nm||!pr){toast('Name & price required','error');return;}
  DB.menu[cid].push({id:cid[0]+Date.now(),nm,em,pr,cat,dc,av:true,limited:false});
  toast(`${nm} added!`,'success');closeModal();adCanteens();
}
function adEditItem(cid,id){
  const i=DB.menu[cid].find(x=>x.id===id);
  openModal(`Edit: ${i.nm}`,`
    <div class="frow">
      <div class="fg"><label>Name</label><input id="ei-nm" value="${i.nm}"></div>
      <div class="fg"><label>Emoji</label><input id="ei-em" value="${i.em}"></div>
    </div>
    <div class="frow">
      <div class="fg"><label>Price (₹)</label><input id="ei-pr" type="number" value="${i.pr}"></div>
      <div class="fg"><label>Status</label><select id="ei-av"><option value="1" ${i.av?'selected':''}>Available</option><option value="0" ${!i.av?'selected':''}>Out of Stock</option></select></div>
    </div>
    <div class="fg"><label>Description</label><input id="ei-dc" value="${i.dc}"></div>
    <button class="btn btn-primary btn-full" onclick="adSaveEdit('${cid}','${id}')"><i class="fas fa-save"></i> Save</button>`);
}
function adSaveEdit(cid,id){
  const i=DB.menu[cid].find(x=>x.id===id);
  i.nm=document.getElementById('ei-nm').value.trim()||i.nm;
  i.em=document.getElementById('ei-em').value.trim()||i.em;
  i.pr=parseInt(document.getElementById('ei-pr').value)||i.pr;
  i.dc=document.getElementById('ei-dc').value.trim();
  i.av=document.getElementById('ei-av').value==='1';
  toast('Item updated!','success');closeModal();adCanteens();
}
function adDelItem(cid,id){
  const i=DB.menu[cid].find(x=>x.id===id);
  if(!confirm(`Delete "${i.nm}"?`))return;
  DB.menu[cid]=DB.menu[cid].filter(x=>x.id!==id);
  toast('Item deleted','info');closeModal();adCanteens();
}

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
goLanding();
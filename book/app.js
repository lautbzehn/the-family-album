const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const R=document.documentElement;
const ENTRY_SEQ=[13,11,12,29,2,9,10,21,26,36,20,33,18,19,0,null];

const UI={
 en:{story:"The Story",leaves:"The Leaves",app:"Context",contents:"Contents",
  close:"Close",pending:"facsimile pending",leaf:"Leaf",page:"page",all:"All",
  tlTitle:"When the album was written",tlHint:"Every dated leaf, placed in time. Hover over a mark for detail, or select it to read that leaf in the story.",
  castTitle:"The circle",castHint:"Who wrote in the book, and how often.",
  qTitle:"Open questions",qHint:"What the album has not given up yet.",
  mTitle:"What is missing",mHint:"The gaps in the surviving set.",
  frontmatter:"Front matter",catalogue:"Catalogue of leaves",
  noimg:"no image",back:"Back to the story",
  covPre:"A recovered album of poems, dedications and drawings",covSub:"A private family album, anonymized for this portfolio",
  m1:"37 leaves recovered of at least 45",m2:"Names, places, dates, poems and photos altered for privacy",
  m3:"Inscribed to the next generation, decades later",cue:"Begin",
  lang:"Español",transl:"Translation",storyS:"Story",leavesS:"Leaves",appS:"Context",
  credit:"Researched and compiled by",creditWhen:"2026",
  envEye:"The last leaf · added in 2026",
  envBy:"Written for her by Daniel West, who researched and compiled this book",
  magnify:"Magnify",docTitle:"The Family Album",
  foot1:"Digital edition v2.1 · 09.23.2026",foot2:"Assembled from 37 photographed leaves. Transcriptions are a best reading, not a certainty.",
  foot3:"A privacy-scrambled copy: every name, place, date, poem and photo is scrambled or replaced to protect a private family. The real book stays with the family.",priv:"Privacy-scrambled demo · names, dates, poems and photos are scrambled or replaced to protect the family",
  foot4:"<svg class=\"if-logo\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"><path d=\"M3 21c7-.6 12.5-4.6 16-11\"/><path d=\"M6 25.5c7.8-.6 14-4.8 18-12\"/><path d=\"M11 29.5c6.5-.7 11.6-4.2 15-10\"/></g><circle class=\"sun\" cx=\"25.5\" cy=\"6.5\" r=\"3.8\"/></svg>An <a href=\"https://www.icarianforge.com\"><span class=\"ifp\"><b>I</b>carian <b>Forge</b></span></a> product · Digital edition © 2026 Icarian Forge",
  lgNum:"Numbers follow the order in which the pages were photographed. The photograph of leaf 14 was never supplied, and a duplicate photograph of leaf 01 (position 30) has been removed.",tlHollow:"A hollow mark means only the year is recorded, so it is placed mid-year.",
  chapter:"Chapter",of:"of",next:"Next",prev:"Previous chapter",begin:"Begin reading",
  startOver:"Start from the beginning",resume:"Continue where you left off",titlePage:"Title page",
  explore:"Explore the leaves",backTitle:"Return to the title page",allCh:"All chapters",
  endOfBook:"End of the book",readStory:"Read it in the story",chSel:"Choose a chapter",
  lgTitle:"How to read these leaves",lgTypes:"Kinds of leaf",lgMarks:"Confidence marks",
  types:{DED:"Written to her by a friend, and signed",COP:"A published poem copied into the album, marked por la copia",
         OWN:"Her own composition",ART:"An illustration with no text",DOC:"The book itself"},
  marks:[["✔","Confirmed, legible and unambiguous"],["~","Probable, readable but not certain"],
         ["?","Uncertain, still to be verified"],["—","Absent or not yet determined"]]},
 es:{story:"La Historia",leaves:"Las Hojas",app:"Contexto",contents:"Índice",
  close:"Cerrar",pending:"facsímil pendiente",leaf:"Hoja",page:"pág.",all:"Todas",
  tlTitle:"Cuándo se escribió el álbum",tlHint:"Cada hoja fechada, situada en el tiempo. Pase el cursor sobre una marca para ver el detalle, o selecciónela para leer esa hoja en la historia.",
  castTitle:"El círculo",castHint:"Quiénes escribieron en el libro, y cuántas veces.",
  qTitle:"Preguntas abiertas",qHint:"Lo que el álbum todavía no ha entregado.",
  mTitle:"Lo que falta",mHint:"Los vacíos del conjunto que sobrevive.",
  frontmatter:"Preliminares",catalogue:"Catálogo de hojas",
  noimg:"sin imagen",back:"Volver a la historia",
  covPre:"Un álbum recuperado de poemas, dedicatorias y dibujos",covSub:"Un álbum familiar privado, anonimizado para este portafolio",
  m1:"37 hojas recuperadas de al menos 45",m2:"Nombres, lugares, fechas, poemas y fotos alterados por privacidad",
  m3:"Dedicado a la generación siguiente, décadas después",cue:"Comenzar",
  lang:"English",transl:"Traducción",storyS:"Historia",leavesS:"Hojas",appS:"Contexto",
  credit:"Investigado y compilado por",creditWhen:"2026",
  envEye:"La última hoja · añadida en 2026",
  envBy:"Escrito para ella por Daniel West, quien investigó y compiló este libro",
  magnify:"Lupa",docTitle:"El Álbum Familiar",
  foot1:"Edición digital v2.1 · 09.23.2026",foot2:"Reunido a partir de 37 hojas fotografiadas. Las transcripciones son la mejor lectura posible, no una certeza.",
  foot3:"Una copia protegida: cada nombre, lugar, fecha, poema y foto está alterado o reemplazado para proteger a una familia privada. El libro real queda con la familia.",priv:"Demostración protegida · nombres, fechas, poemas y fotos alterados para proteger a la familia",
  foot4:"<svg class=\"if-logo\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"><path d=\"M3 21c7-.6 12.5-4.6 16-11\"/><path d=\"M6 25.5c7.8-.6 14-4.8 18-12\"/><path d=\"M11 29.5c6.5-.7 11.6-4.2 15-10\"/></g><circle class=\"sun\" cx=\"25.5\" cy=\"6.5\" r=\"3.8\"/></svg>Un producto de <a href=\"https://www.icarianforge.com\"><span class=\"ifp\"><b>I</b>carian <b>Forge</b></span></a> · Edición digital © 2026 Icarian Forge",
  lgNum:"La numeración sigue el orden en que se fotografiaron las páginas. La fotografía de la hoja 14 nunca se entregó, y se eliminó una fotografía duplicada de la hoja 01 (posición 30).",tlHollow:"Una marca hueca indica que solo consta el año; se sitúa a mitad de año.",
  chapter:"Capítulo",of:"de",next:"Siguiente",prev:"Capítulo anterior",begin:"Comenzar a leer",
  startOver:"Empezar desde el principio",resume:"Continuar donde lo dejó",titlePage:"Portada",
  explore:"Explorar las hojas",backTitle:"Volver a la portada",allCh:"Todos los capítulos",
  endOfBook:"Fin del libro",readStory:"Leerla en la historia",chSel:"Elegir un capítulo",
  lgTitle:"Cómo leer estas hojas",lgTypes:"Tipos de hoja",lgMarks:"Marcas de certeza",
  types:{DED:"Escrita para ella por una amistad, y firmada",COP:"Un poema publicado copiado en el álbum, marcado por la copia",
         OWN:"Composición propia de ella",ART:"Una ilustración sin texto",DOC:"El libro mismo"},
  marks:[["✔","Confirmado, legible y sin ambigüedad"],["~","Probable, legible pero no seguro"],
         ["?","Incierto, pendiente de verificación"],["—","Ausente o aún no determinado"]]}
};
const T=()=>UI[R.dataset.lang];
const CAT=()=>R.dataset.lang==="es"?IDX_ES:IDX;
const FLES={"Title":"Título","Title A":"Título A","Title B":"Título B","Text":"Texto","Signed":"Firma","Copied by":"Copiado por","Text author":"Autor del texto","Text author A":"Autor del texto A","Dedication":"Dedicatoria","Date":"Fecha","Illustration":"Ilustración","Notes":"Notas","Significance":"Importancia","Copyright":"Derechos de autor","Open question":"Pregunta abierta","Confidence":"Certeza"};
const FL=k=>R.dataset.lang==="es"?(FLES[k]||k):k;
const NARROW=()=>matchMedia("(max-width:760px)").matches;

/* ---------- facsimile ---------- */
function facHTML(seq,cap){
  const src=(window.IMAGES||{})[seq];
  const meta=CAT().leaves.find(l=>l.seq===seq);
  let desc="";
  if(meta){
    const pick=k=>{const f=meta.fields.find(x=>new RegExp(k).test(x.k)); return f?f.v:"";};
    desc = pick("Illustration|Subject") || pick("Title") || pick("Text") || "";
  }
  const inner = src
    ? `<img src="${src}" alt="${T().leaf} ${String(seq).padStart(2,"0")}" loading="lazy" data-zoom="${seq}" tabindex="0" role="button">`
    : `<div class="hold"><div class="sq">${T().leaf} ${String(seq).padStart(2,"0")}</div>
         ${desc?`<div class="ds">${desc}</div>`:""}
         <div class="pend">${T().pending}</div></div>`;
  return `<figure class="fac"><div class="plate">
      <i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i>
      ${inner}</div>${(src&&cap)?`<figcaption>${cap}</figcaption>`:""}</figure>`;
}

/* ---------- blocks ---------- */
function blocks(bs,inEntry){
  let out="",dateDone=false;
  bs.forEach((b,i)=>{
    if(b.t==="hr"){out+=`<hr class="orn">`;return}
    if(b.t==="p"){out+=`<p>${b.h}</p>`;return}
    if(b.t==="facsimile"){out+=`<!--FAC-->`;return}
    if(b.t==="label"){
      if(inEntry&&b.k==="other"&&!dateDone){dateDone=true;out+=`<p class="dateline">${b.h}</p>`;return}
      out+=`<div class="lab${(b.k==="transcription"||b.k==="translation")?" center":""}">${b.h}</div>`;return}
    if(b.t==="verse"){
      const prev=bs.slice(0,i).reverse().find(x=>x.t==="label");
      const kind=prev?prev.k:null;
      const body=b.s.map(st=>`<p class="st">${st.join("\n")}</p>`).join("");
      if(kind==="transcription"){
        out+=`<div class="tbox"><div class="fleur">&#10087;</div>`+
             `<div class="verse orig"${R.dataset.lang!=="es"?' lang="es"':''}>${body}</div>`+
             `<div class="fleur b">&#10087;</div></div>`;
      } else if(kind==="translation"){
        out+=`<div class="verse trans">${body}</div>`;
      } else {
        out+=`<div class="verse">${body}</div>`;
      }
      return}
  });
  return out;
}


/* ---------- chapters ---------- */
let curCh=-1;                                   // -1 = title page
const ENTRY_NODES=BOOK.map((n,i)=>n.lvl===3?i:-1).filter(i=>i>=0);
const TL_SEQ=[13,11,12,29,2,10,21,9,36,26,20,33,18,19,0];   // timeline row -> leaf
const chapterOf=i=>CHAPTERS.findIndex(c=>i>=c.s&&i<=c.e);
const chTitle=k=>CHAPTERS[k].t[R.dataset.lang];
const seqNode=seq=>{const ei=ENTRY_SEQ.indexOf(seq); return ei<0?null:ENTRY_NODES[ei];};
const isMonth=p=>/^[A-ZÁÉÍÓÚÑ\s]+$/.test(p)&&p.length<14;
const hdr=()=>Math.round($(".bar").getBoundingClientRect().height);
const inStory=()=>$("#view-story").classList.contains("on");
function instantScroll(y){const p=R.style.scrollBehavior;R.style.scrollBehavior="auto";
  window.scrollTo(0,Math.max(0,y));R.style.scrollBehavior=p;}
function savedPos(){try{return JSON.parse(localStorage.getItem("album.pos")||"null")}catch(e){return null}}
function currentAnchor(){
  const lim=hdr()+40; let a=null;
  for(const s of $$("#story [id^=n]")){ if(s.getBoundingClientRect().top<=lim) a=s.id; else break; }
  return a;
}
function savePos(a){
  if(curCh<0) return;
  try{localStorage.setItem("album.pos",JSON.stringify({ch:curCh,a:a===undefined?currentAnchor():a,t:Date.now()}))}catch(e){}
}

function renderNode(i){
  const n=BOOK[i], d=n[R.dataset.lang], id="n"+i;
  if(n.lvl===1) return `<div class="wrap"><section id="${id}"><div class="part"><div role="heading" aria-level="2" class="num${/^[0-9\u00b7\s]+$/.test(d.p)?"":" word"}">${d.h}</div><div class="rule"></div></div>${blocks(d.blocks)}</section></div>`;
  if(n.lvl===2) return `<div class="wrap"><section id="${id}"><h2 class="ch${isMonth(d.p)?" month":""}">${d.h}</h2>${blocks(d.blocks)}</section></div>`;
  const ei=ENTRY_NODES.indexOf(i), seq=ENTRY_SEQ[ei];
  if(ei===ENTRY_NODES.length-1){
    const t=T(), vs=d.blocks.filter(x=>x.t==="verse");
    const col=d.blocks.filter(x=>x.t==="p").slice(-1)[0];
    const mk=v=>v.s.map(st=>`<p class="st">${st.join("\n")}</p>`).join("");
    return `<div class="wrap"><article class="entry envoi" id="${id}">
      <div class="mark">&#10087;&#10087;&#10087;</div>
      <div class="eyebrow">${t.envEye}</div>
      <h3 class="chfocus" tabindex="-1">${d.tm}</h3>
      <div class="byline">${t.envBy}</div>
      <div class="tbox"><div class="fleur">&#10087;</div>
        <div class="verse orig">${vs[0]?mk(vs[0]):""}</div>
        ${vs[1]?`<div class="verse orig second" lang="en">${mk(vs[1])}</div>`:""}
        <div class="fleur b">&#10087;</div></div>
      <div class="sigwrap"><div class="sigrule"></div><div class="sig">Dan West</div><div class="sigdate">2026</div></div>
    </article></div>`;
  }
  let body=blocks(d.blocks,true);
  const cap=seq!=null?`${T().leaf} ${String(seq).padStart(2,"0")}`:"";
  body=body.replace("<!--FAC-->",seq!=null?facHTML(seq,cap):"");
  return `<div class="wrap"><article class="entry" id="${id}" data-seq="${seq==null?"":seq}"><h3><span${R.dataset.lang!=="es"?' lang="es"':''}>${d.tm}</span>${d.ts?`<em>${d.ts}</em>`:""}</h3>${body}</article></div>`;
}

function renderCover(){
  const t=T(), p=savedPos(), has=p&&p.ch>=0&&p.ch<CHAPTERS.length;
  $("#covNav").innerHTML = has
    ? `<button class="btn primary" data-go="resume"><span class="btn-k">${t.resume}</span>
         <span class="btn-t">${t.chapter} ${p.ch+1} · ${chTitle(p.ch)}</span></button>
       <button class="btn ghost" data-go="0">${t.startOver}</button>`
    : `<button class="btn primary" data-go="0"><span class="btn-t">${t.begin}</span></button>`;
}
function renderToc(){
  const t=T(), L=R.dataset.lang;
  let h=`<a class="tc${curCh<0?" cur":""}" href="#" data-go="-1"><span class="tn">&#10087;</span>${t.titlePage}</a>`;
  CHAPTERS.forEach((c,k)=>{
    h+=`<a class="tc${k===curCh?" cur":""}" href="#" data-go="${k}"><span class="tn">${k+1}</span>${c.t[L]}</a>`;
    if(k!==curCh||c.k==="envoi") return;
    for(let i=c.s;i<=c.e;i++){
      const n=BOOK[i], d=n[L];
      if(n.lvl===1||(n.lvl===2&&isMonth(d.p))) continue;
      h+=`<a class="ts l${n.lvl}" href="#" data-go="${k}" data-anchor="n${i}">${n.lvl===3?d.p.split(" · ")[0]:d.p}</a>`;
    }
  });
  $("#toc").innerHTML=h;
}
function renderStrip(){
  const t=T(), L=R.dataset.lang, sel=$("#chSel");
  sel.innerHTML=`<option value="-1">${t.titlePage}</option>`+
    CHAPTERS.map((c,k)=>`<option value="${k}">${k+1} · ${c.t[L]}</option>`).join("");
  sel.value=String(curCh); sel.setAttribute("aria-label",t.chSel);
  const pv=$("#chPrev"), nx=$("#chNext");
  pv.disabled=curCh<0; nx.disabled=curCh>=CHAPTERS.length-1;
  pv.setAttribute("aria-label",t.prev); nx.setAttribute("aria-label",t.next);
  pv.title=curCh>0?chTitle(curCh-1):t.titlePage;
  nx.title=curCh<CHAPTERS.length-1?chTitle(curCh+1):"";
}
function renderChNav(){
  const t=T(), N=CHAPTERS.length, last=curCh===N-1;
  const next = last
    ? `<button class="nextcard" data-go="leaves"><span class="k">${t.endOfBook}</span><span class="t">${t.explore}</span><span class="arr">&rarr;</span></button>`
    : `<button class="nextcard" data-go="${curCh+1}"><span class="k">${t.next} · ${t.chapter} ${curCh+2} ${t.of} ${N}</span><span class="t">${chTitle(curCh+1)}</span><span class="arr">&rarr;</span></button>`;
  const prev = curCh>0
    ? `<button class="navlink" data-go="${curCh-1}">&larr; ${chTitle(curCh-1)}</button>`
    : `<button class="navlink" data-go="-1">&larr; ${t.titlePage}</button>`;
  const right = last ? `<button class="navlink" data-go="-1">${t.backTitle}</button>`
                     : `<button class="navlink" data-go="toc">${t.allCh}</button>`;
  $("#chnav").innerHTML=`<div class="wrap">${next}<div class="navrow">${prev}${right}</div></div>`;
}
function spy(){
  if(window.__spy) window.__spy.disconnect();
  window.__spy=new IntersectionObserver(es=>{
    es.forEach(en=>{ if(!en.isIntersecting) return;
      $$("#toc a.ts.here").forEach(a=>a.classList.remove("here"));
      const a=$(`#toc a[data-anchor="${en.target.id}"]`); if(a) a.classList.add("here");
    });
  },{rootMargin:`-${hdr()+10}px 0px -70% 0px`});
  $$("#story [id^=n]").forEach(s=>window.__spy.observe(s));
}
function updateProgress(){
  const bar=$("#chBar"); if(!bar) return;
  const max=R.scrollHeight-innerHeight;
  bar.style.width = curCh<0 ? "0" : ((max<=0?1:Math.min(1,Math.max(0,scrollY/max)))*100).toFixed(1)+"%";
}
function renderStory(){
  const t=T(), inBook=curCh>=0;
  $("#cover").hidden=inBook; $("#story").hidden=!inBook; $("#chnav").hidden=!inBook;
  R.classList.toggle("inbook", inBook&&inStory());
  renderCover(); renderToc(); renderStrip();
  if(!inBook){ $("#story").innerHTML=""; $("#chnav").innerHTML=""; spy(); updateProgress(); return; }
  const c=CHAPTERS[curCh];
  let html = c.k==="envoi" ? "" :
    `<div class="wrap cheyewrap"><div class="cheye chfocus" tabindex="-1" role="heading" aria-level="1" aria-label="${t.chapter} ${curCh+1} ${t.of} ${CHAPTERS.length}: ${chTitle(curCh)}">${t.chapter} ${curCh+1} ${t.of} ${CHAPTERS.length}</div></div>`;
  for(let i=c.s;i<=c.e;i++) html+=renderNode(i);
  $("#story").innerHTML=html;
  $("#story").classList.toggle("is-envoi",c.k==="envoi");
  renderChNav(); spy(); updateProgress();
}
function goChapter(k,{anchor=null,save=true,focus=true}={}){
  k=Math.max(-1,Math.min(CHAPTERS.length-1,+k));
  curCh=k;
  if(!inStory()) setView("story");
  renderStory();
  try{history.replaceState(null,"",k<0?location.pathname+location.search:"#ch-"+(k+1))}catch(e){}
  const el=anchor&&document.getElementById(anchor);
  instantScroll(el?el.getBoundingClientRect().top+scrollY-hdr()-10:0);
  if(save&&k>=0) savePos(anchor);
  if(focus){const f=k<0?$("#covTitle"):$("#story .chfocus"); if(f) f.focus({preventScroll:true});}
  updateProgress();
}

/* ---------- leaves ---------- */
let filt="ALL";
function renderLeaves(){
  const t=T();
  const types=["ALL",...new Set(CAT().leaves.filter(l=>!l.missing).map(l=>l.type.split(/[+×?~]/)[0].trim()).filter(Boolean))];
  $("#legend").innerHTML=`<details class="legend" open><summary>${t.lgTitle}</summary><div class="lg-cols">
    <div><h5>${t.lgTypes}</h5>${Object.entries(t.types).map(([k,v])=>`<div class="lg-row"><span class="badge">${k}</span><span>${v.replace("por la copia","<em>por la copia</em>")}</span></div>`).join("")}</div>
    <div><h5>${t.lgMarks}</h5>${t.marks.map(([m,v])=>`<div class="lg-row"><span class="lg-mark">${m}</span><span>${v}</span></div>`).join("")}</div>
  </div><p class="lg-num">${t.lgNum}</p></details>`;
  $("#filters").innerHTML=types.map(x=>
    `<button data-f="${x}" aria-pressed="${filt===x}"${t.types[x]?` title="${t.types[x]}"`:""}>${x==="ALL"?t.all:x}</button>`).join("");
  const cards=CAT().leaves.filter(l=>filt==="ALL"||(!l.missing&&l.type.startsWith(filt))).map(l=>{
    const src=(window.IMAGES||{})[l.seq];
    const thumb=l.missing?`<div class="thumb">${t.noimg}</div>`
      :src?(()=>{const ti=(l.fields.find(f=>/^Title|^Subject|^Text$/.test(f.k))||{}).v||"";
             const plain=ti.replace(/<[^>]+>/g,"").replace(/[✔~?—]/g,"").trim().slice(0,60);
             return `<div class="thumb has-img"><img src="${src}" alt="${t.leaf} ${String(l.seq).padStart(2,"0")}${plain?", "+plain:""}" loading="lazy" data-zoom="${l.seq}" tabindex="0" role="button"></div>`;})()
      :`<div class="thumb">${t.pending}</div>`;
    const dl=l.fields.map(f=>`<dt>${FL(f.k)}</dt><dd>${f.v}</dd>`).join("");
    return `<div class="leaf${l.missing?" gone":""}">
      <div class="top"><span class="sq">${t.leaf} ${String(l.seq).padStart(2,"0")}${(()=>{const pg=(l.page||"").trim(); if(!pg||/^(p\.?\s*)?[—-]\s*$/.test(pg)) return ""; const m=pg.match(/^p\.?\s*(.+)$/); return m?` · ${t.page} ${m[1]}`:` · ${pg[0].toUpperCase()+pg.slice(1)}`;})()}</span>
      <span class="badge">${l.type}</span></div>
      ${thumb}<dl>${dl}</dl>${(()=>{const nd=seqNode(l.seq); if(nd==null) return "";
        const k=chapterOf(nd); return `<a class="storylink" href="#" data-go="${k}" data-anchor="n${nd}">${t.readStory} · ${t.chapter} ${k+1} &rarr;</a>`;})()}</div>`;
  }).join("");
  $("#grid").innerHTML=cards;
}

/* ---------- apparatus ---------- */
function md2html(s){
  return s.split(/\n\n+/).map(p=>{
    p=p.trim();
    if(/^\d+\.\s/.test(p)) return "<ol>"+p.split(/\n(?=\d+\.\s)/).map(li=>
      "<li>"+li.replace(/^\d+\.\s*/,"").replace(/\n\s+/g," ")
       .replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>")+"</li>").join("")+"</ol>";
    return "<p>"+p.replace(/\n\s*/g," ").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
      .replace(/\*(.+?)\*/g,"<em>$1</em>")+"</p>";
  }).join("");
}
const MON={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
function pdate(s){
  s=s.replace(/<[^>]+>/g,"").replace(/\?/g,"").trim();
  const m=s.match(/^(?:(\d{1,2})\s+)?(?:([A-Za-z]{3})[a-z]*\s+)?(\d{4})$/);
  if(!m) return null;
  return new Date(m[3], m[2]?MON[m[2]]:0, m[1]?+m[1]:1);
}
function renderApp(){
  const t=T();
  const rows=IDX.timeline.map((r,i)=>{const raw=r.date.replace(/<[^>]+>/g,"").replace(/\?/g,"").trim();
    const ap=/^\d{4}$/.test(raw); return {...r,d:ap?new Date(+raw,6,1):pdate(r.date),i,ap};}).filter(r=>r.d);
  const main=rows.filter(r=>r.d.getFullYear()<1920);
  const t0=new Date(1907,0,1), t1=new Date(1911,5,1);
  const W=980,H=186,PL=46,PR=26,PT=26,PB=42, iw=W-PL-PR;
  const x=d=>PL+iw*((d-t0)/(t1-t0));
  let axis="",years="";
  for(let y=1907;y<=1911;y++){
    const px=x(new Date(y,0,1));
    axis+=`<line x1="${px}" y1="${PT-8}" x2="${px}" y2="${H-PB+6}" stroke="var(--rule2)" stroke-width="1"/>`;
    years+=`<text x="${px}" y="${H-PB+26}" fill="var(--ink3)" font-size="13" text-anchor="middle" font-family="Cormorant Garamond,serif" letter-spacing="2">${y}</text>`;
  }
  for(let y=1907;y<=1911;y++) for(let m=1;m<12;m++){
    const d=new Date(y,m,1); if(d<t0||d>t1)continue;
    axis+=`<line x1="${x(d)}" y1="${H-PB-4}" x2="${x(d)}" y2="${H-PB+2}" stroke="var(--rule2)" stroke-width="1"/>`;
  }
  const base=H-PB;
  const TLL=CAT().timeline, plain=s=>s.replace(/<[^>]+>/g,"");
  const placed=[];
  const dots=main.map(r=>{
    const px=x(r.d);
    let lvl=0;
    while(placed.some(q=>q.lvl===lvl && Math.abs(q.px-px)<15)) lvl++;
    placed.push({px,lvl});
    const cy=PT+6+lvl*15;
    return `<g class="tl-dot" tabindex="0" role="button" aria-label="${plain(TLL[r.i].date)}: ${plain(TLL[r.i].leaf)}" data-t="${plain(TLL[r.i].leaf)} · ${plain(TLL[r.i].hand)}" data-d="${plain(TLL[r.i].date)}" data-i="${r.i}">
      <line x1="${px}" y1="${base}" x2="${px}" y2="${cy}" stroke="var(--rule)" stroke-width="1"/>
      <circle cx="${px}" cy="${cy}" r="5.5" fill="${r.ap?"var(--card)":"var(--accent)"}" stroke="var(--accent)" stroke-width="1.6"/></g>`;
  }).join("");
  const svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${t.tlTitle}">
    <line x1="${PL}" y1="${base}" x2="${W-PR}" y2="${base}" stroke="var(--rule)" stroke-width="1"/>
    ${axis}${years}${dots}</svg>`;
  const shape=CAT().shape?`<div class="md tlnote">${md2html(CAT().shape)}</div>`:"";
  $("#apparatus").innerHTML=`
   <div class="wide">
    <div class="panel"><h3>${t.tlTitle}</h3><p class="hint">${t.tlHint}</p>
      <div class="chartbox">${svg}</div>${rows.some(r=>r.ap)?`<p class="tlkey">${t.tlHollow}</p>`:""}${shape}</div>
    <div class="cols">
      <div class="panel"><h3>${t.castTitle}</h3><p class="hint">${t.castHint}</p><div class="md">${md2html(CAT().cast)}</div></div>
      <div class="panel"><h3>${t.qTitle}</h3><p class="hint">${t.qHint}</p><div class="md">${md2html(CAT().questions)}</div></div>
    </div>
    <div class="panel"><h3>${t.mTitle}</h3><p class="hint">${t.mHint}</p><div class="md">${md2html(CAT().missing)}</div></div>
   </div>`;
}


/* ---------- chrome ---------- */
function renderChrome(){
  const t=T(), nw=NARROW();
  $("#tabStory").textContent=nw?t.storyS:t.story;
  $("#tabLeaves").textContent=nw?t.leavesS:t.leaves;
  $("#tabApp").textContent=nw?t.appS:t.app;
  $("#btnToc").textContent=t.contents; $("#tocH").textContent=t.contents;
  $$("#langSeg button").forEach(bn=>{
    const full=bn.dataset.l==="es"?"Español":"English";
    bn.setAttribute("aria-pressed",bn.dataset.l===R.dataset.lang);
    bn.textContent=nw?bn.dataset.l.toUpperCase():full;
    bn.setAttribute("aria-label",full);
  });
  $("#lbX").textContent=t.close; $("#lbMag").textContent=t.magnify;
  $("#covPre").textContent=t.covPre; $("#covSub").textContent=t.covSub;
  $("#m1").textContent=t.m1; $("#m2").textContent=t.m2; $("#m3").textContent=t.m3;
  $("#credBy").innerHTML=`${t.credit} <b>Daniel West</b>`;
  $("#credWhen").textContent=t.creditWhen;
  $("#covTitle").textContent=BOOK[0][R.dataset.lang].p;
  document.title=t.docTitle;
  $("#foot1").textContent=t.foot1; $("#foot2").textContent=t.foot2; $("#foot3").textContent=t.foot3; $("#privBar").textContent=t.priv; $("#foot4").innerHTML=t.foot4; /* our own fixed text: the maker's mark */
  R.lang=R.dataset.lang;
}
function renderAll(){renderChrome();renderStory();renderLeaves();renderApp();}

function switchLang(to){
  if(to===R.dataset.lang) return;
  const story=inStory(), a=story&&curCh>=0&&scrollY>40?currentAnchor():null, y=scrollY;
  R.dataset.lang=to;
  try{localStorage.setItem("album.lang2",to)}catch(e){}
  renderAll();
  if(story&&curCh>=0){const el=a&&document.getElementById(a);
    instantScroll(el?el.getBoundingClientRect().top+scrollY-hdr()-10:0);}
  else instantScroll(y);
  updateProgress();
}

let storyY=0;
function setView(v){
  const was=($(".view.on")||{}).id;
  if(was==="view-story"&&v!=="story") storyY=scrollY;
  ["story","leaves","apparatus"].forEach(k=>$("#view-"+k).classList.toggle("on",k===v));
  $("#tabStory").setAttribute("aria-pressed",v==="story");
  $("#tabLeaves").setAttribute("aria-pressed",v==="leaves");
  $("#tabApp").setAttribute("aria-pressed",v==="apparatus");
  R.classList.toggle("inbook",v==="story"&&curCh>=0);
  if(was!=="view-"+v) instantScroll(v==="story"?storyY:0);
  updateProgress();
}
let drawerOpener=null;
function drawer(on){
  const dr=$("#drawer"), was=dr.classList.contains("on");
  if(on===was) return;
  dr.classList.toggle("on",on); $("#scrim").classList.toggle("on",on);
  if(on){ drawerOpener=document.activeElement;
    setTimeout(()=>{const a=$("#toc a.cur")||$("#toc a"); if(a) a.focus({preventScroll:false});},30); }
  else if(drawerOpener&&document.contains(drawerOpener)&&!dr.contains(drawerOpener)) drawerOpener.focus({preventScroll:true});
}
function trapTab(e,box){
  const f=[...box.querySelectorAll('a[href],button:not([disabled]),select,[tabindex="0"]')].filter(x=>x.offsetParent!==null);
  if(!f.length) return; const first=f[0], last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault(); last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault(); first.focus();}
}

/* boot */
(function(){
  let lang="en",theme="";
  try{
    const sv=localStorage.getItem("album.lang2");
    if(sv==="en"||sv==="es"){lang=sv}
    const th=localStorage.getItem("album.theme"); if(th)theme=th;
  }catch(e){}
  R.dataset.lang=lang; if(theme)R.dataset.theme=theme;
  renderAll(); setView("story");
  const m=location.hash.match(/^#ch-(\d+)/); if(m) goChapter(+m[1]-1,{focus:false});

  // every chapter move in the book goes through data-go
  document.addEventListener("click",e=>{
    const g=e.target.closest("[data-go]"); if(!g) return;
    e.preventDefault();
    const v=g.dataset.go;
    if(v==="resume"){const p=savedPos(); if(p) goChapter(p.ch,{anchor:p.a}); return;}
    if(v==="toc"){drawer(true); return;}
    if(v==="leaves"){setView("leaves"); return;}
    drawer(false);
    goChapter(+v,{anchor:g.dataset.anchor||null});
  });
  $("#chSel").addEventListener("change",e=>{goChapter(+e.target.value); e.target.blur();});
  $("#chPrev").addEventListener("click",()=>goChapter(curCh-1));
  $("#chNext").addEventListener("click",()=>goChapter(curCh+1));

  let ticking=false, saveT;
  addEventListener("scroll",()=>{
    if(!ticking){ticking=true; requestAnimationFrame(()=>{ticking=false; updateProgress();});}
    clearTimeout(saveT);
    saveT=setTimeout(()=>{ if(curCh>=0&&inStory()) savePos(currentAnchor()); },400);
  },{passive:true});

  $("#langSeg").addEventListener("click",e=>{const bn=e.target.closest("button"); if(bn) switchLang(bn.dataset.l);});
  $("#btnTheme").onclick=()=>{
    const cur=R.dataset.theme||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
    R.dataset.theme=cur==="dark"?"light":"dark";
    try{localStorage.setItem("album.theme",R.dataset.theme)}catch(e){}
  };
  $("#btnToc").onclick=()=>drawer(true);
  $("#scrim").onclick=()=>drawer(false);
  $("#tabStory").onclick=()=>setView("story");
  $("#tabLeaves").onclick=()=>setView("leaves");
  $("#tabApp").onclick=()=>setView("apparatus");
  $("#filters").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b)return; filt=b.dataset.f; renderLeaves();});

  // lightbox + magnifier
  const lb=$("#lb"), lbImg=$("#lbImg"), lens=$("#lens");
  let magOn=false;
  const setMag=v=>{magOn=v; $("#lbMag").setAttribute("aria-pressed",v);
    lb.classList.toggle("mag",v); lens.style.display=v?"block":"none"; lens.style.opacity=0;};
  let lbOpener=null;
  const closeLb=()=>{ if(!lb.classList.contains("on")) return;
    lb.classList.remove("on"); setMag(false); lbImg.removeAttribute("src");
    if(lbOpener&&document.contains(lbOpener)) lbOpener.focus({preventScroll:true}); };
  document.addEventListener("click",e=>{
    const im=e.target.closest("[data-zoom]");
    if(im){
      lbImg.src=im.currentSrc||im.src;
      lens.style.backgroundImage=`url("${lbImg.src}")`;
      $("#lbCap").textContent=`${T().leaf} ${String(im.dataset.zoom).padStart(2,"0")}`;
      lbOpener=im; lb.setAttribute("aria-label",$("#lbCap").textContent);
      lb.classList.add("on"); setMag(false); setTimeout(()=>$("#lbX").focus(),30); return;
    }
    if(!lb.classList.contains("on")) return;
    if(e.target.closest("#lbBar")) return;
    if(e.target===lbImg&&magOn) return;
    closeLb();
  });
  $("#lbMag").addEventListener("click",()=>setMag(!magOn));
  $("#lbX").addEventListener("click",closeLb);
  $("#lbStage").addEventListener("mousemove",e=>{
    if(!magOn) return;
    const r=lbImg.getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom){lens.style.opacity=0;return}
    const nat=lbImg.naturalWidth||r.width;
    const Z=Math.max(1.8,Math.min(2.6,(nat/r.width)*1.85)), LR=105;
    const x=e.clientX-r.left, y=e.clientY-r.top;
    lens.style.opacity=1;
    lens.style.left=(e.clientX-LR)+"px"; lens.style.top=(e.clientY-LR)+"px";
    lens.style.backgroundSize=`${r.width*Z}px ${r.height*Z}px`;
    lens.style.backgroundPosition=`${LR-x*Z}px ${LR-y*Z}px`;
  });

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){closeLb();drawer(false);return}
    if(e.key==="Tab"){ if(lb.classList.contains("on")) return trapTab(e,lb);
                       if($("#drawer").classList.contains("on")) return trapTab(e,$("#drawer")); }
    if((e.key==="Enter"||e.key===" ")&&document.activeElement&&document.activeElement.matches("[data-zoom],.tl-dot")){
      e.preventDefault(); const a=document.activeElement; a.dispatchEvent(new MouseEvent('click',{bubbles:true})); return; }
    if(lb.classList.contains("on")){ if(e.key.toLowerCase()==="m") setMag(!magOn); return; }
    if((e.key==="ArrowRight"||e.key==="ArrowLeft")&&inStory()){
      const tag=(document.activeElement||{}).tagName;
      if(tag==="SELECT"||tag==="INPUT"||tag==="TEXTAREA") return;
      if(e.key==="ArrowRight"&&curCh<CHAPTERS.length-1) goChapter(curCh+1);
      if(e.key==="ArrowLeft"&&curCh>-1) goChapter(curCh-1);
    }
  });

  // timeline tooltip + click-to-jump
  const tip=$("#tip");
  document.addEventListener("mouseover",e=>{
    const g=e.target.closest(".tl-dot"); if(!g)return;
    tip.innerHTML=`<b>${g.dataset.d}</b><br>${g.dataset.t}`; tip.classList.add("on");
  });
  document.addEventListener("mousemove",e=>{
    if(!tip.classList.contains("on"))return;
    tip.style.left=Math.min(e.clientX+14,innerWidth-270)+"px"; tip.style.top=(e.clientY+16)+"px";
  });
  document.addEventListener("mouseout",e=>{if(e.target.closest(".tl-dot"))tip.classList.remove("on")});
  document.addEventListener("click",e=>{
    const g=e.target.closest(".tl-dot"); if(!g) return;
    const node=seqNode(TL_SEQ[+g.dataset.i]); if(node==null) return;
    tip.classList.remove("on");
    goChapter(chapterOf(node),{anchor:"n"+node});
  });

  let rz; addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(()=>{renderChrome();updateProgress();},150)});
})();

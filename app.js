const $ = (s) => document.querySelector(s);
const linksList = $('#linksList');
const config = window.SITE_CONFIG;
function renderLinks(){ linksList.innerHTML = config.links.map((l,i)=>`<a class="portal" href="${l.url}" target="${l.url.startsWith('http')?'_blank':'_self'}" rel="noreferrer"><span class="portal-icon">${l.icon}</span><span><b>${l.title}</b><small>${l.desc}</small></span><span class="portal-arrow">↗</span></a>`).join(''); }
renderLinks();
const pad = n => String(n).padStart(2,'0');
function tick(){ const d=new Date(); $('#clock').textContent=`${pad(d.getHours())}:${pad(d.getMinutes())}`; } tick(); setInterval(tick,1000);
$('#visitCount').textContent=String((Number(localStorage.getItem('rin-visits')||127)+1)).padStart(5,'0'); localStorage.setItem('rin-visits',Number($('#visitCount').textContent));
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }
$('#themeToggle').onclick=()=>{document.body.classList.toggle('dark'); localStorage.setItem('rin-dark',document.body.classList.contains('dark'));}; if(localStorage.getItem('rin-dark')==='true') document.body.classList.add('dark');
$('#musicToggle').onclick=(e)=>{const b=e.currentTarget; b.textContent=b.textContent==='▶'?'Ⅱ':'▶'; toast(b.textContent==='Ⅱ'?'氛围音乐已开启（演示）':'音乐已暂停');};
$('#randomButton').onclick=()=>{const targets=['#about','#links','#works']; document.querySelector(targets[Math.floor(Math.random()*targets.length)]).scrollIntoView({behavior:'smooth'});};
$('#backTop').onclick=()=>scrollTo({top:0,behavior:'smooth'}); $('#shuffleWorks').onclick=()=>{document.querySelector('.cover-a').classList.toggle('cover-c'); toast('收藏夹已刷新');};

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#05050a">
<title>FOCUS - Organizador</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{min-height:100vh;background:#05050a;color:#f5f6ff;font-family:-apple-system,BlinkMacSystemFont,sans-serif;padding:22px 15px 40px;overflow-x:hidden;isolation:isolate}
#fondo{position:fixed;inset:0;z-index:-2;overflow:hidden;pointer-events:none;background:#05050a}
.glow{position:absolute;width:65vw;height:65vw;max-width:430px;max-height:430px;border-radius:50%;filter:blur(85px);opacity:.3;animation:flotar 12s ease-in-out infinite alternate}
.azul{background:#005dff;top:-15%;left:-20%}
.violeta{background:#7900ff;bottom:-15%;right:-20%;animation-delay:-6s}
.celeste{background:#00bfff;top:40%;left:45%;opacity:.13;animation-duration:17s}
@keyframes flotar{to{transform:translate(25%,20%) scale(1.2) rotate(15deg)}}
#particulas{position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none}
.app{max-width:600px;margin:auto}
header{text-align:center;padding:15px 0 25px}
.tag{display:inline-block;color:#a7d5ff;border:1px solid #48a4ff55;border-radius:30px;padding:7px 13px;font-size:11px;letter-spacing:3px;margin-bottom:17px}
h1{font-size:38px;letter-spacing:-1px;margin-bottom:8px}
.degrade{background:linear-gradient(90deg,#48a4ff,#b77aff);-webkit-background-clip:text;background-clip:text;color:transparent}
#fecha{color:#aaaabd;font-size:14px;margin-bottom:13px}
#reloj{font-size:36px;font-weight:800;letter-spacing:3px;text-shadow:0 0 25px #268aff66}
.panel,.stat{background:rgba(19,20,32,.86);border:1px solid #ffffff15;border-radius:20px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.panel{padding:21px;margin-bottom:17px;box-shadow:0 14px 40px #0004}
h2{font-size:18px;margin-bottom:17px}
.resumen{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-bottom:18px}
.stat{text-align:center;padding:15px 5px}
.stat strong{display:block;font-size:25px;margin-bottom:5px}
.stat span{color:#aaaabd;font-size:11px}
label{display:block;font-size:13px;color:#b9b9cc;margin:14px 0 8px}
input{width:100%;min-height:48px;border:1px solid #343447;border-radius:12px;padding:12px;background:#090910;color:white;font:inherit;outline:none;color-scheme:dark}
input:focus{border-color:#48a4ff;box-shadow:0 0 0 3px #48a4ff20}
button{border:0;border-radius:12px;padding:12px 15px;min-height:43px;font-size:13px;font-weight:700;cursor:pointer}
button:active{transform:scale(.98)}
.primary{width:100%;margin-top:17px;color:white;background:linear-gradient(100deg,#087cff,#8747ff)}
.secondary{width:100%;margin-top:10px;color:#b7dcff;background:#48a4ff12;border:1px solid #48a4ff38}
.focusbtn{width:100%;margin-bottom:17px;color:#e3d1ff;background:#a66bff13;border:1px solid #a66bff55}
#focusStatus{display:none;text-align:center;color:#c5aaff;font-size:13px;margin:0 0 15px}
body.focus header,body.focus .resumen,body.focus #formPanel,body.focus footer{display:none}
body.focus #focusStatus{display:block}
#lista{display:flex;flex-direction:column;gap:11px}
.tarea{padding:15px;border:1px solid #ffffff17;border-radius:15px;background:#090910c9;animation:entrada .3s ease}
@keyframes entrada{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
.done{opacity:.52}.done .nombre{text-decoration:line-through}
.fila{display:flex;gap:11px;align-items:flex-start}
.check{width:24px;height:24px;min-height:24px;padding:0;flex-shrink:0;color:white;border:1px solid #50506a;background:transparent;border-radius:7px}
.done .check{background:#2786ff;border-color:#2786ff}
.info{flex:1;min-width:0}
.nombre{font-size:15px;font-weight:700;overflow-wrap:anywhere}
.hora{color:#a8a8bc;font-size:12px;margin-top:7px}
.acciones{display:flex;gap:8px;margin-top:13px}
.small{min-height:35px;padding:8px 11px;font-size:12px}
.remove{color:#ff9aa8;background:#ff526d12;border:1px solid #ff526d33}
.edit{color:#a7d4ff;background:#48a4ff12;border:1px solid #48a4ff33}
.vacio{text-align:center;color:#9d9db2;padding:22px 7px;font-size:14px;line-height:1.7}
.sub{font-size:12px;color:#9292aa;margin-top:-8px;margin-bottom:16px}
.nota{font-size:11px;color:#9292aa;line-height:1.5;margin-top:12px}
footer{text-align:center;color:#73738b;font-size:11px;padding-top:12px}
body.focus .panel{margin-top:15px}
body.focus .tarea:not(.done){border-color:#48a4ff66}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important}}
</style>
</head>
<body>
<div id="fondo">
 <div class="glow azul"></div>
 <div class="glow violeta"></div>
 <div class="glow celeste"></div>
</div>
<canvas id="particulas"></canvas>

<main class="app">
<header>
 <div class="tag">TU ESPACIO PERSONAL</div>
 <h1>Mi <span class="degrade">Focus</span></h1>
 <p id="fecha"></p>
 <div id="reloj">00:00:00</div>
</header>

<div class="resumen">
 <div class="stat"><strong id="total">0</strong><span>Tareas</span></div>
 <div class="stat"><strong id="pendientes">0</strong><span>Pendientes</span></div>
 <div class="stat"><strong id="hechas">0</strong><span>Completadas</span></div>
</div>

<button class="focusbtn" id="focusBtn">◉ Activar modo concentración</button>
<div id="focusStatus">Modo concentración activado · Una tarea a la vez</div>

<section class="panel" id="formPanel">
 <h2>✦ Nueva tarea</h2>
 <form id="formulario">
  <label for="nombre">¿Qué tenés que hacer?</label>
  <input id="nombre" maxlength="120" placeholder="Ej. Estudiar matemática" required>
  <label for="hora">¿A qué hora?</label>
  <input id="hora" type="time" required>
  <button class="primary" type="submit">＋ Agregar tarea</button>
 </form>
 <button class="secondary" id="avisos" type="button">Activar avisos</button>
 <p class="nota">Los avisos funcionan mientras la página está abierta. El navegador puede limitar las notificaciones en segundo plano.</p>
</section>

<section class="panel">
 <h2>Mis tareas</h2>
 <p class="sub" id="contador">Organizá tu día</p>
 <div id="lista"></div>
</section>
<footer>ORGANIZÁ TU TIEMPO · UN PASO A LA VEZ</footer>
</main>

<script>
const $=id=>document.getElementById(id);
let tareas=[];
let avisosActivos=false;
let notificadas=new Set();

try{
 const guardado=localStorage.getItem("focusTareas");
 if(guardado){const datos=JSON.parse(guardado);if(Array.isArray(datos))tareas=datos;}
}catch(e){}

function guardar(){
 try{localStorage.setItem("focusTareas",JSON.stringify(tareas));}catch(e){}
}

function actualizarReloj(){
 const ahora=new Date();
 $("reloj").textContent=ahora.toLocaleTimeString("es-AR",{hour12:false});
 $("fecha").textContent=ahora.toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
 revisarAvisos();
}

function resumen(){
 $("total").textContent=tareas.length;
 $("pendientes").textContent=tareas.filter(t=>!t.done).length;
 $("hechas").textContent=tareas.filter(t=>t.done).length;
 $("contador").textContent=tareas.length?tareas.length+" tarea(s) guardada(s)":"Agregá tu primera tarea";
}

function boton(texto,clase,accion,etiqueta){
 const b=document.createElement("button");
 b.type="button";b.textContent=texto;b.className=clase;
 if(etiqueta)b.setAttribute("aria-label",etiqueta);
 b.addEventListener("click",accion);return b;
}

function dibujar(){
 const lista=$("lista");lista.replaceChildren();
 const ordenadas=[...tareas].sort((a,b)=>{
  if(a.done!==b.done)return a.done?1:-1;
  return a.hora.localeCompare(b.hora);
 });
 if(!ordenadas.length){
  const vacio=document.createElement("div");vacio.className="vacio";
  vacio.textContent="Todavía no tenés tareas. ✦ Agregá la primera y empezá a organizarte.";
  lista.append(vacio);
 }
 ordenadas.forEach(t=>{
  const tarjeta=document.createElement("article");
  tarjeta.className="tarea"+(t.done?" done":"");
  const fila=document.createElement("div");fila.className="fila";
  fila.append(boton(t.done?"✓":"","check",()=>cambiar(t.id),t.done?"Marcar pendiente":"Completar tarea"));
  const info=document.createElement("div");info.className="info";
  const nombre=document.createElement("div");nombre.className="nombre";nombre.textContent=t.nombre;
  const hora=document.createElement("div");hora.className="hora";hora.textContent="◷ "+t.hora;
  info.append(nombre,hora);fila.append(info);tarjeta.append(fila);
  const acciones=document.createElement("div");acciones.className="acciones";
  acciones.append(
   boton("Editar","small edit",()=>editar(t.id)),
   boton("Eliminar","small remove",()=>eliminar(t.id))
  );
  tarjeta.append(acciones);lista.append(tarjeta);
 });
 resumen();
}

function cambiar(id){
 const t=tareas.find(x=>x.id===id);if(!t)return;
 t.done=!t.done;guardar();dibujar();
}

function eliminar(id){
 tareas=tareas.filter(t=>t.id!==id);guardar();dibujar();
}

function editar(id){
 const t=tareas.find(x=>x.id===id);if(!t)return;
 const nombre=prompt("Nombre de la tarea:",t.nombre);
 if(nombre===null)return;
 if(!nombre.trim()){alert("Escribí un nombre para la tarea.");return;}
 const hora=prompt("Hora (formato HH:MM):",t.hora);
 if(hora===null)return;
 if(!/^\d{2}:\d{2}$/.test(hora)||Number(hora.slice(0,2))>23||Number(hora.slice(3))>59){
  alert("Ingresá una hora válida, por ejemplo 14:30.");return;
 }
 t.nombre=nombre.trim();t.hora=hora;
 notificadas.delete(id);guardar();dibujar();
}

$("formulario").addEventListener("submit",e=>{
 e.preventDefault();
 const nombre=$("nombre").value.trim();
 const hora=$("hora").value;
 if(!nombre||!hora){alert("Completá el nombre y la hora.");return;}
 tareas.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),nombre,hora,done:false});
 guardar();dibujar();e.target.reset();
 $("nombre").focus();
});

$("focusBtn").addEventListener("click",()=>{
 document.body.classList.toggle("focus");
 const activo=document.body.classList.contains("focus");
 $("focusBtn").textContent=activo?"✕ Salir del modo concentración":"◉ Activar modo concentración";
});

$("avisos").addEventListener("click",async()=>{
 if(!("Notification" in window)){
  alert("Este navegador no admite notificaciones. Podés ver los avisos con la página abierta.");
  avisosActivos=true;return;
 }
 try{
  const permiso=await Notification.requestPermission();
  avisosActivos=permiso==="granted";
  $("avisos").textContent=avisosActivos?"✓ Avisos activados":"Activar avisos";
  if(!avisosActivos)alert("No se habilitaron las notificaciones. Revisá los permisos del navegador.");
 }catch(e){alert("No se pudieron activar las notificaciones en este navegador.");}
});

function revisarAvisos(){
 if(!avisosActivos)return;
 const ahora=new Date();
 const horaActual=ahora.toTimeString().slice(0,5);
 tareas.forEach(t=>{
  if(!t.done&&t.hora===horaActual&&!notificadas.has(t.id)){
   notificadas.add(t.id);
   try{new Notification("¡Hora de tu tarea!",{body:t.nombre});}catch(e){}
   if(document.visibilityState==="visible")alert("¡Es hora de hacer esto!\n"+t.nombre);
  }
 });
}

/* Partículas animadas */
const canvas=$("particulas"),ctx=canvas.getContext("2d");
let puntos=[];
function prepararCanvas(){
 const dpr=Math.min(window.devicePixelRatio||1,2);
 canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;
 canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";
 ctx.setTransform(dpr,0,0,dpr,0,0);
 puntos=Array.from({length:38},()=>({
  x:Math.random()*innerWidth,y:Math.random()*innerHeight,
  r:Math.random()*1.8+.4,v:Math.random()*.35+.12,
  dx:(Math.random()-.5)*.25,a:Math.random()*.6+.15
 }));
}
function animar(){
 ctx.clearRect(0,0,innerWidth,innerHeight);
 puntos.forEach(p=>{
  p.y-=p.v;p.x+=p.dx;
  if(p.y<-5){p.y=innerHeight+5;p.x=Math.random()*innerWidth;}
  if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;
  ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
  ctx.fillStyle="rgba(105,175,255,"+p.a+")";ctx.fill();
 });
 requestAnimationFrame(animar);
}
window.addEventListener("resize",prepararCanvas);
prepararCanvas();animar();
actualizarReloj();setInterval(actualizarReloj,1000);
dibujar();
</script>
</body>
</html>

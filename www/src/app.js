const CASES={
familiar:{e:"🏠",n:"Violencia familiar o de pareja",
def:"Toda acción o conducta que causa muerte, daño o sufrimiento físico, sexual o psicológico a una mujer por su condición de tal, o a cualquier integrante del grupo familiar. Incluye también la violencia económica o patrimonial.",
ley:["Ley 30364 y su reglamento (prevenir, sancionar y erradicar la violencia contra las mujeres y el grupo familiar)","Decreto Legislativo 1470 (atención y protección durante emergencias, refuerza las medidas)","Código Penal: art. 122-B (agresiones en contexto familiar) y art. 108-B (feminicidio)"],
hacer:["Ponte a salvo primero. Si hay peligro inmediato llama al 105.","Denuncia en cualquier comisaría o en el CEM. No necesitas abogado ni pagar, y no pueden negarte la denuncia.","Pide que apliquen la Ficha de Valoración de Riesgo: de ella depende la rapidez de las medidas de protección.","Solicita medidas de protección (retiro del agresor, impedimento de acercamiento, otras). El Juzgado de Familia debe resolver en plazos cortos (24 h riesgo severo, 48 h moderado, según la norma vigente).","Acude al examen médico legal (IML) lo antes posible; no te bañes ni cambies la ropa si hubo agresión física reciente."],
no:["No borres chats, audios ni fotos, aunque duelan.","No firmes desistimientos ni actas de conciliación bajo presión.","No aceptes que te repitan el relato varias veces: pide que se registre una sola vez."],
evid:["Capturas de mensajes con fecha y número visibles","Audios y videos de amenazas","Fotos de lesiones y de daños en el hogar","Certificados médicos o psicológicos","Nombres y teléfonos de testigos","Denuncias o ficha de riesgo anteriores"],
donde:["Comisaría más cercana (denuncia inmediata)","Centro Emergencia Mujer (CEM), Línea 100","Fiscalía de Familia o Penal","Juzgado de Familia (medidas de protección)"],
extra:"Relación con la persona agresora (pareja, expareja, familiar)",riesgo:true},
transito:{e:"🚓",n:"Coima o abuso en tránsito",
def:"Cuando un efectivo policial solicita, insinúa o acepta dinero u otra ventaja para no imponer una papeleta o para omitir un acto propio de su función (cohecho pasivo). Si te exige pagar algo que no corresponde abusando del cargo, puede ser concusión.",
ley:["Código Penal: arts. 393 y 394 (cohecho pasivo), art. 382 (concusión), art. 376 (abuso de autoridad)","Art. 397 (cohecho activo): quien ofrece o da el soborno también puede ser sancionado","Reglamento Nacional de Tránsito (D.S. 016-2009-MTC): las infracciones se sancionan con papeleta, nunca con pago en la calle"],
hacer:["No ofrezcas ni entregues dinero: podrías incurrir en cohecho activo.","Pide la papeleta formal y que el efectivo se identifique (nombre, grado y código).","Anota placa del patrullero o moto, lugar, hora y lo que te dijo. Si es seguro, graba.","Denuncia en la Inspectoría General de la PNP, la Fiscalía o ante la Defensoría del Pueblo.","Si te retienen o intimidan, llama al 105 y avisa a un familiar."],
no:["No discutas ni te resistas físicamente.","No pagues en efectivo ni por billetera digital al efectivo.","No publiques datos privados de terceros: describe los hechos."],
evid:["Placa del vehículo policial y del tuyo","Nombre o código del efectivo","Hora, lugar y ruta exacta","Video o audio (si lo hiciste con seguridad)","Papeleta si te la impusieron","Testigos (pasajeros, comerciantes)"],
donde:["Inspectoría General de la PNP","Fiscalía Especializada en Delitos de Corrupción de Funcionarios","Defensoría del Pueblo (0800-15-170)"],
extra:"Placa, nombre o código del efectivo",riesgo:false},
extorsion:{e:"📵",n:"Extorsión o cobro de cupos",
def:"Obligar a una persona, mediante violencia o amenaza, a entregar dinero u otra ventaja económica indebida. Incluye amenazas por llamada o mensaje, cobro de cupos a negocios y préstamos “gota a gota” con intimidación.",
ley:["Código Penal: art. 200 (extorsión) y sus agravantes (banda, uso de armas, amenaza a la vida)","Ley 30096 y modificatorias, cuando se comete por medios informáticos","Ley 30077 (crimen organizado), si hay una organización detrás"],
hacer:["No pagues ni negocies solo. Cada pago suele aumentar la exigencia.","Guarda todo: números, cuentas, capturas, audios y la hora de cada contacto.","Denuncia en la comisaría o ante la Fiscalía; en peligro inminente llama al 105.","Si hay un pago ya hecho, conserva el comprobante y la cuenta de destino.","Avisa a familiares o vecinos y revisa tus rutinas de seguridad."],
no:["No borres el número ni bloquees sin antes guardar la evidencia.","No lleves dinero ni te reúnas con el extorsionador.","No compartas la denuncia por redes con datos que puedan alertarlo."],
evid:["Capturas de mensajes y registro de llamadas","Números y cuentas bancarias del extorsionador","Audios de las amenazas","Comprobantes de pagos realizados","Fotos del lugar o del vehículo si te siguieron","Lista de otras víctimas o negocios afectados"],
donde:["Comisaría o unidad especializada de la PNP","Fiscalía Penal","DIVINDAT, si fue por internet o teléfono"],
extra:"Números, cuentas o alias de quien extorsiona",riesgo:true},
estafa:{e:"💳",n:"Estafa o fraude digital",
def:"Engañar a alguien con astucia o ardid para obtener un provecho económico ilícito que lo perjudica (estafa). Si se hace con sistemas informáticos, como transferencias o accesos fraudulentos, es fraude informático; si usan tu identidad, suplantación.",
ley:["Código Penal: art. 196 (estafa) y 196-A (estafa agravada)","Ley 30096 (delitos informáticos): art. 8 fraude informático y art. 9 suplantación de identidad","Código de Protección y Defensa del Consumidor: reclamos ante el banco o proveedor"],
hacer:["Bloquea de inmediato tarjetas, cuentas o billeteras digitales.","Reclama por escrito a la entidad financiera y pide el número de reclamo.","Guarda vouchers, capturas, enlaces, números y cuenta de destino.","Denuncia ante la PNP (DIVINDAT si fue digital) y la Fiscalía.","Si el proveedor no responde, acude a Indecopi o a la SBS según el caso."],
no:["No sigas pagando “para recuperar” el dinero.","No compartas claves, códigos SMS ni el token.","No borres la conversación ni el perfil del estafador: captúralos primero."],
evid:["Capturas de la conversación y del perfil o anuncio","Vouchers y estados de cuenta","Cuenta o número de destino del dinero","Enlaces o páginas falsas (URL exacta)","Número de reclamo ante el banco","Fecha y hora de cada operación"],
donde:["Entidad financiera (reclamo)","PNP – DIVINDAT","Fiscalía Penal","Indecopi / SBS"],
extra:"Cuenta, número, perfil o enlace usado en el fraude",riesgo:false},
otro:{e:"⚖️",n:"Otro abuso o vulneración de derechos",
def:"Actos de autoridad o de terceros que lesionan tus derechos: abuso de autoridad, discriminación, detención arbitraria, cobros indebidos u otra conducta que no encaja en las categorías anteriores.",
ley:["Constitución Política del Perú, art. 2 (derechos fundamentales)","Código Penal: art. 376 (abuso de autoridad), art. 323 (discriminación)","Ley 27444 (procedimiento administrativo general), si el abuso es de una entidad pública"],
hacer:["Anota qué pasó, quién y cuándo, y guarda cualquier documento.","Pide que las decisiones de la autoridad consten por escrito.","Recurre a la Defensoría del Pueblo (0800-15-170) o a un abogado.","Evalúa si corresponde denuncia penal o reclamo administrativo."],
no:["No firmes documentos que no entiendas.","No te enfrentes físicamente a la autoridad."],
evid:["Documentos, resoluciones y actas","Fotos, audios o videos","Nombres, cargos y testigos","Fechas y lugares"],
donde:["Defensoría del Pueblo","Fiscalía","Órgano de Control Institucional de la entidad"],
extra:"Entidad o persona involucrada",riesgo:false}};
const S={view:"home",id:null,tab:0,form:{},files:[],out:null,disc:false};
const $=s=>document.getElementById(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const li=a=>"<ul>"+a.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul>";
function go(v,id){S.view=v;if(id)S.id=id;S.tab=0;render();window.scrollTo(0,0)}
function topbar(back){return `<div class="top">${back?`<button onclick="go('home')" aria-label="Volver">← Inicio</button>`:`<span class="mut">Prototipo educativo</span>`}<span><button class="ghost" onclick="S.disc=true;render()" aria-label="Modo discreto">🙈</button> <button class="sos" onclick="sos()">SOS</button></span></div>`}
function render(){
 const a=$("app");
 if(S.disc){let v="0";a.innerHTML=`<div class="calc"><div class="d" id="cd">0</div>${["7","8","9","÷","4","5","6","×","1","2","3","−","C","0",".","="].map(k=>`<button onclick="cc('${k}')">${k}</button>`).join("")}</div><p class="mut" style="text-align:center">Pulsa C tres veces para volver</p>`;window._c=0;return}
 if(S.view==="datos"){const D=[["Texto","Relato, fecha, lugar, involucrados, testigos","Ordenar los hechos y armar la denuncia","Incluye solo los datos de terceros que sean necesarios"],["Foto","Lesiones, daños, documentos, placas","Prueba visual","Conserva el original; no edites ni recortes"],["Video","Escena, retén, amenaza en curso","Prueba de hechos y contexto","Graba solo si es seguro"],["Voz / audio","Amenazas, llamadas, tu propia grabación","Prueba de lo dicho","Dato sensible. Graba solo conversaciones en las que participas; grabar las ajenas puede ser delito (art. 162 del Código Penal)"],["Captura de pantalla","Chats, correos, anuncios, perfiles","Prueba digital","Muestra número, nombre y fecha; guarda también el chat completo"],["Documento","Certificados, papeletas, vouchers, resoluciones","Respaldo formal","Conserva el original"],["Metadatos","Tipo, tamaño, fecha del archivo, hora de registro, huella SHA-256","Probar que la evidencia no cambió","Se calculan en tu dispositivo"]];
 a.innerHTML=topbar(true)+`<h2>Qué datos recoge</h2><p class="mut">Todo queda en tu dispositivo mientras usas la app. No se envía ni se guarda en servidores.</p>${D.map(r=>`<div class="card"><b>${r[0]}</b><p>${r[1]}</p><p class="mut"><b>Sirve para:</b> ${r[2]}.<br><b>Cuidado:</b> ${r[3]}.</p></div>`).join("")}<div class="card def"><b>Lo que NO recoge</b><p>Ubicación GPS, contactos, identificadores del equipo ni datos de otras apps. Las fotos pueden traer ubicación en sus metadatos: la app no la lee, pero tú decides si compartes el original.</p></div><p class="mut">La voz y la imagen son datos personales sensibles (Ley 29733). Si se agrega un servidor, se necesitará consentimiento informado y cifrado.</p>`;return}
 if(S.view==="verify"){a.innerHTML=topbar(true)+`<h2>Verificar integridad</h2><p class="mut">Comprueba que un archivo no cambió desde que lo sellaste: compara su huella SHA-256 con la del expediente.</p><label for="vfile">Archivo</label><input type="file" id="vfile"><label for="vh">Huella SHA-256 registrada</label><input type="text" id="vh" placeholder="Pega aquí la huella"><div style="margin-top:12px"><button class="pri" style="width:100%" onclick="vf()">Verificar</button></div><div class="card" id="vr" aria-live="polite">Aún sin resultado.</div>`;return}
 if(S.view==="home"){a.innerHTML=topbar(false)+`<h1>Escudo Ciudadano</h1><p>Cuéntanos qué te pasó. Te explicamos qué es según la ley peruana, qué hacer ahora y armamos tu expediente para denunciar.</p>
 <div class="card warn"><b>¿Estás en peligro ahora?</b><p class="mut">Pulsa SOS para ver los números de emergencia.</p></div>
 <div class="grid">${Object.entries(CASES).map(([k,c])=>`<button class="case" onclick="go('guide','${k}')"><span class="e">${c.e}</span><span><b>${c.n}</b><span class="mut">${c.def.slice(0,70)}…</span></span></button>`).join("")}</div>
 <div class="card"><b>Herramientas</b><div class="grid" style="margin-top:8px"><button onclick="go('datos')">📋 Qué datos recoge la app</button><button onclick="go('verify')">🔍 Verificar integridad de un archivo</button></div></div><div class="card note"><b>Una sola vez</b><p class="mut">Tu relato se escribe una vez y se reutiliza para la denuncia, la fiscalía y las instituciones de apoyo. Nada sale de tu dispositivo: este prototipo no guarda ni envía datos.</p></div>
 <p class="mut">Orientación referencial. No reemplaza a un abogado; verifica la vigencia de normas y teléfonos.</p>`;return}
 const c=CASES[S.id];
 if(S.view==="guide"){
  const T=["Qué es","Qué hacer","Evidencia","Dónde"];
  const P=[`<div class="card def"><b>Definición</b><p>${esc(c.def)}</p></div><h3>Base legal</h3>${li(c.ley)}`,
   `<h3>Haz esto</h3>${li(c.hacer)}<div class="card warn"><b>Evita esto</b>${li(c.no)}</div>`,
   `<h3>Reúne la evidencia</h3>${li(c.evid)}<p class="mut">En el siguiente paso puedes sellar tus archivos con una huella digital (SHA-256) que prueba que no cambiaron después.</p>`,
   `<h3>Dónde denunciar</h3>${li(c.donde)}<p class="mut">Confirma el canal y el teléfono vigente en la página oficial de la entidad.</p>`];
  a.innerHTML=topbar(true)+`<h2>${c.e} ${c.n}</h2><div class="tabs" role="tablist">${T.map((t,i)=>`<button role="tab" aria-selected="${i==S.tab}" onclick="S.tab=${i};render()">${t}</button>`).join("")}</div>${P[S.tab]}<div style="position:sticky;bottom:12px;margin-top:16px"><button class="pri" style="width:100%" onclick="go('build')">Armar mi expediente</button></div>`;return}
 if(S.view==="build"){const f=S.form;
  a.innerHTML=topbar(true)+`<h2>Tu expediente</h2><p class="mut">${c.n}. Cuéntalo una sola vez, con calma.</p>
  <label class="chk"><input type="checkbox" id="peligro" ${f.peligro?"checked":""} onchange="S.form.peligro=this.checked;if(this.checked)sos()"> Estoy en peligro inmediato</label>
  <label for="fh">¿Cuándo ocurrió?</label><input type="datetime-local" id="fh" value="${esc(f.fh||"")}">
  <label for="lg">¿Dónde?</label><input type="text" id="lg" value="${esc(f.lg||"")}" placeholder="Distrito, calle, referencia">
  <label for="ex">${esc(c.extra)}</label><input type="text" id="ex" value="${esc(f.ex||"")}">
  ${c.id==="x"?"":""}<label for="rl">¿Qué pasó? Describe los hechos en orden</label><textarea id="rl" placeholder="Qué ocurrió primero, qué dijeron o hicieron, cómo te afectó">${esc(f.rl||"")}</textarea>
  <label for="ts">Testigos (nombre y teléfono)</label><input type="text" id="ts" value="${esc(f.ts||"")}">
  ${c.riesgo?`<h3>Señales de riesgo</h3>${["Amenazas de muerte o de hacerte daño","Te siguen, vigilan o controlan","Hay armas en el entorno","Los hechos son cada vez más frecuentes o graves","Hay hijos o menores involucrados"].map((r,i)=>`<label class="chk"><input type="checkbox" class="rk" ${f["r"+i]?"checked":""}> ${r}</label>`).join("")}`:""}
  <h3>Evidencias</h3><p class="mut">Cada evidencia se registra con su tipo, hora y huella SHA-256, calculada en tu dispositivo. Nada se sube a ningún lado.</p>
  <div class="evg">
  <label class="evb">📷 Foto<input class="vh" type="file" accept="image/*" capture="environment" onchange="hashFiles(this.files,'foto')"></label>
  <label class="evb">🎥 Video<input class="vh" type="file" accept="video/*" capture="environment" onchange="hashFiles(this.files,'video')"></label>
  <button class="evb" id="recb" onclick="rec()">🎙️ Grabar voz</button>
  <label class="evb">💬 Captura de pantalla<input class="vh" type="file" accept="image/*" multiple onchange="hashFiles(this.files,'captura')"></label>
  <label class="evb" style="grid-column:1/3">📎 Audio, documento u otro archivo<input class="vh" type="file" multiple onchange="hashFiles(this.files)"></label></div>
  <p class="mut" id="recm" aria-live="polite"></p>
  <details class="card"><summary><b>Cómo registrar cada tipo</b></summary><ul>
  <li><b>Foto:</b> varias, de cerca y de lejos. No edites ni recortes; conserva el original.</li>
  <li><b>Video:</b> graba solo si es seguro. Muestra lugar, hora y personas.</li>
  <li><b>Voz:</b> graba solo conversaciones en las que participas. Di fecha y lugar al inicio.</li>
  <li><b>Captura:</b> incluye número o nombre del contacto y la fecha; exporta también el chat completo.</li>
  <li><b>Documento:</b> conserva el original y fotografía todas las páginas.</li></ul>
  <p class="mut">Evita reenviar la evidencia por WhatsApp: comprime el archivo y cambia su huella.</p></details><div id="fls">${fileList()}</div>
  <div style="margin-top:16px"><button class="pri" style="width:100%" onclick="gen()">Generar expediente sellado</button></div>`;return}
 if(S.view==="out"){const o=S.out;
  a.innerHTML=topbar(true)+`<h2>Expediente listo</h2>
  <div class="card ${o.nivel==="ALTO"?"warn":o.nivel==="MEDIO"?"note":"def"}"><b>Prioridad: ${o.nivel}</b><p>${esc(o.msg)}</p></div>
  <div class="seal"><b>Sello de integridad</b>Hora: ${esc(o.ts)}<br>SHA-256: ${o.hash}</div>
  <p class="mut">Cualquier cambio al texto cambia esta huella. Para valor probatorio formal, la verificación debe hacerla la autoridad o un perito.</p>
  <div class="card note"><b>Meta de seguimiento</b><p>${S.id==="familiar"?"Que la medida de protección esté dictada antes de: ":"Que tu denuncia tenga número de caso antes de: "}<b>${new Date(o.at+(o.nivel==="ALTO"?24:48)*36e5).toLocaleString("es-PE")}</b></p><p class="mut">${S.id==="familiar"?"Plazo referencial (Ley 30364 y D. Leg. 1470). Si se vence, insiste por escrito y acude a la Fiscalía o la Defensoría.":"Meta sugerida para no dejar enfriar el caso. Insiste por escrito si no te dan número."}</p></div><h3>Aviso a persona de confianza</h3><button style="width:100%" onclick="tc()">Copiar mensaje de aviso</button><h3>Ruta sugerida</h3>${c.hacer.map(h=>`<label class="chk"><input type="checkbox"> ${esc(h)}</label>`).join("")}
  <h3>Texto para presentar</h3><pre id="txt">${esc(o.txt)}</pre>
  <button class="pri" style="width:100%" onclick="cp()">Copiar texto</button><p class="mut" id="cpm"></p>
  <button style="width:100%;margin-top:8px" onclick="go('build')">Editar datos</button>`;return}
}
const ETIQ={foto:"Foto",video:"Video",audio:"Voz / audio",captura:"Captura de pantalla",documento:"Documento",otro:"Otro"},ICO={foto:"📷",video:"🎥",audio:"🎙️",captura:"💬",documento:"📄",otro:"📎"};
function tipoEv(f){const m=f.type||"",n=(f.name||"").toLowerCase();if(m.startsWith("image/"))return"foto";if(m.startsWith("video/"))return"video";if(m.startsWith("audio/"))return"audio";if(m==="application/pdf"||/\.(pdf|docx?|xlsx?|txt)$/.test(n))return"documento";return"otro"}
const fmtF=m=>m?new Date(m).toLocaleString("es-PE"):"s/d";
function fileList(){return S.files.map((f,i)=>`<div class="card"><b>${ICO[f.tipo]} ${ETIQ[f.tipo]}: ${esc(f.name)}</b><p class="mut">${Math.round((f.size||0)/1024)} KB · archivo modificado: ${fmtF(f.mod)}</p><div class="seal">${f.h}</div><label for="nt${i}">¿Qué demuestra?</label><input type="text" id="nt${i}" value="${esc(f.nota||"")}" onchange="S.files[${i}].nota=this.value">${f.url?`<p><a href="${f.url}" download="${esc(f.name)}">Guardar copia original</a></p>`:""}<button onclick="S.files.splice(${i},1);$('fls').innerHTML=fileList()">Quitar</button></div>`).join("")}
async function sha(buf){const h=await crypto.subtle.digest("SHA-256",buf);return [...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,"0")).join("")}
async function hashFiles(list,tipo){for(const f of list){let h="no se pudo calcular";try{h=await sha(await f.arrayBuffer())}catch(e){}S.files.push({name:f.name,size:f.size,mime:f.type,mod:f.lastModified,tipo:tipo||tipoEv(f),h,at:new Date().toISOString(),nota:""})}$("fls").innerHTML=fileList()}
async function rec(){const b=$("recb"),m=$("recm");if(window._rc){window._rc.stop();return}
 try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),ch=[],rc=new MediaRecorder(st);window._rc=rc;
  rc.ondataavailable=e=>ch.push(e.data);
  rc.onstop=async()=>{st.getTracks().forEach(t=>t.stop());window._rc=null;b.textContent="🎙️ Grabar voz";const bl=new Blob(ch,{type:rc.mimeType||"audio/webm"});
   S.files.push({name:"voz-"+Date.now()+".webm",size:bl.size,mime:bl.type,mod:Date.now(),tipo:"audio",h:await sha(await bl.arrayBuffer()),at:new Date().toISOString(),nota:"",url:URL.createObjectURL(bl)});$("fls").innerHTML=fileList();m.textContent="Guarda la copia original de la grabación."};
  rc.start();b.textContent="⏹️ Detener grabación"}catch(e){m.textContent="No se pudo usar el micrófono (permiso denegado o no disponible)."}}
function grab(){const g=i=>($(i)||{}).value||"";Object.assign(S.form,{fh:g("fh"),lg:g("lg"),ex:g("ex"),rl:g("rl"),ts:g("ts")});document.querySelectorAll(".rk").forEach((e,i)=>S.form["r"+i]=e.checked)}
async function gen(){grab();const c=CASES[S.id],f=S.form;
 const n=c.riesgo?[...Array(5).keys()].filter(i=>f["r"+i]).length:0;
 let nivel="BAJO",msg="Sigue la ruta sugerida y presenta tu denuncia con la evidencia reunida.";
 if(f.peligro||n>=3){nivel="ALTO";msg="Hay señales de peligro. Busca un lugar seguro, llama al 105 y pide atención inmediata y medidas de protección."}
 else if(n>=1||c.riesgo){nivel="MEDIO";msg="Presenta tu denuncia pronto y pide que valoren el riesgo."}
 const ts=new Date().toLocaleString("es-PE");
 const txt=["EXPEDIENTE CIUDADANO – "+c.n.toUpperCase(),"Generado: "+ts,"","Fecha y hora de los hechos: "+(f.fh||"no indicada"),"Lugar: "+(f.lg||"no indicado"),c.extra+": "+(f.ex||"no indicado"),"Testigos: "+(f.ts||"no indicados"),"","RELATO:",f.rl||"(sin relato)","","Base legal referencial:",...c.ley.map(x=>"- "+x),"","Evidencias registradas (tipo, archivo, huella SHA-256):",...(S.files.length?S.files.map((x,i)=>(i+1)+". ["+ETIQ[x.tipo]+"] "+x.name+" ("+Math.round((x.size||0)/1024)+" KB; modificado "+fmtF(x.mod)+"; registrado "+new Date(x.at).toLocaleString("es-PE")+")\n   SHA-256: "+x.h+(x.nota?"\n   Demuestra: "+x.nota:"")):["- ninguna"])].join("\n");
 S.out={nivel,msg,ts,txt,at:Date.now(),hash:await sha(new TextEncoder().encode(txt))};S.view="out";render();window.scrollTo(0,0)}
async function cp(){try{await navigator.clipboard.writeText($("txt").textContent);$("cpm").textContent="Texto copiado."}catch(e){const r=document.createRange();r.selectNodeContents($("txt"));getSelection().removeAllRanges();getSelection().addRange(r);$("cpm").textContent="Selecciona y copia el texto marcado."}}
async function vf(){const f=$("vfile").files[0],h=($("vh").value||"").trim().toLowerCase(),r=$("vr");if(!f||!h){r.textContent="Elige un archivo y pega la huella.";return}const x=await sha(await f.arrayBuffer());r.innerHTML=x===h?"✅ <b>Coincide.</b> El archivo no fue modificado.":"⚠️ <b>No coincide.</b> El archivo cambió o la huella es de otro archivo."}
async function tc(){const c=CASES[S.id],t="Aviso: estoy presentando una denuncia por "+c.n.toLowerCase()+". Si no te escribo en 2 horas, llama al 105 y avisa a mi familia. Guardé la evidencia.";try{await navigator.clipboard.writeText(t)}catch(e){}$("cpm").textContent="Mensaje: "+t}
function sos(){const m=document.createElement("div");m.className="modal";m.onclick=e=>{if(e.target===m)m.remove()};
 m.innerHTML=`<div role="dialog" aria-label="Emergencia"><h2>Pide ayuda ahora</h2><a class="tel" href="tel:105">105 · Policía</a><a class="tel" href="tel:100">100 · Violencia familiar y sexual</a><p class="mut">Si puedes, ve a un lugar con gente y avisa a una persona de confianza. Verifica que los números estén vigentes en tu zona.</p><button style="width:100%" onclick="this.closest('.modal').remove()">Cerrar</button></div>`;document.body.appendChild(m)}
function cc(k){const d=$("cd");if(k==="C"){window._c=(window._c||0)+1;d.textContent="0";if(window._c>=3){S.disc=false;render()}}else{window._c=0;d.textContent=d.textContent==="0"?k:d.textContent+k}}
if(typeof __TEST__==="undefined")render();

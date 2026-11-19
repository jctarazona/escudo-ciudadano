// Pruebas de funcionalidad: ejecutan src/app.js real con un DOM simulado.
const test=require("node:test"),assert=require("node:assert/strict");
const vm=require("node:vm"),fs=require("node:fs"),path=require("node:path"),nc=require("node:crypto");
const els={},mk=id=>els[id]??={value:"",textContent:"",innerHTML:"",files:[]};
const ctx={__TEST__:true,console,TextEncoder,Date,crypto:nc.webcrypto,navigator:{clipboard:{writeText:async()=>{}}},window:{scrollTo(){}},
 document:{getElementById:mk,querySelectorAll:()=>[],createElement:()=>({}),body:{appendChild(m){ctx.__modal=m.innerHTML}}}};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname,"../src/app.js"),"utf8"),ctx);
const run=c=>vm.runInContext(c,ctx);
const sha=s=>nc.createHash("sha256").update(s).digest("hex");
const IDS=["familiar","transito","extorsion","estafa","otro"];

test("los 5 casos tienen definición, base legal, pasos, evidencia y destinos",()=>{
 assert.deepEqual(Object.keys(run("CASES")),IDS);
 for(const id of IDS){const c=run(`CASES.${id}`);
  for(const k of ["n","def","ley","hacer","no","evid","donde","extra"])assert.ok(c[k]&&c[k].length,`${id}.${k}`)}});

test("pantalla de inicio muestra los 5 casos",()=>{
 run('S.disc=false;S.view="home";render()');
 for(const id of IDS)assert.ok(els.app.innerHTML.includes(run(`CASES.${id}.n`)));});

test("la guía renderiza las 4 pestañas de cada caso",()=>{
 for(const id of IDS)for(let t=0;t<4;t++){run(`S.view="guide";S.id="${id}";S.tab=${t};render()`);
  assert.ok(els.app.innerHTML.includes(run(`CASES.${id}.n`)))}});

test("semáforo: peligro inmediato o 3+ señales = ALTO",async()=>{
 run('S.id="familiar";S.files=[];S.form={peligro:true}');await run("gen()");assert.equal(run("S.out.nivel"),"ALTO");
 run('S.form={r0:true,r1:true,r2:true}');await run("gen()");assert.equal(run("S.out.nivel"),"ALTO");});

test("semáforo: 1 señal = MEDIO; estafa sin señales = BAJO",async()=>{
 run('S.id="familiar";S.form={r0:true}');await run("gen()");assert.equal(run("S.out.nivel"),"MEDIO");
 run('S.id="estafa";S.form={}');await run("gen()");assert.equal(run("S.out.nivel"),"BAJO");});

test("el sello SHA-256 del expediente es correcto y detecta cambios",async()=>{
 mk("rl").value="Me amenazaron por mensaje.";run('S.id="extorsion";S.form={}');await run("gen()");
 const txt=run("S.out.txt"),h=run("S.out.hash");
 assert.match(h,/^[0-9a-f]{64}$/);assert.equal(h,sha(txt));assert.notEqual(h,sha(txt+"x"));});

test("el hash de archivos coincide con el de Node",async()=>{
 const buf=Buffer.from("evidencia de prueba");
 assert.equal(await run("sha")(buf),sha(buf));});

test("el verificador distingue archivo íntegro de modificado",async()=>{
 const buf=Buffer.from("audio original");
 mk("vfile").files=[{arrayBuffer:async()=>buf}];
 mk("vh").value=sha(buf);await run("vf()");assert.match(els.vr.innerHTML,/Coincide/);
 mk("vh").value=sha("otro");await run("vf()");assert.match(els.vr.innerHTML,/No coincide/);});

test("meta de seguimiento y aviso a persona de confianza",async()=>{
 run('S.id="familiar";S.form={peligro:true}');await run("gen()");run('S.view="out";render()');
 assert.ok(els.app.innerHTML.includes("Meta de seguimiento"));
 await run("tc()");assert.match(els.cpm.textContent,/105/);});

test("SOS muestra 105 y 100",()=>{run("sos()");assert.ok(ctx.__modal.includes("tel:105")&&ctx.__modal.includes("tel:100"));});

test("modo discreto: calculadora y salida con C x3",()=>{
 run("S.disc=true;render()");assert.ok(els.app.innerHTML.includes("calc"));
 els.cd=mk("cd");for(let i=0;i<3;i++)run('cc("C")');assert.equal(run("S.disc"),false);});

test("clasifica la evidencia: foto, video, voz, documento",()=>{
 const f=run("tipoEv");
 assert.equal(f({type:"image/jpeg",name:"a.jpg"}),"foto");assert.equal(f({type:"video/mp4",name:"v.mp4"}),"video");
 assert.equal(f({type:"audio/ogg",name:"a.ogg"}),"audio");assert.equal(f({type:"",name:"cert.PDF"}),"documento");assert.equal(f({type:"",name:"x.bin"}),"otro");});

test("las evidencias quedan en el expediente con tipo, huella y nota",async()=>{
 const b=Buffer.from("foto-original");run("S.files=[]");mk("fls");
 await run("hashFiles")([{name:"lesion.jpg",type:"image/jpeg",size:2048,lastModified:1700000000000,arrayBuffer:async()=>b}]);
 await run("hashFiles")([{name:"chat.png",type:"image/png",size:900,lastModified:0,arrayBuffer:async()=>b}],"captura");
 run('S.files[0].nota="Lesión en el brazo"');run('S.id="familiar";S.form={}');await run("gen()");
 const x=run("S.out.txt");assert.ok(x.includes("[Foto] lesion.jpg"));assert.ok(x.includes("[Captura de pantalla] chat.png"));
 assert.ok(x.includes(sha(b)));assert.ok(x.includes("Demuestra: Lesión en el brazo"));});

test("la pantalla de datos explica qué recoge y qué no",()=>{
 run('S.view="datos";render()');const h=els.app.innerHTML;
 for(const k of ["Texto","Foto","Video","Voz / audio","Lo que NO recoge"])assert.ok(h.includes(k),k);});

test("no redeclara globales reservadas del navegador (top, name, parent...)",()=>{
 const src=fs.readFileSync(path.join(__dirname,"../src/app.js"),"utf8");
 for(const w of ["top","parent","self","name","status","length","location","history","event","close","open","stop"])
  assert.ok(!new RegExp(`(function\\s+${w}\\s*\\(|(const|let|var)\\s+${w}\\b)`).test(src),w);});

test("manifest e íconos PWA válidos",()=>{
 const m=JSON.parse(fs.readFileSync(path.join(__dirname,"../manifest.json"),"utf8"));
 assert.equal(m.display,"standalone");
 for(const i of m.icons)assert.ok(fs.existsSync(path.join(__dirname,"..",i.src)));});

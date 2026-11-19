// Servidor local mínimo en Node (sin dependencias): node scripts/serve.js [puerto]
const http=require("http"),fs=require("fs"),path=require("path");
const root=path.join(__dirname,".."),port=process.argv[2]||8080;
const mime={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json",".png":"image/png"};
http.createServer((req,res)=>{
 let p=decodeURIComponent(req.url.split("?")[0]);if(p.endsWith("/"))p+="index.html";
 const f=path.join(root,path.normalize(p));
 if(!f.startsWith(root)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);return res.end("No encontrado")}
 res.writeHead(200,{"Content-Type":mime[path.extname(f)]||"application/octet-stream"});fs.createReadStream(f).pipe(res);
}).listen(port,()=>console.log("Escudo Ciudadano en http://localhost:"+port+"  (Ctrl+C para detener)"));

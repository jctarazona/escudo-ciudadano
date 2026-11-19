// Copia los archivos de la app a www/ (carpeta que usa Capacitor)
const fs=require("fs");fs.rmSync("www",{recursive:true,force:true});fs.mkdirSync("www");
for(const f of ["index.html","manifest.json","sw.js","src","icons"])fs.cpSync(f,"www/"+f,{recursive:true});
console.log("www/ listo");

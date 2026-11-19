# Escudo Ciudadano – proyecto de app (PWA + Android/iOS)

Orientación y expediente sellado para denunciar abusos en el Perú (violencia familiar, coima en tránsito, extorsión, estafa, otros).
Prototipo educativo: el contenido legal, los plazos y los teléfonos deben ser validados por abogados antes de un uso real.

## Estructura
- `index.html`, `src/app.js`, `src/styles.css`: la aplicación (sin dependencias).
- `manifest.json`, `sw.js`, `icons/`: lo que la convierte en PWA instalable y con uso sin conexión.
- `test/app.test.js`: 12 pruebas de funcionalidad (Node 18+; no requieren instalar nada).
- `scripts/build.js`, `capacitor.config.json`: empaquetado como app móvil.

## Paso 1. Probar en tu computadora
1. Instala Node.js (nodejs.org, versión LTS).
2. En la carpeta del proyecto: `npm test`. Debes ver 12 pruebas en verde.
3. `npm run serve` (usa Node, no Python) y abre http://localhost:8080 (el service worker funciona en localhost).

## Paso 2. Prueba manual (lista de verificación)
- [ ] Inicio: se ven los 5 casos y el botón SOS (muestra 105 y 100).
- [ ] Elige "Violencia familiar": las 4 pestañas (Qué es, Qué hacer, Evidencia, Dónde) cargan.
- [ ] Armar expediente: marca 3 señales de riesgo, genera y verifica prioridad ALTO.
- [ ] Adjunta un archivo: aparece su huella SHA-256 (64 caracteres).
- [ ] Herramientas > Verificar integridad: mismo archivo + misma huella = "Coincide"; edita el archivo = "No coincide".
- [ ] Modo discreto (icono 🙈): aparece la calculadora; pulsa C tres veces para volver.
- [ ] Desconecta internet y recarga: la app abre (service worker).

## Paso 3. Publicarla como PWA (gratis)
1. Sube la carpeta a un hosting con HTTPS: GitHub Pages, Netlify o Vercel.
2. En Android (Chrome): menú > "Instalar aplicación". En iPhone (Safari): Compartir > "Añadir a pantalla de inicio".

## Paso 4. Empaquetar como app Android con Capacitor
1. `npm init -y` (si aún no tienes package.json propio) y `npm i @capacitor/core @capacitor/cli @capacitor/android`.
2. `npm run build` (genera `www/`).
3. `npx cap add android` y luego `npx cap sync`.
4. Instala Android Studio y ejecuta `npx cap open android`.
5. En Android Studio: Build > Generate Signed Bundle (AAB). Guarda bien tu llave de firma.
6. Publica en Google Play Console (pago único de 25 USD). Para iOS: `npm i @capacitor/ios`, `npx cap add ios`, Xcode en Mac y cuenta Apple Developer (99 USD al año).
Cada vez que cambies el código: `npm run build && npx cap sync`.

## Paso 5. Antes de usarla con personas reales
1. Revisión legal por un penalista y un abogado de familia (artículos, plazos, teléfonos).
2. Política de privacidad conforme a la Ley 29733. Esta versión no guarda ni envía datos; si agregas servidor o cuentas, necesitas cifrado y consentimiento informado.
3. Quechua (variante Chanka): solo con traducción validada por hablantes nativos.
4. Pruebas con usuarias y usuarios reales y con operadores (policía, CEM, fiscalía).

## Siguiente fase técnica (sugerida)
Modo offline ampliado, directorio de comisarías y fiscalías por distrito, voz a texto, y tablero anonimizado de patrones con backend propio.

## Tipos de evidencia que recoge la app
Texto (relato y datos), foto, video, voz (grabadora integrada), captura de pantalla y documento. De cada una guarda tipo, nombre, tamaño, fecha del archivo, hora de registro, huella SHA-256 y una nota "¿Qué demuestra?". No recoge GPS ni contactos y no envía nada. Detalle en la pantalla "Qué datos recoge la app".

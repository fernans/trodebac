# trodebac

**Tro de Bac** is an Android game (2013) for throwing firecrackers ("petards") from your phone: shake the device or tap the firecracker and it explodes with one of six random boom sounds, with an optional soundtrack ("El Fallero" pasodoble and an 8-bit/chiptune version while the info screen is open). The original project is built with Adobe Flash Professional + ActionScript 3 and packaged as an AIR application for Android (`.apk`). This repository also includes the `html5/` folder: an automatic CreateJS/HTML5 canvas export of the same `.fla` project (runnable in a modern browser via the `html5/trodebac.html` entry point).

> **This project is shared ONLY for educational purposes. Its use, direct or derived, for professional or economic purposes is not permitted.**

Note: for security reasons, some parts of the project may have been edited or removed (e.g. the AIR signing certificate `iRita.p12` and any personal paths or local build artifacts are excluded and shipped separately).

The complete sources archive is published as a GitHub Release asset: `trodebac_source.rar`.

**Requirements / How to run**

- Flash/AIR app: Adobe Flash Professional/Animate (to open `trodebac.fla`) and the AIR SDK 3.2+ to package `trodebac-app.xml` + `trodebac.swf` into an APK; or install the included `trodebac.apk` directly on an Android device (may require older Android versions and side-loading).
- HTML5 version: open `html5/trodebac.html` in a browser (it pulls CreateJS 0.6/0.4 libraries from the code.createjs.com CDN; sounds/images must be served over HTTP, e.g. `python -m http.server` inside `html5/`, canvas is 1024x1280).
- Also included: `imagen/` (art sources, Photoshop PNG + PSD), `musicas/` + `petardos/` (audio in WAV), `about/` (credits slide + free 04B pixel fonts).

DISCLAIMER: This software is provided "as is", without any warranty of any kind. The author accepts no liability for any errors or damages resulting from its use.

---

# trodebac

**Tro de Bac** es un juego para Android (2013) para tirar petardos desde el móvil: agita el dispositivo o pulsa el petardo y explota con uno de seis sonidos de petardo aleatorios, con banda sonora opcional (pasodoble "El Fallero" y una versión 8-bit/chiptune mientras está abierta la pantalla de info). El proyecto original está hecho con Adobe Flash Professional + ActionScript 3 y empaquetado como aplicación AIR para Android (`.apk`). Este repositorio incluye también la carpeta `html5/`: una exportación automática a canvas CreateJS/HTML5 del mismo proyecto `.fla` (ejecutable en un navegador moderno mediante el punto de entrada `html5/trodebac.html`).

> **Este proyecto se comparte SOLO con valor educativo. No está permitido su uso (directo o derivado) para fines profesionales o económicos.**

Nota: por motivos de seguridad, es posible que algunas partes del proyecto se encuentren editadas o eliminadas (p. ej. el certificado de firma AIR `iRita.p12` y cualquier ruta personal o artefacto local han sido excluidos y se publican aparte).

El archivo con las fuentes completas se publica como asset de un Release de GitHub: `trodebac_source.rar`.

**Requisitos / Cómo ejecutar**

- App Flash/AIR: Adobe Flash Professional/Animate (para abrir `trodebac.fla`) y el AIR SDK 3.2+ para empaquetar `trodebac-app.xml` + `trodebac.swf` en un APK; o instalar directamente el `trodebac.apk` incluido en un dispositivo Android (puede requerir versiones antiguas de Android y habilitar la instalación de fuentes desconocidas).
- Versión HTML5: abre `html5/trodebac.html` en un navegador (carga las librerías CreateJS 0.6/0.4 del CDN de code.createjs.com; sirve el contenido por HTTP, p. ej. `python -m http.server` dentro de `html5/`, el canvas es 1024x1280).
- Incluye además: `imagen/` (fuentes gráficas, PNG + PSD de Photoshop), `musicas/` + `petardos/` (audio en WAV), `about/` (pantalla de créditos + fuentes pixel 04B gratuitas).

AVISO: Este software se ofrece "tal cual", sin ningún tipo de garantía. El autor no asume responsabilidad alguna por posibles errores o daños derivados de su uso.

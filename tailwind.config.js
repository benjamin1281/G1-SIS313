/** @type {import('tailwindcss').Config} */
module.exports = {
  // ESTA ES LA RUTA CRÍTICA PARA QUE TAILWIND ESCANEE TUS CLASES
  content: [
    // 1. Busca todos los archivos HTML en la raíz (ej. index.html)
    "./*.html", 
    // 2. Busca archivos HTML dentro de la subcarpeta 'forms'
    "./forms/*.html", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
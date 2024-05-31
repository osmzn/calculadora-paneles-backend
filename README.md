# Backend Calculadora de Paneles APP

## Development pasos

1. Ejecutar npm install
2. Renombrar el archivo .env.template por .env
3. Hacer los cambios respectivos en las variables de entorno en caso de ser necesario
4. Ejecutar npm start

## Nota Adicional

### Si quieres desplegar el front junto al backend, debes realizar los siguientes pasos:

1. Generar build en la app del front con el comando npm run build ó yarn build (esto creara directorio dist/ en la raiz del proyecto del frontend)
2. Crear directorio public/ en raiz del proyecto del backend
3. Copiar contenido del directorio dist dentro del directorio /public/ recien creado
4. Descomentar las rutas y manejo de errores de la ruta raiz en el archivo index.js

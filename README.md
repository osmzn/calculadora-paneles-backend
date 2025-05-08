# Backend Calculadora de Paneles APP

## Development pasos

1. Ejecutar npm install
2. Renombrar el archivo .env.template por .env
3. Hacer los cambios respectivos en el archivo .env (rellenar datos de usuario para json web token, este debe ser el mismo en el front y el backend)
4. Ejecutar npm start

## Nota Adicional

### Si quieres desplegar el front junto al backend, debes realizar los siguientes pasos:

1. Generar build en la app del front con el comando npm run build (esto creara directorio dist/ en la raiz del proyecto del frontend)
2. Crear directorio public/ en raiz del proyecto del backend
3. Copiar contenido del directorio dist dentro del directorio /public/ recien creado
4. Descomentar las rutas y manejo de errores de la ruta raiz en el archivo index.js

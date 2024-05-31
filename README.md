# Backend Calculadora de Paneles APP

## Development pasos

1. Renombrar el archivo .env.template por .env
2. Hacer los cambios respectivos en las variables de entorno


## Nota Adicional

### Si quieres desplegar el front junto al backend, debes realizar los siguientes pasos:

1. Generar build en la app del front (esto creara directorio /dist en la raiz del proyecto)
2. Copiar su contenido en dentro del directorio /public/ del backend
3. Descomentar las rutas y manejo de la ruta raiz en el archivo index.js
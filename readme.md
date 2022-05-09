# Mobbex Webhooks Test Tool

Herramienta para probar WebHooks localmente simulando el funcionamiento de un WebHook de Mobbex.

### Requerimientos:
- NodeJS 12+
  
### Instalación:
- Descargar la herramienta como zip
- Descomprimir
- Correr ```npm install``` para instalar dependencias

### Funcionamiento
- Defina una URL global para el envío de notificaciones desde la variable *WEBHOOK_URL* en el archivo **.env** o en cada uno de los webhooks desde el archivo **data.json**
- Defina el formato de envío del webhook *"json"* o *"form"*. Por defecto se envía en formato **json**
- Cambiar si es necesario el JSON dentro de data.json
- Correr con ```npm start```
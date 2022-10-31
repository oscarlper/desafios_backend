import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context): void => {
    ctx.response.body = `
    <!DOCTYPE html>
    <html style="margin-left: 5rem">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
        <head><title>Consigna</title><head>
        <body><link rel="preconnect" href="https://fonts.googleapis.com">
            <p style="font-family: Anton; font-size: 4rem; font-style: italic; font-weight: bold;">
                SERVIDOR DENO CON HTTP
            </p>
            <p style="margin-top: -4rem; font-family: Arial; font-size: 2rem; font-style: italic">
                Tiempo: 10 minutos
            </p>
            <ol style="font-family: Arial; font-size: 2rem">
                <li>Modificar el servidor del desafío anterior (convservando la misma funcionalidad) para que utilice el módulo http oak generando el HTML con Template Strings</li>
                <li style="padding-top: 2rem">Utilizar denon para que, ante un cambio de código, el servidor se reinicie automáticamente</li>
            </ol>
            <p style="margin-top: 2rem; font-family: Arial; font-size: 1rem; font-style: italic">
            Parametros:<br>
            denon run --allow-net .\server.ts</p>
        </body>
    </html>
  `;
});

router.get("/parametros", (ctx: Context): void => {
  ctx.response.status = 200;
  ctx.response.body = `
  <!DOCTYPE html>
  <html>
    <head><title>Hello oak!</title><head>
    <body>
        <p style="margin-top: 2rem; font-family: Arial; font-size: 2rem; font-style: italic">
        Parametros:<br>
        denon run --allow-net .\server.ts</p>
    </body>
  </html>
  `;
});

app.use(router.routes());

app.listen({ port: 3000 });

console.log("Server listening on: http://127.0.0.1:3000");
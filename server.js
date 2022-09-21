import express from "express";
import { createApp } from "./app.js";
import { renderToString } from "vue/server-renderer";

const server = express();

server.get("/", async (_, res) => {
    const app = createApp();
    const html = await renderToString(app);
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vue SSR Basic</title>
        </head>
        <body>
            <h1>Server</h1>
            <div id="app">${html}</div>
            <script type="importmap">
                {
                    "imports": {
                        "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
                    }
                }
            </script>
            <script type="module" src="./client.js"></script>
        </body>
    </html>`);
});

server.use(express.static("."));
server.listen(3000, () => console.log("ready"));

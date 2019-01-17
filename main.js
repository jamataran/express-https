const express = require('express');
const app2= express();
const fs = require('fs');
const https = require('https');

// Configuración de los certificados.
const sslOptionsCert = {
    key: fs.readFileSync("./cert/server.key"),
    cert: fs.readFileSync("./cert/server.cer")
};

// Servidor y mapeos.
https.createServer(sslOptionsCert, app2).listen(443);
app2.get('', (req, res) => res.send('Hello SSL!'));

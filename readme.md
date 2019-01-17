# Certificados

Creación y uso de certificados en `localhost` para desarrollo.

## Pasos
* Crear certificados.
* Instalar `root.cer` como certificado raíz (CA).**Reinicar navegadores**
* Levantar el servidor.

## Creación de los certificados.

```bash
openssl req -x509 -new -keyout root.key -out root.cer -config root.cnf
openssl req -nodes -new -keyout server.key -out server.csr -config server.cnf -sha256
openssl x509 -req -in server.csr -CA root.cer -CAkey root.key -set_serial 123 -out server.cer -extfile server.cnf -extensions x509_ext -sha256
```

## Levantar el servidor.
```bash
npm install
node main.js
```

## Bibliografia
* [https://justmarkup.com/log/2018/05/https-valid-certificate-local-domain/](https://justmarkup.com/log/2018/05/https-valid-certificate-local-domain/)
* [https://letsencrypt.org/docs/certificates-for-localhost/](https://letsencrypt.org/docs/certificates-for-localhost/)
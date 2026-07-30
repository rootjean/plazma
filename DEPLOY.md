# Despliegue en VPS (Docker)

Sitio de **Plazma Ideas** — Next.js con salida `standalone` en contenedor.

## Requisitos en el VPS
- Docker y Docker Compose instalados.
- El puerto 3000 libre (o cambia el mapeo en `docker-compose.yml`).

## Pasos

1. **Clona el repositorio** (o súbelo al VPS):
   ```bash
   git clone <tu-repo> plazma && cd plazma
   ```

2. **Crea el archivo de entorno** a partir de la plantilla y pega tu clave:
   ```bash
   cp .env.example .env
   nano .env      # completa GROQ_API_KEY=...
   ```

3. **Levanta el contenedor:**
   ```bash
   docker compose up -d --build
   ```

4. Verifica que responde:
   ```bash
   curl -I http://localhost:3000
   ```

La app queda escuchando en `http://<IP-del-VPS>:3000`.

## Operación

- Ver logs:            `docker compose logs -f`
- Reiniciar:           `docker compose restart`
- Detener:             `docker compose down`
- Actualizar (deploy): `git pull && docker compose up -d --build`

## Poner un dominio con HTTPS (recomendado)

El contenedor sirve HTTP en el 3000. Para exponerlo con tu dominio y
certificado SSL, coloca un **reverse proxy** delante (Nginx, Caddy o Traefik).

Ejemplo mínimo con Nginx (`/etc/nginx/sites-available/plazma`):
```nginx
server {
    server_name plazmaideas.com www.plazmaideas.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Luego emite el certificado con Certbot:
```bash
sudo certbot --nginx -d plazmaideas.com -d www.plazmaideas.com
```

> El `X-Forwarded-For` es importante: el límite de peticiones del chat usa
> esa cabecera para identificar la IP real detrás del proxy.

## Notas
- **Nunca** subas `.env` (contiene la clave). Solo se versiona `.env.example`.
- Si cambias `GROQ_API_KEY`, reinicia: `docker compose up -d`.
- El asistente de IA funciona solo si `GROQ_API_KEY` está configurada; sin ella
  el chat muestra un mensaje amable en lugar de fallar.

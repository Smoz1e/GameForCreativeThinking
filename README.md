# GameForCreativeThinking

## Production nginx setup

This project runs its own nginx container on `127.0.0.1:8080`.

On the server, the host nginx should terminate HTTPS for `career-map.ru` and proxy requests to `http://127.0.0.1:8080`.

Use the example config in [deploy/nginx/career-map.ru.conf](deploy/nginx/career-map.ru.conf) and adjust the certificate paths if needed.

### Server steps

1. Copy [deploy/nginx/career-map.ru.conf](deploy/nginx/career-map.ru.conf) into the host nginx sites directory, for example `/etc/nginx/conf.d/career-map.ru.conf`.
2. Make sure the SSL certificate exists for `career-map.ru` and points to the paths in the config.
3. Verify the config with `nginx -t`.
4. Reload nginx with `systemctl reload nginx`.
5. Start the app stack with `docker compose up -d` in this project.
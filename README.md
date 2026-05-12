# GameForCreativeThinking

## Production nginx setup

This project runs its own nginx container on `127.0.0.1:8080`.

On the server, the host nginx should terminate HTTPS for `career-map.ru` and proxy requests to `http://127.0.0.1:8080`.

Use the example config in [deploy/nginx/career-map.ru.conf](deploy/nginx/career-map.ru.conf) and adjust the certificate paths if needed.

### Server steps

1. Copy [deploy/nginx/career-map.ru.conf](deploy/nginx/career-map.ru.conf) into the host nginx sites directory, for example `/etc/nginx/conf.d/career-map.ru.conf`.
2. Issue the certificate with certbot:

	```bash
	sudo certbot --nginx -d career-map.ru
	```

	The domain must already have an A record pointing to `217.76.176.112`; otherwise certbot will fail with `NXDOMAIN`.
	If the host nginx is not managing this site yet, use webroot or standalone mode instead.
3. Make sure the SSL paths in [deploy/nginx/career-map.ru.conf](deploy/nginx/career-map.ru.conf) match the certificate files created by certbot.
4. Verify the config with `nginx -t`.
5. Reload nginx with `systemctl reload nginx`.
6. Start the app stack with `docker compose up -d` in this project.
#!/usr/bin/env bash
echo "=> nginx application starting on http://localhost:80"
echo "=> listening on tcp://0.0.0.0:80"
echo "=> use Ctrl-C to stop"

docker run --rm -p 80:80 -v "$(pwd)/docs:/usr/share/nginx/html/tbf-songle-api:ro" nginx:latest

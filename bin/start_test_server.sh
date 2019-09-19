#!/usr/bin/env bash
echo "=> nginx application starting on http://localhost:1234"
echo "=> listening on tcp://0.0.0.0:1234"
echo "=> use Ctrl-C to stop"

docker run --rm -p 1234:80 -v "$(pwd)/docs:/usr/share/nginx/html/tbf-songle-api:ro" nginx:latest

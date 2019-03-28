#!/bin/bash
HOST_SHARE="/var/tmp/logs"
CTR_SHARE="/app/logs"
mkdir "$HOST_SHARE" 2>/dev/null
docker run -p "144.202.27.76:4242:4242" -d --rm --mount "type=bind,source=${HOST_SHARE},target=${CTR_SHARE}" --name "$name" "$name" 2>&1

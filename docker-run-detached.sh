#!/bin/bash
HOST_SHARE="/var/tmp/logs"
CTR_SHARE="/app/logs"
mkdir "$HOST_SHARE" 2>/dev/null
docker run -p "127.0.0.1:4242:4242" -d --rm --mount "type=bind,source=${HOST_SHARE},target=${CTR_SHARE}" --name express-tests express-tests 2>&1

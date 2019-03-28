#!/bin/bash
name="${PWD##*/}"
docker exec -it "$name" /bin/bash

#!/bin/sh
name="${PWD##*/}"
docker logs -f "$name"

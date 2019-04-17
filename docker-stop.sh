#!/bin/sh
name="${PWD##*/}"
docker stop "$name"

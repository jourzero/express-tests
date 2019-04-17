#!/bin/bash
name="${PWD##*/}"
docker build -t "$name" .

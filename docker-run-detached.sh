#!/bin/bash
/usr/local/bin/docker run -p 127.0.0.1:4242:4242 -d --rm --name express-tests express-tests 2>&1

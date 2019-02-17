# Express Tests

Simple project to test Express features

## Running with Docker

``` bash
$ docker build -t express-tests .
Sending build context to Docker daemon  45.95MB
Step 1/6 : FROM node:11.6-alpine
[...]
Step 2/6 : WORKDIR /app
[...]
Step 3/6 : COPY . .
[...]
Step 4/6 : RUN npm install
[...]
Step 5/6 : EXPOSE 4242
[...]
Step 6/6 : CMD DEBUG="http,express-tests:*" PORT=4242 npm start
[...]
Successfully tagged express-tests:latest

$ docker run -p 127.0.0.1:4242:4242 -d express-tests
```

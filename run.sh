#!/bin/bash
sudo apt install net-tools

my_ip=$(ifconfig | grep -A1 "wlx001a3f2b6b0b" | awk '/inet / {print $2}')

node ./apps/hello-app.js

docker build -t node-networking .
docker run -e DATABASE_HOST="$my_ip" node-networking:latest

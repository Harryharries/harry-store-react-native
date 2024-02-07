#!/bin/bash

if [[ ! -d certs ]]
then
    mkdir certs
    cd certs/
    if [[ ! -f localhost.pfx ]]
    then
        dotnet dev-certs https -v -ep localhost.pfx -p 514a5a32-cf2d-41d4-9eb3-512552401b1c -t
    fi
    cd ../
fi

docker-compose up -d

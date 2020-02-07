#!/usr/bin/env bash

git pull

npx tsc

pm2 restart spectrum

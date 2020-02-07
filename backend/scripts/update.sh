#!/usr/bin/env bash

git pull

tsc

pm2 restart spectrum

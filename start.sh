#!/bin/sh

node_modules/.bin/watchify src/main.js -v -d \
  -t [ babelify --presets [ es2015 ] ] \
  -o dist/bundle.min.js &

node_modules/.bin/reload -p 3001 -d dist
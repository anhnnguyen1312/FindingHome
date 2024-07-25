#!/bin/sh

set -e
exec python recommend.py &
exec python update.py

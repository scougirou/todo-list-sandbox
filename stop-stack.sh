#!/bin/zsh

# Use BASH_SOURCE when using bash, else fallback to $0 from zsh to gather current file's path
SCRIPT_SOURCE=${BASH_SOURCE:-$0}
SCRIPT_DIR=$(dirname "$SCRIPT_SOURCE")

docker-compose -p "todolist-app" -f "$SCRIPT_DIR/docker/docker-compose.yml" down -v

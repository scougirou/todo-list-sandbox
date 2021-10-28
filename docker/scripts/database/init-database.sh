#!/bin/bash
set -e

# TODO rework grants instead of granting all privileges
# SQL script to create user_access postgres schema as it is not the role of the ORM to create the schema since it implies advanced rights
# The init script uses root or elevated access to create the schema, then the application+orm uses a dedicated service account with lowest privileges required
# @see https://hub.docker.com/_/postgres/ section Initialization scripts
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE todo-list;
EOSQL

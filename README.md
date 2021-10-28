# Todo list sandbox project

# Usage
## Docker mode
### Prerequisite
- Docker runtime installed
- Duplicate `docker/server.env.default` to `docker/server.env`
  - The docker-compose requires it, blank values will simply fall back to defaults (see below)
### Lauching the stack
Use the script:
```shell
./start-stack.sh
```

The script will:
- Install necessary node-modules
- Launch the following items:
   - Server
      - Swagger available here [http://localhost:3000/swagger]()
   - Front-end
      - App running here: [http://localhost:4200]()
   - Postgres database
   - PgAdmin: [http://localhost:9998]()
      - user: `dev@todo.fr`
      - password: `dev`
      - db password: `postgres`

### Stopping the stack
```shell
./stop-stack.sh
```

## Standalone mode
### Prerequisite
- Node runtime installed (>= `14.7.0`)
- Running Postgres instance
- Install node modules: run `yarn` in the project root directory

### Starting the stack
 - Front-end: `yarn --cwd packages/www www:start`
 - Backend: `yarn --cwd packages/server server:start:dev`

## Configuration
Frontend is not yet configurable (will always try to reach the api on `localhost:3000`).\
This could be achieved with a config service which parses a static JSON file that would be envsubst'ed by docker at launch time.\
By default the Angular environment system is not great for this.

Backend is configurable with env vars.\
List and default values:
```shell
# Server config
PORT=3000
HOST=localhost
SCHEME=http

# Postgres connection info for the server
DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=todolist
```
If needed, a `server.env.default` is provided in the `docker` folder.



# Conception
## Backend
Made with NestJS 8.0.0.

Simple MVC architecture.

Controllers are lightweight and only pass on the workload to a service.

First implementation used a in-memory service, DI was used to switch to a service communicating with a database.

# Todo
## Backend
 - ~~Implement todo list crud operations~~
 - ~~Unit test the service~~
 - ~~Add swagger~~
 - ~~Add task filtering endpoint~~
 - Split DTO for each endpoint
 - Add persistence
 - Add 304 not modified response type
 - Add integration testing

## Frontend
 - ~~Implement basic component architecture~~
 - ~~Add api calls~~
 - ~~Add refresh mechanism~~
 - ~~Add basic CSS~~
 - ~~Pay attention to the specs and the naming used~~
 - ~~Add task filtering drop down~~
 - Clean error handling on API calls
 - Better way to update the task list on each call
    - Facade service that updates only updated task?
    - Interceptor?
    - SSE with updated ID?

## Monorepo
 - Handle dependency hoisting
 - Find a way to cleanly share DTO
 - Versionning

## Devops
 - Dockerize dev stack

# Discussions

## API
 - Post creation could return the id of the newly created task
 - The `complete` endpoint is in `Post`, could be in `Put` or `Patch`

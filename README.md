# Todo list sandbox project

# Usage
## Docker mode
### Prerequisite
- Docker runtime installed

### Lauching the stack
Use the script:
```shell
./start-stack.sh
```

The script will:
- Install necessary node-modules
- Launch the following items:
   - Server
   - Front-end
   - Postgres database
   - PgAdmin: [http://localhost:9998]()
      - user: `dev@todo.fr`
      - password: `dev`

### Stoping the stack

## Standalone mode
### Prerequisite
- Node runtime installed (>= `14.7.0`)
- Running Postgres instance



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

# Todo list sandbox project

# Todo
## Backend
 - ~~Implement todo list crud operations~~
 - ~~Unit test the service~~
 - ~~Add swagger~~
 - Split DTO for each endpoint
 - Add persistence
 - Add integration testing

## Frontend
 - ~~Implement basic component architecture~~
 - ~~Add api calls~~
 - ~~Add refresh mechanism~~
 - ~~Add basic CSS~~
 - ~~Pay attention to the specs and the naming used~~
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

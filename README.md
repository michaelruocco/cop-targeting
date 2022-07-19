# COP Targeting UI

Cop Targeting UI project.

## Useful Commands

```bash
yarn start:dev
```

Note for this command to work you need to set up a .env file at `./environments/env.development` it needs to contain the following variables each with `<configure-me>` replaced with an appropriate value:

```
COP_TARGETING_API_URL=<configure-me>
COP_TARGETING_API_ENABLED=<configure-me>
CAMUNDA_API_URL=<configure-me>
KEYCLOAK_CLIENT_ID=<configure-me>
KEYCLOAK_REALM=<configure-me>
KEYCLOAK_AUTH_URL=<configure-me>
```

## TODO

- Add unit tests for nav links
- Add unit tests for only showing UI when logged in
- Add unit tests for hitting `/` redirecting to `/roro-tasks`
- Add unit tests for home icon link redirecting to `/`
- Add unit tests for logout button logging user out

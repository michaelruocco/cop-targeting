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

Each url value variable requires just the hostname, no other part of the base url needs to be
included e.g. `/camunda` or `/v2`

Once the application is started you can view the application [here](http://localhost:3000)

## TODO

- Use pluralise instead of manually building strings
- Add unit tests
- Implement task details
- Implement issuing target
- Implement completing a task

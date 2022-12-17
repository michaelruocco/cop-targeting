# COP Targeting API

## Useful Commands

The UI and API for this repo can be deployed into the same spring boot service.
To build and deploy both the UI and API you can run the following command from the
top level directory of the repo.

```bash
./gradlew bootRun \
  -Dui.auth.keycloak.authUrl=<configure-me> \
  -Dui.auth.keycloak.realm=<configure-me> \
  -Dui.auth.keycloak.clientId=<configure-me> \
  -Dui.auth.auth0.domain=<configure-me> \
  -Dui.auth.auth0.clientId=<configure-me>
```

Once the application is running you can view the application UI [here](http://localhost:8080).
# COP Targeting UI

## Useful Commands

To run the commands below please ensure that you have switched your current directory
to the `cop-targeting-ui` folder from the main top level folder of the repo.

When running for the very first time after cloning the repo you will need to start by
installing the required dependencies, you can do this by running the following command:

```bash
yarn install
```

Once the dependencies are install you can start the UI locally by running:

```bash
yarn start:dev
```

Note for this command to work you need to set up a .env file at `./environments/env.development` it needs to contain the following variables each with `<configure-me>` replaced with an appropriate value:

```
COP_TARGETING_API_URL=<configure-me>
KEYCLOAK_CLIENT_ID=<configure-me>
KEYCLOAK_REALM=<configure-me>
KEYCLOAK_AUTH_URL=<configure-me>
```

Once the application is started you can view the application [here](http://localhost:3000)

## TODO

- Add unit tests
- Implement task details
- Implement issuing target
- Implement completing a task

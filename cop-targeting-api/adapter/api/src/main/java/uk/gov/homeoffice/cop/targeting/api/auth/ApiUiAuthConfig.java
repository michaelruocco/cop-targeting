package uk.gov.homeoffice.cop.targeting.api.auth;

import lombok.Builder;
import lombok.Data;
import uk.gov.homeoffice.cop.targeting.api.auth.auth0.ApiUiAuth0Config;
import uk.gov.homeoffice.cop.targeting.api.auth.keycloak.ApiUiKeycloakConfig;

import java.util.Optional;

@Builder
@Data
public class ApiUiAuthConfig {

    private final ApiUiKeycloakConfig keycloakConfig;
    private final ApiUiAuth0Config auth0Config;
}

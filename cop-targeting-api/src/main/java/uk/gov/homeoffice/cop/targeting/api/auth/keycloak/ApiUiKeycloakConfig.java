package uk.gov.homeoffice.cop.targeting.api.auth.keycloak;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ApiUiKeycloakConfig {

    private final String authUrl;
    private final String realm;
    private final String clientId;
    private final ApiUiKeycloakConfigInitOptions initOptions;
}

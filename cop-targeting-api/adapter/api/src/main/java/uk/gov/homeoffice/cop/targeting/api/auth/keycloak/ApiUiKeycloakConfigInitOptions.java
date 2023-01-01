package uk.gov.homeoffice.cop.targeting.api.auth.keycloak;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ApiUiKeycloakConfigInitOptions {

    private final String onLoad;
    private final boolean checkLoginIframe;
}

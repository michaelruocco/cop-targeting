package uk.gov.homeoffice.cop.targeting.rest.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.gov.homeoffice.cop.targeting.api.auth.ApiUiAuthConfig;
import uk.gov.homeoffice.cop.targeting.api.auth.auth0.ApiUiAuth0Config;
import uk.gov.homeoffice.cop.targeting.api.auth.keycloak.ApiUiKeycloakConfig;

@RestController
@RequiredArgsConstructor
public class UiAuthConfigController {

    private final ApiUiAuth0Config auth0Config;
    private final ApiUiKeycloakConfig keycloakConfig;

    @GetMapping("/v1/ui-auth-config")
    public ApiUiAuthConfig getUiConfig() {
        return ApiUiAuthConfig.builder()
                .auth0Config(auth0Config)
                .keycloakConfig(keycloakConfig)
                .build();
    }
}

package uk.gov.homeoffice.cop.targeting.config.ui;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uk.gov.homeoffice.cop.targeting.api.auth.auth0.ApiUiAuth0Config;
import uk.gov.homeoffice.cop.targeting.api.auth.keycloak.ApiUiKeycloakConfig;
import uk.gov.homeoffice.cop.targeting.api.auth.keycloak.ApiUiKeycloakConfigInitOptions;

@Configuration
public class UiAuthConfig {

    @Bean
    public ApiUiKeycloakConfig uiKeycloakConfig(@Value("${ui.auth.keycloak.authUrl:}") String authUrl,
                                                @Value("${ui.auth.keycloak.realm:}") String realm,
                                                @Value("${ui.auth.keycloak.clientId:}") String clientId) {
        return ApiUiKeycloakConfig.builder()
                .authUrl(authUrl)
                .realm(realm)
                .clientId(clientId)
                .initOptions(buildKeycloakInitOptions())
                .build();
    }

    @Bean
    public ApiUiAuth0Config uiAuth0Config(@Value("${ui.auth.auth0.domain:}") String domain,
                                          @Value("${ui.auth.auth0.clientId:}") String clientId) {
        return ApiUiAuth0Config.builder()
                .domain(domain)
                .clientId(clientId)
                .build();
    }

    private static ApiUiKeycloakConfigInitOptions buildKeycloakInitOptions() {
        return ApiUiKeycloakConfigInitOptions.builder()
                .onLoad("login-required")
                .checkLoginIframe(false)
                .build();
    }
}

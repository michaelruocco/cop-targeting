package uk.gov.homeoffice.cop.targeting.api.auth.auth0;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ApiUiAuth0Config {

    private final String domain;
    private final String clientId;
}

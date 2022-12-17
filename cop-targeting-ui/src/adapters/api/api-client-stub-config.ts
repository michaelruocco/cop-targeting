export const getCopTargetingApiUrl = (): string => {
  const url = process.env.COP_TARGETING_API_URL;
  if (url) {
    console.debug(`COP_TARGETING_API_URL ${url}`);
    return url;
  }
  const origin = window.location.origin;
  console.debug(`COP_TARGETING_API_URL not configured so using window.location.origin ${origin}`);
  return origin;
};

export const shouldStubApi = (): boolean => {
  const stub = process.env.COP_TARGETING_API_STUBBED === 'true';
  console.log(`COP_TARGETING_API_STUBBED ${stub}`);
  return stub;
};
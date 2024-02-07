import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { getEnvVars } from '../../Environment';

const {
  apiUrl,
  appUrl,
  oAuthConfig: { clientId, scope },
} = getEnvVars();

export const fetchAndRevokeTokens = async token => {
  const config = { scopes: scope.split(' '), clientId };
  const discovery = { revocationEndpoint: `${apiUrl}/connect/revocat` };

  const revokeAccess = AuthSession.revokeAsync(
    {
      ...config,
      token: token.access_token,
      tokenTypeHint: 'access_token',
    },
    discovery,
  );

  const revokeRefresh = AuthSession.revokeAsync(
    {
      ...config,
      token: token.refresh_token,
      tokenTypeHint: 'refresh_token',
    },
    discovery,
  );

  const logoutUrl = `${apiUrl}/connect/logout?post_logout_redirect_uri=${appUrl}&client_id=${clientId}`;
  await WebBrowser.openBrowserAsync(logoutUrl);

  const [isSuccess, isSuccessRefresh] = await Promise.all([revokeAccess, revokeRefresh]);
  return { isSuccess, isSuccessRefresh };
};

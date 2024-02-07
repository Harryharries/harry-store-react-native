import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44398/',
  redirectUri: baseUrl,
  clientId: 'devset_front_end_App',
  responseType: 'code',
  scope: 'offline_access devset_front_end',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'devset_front_end',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44398',
      rootNamespace: 'devset_front_end',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;

import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { autobind } from '../utils';

/**
 * Function that retrieves the authorization token.
 * @returns The authorization token as a string, or null if not available.
 */
type AuthorizationGetter = () => (string | null) | Promise<string | null>;

/**
 *
 */
type HttpClientConfig = {
  getAuthorization: AuthorizationGetter;
  hasAuthorizationMethode: boolean;
  baseURL: string;
};

/**
 *
 */
class HttpClient {
  /** */
  private readonly httpInstance: AxiosInstance;

  constructor(private readonly config: HttpClientConfig) {
    this.httpInstance = axios.create({
      baseURL: this.config.baseURL,
    });

    this.httpInstance.interceptors.request.use(this.authorizationInterceptor);
  }

  /**
   *
   * @param config
   * @returns
   */
  @autobind
  private async authorizationInterceptor(
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> {
    if (!this.config.hasAuthorizationMethode) {
      return config;
    }

    config.headers['Authorization'] =
      (await this.config.getAuthorization()) ?? undefined;

    return config;
  }
}

/**
 *
 */
export class HttpClientBuilder {
  /**  */
  private config: HttpClientConfig = {
    getAuthorization: () => '',
    hasAuthorizationMethode: false,
    baseURL: '',
  };

  constructor(baseURL: string) {
    this.config.baseURL = baseURL;
  }

  /**
   *
   * @param getter
   * @returns
   */
  setAuthorizationMethode(getter: AuthorizationGetter): HttpClientBuilder {
    this.config.getAuthorization = getter;
    this.config.hasAuthorizationMethode = true;
    return this;
  }

  /**
   *
   * @param baseURL
   * @returns
   */
  setBaseUrl(baseURL: string): HttpClientBuilder {
    this.config.baseURL = baseURL;
    return this;
  }

  /**
   *
   * @returns
   */
  build(): HttpClient {
    return new HttpClient(this.config);
  }
}

export { type HttpClient };

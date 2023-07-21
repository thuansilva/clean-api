import { HttpPostClient } from '~/data/protocols/http/http-post-client';
import { HttpStatusCode } from '~/data/protocols/http/http-response';
import { InvalidCredentialsError } from '~/domain/errors/invalid-credentials-errors';
import { UnexpectedError } from '~/domain/errors/unexpected-errors';
import { AccountModel } from '~/domain/models/Account-model';
import { AuthenticationParams } from '~/domain/usecases/authentication';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}
  async auth(params: AuthenticationParams): Promise<void> {
    const HttpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });
    switch (HttpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        break;
      default:
        throw new UnexpectedError();
    }
  }
}

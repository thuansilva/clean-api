import { HttpPostClient, HttpStatusCode } from '~/data/protocols/http';
import { InvalidCredentialsError, UnexpectedError } from '~/domain/errors';
import { AccountModel } from '~/domain/models';
import { Authentication, AuthenticationParams } from '~/domain/usecases';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}
  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const HttpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });
    switch (HttpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return HttpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}

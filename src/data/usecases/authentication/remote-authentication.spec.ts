interface HttpPostClient {
  post(url: string): Promise<void>;
}

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}
  async auth(): Promise<void> {
    await this.httpClient.post(this.url);
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpPostClient with correct URL', () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'any_url';
    const httpPostClient = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClient);
    sut.auth();

    expect(httpPostClient.url).toBe(url);
  });
});

import { faker } from '@faker-js/faker';

import { mockAuthentication } from '~/domain/test/mock-authentication';

import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

type SubTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};
//factory
const makeSut = (url = faker.internet.url()): SubTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};
describe('Remote Authentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const authenticationParams = mockAuthentication();
    const { httpPostClientSpy, sut } = makeSut(url);
    await sut.auth(authenticationParams);

    expect(httpPostClientSpy.url).toBe(url);
  });

  test('Should call HttpPostClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);

    expect(httpPostClientSpy.body).toBe(authenticationParams);
  });
});

import { Prueba0001Page } from './app.po';

describe('prueba0001 App', () => {
  let page: Prueba0001Page;

  beforeEach(() => {
    page = new Prueba0001Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

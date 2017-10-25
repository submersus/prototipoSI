import { PrototipoSIPage } from './app.po';

describe('prototipo-si App', () => {
  let page: PrototipoSIPage;

  beforeEach(() => {
    page = new PrototipoSIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

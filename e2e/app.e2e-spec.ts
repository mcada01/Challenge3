import { MyChallenge3Page } from './app.po';

describe('my-challenge3 App', () => {
  let page: MyChallenge3Page;

  beforeEach(() => {
    page = new MyChallenge3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { FrontendFormsPage } from './app.po';

describe('frontend-forms App', () => {
  let page: FrontendFormsPage;

  beforeEach(() => {
    page = new FrontendFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

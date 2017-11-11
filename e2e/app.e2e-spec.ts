import { YouTubeTabPage } from './app.po';

describe('you-tube-tab App', () => {
  let page: YouTubeTabPage;

  beforeEach(() => {
    page = new YouTubeTabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { ClassSearchPage } from './app.po';

describe('class-search App', function() {
  let page: ClassSearchPage;

  beforeEach(() => {
    page = new ClassSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

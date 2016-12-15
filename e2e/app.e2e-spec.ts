import { TableOrderPage } from './app.po';

describe('table-order App', function() {
  let page: TableOrderPage;

  beforeEach(() => {
    page = new TableOrderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

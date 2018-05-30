import { DayTwoClassesPage } from './app.po';

describe('day-two-classes App', () => {
  let page: DayTwoClassesPage;

  beforeEach(() => {
    page = new DayTwoClassesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

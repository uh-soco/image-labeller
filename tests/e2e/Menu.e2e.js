/* jest/no-test-callback: off */
import { Selector, ClientFunction } from 'testcafe';

const mainWindowHTMLfile = '../../app/build/index.html'

export const getPageUrl = ClientFunction(() => { 
    console.log('at ', window.location.href)
    return( window.location.href )
});

const assertNoConsoleErrors = async t => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
}


fixture`Configuration`.page(mainWindowHTMLfile)
  .afterEach(assertNoConsoleErrors);


test('should navigate to configuration-page', async t => {
    await t
    .click(Selector('a').withExactText('Configure services'))
    .expect(getPageUrl())
    .contains('/configuration')

})

test('should navigate to setup images-view', async t => {
    await t
    .click(Selector('a').withExactText('1. Setup images for analysis'))
    .expect(getPageUrl())
    .contains('/imagesetup')

})



/* eslint jest/expect-expect: off, jest/no-test-callback: off */
import { Selector, RequestMock } from 'testcafe';


const testImageURL = 'http://www.domain.de/jalka.jpg'

const mainWindowHTMLfile = '../../app/build/index.html'


const assertNoConsoleErrors = async t => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
};



// Create mock

const mockServiceAzureURL = new RegExp('azure')
const mockResponseAzure = { 'tags': [{ "name": "mountain", "confidence": 0.5404403784123804 }, { "name": "lake", "confidence": 0.6783661761715709 }, { "name": "ice", "confidence": 0.821276302354939 }, { "name": "snow", "confidence": 0.8006666542170013 }, { "name": "sky", "confidence": 0.25846473729670105 }, { "name": "white", "confidence": 0.7181846334987609 }] }

const mockServiceIBM = new RegExp('ibm')
const mockResponseIBM = { "images": [{}, { "classifiers": [{ "classes": [{ "class": "mountain", "score": 0.1673660968812578 }, { "class": "lake", "score": 0.7731264922445409 }, { "class": "winter", "score": 0.5133554862420273 }, { "class": "forest", "score": 0.7712337043311361 }] }] }] }

const mockServiceGoogle = new RegExp('google')
const mockResponseGoogle = {"responses":[{"labelAnnotations":[{"description":"ice"},{"description":"sky"},{"description":"winter"}]}]}

const mockServiceAWS = new RegExp('aws')
const mockResponseAWS = {"responses":[{"labelAnnotations":[{"description":"lake"},{"description":"snow"},{"description":"sky"},{"description":"white"},{"description":"nothing"}]}]}


const responseHeader = { 'Access-Control-Allow-Origin': '*' }

const mock = RequestMock()
  .onRequestTo(mockServiceAzureURL)
  .respond(mockResponseAzure, 200, responseHeader)
  .onRequestTo(mockServiceIBM)
  .respond(mockResponseIBM, 200, responseHeader)
  .onRequestTo(mockServiceGoogle)
  .respond(mockResponseGoogle, 200, responseHeader)
  .onRequestTo(mockServiceAWS)
  .respond(mockResponseAWS, 200, responseHeader)
  .onRequestTo(new RegExp(testImageURL))
  .respond({}, 200, responseHeader)


fixture`Animation tests`
  .page(mainWindowHTMLfile)
  .requestHooks(mock)
  .afterEach(assertNoConsoleErrors);

test('Should offer possibility to see results after tagging', async t => {

  await t
    .click(Selector('a').withExactText('1. Setup images for analysis'))
    .click(Selector('button').withExactText('Add URL for image to tag'))
    .typeText(Selector('input'), testImageURL )
    .click(Selector('button').withExactText('Add to list'))
    .click(Selector('a').withExactText('2. Setup services'))
    
    .click(Selector('input').nth(2))  // Deselect AWS    (not working ATM)
    .click(Selector('input').nth(3))  // Deselect Google (not working ATM)
    
    .click(Selector('button').withText('Analyze 1 images'))
    .expect(Selector('a').withText('To results').exists).ok() // Expect to see one link
})



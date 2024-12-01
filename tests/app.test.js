const request = require('supertest');
const cheerio = require('cheerio');
const app = require('../app'); // Import the app instance

describe('GET /', () => {
  it('should return the fancy message', async () => {
    const response = await request(app).get('/'); // Make a GET request to "/"
    expect(response.statusCode).toBe(200); // Check that the status code is 200

    // Parse the HTML response with Cheerio
    const $ = cheerio.load(response.text);

    // Extract the text content of the <h1> element
    const h1Text = $('h1').text();

    // Perform assertions on the extracted text
    expect(h1Text).toContain('Hello, I am Thurain Oo!');
    expect(h1Text).toContain('Give me $1500');
  });
});


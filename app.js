// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  const fancyMessage = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background-color: #f0f8ff; color: #4a90e2;">
      <h1 style="border: 2px solid #4a90e2; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        Hello, I am <strong>Thurain Oo</strong>!
	12321412313123!
      </h1>
    </div>
  `;
  res.send(fancyMessage);
});

// Check if we're in production or testing
if (process.env.NODE_ENV !== 'test') {
  // Start the server in non-test environments (e.g., production)
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
	}

// Export the app instance for testing
module.exports = app;

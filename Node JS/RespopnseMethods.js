const express = require('express');
const app = express();
const port = 4000;

// Respond with "Hello, World!" for requests to the root URL '/'
app.get('/', (req, res) => {
  res.send('Greetings, Universe!');
});

// Respond with JSON for requests to '/api/data'
app.get('/api/data', (req, res) => {
  const jsonData = {
    message: 'This is a JSON response',
    timestamp: new Date().toISOString()
  };
  res.json(jsonData);
});

// Respond with HTML for requests to '/html'
app.get('/html', (req, res) => {
  const htmlContent = '<h1>Hello HTML!</h1>';
  res.send(htmlContent);
});

// Respond with a custom status code and message for requests to '/status'
app.get('/status', (req, res) => {
  res.status(403).send('Access Denied');
});

// Redirect to another URL for requests to '/redirect'
app.get('/redirect', (req, res) => {
  res.redirect('https://www.example.net');
});

// Handle a 404 Not Found error
app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});

// Handle errors (500 Internal Server Error)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 Server Error');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

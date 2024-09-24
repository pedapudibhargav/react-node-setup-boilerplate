const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/public')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
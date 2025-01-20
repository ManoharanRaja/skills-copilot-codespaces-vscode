// Create web server
// Create a new web server using the express module.
// Create a new route
// Create a new route that listens for GET requests on the path /comments.
// Respond with JSON
// Respond with JSON that contains the following data: { comments: [] }
// Start the server
// Start the server on port 4001.

const express = require('express');
const app = express();
const PORT = 4001;

app.get('/comments', (req, res, next) => {
  res.json({ comments: [] });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/*

reference : 
https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/
*/

import express from 'express';

const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
  res.send(
    `<html><h1> Welcome to Express js boilerplate </h1><h5>server is running on port ${PORT}</h5></html>`
  );
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

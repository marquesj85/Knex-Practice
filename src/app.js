const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('path/to/knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/pets', function(req, res) {
  knex('pet')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});


const express = require('express');
const app = express();
const port = 3000;




app.get('/quotes', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM Quotes');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server error');
  }
});

app.get('/quotes/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await client.query('SELECT * FROM Quotes WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    // } ele {
      res.status(404).send('Quote not found');
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server error');
  }
});

// app.post('/quotes', author(), async (req, res) => {
//   const { name, quote, author } = req.body;
//   try {
//     const result = await client.query(
//       'INSERT INTO Quotes (quote, author) VALUES ($1, $2, $3) RETURNING *',
//       [quote, author]
//   );
   
  
// }
// });

app.listen(port, () => {
  console.log("Server running is runnig on port 3000");
});
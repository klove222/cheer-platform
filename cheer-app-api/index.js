const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🏆 Cheer App API is working!'));

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});


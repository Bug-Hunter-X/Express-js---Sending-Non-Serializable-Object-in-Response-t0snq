const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Convert Date object to string before sending
  res.send({ date: new Date().toISOString() });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
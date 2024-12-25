const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line causes the error because it is trying to send a non-serializable object.
  res.send({ date: new Date() });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
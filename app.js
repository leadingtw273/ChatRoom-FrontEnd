const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();

app.use(history());
app.use('/chatroom', express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listening on port ${port}.`);
});

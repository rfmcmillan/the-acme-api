const express = require('express');
const app = express();

module.exports = app;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        213*456*8989
      </body>
    </html>
  `);
});

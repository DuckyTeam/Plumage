require('dotenv').config();
const fs = require('fs');
const https = require('https');

const url = `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_ID}/latest`;

https.get(
  url,
  {
    headers: {
      'X-Master-Key': process.env.JSONBIN_API_KEY,
      'X-BIN-META': false,
    },
  },
  (res) => {
    const path = `${__dirname}/design-tokens.json`;
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish', () => {
      filePath.close();
      console.log('Download Completed');
    });
  }
);

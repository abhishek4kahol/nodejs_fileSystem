const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'SystemFiles');


app.listen(3000 , () => {
  console.log('server started on port :: 3000');
})

module.exports = app;

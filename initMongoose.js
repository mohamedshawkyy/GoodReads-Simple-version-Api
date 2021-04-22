const mongoose = require('mongoose');

module.exports = (url) => {
  mongoose.connect(url,
    {
      useNewUrlParser: true, useUnifiedTopology: true
    }
  );
  
  const db = mongoose.connection;
  
  db.on('open', () => {
    console.log('connection started');
  });
  
  db.on('error', (err) => {
    console.log('connection error', err);
  })
};
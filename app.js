const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/trainers-clients', {useUnifiedTopology: true, useNewUrlParser: true}, (err, success) => {
  if (err) { 
    console.error('Database Connection Error ❌');
  } else {
    console.log('Successfully Connected To Database ✅');
  };
});

const trainersRouter = require('./routes/trainers');
// const clientsRouter = require('./routes/clients');



// GET | DEFAULT HOME PAGE ROUTE
app.get('/', (req, res, next) => {
  res.send('This cruddy app is now running!')
});



app.use('/trainers', trainersRouter);
// app.use('/clients', clientsRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// Note: To start MongoDB on your local machine, use the following command line in terminal/shell:
// mongod --config /usr/local/etc/mongod.conf

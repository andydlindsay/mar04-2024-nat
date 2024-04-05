require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require routers
const productRouter = require('./routers/product-router');
const blogpostRouter = require('./routers/blogpost.router');

// set up routers as middleware
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

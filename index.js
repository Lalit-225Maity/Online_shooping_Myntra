const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectdb = require('./db');
const connectdb2 = require('./databse.js')
app.use(express.json());
const item = require('./Router/item.js');
app.use('/api', item);
const pro=require('./Router/Product.js');
app.use('/api',pro);
(async () => {
    try {
        await connectdb();
        console.log(`MongoDB1 Connect`);
        await connectdb2();
        console.log(`MongoDB2 Connect`);
    } catch (error) {
        console.log(error.message);

    }
})();

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server Running at ${port}`);

});

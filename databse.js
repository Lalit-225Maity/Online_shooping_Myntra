const mongoose = require('mongoose');
const connectdb2 = async () => {
    try {

        const connect = await mongoose.connect(`mongodb+srv://lalitmaity520_db_user:TxdZe2IOB3Lr3AXV@cluster20.vl3n4tm.mongodb.net/product`, {
            useNewUrlParser: true,

        })
        console.log(`MongoDB2 Connect`);


    } catch (err) {
        console.error(err.message)
    }
}
module.exports=connectdb2;

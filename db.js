const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectdb = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://lalitmaity520_db_user:ZvwZSBGA0HVV74ds@cluster10.ahow1yy.mongodb.net/Names`, {
            useNewUrlParser: true
        })
        console.log(`MongoDb connect`);

    }
    catch (err) {
        console.error(err.message)

    }
}
module.exports = connectdb;
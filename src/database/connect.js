const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@clusterreis567.oyuulwh.mongodb.net/database?retryWrites=true&w=majority`);
        console.log('Connection successful');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

module.exports = connectToDatabase;

const mongoose = require('mongoose');



const dbConnection =()=>{
// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
    .then((conn) => {
        console.log(`Database connected: ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(`Database connection error: ${err}`.err);
        process.exit(1);
    });




}

module.exports = dbConnection
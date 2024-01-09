const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_Con)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
const mongoose = require('mongoose');

const db = () => {
    try {
        mongoose.connect(`${process.env.MONGOODB_URL}/${process.env.MONGOODB_NAME}`).then(
            console.log("batabas is conctad")
        )
    } catch (error) {
        console.log("samthig is rong ", error)

    }
}

module.exports = db;
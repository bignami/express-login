const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: 'apiProject',
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (error) => {
        if(error) {
            console.log('몽고디비 연결 에러', error)
        } else {
            console.log('몽고 디비 연결 성공');
        }
    });
};

mongoose.connection.on('disconnected', () => {
    console.error("몽고디비 연결 끊김, 재시도");
    dbConnect();
})

module.exports = dbConnect;
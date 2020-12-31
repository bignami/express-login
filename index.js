const express = require('express');

const routers = require('./routers');



const app = express();
const port = 8070;

app.use('/',routers);


app.listen(port, ()=> {
    console.log('연결합니다. ');
})
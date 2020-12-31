const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const routers = require('./routers');
const dbConnect = require('./db/db.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',routers);

dbConnect();

app.listen(port, ()=> {
    console.log('연결합니다. ');
})
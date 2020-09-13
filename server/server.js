const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {config} = require('./config')
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//connection database
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(config.DBURL, options, function(err) {
    if(err) throw err;

    console.log('Database connected');
})

//API CALL
const route = require('./route');
server.use('/', route)


server.listen(process.env.PORT || 4000, () =>{
    console.log('Server is listen on', process.env.PORT || 4000);
})
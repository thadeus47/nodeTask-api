const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const postsRouter = require('./routes/posts');

//Import Routes
app.use(bodyParser.json());
app.use(postsRouter);


//Route 
app.get('/',(req, res) => {
    res.send('We are on home');
});
//Connect to DB
const dbCon = process.env.DB_CONNECTION;


mongoose.connect(dbCon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log('**************Connected to DB!**********************');
    
})


//Listening to the server
app.listen(3000);
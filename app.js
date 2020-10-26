const express         = require('express');
const mongoose        = require('mongoose');
const methodOverrride = require('method-override');
const bodyParser      = require('body-parser');
//////////////////////
/////App Config///////
//////////////////////
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index');
});



// start server
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is listening');
});

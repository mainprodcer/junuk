var express = require('express');
var mongoose = require('mongoose');
var app = express();


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




var Contact = mogoose.model('movie', movieSchema);

app.use(express.static(__dirname + '/public'));
db.once('open', function(){
    console.log('DB connected');
});





var port = 3000; 
app.listen(port, function(){
    console.log('seceasd Http://localhost :' +port);
});

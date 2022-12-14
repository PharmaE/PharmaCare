

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const router = express.Router();
const Bear = require('./models/bear.js');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017');
//app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req,res) {
    res.render
});
app.post('/guest', function(req, res) {
    console.log("admin refresh");
    res.redirect('/submissionSuccess')
});

app.use('/api',router);
app.get('*', (req,res) => {res.sendFile(path.resolve(__dirname,"..", 'build', 'index.html'));
});


router.use(function (req,res,next) {
   next()
});
router.get('/', function (req,res) {
    res.json({message: "yea!"})
});




router.route('/bears').post(function (req,res) {
    var bear = new Bear();
    bear.name = req.body.guestFirstName;
    console.log(bear);
    bear.save(function (err) {
        if (err) {res.send(err)};
        res.json({message:"bear created"});

    })
}).get(function (req,res,bears) {
    Bear.find(function (err,bears) {

        res.json({bears});

    });
});


app.listen(PORT, () => {console.log('LISTENING ON PORT: ' + PORT)});

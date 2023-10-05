require('dotenv').config()

var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const familyMembersRoute = require('./routes/familyMembers');
const doctorsRoute = require('./routes/doctors');


var app = express();

app.use(bodyParser.json());


// var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// mongoose.connect('mongodb://localhost/virtual_clinic', { useNewUrlParser: true, useUnifiedTopology: true });

// const cors = require('cors');






// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// app.use(cors());


// middleware
app.use(express.json());
app.use('/api/familyMembers', familyMembersRoute);
app.use('/api/doctors', doctorsRoute);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db and Server is running on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// routes
app.get('/', (req, res) => {
  res.send('Welcome back, user') 
})

// const PORT = 3000;
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });


module.exports = app;

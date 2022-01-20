var app = require('./config/server.config');
var Register = require('./models/models.students');



app.post('/register', function(req, res, next) {    
    var registerStudent = new Register(req.body);
    registerStudent.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(registerStudent);

        }
    });
});


app.post('/update_course', function(req, res, next) {
    
    var email = req.body.email;
    var course = req.body.course;
    Register.updateOne({ "email": email }, { "course": course }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
       
        }
    });
});


app.post('/delete_course', function(req, res, next) {
    
    var email = req.body.email;
    var firstName = req.body.firstName;
    Register.deleteOne({ "email": email }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});





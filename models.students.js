var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
    firstName: {
        type:String,
        required:true
    },
    lastName: String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    course:{
        type:String,
        unique:true,
        required:true
    },
  age:{
      type:Number,
      required:true
      } 
}
);

var Student = mongoose.model('studentregistration', UserSchema);

module.exports = Student;
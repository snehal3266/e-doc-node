const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        employee_id:{type:String , required:true},
        name:{type:String , required:true},
        gender:{type:String , required:true},
        birthdate:{type:String , required:true},
        address:{type:String , required:true},
        email:{type:String , required:true},
        mobile_no:{type:String , required:true},
        joining_date:{type:String , required:true},
        department_name:{type:String , required:true},
        releiving_date:{type:String , required:true},
        imagepath:{type:String , required:true}
    }
);
const Employees = mongoose.model("employees", schema);
module.exports = Employees;
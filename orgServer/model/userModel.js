import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    contactNumber:{type: Number, require: true},
    password: {type: String, required: true, trim: true},

})

const UserModel = mongoose.model('User', userSchema)
export default UserModel
import mongoose from "mongoose";

const attendeeSchema = mongoose.Schema({
    a_c_id: {type:String},
    a_email: {type:String},
    a_first_name: {type:String},
    a_last_name: {type:String},
    a_camp_url: {type:String},
    a_username: {type:String},
    a_password: {type:String},
    a_created_by: {type:String}
})

const AttendeeModel = mongoose.model('Attendee', attendeeSchema)
export default AttendeeModel
import AttendeeModel from "../model/attendeeModel.js";

class attendeeController{
    
    /**{
	"campaign_id": "{{CampaignId}}",
	"first_name": "{{FirstName}}",
	"last_name": "{{LastName}}",
	"email": "{{Email}}",
	"camp_url": "{{Login Url}}",
	"username": "{{UserName}}",
	"password": "{{Password}}"
} */
    
    static postAttendee = async (req, res) => {
        
        try {
            const attendee = req.body

            if(attendee.campaign_id){
                const foundEmail = await AttendeeModel.findOne({a_email: attendee.email})
                
                if(!foundEmail){
                    const allAttendee = await AttendeeModel({
                        a_c_id: attendee.campaign_id,
                        a_email: attendee.email,
                        a_first_name: attendee.first_name,
                        a_last_name: attendee.last_name,
                        a_camp_url: attendee.camp_url,
                        a_username: attendee.username,
                        a_password: attendee.password
                    })
                    await allAttendee.save()
                    res.status(200).send({data: allAttendee, message: "data saved successfully"})

                }else{
                    res.status(400).send({status: "fails", message: "attendee email already exists"})
                }

            }else{
                console.log('campaign id is required')
            }

            
        } catch (error) {
            res.status(400).send({message: error})
        }
        
    }

    static getAttendeeList = async (req, res) => {
        try {
            const {camp_id} = req.params
        } catch (error) {
            
        }
    }

}

export default attendeeController
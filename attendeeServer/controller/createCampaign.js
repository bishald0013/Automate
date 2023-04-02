import CampaignModel from "../model/campaignModel.js"

class CampaignController {
    static createCampaign = async (req, res) => {
        try {
            
            const { title, emailbody, senderEmail, eventType, gmt, startDate, endDate,
            description, subject } = req.body

            if(title && emailbody && senderEmail && eventType && gmt && startDate && endDate && description && subject){

                const getTitle = await CampaignModel.findOne({title: title})

                if(!getTitle){

                    const newCampaign = await CampaignModel({
                        title: title,
                        emailbody: emailbody,
                        senderEmail: senderEmail,
                        eventType: eventType,
                        gmt: gmt,
                        startDate: startDate,
                        endDate: endDate,
                        description: description,
                        subject: subject
                    })

                    await newCampaign.save()
                    res.status(200).send({status: "success", data: "data set successfully"})

                }else{
                    console.log("Title all ready exists")
                }

            }else{
                console.log('all fields are required')
            }
        } catch (error) {
            res.status(400).send({status: "fails", error: error})
        }
    }

    static getCampaign = async (req, res) => {
        try {
          const addData =  await CampaignModel.find()
          res.status(200).send({data: addData})
        } catch (error) {
            console.log(error);
        }
    }
}

export default CampaignController
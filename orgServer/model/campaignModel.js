import mongoose from "mongoose";

const campaignSchema = mongoose.Schema({
    title: {type: String},
    emailbody: {type: String},
    senderEmail: {type: String},
    eventType: {type: String},
    gmt: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    description: {type: String},
    subject: {type: String}
})

const CampaignModel = mongoose.model('Campaign', campaignSchema)
export default CampaignModel
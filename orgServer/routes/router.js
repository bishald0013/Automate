import express from "express";
import attendeeController from "../controller/attendeeController.js";
import CompanyController from "../controller/companyController.js";
import CampaignController from "../controller/createCampaign.js";
import UserController from "../controller/userController.js";

const router = express.Router();

//user routes and endpoint
router.post("/create_user", UserController.createUser);
router.post("/login", UserController.logInUser);

//create campaign and post campaign
router.get("/getCampaign", CampaignController.getCampaign);
router.post("/postCampaign", CampaignController.createCampaign);

//create company route
router.post(`/postCampaign/:id`, CompanyController.createCompany);
router.get(`/getCompany/:id`, CompanyController.getAllCompany);

router.post("/add_attendee", attendeeController.postAttendee);

export default router;

import express from "express";
import attendeeController from "../controller/attendeeController.js";

const router = express.Router();

router.get("/get_attendee/:campId", attendeeController.getAttendeeList);
router.post("/add_attendee", attendeeController.postAttendee);

export default router;

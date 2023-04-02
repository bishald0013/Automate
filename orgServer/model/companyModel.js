import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  c_userId: { type: String },
  companyName: { type: String, required: true, trim: true },
  jobTitle: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  pin: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
});

const CompanyModel = mongoose.model("Company", companySchema);
export default CompanyModel;

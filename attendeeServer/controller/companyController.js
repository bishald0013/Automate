import CompanyModel from "../model/companyModel.js";
import UserModel from "../model/userModel.js";

class CompanyController {
  //post company base on user id
  static createCompany = async (req, res) => {
    try {
      const { id } = req.params;
      const comp_data = req.body;
      const user = await UserModel.findById({ _id: id });

      if (comp_data) {
        if (!user) {
          res.status(400).json({
            message: "User not found",
          });
        } else {
          const camp = await CompanyModel.findById({ c_userId: user._id });

          if (!camp) {
            const newCompany = await CompanyModel({
              c_userId: user._id,
              companyName: comp_data.c_name,
              jobTitle: comp_data.c_jobTitle,
              email: comp_data.c_email,
              address: comp_data.c_address,
              city: comp_data.c_city,
              pin: comp_data.c_pin,
              state: comp_data.c_state,
              country: comp_data.c_country,
            });

            await newCompany.save();
            res.status(200).send({ status: "success", data: newCompany });
          } else {
            res.status(400).json({
              message: "Company already exists",
            });
          }
        }
      } else {
        res.status(400).json({
          message: "Company already exists",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  //get company base on user Id

  static getAllCompany = async (req, res) => {
    try {
      const { id } = req.params.id;

      const getCompanies = await CompanyModel.find({ c_userId: userId });

      if (!getCompanies) {
        res.status(400).json({
          message: "campaign not found",
        });
      } else {
        res.status(200).json({ status: "success", data: getCompanies });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
}

export default CompanyController;

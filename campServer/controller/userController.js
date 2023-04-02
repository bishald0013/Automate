import UserModel from "../model/userModel.js";

import jwt from 'jsonwebtoken'

class UserController {
    static logInUser = async (req, res) => {
        try {

            const {email, password} = req.body

            if(email && password){

                const userEmail = await UserModel.findOne({email: email})
                
                if(userEmail !== null){
                
                    const userPassword = userEmail.password
                
                    if((userEmail.email === email) && password === userPassword){                        
                        const token = jwt.sign({userEmail: userEmail._id}, process.env.SECRET_KEY, {expiresIn: "5d"})
                        res.status(200).send({status:"success", message:"login success", token: token})
                    }else{
                        res.status(400).send({status: "fails", message:"email or password desnot match"})
                    }
                }else{
                    res.status(400).send({status: "fails", message:"email not found"})
                }
            }
            
        } catch (error) {
            
        }
    }

    static createUser = async (req, res) => {
        try {

            const userData = req.body
            const {firstName, lastName, email, contactNumber, password, confirm_password} = userData;

            const userEmail = await UserModel.findOne({email:email})

            if(!userEmail){
                if(firstName && lastName){
                    if(password === confirm_password){

                        // const salt = await genSalt(10)
                        // const hashed = await bcrypt.hash(password, salt)

                        // console.log(hashed)

                        const newUser = await UserModel({
                            firstName: firstName,
                            lastName: lastName,
                            email:email,
                            contactNumber:contactNumber,
                            password: password
                        })

                        await newUser.save()

                        const userId =  await UserModel.findOne({email: email})

                        const token = jwt.sign({userId: userId._id}, process.env.SECRET_KEY, {expiresIn: "5d"})

                        res.status(200).send({status: "success", data: newUser, token: token})

                    }else{
                        res.status(400).send({status:"fails", message:"password and confirm password doesnot match"})
                    }
                }else{
                    res.status(400).send({status:"fails", message:"firstName and lastName required"})
                }
            }else{
                res.status(400).send({status:"fails", message:"user already exist"})
            }
            
            
        } catch (error) {
            
        }
    }

}

export default UserController

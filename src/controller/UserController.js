const User = require("../models/User");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const { email, password , fullName} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required." });
        }
                
        const newUser = new User({ email, password, fullName });
        await newUser.save(); // Lưu vào cơ sở dữ liệu
        
        res.status(200).json({status: "Ok",
            message:"Login success",
            data:newUser}) // Trả về người dùng mới đã được tạo})
            
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const loginUser = async(req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(500).json({
                status: "Err",
                message: "email and password are required."});
        }

        const checkUser = await User.findOne({
            email : email
        })
        if(checkUser === null ){
            return res.status(500).json({
                status: "Err",
                message: "email is not defined."});
        }

        const checkPassword = bcrypt.compare(password, checkUser.password);
        if(!checkPassword){
            return res.status(500).json({
                status: "Err",
                message:"Password is incorrect"
            })
        }

        res.status(200).json({
            status: "Ok",
            message:"Login success",
            data: checkUser
        })


    }catch(error){
        console.error("Error login: " + error );
        res.status(500).json({message: "Internal Server Error"})
    }
}

const findAllUser = async( req, res)=>{
    try {
        
        const listUser = await User.find()
        res.status(200).json({
            status: "OK",
            message: "Success",
            data: listUser
        })
        
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const findByIdUser = async( req, res )=>{
    try {
        const id = req.params.id;
        const user
            = await User.findById(id);
        res.status(200).json({
            status: "OK",
            message: "Success",
            data: user
        });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    createUser,
    loginUser,
    findAllUser,
    findByIdUser

};

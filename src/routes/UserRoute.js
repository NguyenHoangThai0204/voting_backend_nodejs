const express = require("express");
const router = express.Router(); // Sử dụng router của express
const userController = require("../controller/UserController");

// Post: http://localhost:3000/api/user/signup
// {"email":"xinchao","password":"xinhaha", "fullName":"Nguyễn Hoàng Thái"}
router.post("/signup", userController.createUser);

// Get: http://localhost:3000/api/user/findAllUser
router.get("/findAllUser", userController.findAllUser);

// Post: http://localhost:3000/api/user/login
// {"email":"xinchao","password":"xinhaha"}
router.post("/login", userController.loginUser);

// Get: http://localhost:3000/api/user/getUserByid/
router.post("/findByIdUser", userController.findByIdUser);

module.exports = router;

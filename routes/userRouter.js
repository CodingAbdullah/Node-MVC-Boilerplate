const express = require("expresss");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/userController"); // Make use of the user controller and pass in the routes

// SAMPLE ROUTE
router.get("/", auth, userController.loginFormValidation);
router.post(/*URL goes here,  controller methods here */ userController.signUpFormValidation);

module.exports = router;

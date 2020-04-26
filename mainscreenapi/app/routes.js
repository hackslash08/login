const express = require("express"),
    
userController = require("../app/controller/userController"),
    

    router = express.Router();
// Timesheet Routes
// access token required
// router.get("/api/v/get/getmanagerList", userController.getmanagerList);
// user routes
//no access token required
router.post("/api/create/user", userController.register);
router.post("/api/login/user", userController.userLogin);
router.get('/confirmation', userController.confirmationPost);
router.post('/resend', userController.resendTokenPost);

module.exports = router;


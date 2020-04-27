const express = require("express"),
  userController = require("../app/controller/userController"),
  projectController = require("../app/controller/projectController");

router = express.Router();
// Timesheet Routes
// access token required
// router.get("/api/v/get/getmanagerList", userController.getmanagerList);
// user routes
//no access token required
router.post("/api/create/user", userController.register);
router.post("/api/login/user", userController.userLogin);
router.get("/confirmation", userController.confirmationPost);
router.post("/resend", userController.resendTokenPost);

router.post("/api/create/projects", projectController.createNewProject); //to create a new project and store it in the database
router.get("/api/get/projects", projectController.getProjectList); // to fetch the list of project to show in the manager flow and to import in user flow
router.put("/api/edit/projects", projectController.editProject); // to edit the project details like code, contrator employees working on the project
router.delete("/api/delete/projects", projectController.deleteProject); // to delete an existing project in the database
router.get("/api/get/projectdata", projectController.getProjectdata);

module.exports = router;

const project = require("../model/projectModel");

function createNewProject(req, res) {
  var payload = new project({
    user: req.body.user,
    projectName: req.body.projectName,
    Risk_Compliance: req.body.Risk_Compliance,
    Risk_Standards1: req.body.Risk_Standards1,
    Risk_Standards2: req.body.Risk_Standards2,
    Risk_DataGov1: req.body.Risk_DataGov1,
    Risk_DataGov2: req.body.Risk_DataGov2,
    Risk_DataGov3: req.body.Risk_DataGov3,
    Risk_DataGov4: req.body.Risk_DataGov4,
    Risk_InfoSec1: req.body.Risk_InfoSec1,
    Risk_InfoSec2: req.body.Risk_InfoSec2,
    Risk_InfoSec3: req.body.Risk_InfoSec3,
    Risk_BusCon1: req.body.Risk_BusCon1,
    Risk_BusCon2: req.body.Risk_BusCon2,
    Tech_Virtualization1: req.body.Tech_Virtualization1,
    Tech_Virtualization2: req.body.Tech_Virtualization2,
    Tech_Legacy1: req.body.Tech_Legacy1,
    Tech_Legacy2: req.body.Tech_Legacy2,
    Tech_AppDepend1: req.body.Tech_AppDepend1,
    Tech_AppDepend2: req.body.Tech_AppDepend2,
    Tech_users: req.body.Tech_users,
    Tech_LifecycMan1: req.body.Tech_LifecycMan1,
    Tech_LifecycMan2: req.body.Tech_LifecycMan2,
    Tech_Licensing1: req.body.Tech_Licensing1,
    Tech_Licensing2: req.body.Tech_Licensing2,
    Tech_Network1: req.body.Tech_Network1,
    Tech_Network2: req.body.Tech_Network2,
    Tech_Network3: req.body.Tech_Network3,
    Tech_Network4: req.body.Tech_Network4,
    Tech_Workload1: req.body.Tech_Workload1,
    Tech_Workload2: req.body.Tech_Workload2,
    Tech_Architecture1: req.body.Tech_Architecture1,
    Tech_Architecture2: req.body.Tech_Architecture2,
    Tech_Architecture3: req.body.Tech_Architecture3,
  });
  payload //saving the payload into the DB, that means the fields in the form will be saved into the database as a new project.
    .save(payload)
    .then((data) => {
      return res.status(200).send({ success: true, data: data });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, data: err });
    });
}

//getting project list and details
// function getProjectList(req, res) {
//   project
//     .find()
//     .then((data) => {
//       return res.status(200).send({ success: true, data: data });
//     })
//     .catch((err) => {
//       return res.status(400).send({ success: false, data: err });
//     });
// }
function getProjectList(req, res) {
  console.log(req.query.user);
  var man = { user: req.query.user };
  project
    .find(man)
    .then((data) => {
      console.log({ data });
      return res.status(200).send({ success: true, data: data });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, data: err });
    });
}

//delete project code and details
function deleteProject(req, res) {
  console.log(req.query);
  project
    .deleteOne({ _id: req.query.id })
    .then((data) => {
      return res.status(200).send({ success: true, data: data });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, data: err });
    });
}

//Edit project details
function editProject(req, res) {
  project
    .update({ _id: req.query.id }, req.body)
    .then((data) => {
      return res.status(200).send({ success: true, data: data });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, data: err });
    });
}

module.exports = {
  createNewProject,
  getProjectList,
  editProject,
  deleteProject,
};

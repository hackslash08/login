const project = require("../model/projectModel");

function createNewProject(req, res) {
  var payload = new project({
    user: req.body.user,
    projectName: req.body.projectName,
    Risk_Compliance_Score: req.body.Risk_Compliance_Score,
    Risk_Compliance_Rating: req.body.Risk_Compliance_Rating,
    Risk_Standards1_Score: req.body.Risk_Standards1_Score,
    Risk_Standards1_Rating: req.body.Risk_Standards1_Rating,
    Risk_Standards2_Score: req.body.Risk_Standards2_Score,
    Risk_Standards2_Rating: req.body.Risk_Standards2_Rating,
    Risk_DataGov1_Score: req.body.Risk_DataGov1_Score,
    Risk_DataGov1_Rating: req.body.Risk_DataGov1_Rating,
    Risk_DataGov2_Score: req.body.Risk_DataGov2_Score,
    Risk_DataGov2_Rating: req.body.Risk_DataGov2_Rating,
    Risk_DataGov3_Score: req.body.Risk_DataGov3_Score,
    Risk_DataGov3_Rating: req.body.Risk_DataGov3_Rating,
    Risk_DataGov4_Score: req.body.Risk_DataGov4_Score,
    Risk_DataGov4_Rating: req.body.Risk_DataGov4_Rating,
    Risk_InfoSec1_Score: req.body.Risk_InfoSec1_Score,
    Risk_InfoSec1_Rating: req.body.Risk_InfoSec1_Rating,
    Risk_InfoSec2_Score: req.body.Risk_InfoSec2_Score,
    Risk_InfoSec2_Rating: req.body.Risk_InfoSec2_Rating,
    Risk_InfoSec3_Score: req.body.Risk_InfoSec3_Score,
    Risk_InfoSec3_Rating: req.body.Risk_InfoSec3_Rating,
    Risk_BusCon1_Score: req.body.Risk_BusCon1_Score,
    Risk_BusCon1_Rating: req.body.Risk_BusCon1_Rating,
    Risk_BusCon2_Score: req.body.Risk_BusCon2_Score,
    Risk_BusCon2_Rating: req.body.Risk_BusCon2_Rating,
    Tech_Virtualization1_Score: req.body.Tech_Virtualization1_Score,
    Tech_Virtualization1_Rating: req.body.Tech_Virtualization1_Rating,
    Tech_Virtualization2_Score: req.body.Tech_Virtualization2_Score,
    Tech_Virtualization2_Rating: req.body.Tech_Virtualization2_Rating,
    Tech_Legacy1_Score: req.body.Tech_Legacy1_Score,
    Tech_Legacy1_Rating: req.body.Tech_Legacy1_Rating,
    Tech_Legacy2_Score: req.body.Tech_Legacy2_Score,
    Tech_Legacy2_Rating: req.body.Tech_Legacy2_Rating,
    Tech_AppDepend1_Score: req.body.Tech_AppDepend1_Score,
    Tech_AppDepend1_Rating: req.body.Tech_AppDepend1_Rating,
    Tech_AppDepend2_Score: req.body.Tech_AppDepend2_Score,
    Tech_AppDepend2_Rating: req.body.Tech_AppDepend2_Rating,
    Tech_users_Score: req.body.Tech_users_Score,
    Tech_users_Rating: req.body.Tech_users_Rating,
    Tech_LifecycMan1_Score: req.body.Tech_LifecycMan1_Score,
    Tech_LifecycMan1_Rating: req.body.Tech_LifecycMan1_Rating,
    Tech_LifecycMan2_Score: req.body.Tech_LifecycMan2_Score,
    Tech_LifecycMan2_Rating: req.body.Tech_LifecycMan2_Rating,
    Tech_Licensing1_Score: req.body.Tech_Licensing1_Score,
    Tech_Licensing1_Rating: req.body.Tech_Licensing1_Rating,
    Tech_Licensing2_Score: req.body.Tech_Licensing2_Score,
    Tech_Licensing2_Rating: req.body.Tech_Licensing2_Rating,
    Tech_Network1_Score: req.body.Tech_Network1_Score,
    Tech_Network1_Rating: req.body.Tech_Network1_Rating,
    Tech_Network2_Score: req.body.Tech_Network2_Score,
    Tech_Network2_Rating: req.body.Tech_Network2_Rating,
    Tech_Network3_Score: req.body.Tech_Network3_Score,
    Tech_Network3_Rating: req.body.Tech_Network3_Rating,
    Tech_Network4_Score: req.body.Tech_Network4_Score,
    Tech_Network4_Rating: req.body.Tech_Network4_Rating,
    Tech_Workload1_Score: req.body.Tech_Workload1_Score,
    Tech_Workload1_Rating: req.body.Tech_Workload1_Rating,
    Tech_Workload2_Score: req.body.Tech_Workload2_Score,
    Tech_Workload2_Rating: req.body.Tech_Workload2_Rating,
    Tech_Architecture1_Score: req.body.Tech_Architecture1_Score,
    Tech_Architecture1_Rating: req.body.Tech_Architecture1_Rating,
    Tech_Architecture2_Score: req.body.Tech_Architecture2_Score,
    Tech_Architecture2_Rating: req.body.Tech_Architecture2_Rating,
    Tech_Architecture3_Score: req.body.Tech_Architecture3_Score,
    Tech_Architecture3_Rating: req.body.Tech_Architecture3_Rating,
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

//getting project details
function getProjectdata(req, res) {
  project
    .find({ _id: req.query.id })
    .then((data) => {
      return res.status(200).send({ success: true, data: data });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, data: err });
    });
}

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
  getProjectdata,
};

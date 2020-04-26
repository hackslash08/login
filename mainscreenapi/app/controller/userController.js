// const user = require("../model/userModel"),
// jwt = require('jsonwebtoken');
// var crypto = require('crypto');
// //user registeration
// // var password;
// function encrypt(password){
//     var mykey = crypto.createCipher('aes-128-cbc', 'password');
//     var mystr = mykey.update(password, 'utf8', 'hex')
//     mystr += mykey.final('hex');

//     console.log(mystr);
//     return mystr;
// }

// function register(req, res) {
//     console.log(req.body);
//     var userObj = new user({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email:req.body.email,
//         password: req.body.password,
//         // role: req.body.role,
//         company: req.body.company,
//         data: [],
//         // designation: req.body.designation,
        

//     })
//     //crypting the password using AES
//     var crypt_pass = encrypt(userObj.password);
//     console.log(crypt_pass);
//     userObj.password= crypt_pass;
//     console.log(userObj);
   
//     userObj.save(userObj).then((data) => {

//         return res.status(200).send({ success: true, data: data })
//     }).catch((err) => {
//         return res.status(400).send({ success: false, data: err })
//     })
// }

// //User login
// //decrytping back the hex password to original password
// function decrypt(password){
//     // console.log("!st ", password);
// var mykey = crypto.createDecipher('aes-128-cbc', 'password');
// var mystr = mykey.update(password, 'hex', 'utf8')
// console.log(mystr);
// mystr += mykey.final('utf8');

// console.log(mystr);
// return mystr;
// }

// function userLogin(req, res) {
//     console.log(req.body.email)
//     if(!user.confirmed){
//         throw new Error("Please Confirm your email");
//     }
//     else{
//     user.findOne({
//         "email": req.body.email
//     }).then((data) => {
//         console.log({data});
//         if (!data) {
//             return res.status(400).send({
//                 success: false,
//                 data: {
//                     message: "No user matched"
//                 }
//             });
//         } else if (data) {
//             var decypt_pass = decrypt(data.password);
//             // console.log("Hi",decypt_pass);
//             if (decypt_pass == req.body.password) {

            
//             var tokenData = {
//                 "id": data.id
//             }
//             var token = jwt.sign(tokenData, "configsecret", {
//             expiresIn: "24h" // expires in 1 day
//             });
//             return res.status(200).send({
//                 success: true,
//                 token: token,
//                 data: data
//             });
//      } }

//     }).catch((err) => {
//         return res.status(400).send({
//             success: false,
//             data: err
//         })
//     })
// }
// }

// // function getuserDetails(req, res) {
//     // console.log('hello');
//     // console.log(req.query.name);
//     // var name = {projectincharge: req.query.name};
//     // console.log(name);
//     // var vendorName = { [req.query.role]: req.query.name };
// //     user.find().then((data) => {
// //         return res.status(200).send({ success: true, data: data })
// //     }).catch((err) => {
// //         return res.status(400).send({ success: false, data: err })
// //     })
// // }

// // function getmanagerList(req,res){
// //     user.getElementById('manager').innerHTML = user.find({ role }).then((data) => {
// //         console.log(res);
// //         return res.status(200).send({ success: true, data: data })
// //     }).catch((err) => {
// //         return res.status(400).send({ success: false, data: err })
// //     })
// // }

// module.exports = { register, userLogin }

const user = require("../model/userModel"),
jwt = require('jsonwebtoken');
var crypto = require('crypto');
const Token = require("../model/tokenVerification");

exports.userLogin = function(req, res, next) {
    // req.assert('userName', 'Email is not valid').isEmail();
    // req.assert('userName', 'Email cannot be blank').notEmpty();
    // req.assert('password', 'Password cannot be blank').notEmpty();
    // req.sanitize('userName').normalizeEmail({ remove_dots: false });
 
    // Check for validation erro
    // var errors = req.validationErrors();
    // if (errors) return res.status(400).send(errors);
 
    user.findOne({ email: req.body.email }, function(err, user) {
        if (!user) return res.status(401).send({ msg: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});
 
        // user.comparePassword(req.body.password, function (err, isMatch) {
        //     if (!isMatch) return res.status(401).send({ msg: 'Invalid email or password' });
 
            // Make sure the user has been verified
            if (!user.isVerified) return res.status(401).send({ type: 'not-verified', msg: 'Your account has not been verified.' }); 
 
            // Login successful, write token, and send back user
            res.send({user: user.toJSON() });
        });
    }
    // token: generateToken(user),


var crypto = require('crypto');
var nodemailer = require('nodemailer');
const expressValidator = require('express-validator'); 
// app.use(expressValidator);
 
/**
* POST /signup
*/
exports.register = function(req, res, next) {
    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.body.userName);
    // console.log(req.body.email);
//   req.assert('firstName', 'Name cannot be blank').notEmpty();
//   req.assert('lastName', 'Name cannot be blank').notEmpty();
//   req.assert('userName', 'Email is not valid').isEmail();
//   req.assert('company', 'Email cannot be blank').notEmpty();
//   req.assert('password', 'Password must be at least 4 characters long').len(4);
//   req.sanitize('userName').normalizeEmail({ remove_dots: false });
 
  // Check for validation errors    
//   var errors = req.validationErrors();
//   if (errors) { return res.status(400).send(errors); }
 
  // Make sure this account doesn't already exist
  user.findOne({ email: req.body.email }, function (err, userdata) {
    // console.log('Hello');
    // console.log({userdata});
    // Make sure user doesn't already exist
    if (userdata) return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' });
    // console.log('line after user')
    // Create and save the user
    // console.log(req.body);
    var userObj = new user({ firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, company: req.body.company, password: req.body.password });
    // console.log({userObj});
    // console.log(req.body.userName);
    userObj.save(function (err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
        // console.log('Hello');
        // Create a verification token for this user
        var token = new Token({ _userId: userObj._id, token: crypto.randomBytes(16).toString('hex') });
        // console.log({token});
        // Save the verification token
        token.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }
            // console.log('sending mail');
            // Send the email

            var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'testerpwcvinish@gmail.com', pass: 'tester@tester' } });
            var mailOptions = { from: 'no-reply@gmail.com', to: userObj.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send('A verification email has been sent to ' + userObj.email + '.');
            });
        });
    });
  });
};


exports.confirmationPost = function (req, res, next) {
    // req.assert('userName', 'Email is not valid').isEmail();
    // req.assert('userName', 'Email cannot be blank').notEmpty();
    // req.assert('token', 'Token cannot be blank').notEmpty();
    // req.sanitize('userName').normalizeEmail({ remove_dots: false });
 
    // // Check for validation errors    
    // var errors = req.validationErrors();
    // if (errors) return res.status(400).send(errors);
 
    // Find a matching token
    Token.findOne({ token: req.body.token }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });
 
        // If we found a token, find a matching user
        user.findOne({ _id: token._userId, email: req.body.email }, function (err, userObj) {
            if (!userObj) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            if (userObj.isVerified) return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' });
 
            // Verify and save the user
            userObj.isVerified = true;
            userObj.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send("The account has been verified. Please log in.");
            });
        });
    });
};

exports.resendTokenPost = function (req, res, next) {
    // req.assert('userName', 'Email is not valid').isEmail();
    // req.assert('userName', 'Email cannot be blank').notEmpty();
    // req.sanitize('userName').normalizeEmail({ remove_dots: false });
 
    // // Check for validation errors    
    // var errors = req.validationErrors();
    // if (errors) return res.status(400).send(errors);
 
    user.findOne({ email: req.body.email }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
        if (user.isVerified) return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });
 
        // Create a verification token, save it, and send email
        var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
 
        // Save the token
        token.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }
 
            // Send the email
            var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
            var mailOptions = { from: 'no-reply@codemoto.io', to: user.userName, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send('A verification email has been sent to ' + user.userName + '.');
            });
        });
 
    });
};
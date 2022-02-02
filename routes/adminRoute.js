var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const passport = require('passport');

/** All post request *//////////////////////////////////////////////

// register staff or student route
router.post('/register', userController.register)

// login staff
router.post('/login', userController.login)

// https://agro-me.herokuapp.com/


// /** All get request *///////////////////////////////////////////////////////////////

// get single user
router.get('/get-single-user', userController.singleUser)

// get single user
router.get('/get-all-user', userController.allUsers)

router.get('/get-product', userController.getProduct)
// /** All put request *//////////////////////////////////////////////////////////

// edit single student
router.put('/edit-user', userController.editUser)

// // passport.authenticate("jwt.admin",{session:false}),

// set profile pic
router.put('/set-profile-pic',  userController.setProfilePic);

// add vehicle
router.put('/add-product', userController.addProduct)


// remove vehicle
router.put('/remove-product', userController.removeProduct)


// change password
router.post('/change-password', userController.changePassword)



// /** All delete request *////////////////////////////////////////////////////

// delete single student
router.delete('/delete-user', userController.removeUser)

module.exports = router;
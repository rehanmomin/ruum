/*  Description: 
  Validate 
  Ruum user sign up flow
  Creattion of ruum
  Creation of task
  Update status of task
*/

import ruumPage from '../../main/page-objects/RuumPage' 
import signupPage from '../../main/page-objects/SignupPage' 


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();

fixture `Ruum app Challenge`
.page `${process.env.BASE_URL}` 
.before( async t => {
  data = config.getTestData(__dirname,__filename)
})

test
(testfile+': Validate Signup Flow', async t =>{

  var firstname = fakerator.names.firstName()
  var lastname = fakerator.names.lastName()
  var email = firstname +'.'+ lastname + '@mailinator.com' 

  await t.maximizeWindow();
  
  await signupPage.signup(email, firstname, lastname, data.password)
  await ruumPage.createNewRum()
  await ruumPage.createNewTask('my new task')
  await ruumPage.changeStatusToDone()
  
});



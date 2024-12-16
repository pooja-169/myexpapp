var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/internal_exam', function(req, res, next) {
  res.render('internal_exam');
});
router.post('/internal_exam', function(req, res, next) {
  //console.log(req.files.file123);
  var myfile = req.files.file123;
  var text = req.body.textbox;
  var filename = req.files.file123.name;
  var filetype = req.files.file123.mimetype;
  var filesize = req.files.file123.size;
  if(filetype == 'image/png' || filetype == 'image/jpeg' || filetype == 'image/jpg'){
    if(filesize < 2000000){
      myfile.mv("public/"+filename,function(err){
        res.send(filename+" File upload Succesfully"+ "\n"+ text+" File upload Succesfully");

        // res.send(text + "File upload Succesfully");

    })
    }
    else{
      res.send("File size is too large");
    }
  }else{
  res.send("File type not supported");
}

});

/*
router.post('/inquiryprocess',function(req,res,next){
  
  console.log(req.body);
  var name = req.body.txt1;
  var mobile = req.body.txt2;

  var msg = "Hi " + name + "has contact you </br> mobile is " + mobile;


  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "irbhojani@gmail.com",
      pass: "Pass",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "irbhojani@gmail.com", // list of receivers
      subject: "Someone has fillup the form.", // Subject line
      text: msg, // plain text body
      html: msg, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);

  res.send('Working')

  res.send("Thank you!!")
});

router.get('/save', function(req, res, next) {
  req.session.name = "ishita";
  res.send("Session Created");

});
router.get('/get', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.send("value is; " + a);
  }else{
    res.send("Session not created");
  }

});

router.get('/delete', function(req, res, next) {
  req.session.destroy();
  res.send('Deleted');

});

router.get('/login', function(req, res, next) {
  res.render('login');

});
router.post('/loginprocess', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  res.redirect("/dashboard");

});

router.get('/dashboard', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.render('dashboard', {name: a});
    }else{ 
      res.redirect('/login');
    }
  });

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
  
});


router.get('/signup', function(req, res, next) {
  res.render('signup');

});
router.post('/signupprocess', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  var b = req.body.txt1;
  req.session.name = b;
  var c = req.body.txt1;
  req.session.name = c;
  var d = req.body.txt1;
  req.session.name = d;
  res.redirect("/logins");

});


router.get('/logins', function(req, res, next) {
  res.render('logins');

});

router.post('/process', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  var b = req.body.txt1;
  req.session.name = b;
  var c = req.body.txt1;
  req.session.name = c;
  var d = req.body.txt1;
  req.session.name = d;
  res.redirect("/dashboard");
});

router.get('/dashboard', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.render('dashboard', {name: a});
    }else{ 
      res.redirect('/login');
    }
  });
*/
module.exports = router;

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  host:'smtp.gmail.com',
  secure: false,
  auth: {
    user: 'vignesh.ramanathan91@gmail.com',
    pass: 'vignesh@123'
  }
});

var mailOptions = {
  from: 'vignesh.ramanathan91@gmail.com',
  to: 'vigneshwaranr.hexaware@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
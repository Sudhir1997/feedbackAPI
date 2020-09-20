import express from 'express';
import nodemailer from 'nodemailer';

const router=express.Router();

router.post('/',(req,res)=>{
  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sudhawan2@gmail.com',
    pass: 'password'
  }
});

let mailOptions = {
  from: 'sudhawan2@gmail.com',
  to: req.body.email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};









});

export default router
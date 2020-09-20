import express from 'express';
import bodyParser from 'body-parser';
import feedbackMailer from './routes/feedback.js';

const app=express();

app.use(bodyParser.json());

app.use('/feedback')

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{console.log("Connected")});
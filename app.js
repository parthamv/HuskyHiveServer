import express from 'express'
import GigController from './controllers/gigs/gig-contoller.js';
import mongoose from 'mongoose';
import cors from "cors"


mongoose.connect('mongodb+srv://huskyhive:huskyhive@cluster0.eqrgxwf.mongodb.net/?retryWrites=true&w=majority&dbname=HuskyHive')
const app = express()


app.use(
    cors()
    );
app.use(express.json());
GigController(app)
app.listen(4000)
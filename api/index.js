const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require ("nodemailer");

const app = express();
const port = 800;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const jwt = require("jsonwebtoken")

mongoose.connect("mongodb+srv://shkmusembi:kiokoshedy@cluster0.bcszaqh.mongodb.net/")
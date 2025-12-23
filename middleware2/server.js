const express = require('express');
const {ReportBody, validationResult} = require('express-validator');
const Joi = require('joi');

const app = express();
const port = 3000;

app.use(express.json());

const validateInput = [
    body('username')
        .isLength({min: 5})
        .withMessage('Panjang username minimal 5 karakter')
    body('email')
]
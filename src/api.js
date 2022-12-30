const express = require('express');
const serverless = require('serverless-http');
const importRecommended = require('./repos/recommended.json');
const importLaundry = require('./repos/laundry.json');
const importPopular = require('/repos/popular.json');
const importAutoComplete = require('/repo/autocomplete.json');



const app = express();
const router = express.Router();

router.get('/', (req, res) => {

    res.json({
        'New-new api': 'izinto'
    });
});

router.get('/recommended', (_req, res) => {
    res.send(importRecommended);
});

router.get('/autocomplete', (_req, res) => {
    res.send(importAutoComplete);
});

router.get('/laundry', (req, res) => {
    res.send(importLaundry); 
});

router.get('/popular', (_req, res) => {
    res.send(importPopular);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
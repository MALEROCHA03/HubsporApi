const express = require('express');

const {hubspotClient} = require('../api');
const {checkContactExists} = require('../middlewares');

const router = express.Router();

router.post('/contact/new', checkContactExists, async (req, res) => {
  const {firstname, lastname, email, documentId} = req.body;
  
  const contactObj = {
    properties: {
      firstname,
      lastname,
      email,
      documentId
    }
  };
  
  try {
    
    const createHSContactReponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    const createdContactData = JSON.stringify(createHSContactReponse.body, null, 2);
    return res.json({status: 'Contact created', data: createHSContactReponse.body});
  } catch (error) {
    return res.status(400).json({status: 'Error', message: error.message});
  }
});

router.delete('/contact/delete', checkContactExists, async (req, res) => {
  const {email} = req.body;
  
  const contactObj = {
    properties: {
      email,
    }
  };
  
  try {
    
    const createHSContactReponse = await hubspotClient.crm.contacts.basicApi.delete(contactObj);
    const createdContactData = JSON.stringify(createHSContactReponse.body, null, 2);
    
    return res.json({status: 'Contact delete', data: createHSContactReponse.body});
  } catch (error) {
    return res.status(400).json({status: 'Error', message: error.message});
  }
});

router.put('/contact/update', checkContactExists, async (req, res) => {
  const {email} = req.body;
  
  const contactObj = {
    properties: {
      firstname,
      lastname,
      email,
      company

    }
  };
  
  try {
    
    const createHSContactReponse = await hubspotClient.crm.contacts.basicApi.update(contactObj);
    const createdContactData = JSON.stringify(createHSContactReponse.body, null, 2);
    
    return res.json({status: 'Contact Update', data: createHSContactReponse.body});
  } catch (error) {
    return res.status(400).json({status: 'Error', message: error.message});
  }
});

router.get('/contact/get', checkContactExists, async (req, res) => {
  const {email} = req.body;
  
  const contactObj = {
    properties: {
      email,
    }
  };
  
  try {
    
    const createHSContactReponse = await hubspotClient.crm.contacts.basicApi.getPage(contactObj);
    const createdContactData = JSON.stringify(createHSContactReponse.body, null, 2);
    
    return res.json({status: 'Contact Update', data: createHSContactReponse.body});
  } catch (error) {
    return res.status(400).json({status: 'Error', message: error.message});
  }
});
module.exports = router;
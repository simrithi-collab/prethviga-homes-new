const express = require('express');
const conatctController  = require('../controllers/contactController');
const router = express.Router();

router.post('/create-contact', conatctController.createContact);

module.exports = router;

// router.post('/contact', async (req, res) => {
//   try {
//     const { name, address, phone, email } = req.body;
    
//     if (!name || !email) {
//       return res.json({ success: false, message: 'Name and email required' });
//     }
    
//     await Contact.create({ name, address, phone, email });
    
//     res.json({ success: true, message: 'Contact saved successfully' });
//   } catch (error) {
//     res.json({ success: false, message: 'Server error' });
//   }
// });

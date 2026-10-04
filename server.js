const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/sms', async (req, res) => {
  const { Body, From } = req.body;

  // Check for "confirmation!" trigger
  if (Body.toLowerCase().includes('confirmation!')) {
    try {
      // Submit to Smart Intake backend
      await axios.post('https://hcp-smart-intake.onrender.com/submit', {
        data: Body
      });

      res.send('<Response></Response>');
    } catch (error) {
      console.log('Error:', error);
      res.send('<Response></Response>');
    }
  } else {
    res.send('<Response></Response>');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

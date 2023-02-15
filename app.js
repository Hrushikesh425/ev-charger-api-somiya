const express = require('express');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const bearerToken = 'KPGhrXkz2PGgQm4K9beXd6KaWKBQu9oZcPJRTLpnreKmOl69aBi4O2bbJ4hQVQg96YO7yKmNQ5pnnJuLCzVM2YLotq46GyIoWUw36_4yU98aGpJ93a8k0nz-jnxn2tqjgkE7IUq9l3EEWDpK9-ouPBx5iI65fzzAHZTN0GgJ_gyLpmtW9h6q9Pb0vvVE2fmvGWjSui48eHzXEgy-vePQRJv5WHhbOgw7aJr3TIT3HRvOZ9sKWB5iydqrt4wxxRndEDGQxl81nrjNFMXlmzUkJJlL0QdVV3IxlHMVbLBDcSw'


app.get('/api/:csn', (req, res) => {
    
    const CSN = req.params.csn;
    axios.get(`https://api.somaiya.edu/api/v1/evcharger/GetEmployeeInfo?CSN=${CSN}`, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    })
    .then(response => {
        console.log(`response from other API: ${JSON.stringify(response.data)}`);
        // const data =  response.json();
        // const particularData = data.fulL_NAME.membeR_TYPE;
        res.json(response.data);
    })
    .catch(error => {
        console.log(`Error fetching from other API: ${error}`)
        res.status(500).json({ message: 'Error fetching data from api'});
    
    })
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
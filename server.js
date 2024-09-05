const populationManager = require('./BAL/FishPopulationManager');
const LookUpManager=require('./BAL/LookUpManager')
const DistrictManager=require('./BAL/DistrictManager')


const express = require('express');
const app = express();
const cors=require('cors')

const port=process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:5173',
  }


app.use(cors(corsOptions));




app.get('/api/Population/All', (req, res) => {
    (async ()=>{const jsonfile=await populationManager.GetAllFishCatchData();
    res.json({ jsonfile });
    })();
});

app.get('/api/Population/Species/AllTime', (req, res) => {
    (async ()=>{const jsonfile=await populationManager.GetSpeciesCountAlltime(req.query.districtID);
    res.json({ jsonfile });
    })();
});

app.get('/api/Population/Total', (req, res) => {
    (async ()=>{const jsonfile=await populationManager.GetTotalSpeciesCount(req.query.districtID);
    res.json({ jsonfile });
    })();
});

/**********************LookUpAPIs************************ */

app.get('/api/Districts', (req, res) => {
    (async ()=>{const jsonfile=await LookUpManager.GetDistrictsLookUp();
    res.json({ jsonfile });
    })();
});

app.listen(port, () => {
    console.log('Server is listening at https://testwebappserver.azurewebsites.net');
});

/************************District APIs************************** */

app.get('/api/Coordinates/:districtID', (req, res) => {
    (async ()=>{const jsonfile=await DistrictManager.GetCoordinates(req.params.districtID);
    res.json({ jsonfile });
    })();
});

app.get('/api/allcoordinates', (req, res) => {
    (async ()=>{const jsonfile=await DistrictManager.GetAllCoordinates();
    res.json({ jsonfile });
    })();
});


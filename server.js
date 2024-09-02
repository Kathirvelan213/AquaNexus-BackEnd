const populationManager = require('./BAL/FishPopulationManager');


const express = require('express');
const app = express();
const cors=require('cors')
const port=process.env.PORT;

const corsOptions = {
    origin: 'http://localhost:5173/',
  }


app.use(express.static('public'));
app.get('/api/Population/All',cors(), (req, res) => {
    (async ()=>{const jsonfile=await populationManager.GetAllFishCatchData();
        // console.log(jsonfile2);
    res.json({ jsonfile });
    })();
});

app.get('/api/Population/Species/AllTime', (req, res) => {
    (async ()=>{const jsonfile=await populationManager.GetSpeciesCountAlltime(req.query.districtID);
        console.log(req.params.districtID)
    res.json({ jsonfile });
    })();
});
app.listen(port||3000, () => {
    console.log(`Server is listening at https://testwebappserver.azurewebsites.net`);
});




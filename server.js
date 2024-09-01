const GetAllFishCatchData2 = require('./BAL/FishPopulationManager');

const express = require('express');
const app = express();
//const port = 3000;
const port=process.env.PORT;


app.use(express.static('public'));
app.get('/api/message', (req, res) => {
    res.send('helloo');
    // (async ()=>{const jsonfile2=await GetAllFishCatchData2();
    //     console.log(jsonfile2);
    // res.json({ jsonfile2 });
    // })();
    
    
});

app.listen(port||3000, () => {
    console.log(`Server is listening at https://testwebappserver.azurewebsites.net`);
});





const axios = require('axios');
const bodyParser = require('body-parser');

const PopulationDAL = require('../DAL/FishPopulationRecords');

async function GetAllFishCatchData(){
    return await PopulationDAL.RetrieveAllFishCatchData();
}

async function GetEverySpeciesCount(districtID,startDate,endDate) {
    return await PopulationDAL.RetrieveAllSpeciesCount(districtID,startDate,endDate);
}

async function GetSpeciesCountAlltime(districtID){
    const today=new Date().toISOString().slice(0,10);
    return await PopulationDAL.RetrieveAllSpeciesCount(districtID,'1950-01-01',today);
}

async function GetTotalSpeciesCount(districtID){
    return await PopulationDAL.RetrieveTotalSpeciesCount(districtID);
}

async function getbla(){
    return await PopulationDAL.getbla();
}


/************************************** */


// async function getCoordinates(districtName) {
//     const url = 'https://nominatim.openstreetmap.org/search?q=${districtName}&format=json&limit=1';
//     const response = await axios.get(url);

//     if (response.data.length > 0) {
//         const location = response.data[0];
//         return {District:districtName, lat: location.lat, lon: location.lon };
//     } else {
//         throw new Error('Geocoding failed');
//     }
// }
// async function getDis(){
//     const disDetails= await PopulationDAL.GetDistrictsLookUp();
//     console.log(disDetails[0])
//     const OnlyDist=[]
//     disDetails.forEach((data)=>{
//         OnlyDist.push(data['DistrictName'])

//     })
//     return OnlyDist
// }
// async function processBatch(districts) {
//     const limit = await getDis();
  
//     const promises = districts.map((district) =>
//         limit(() => getCoordinates(district))
//     );
  
//     const results = await Promise.all(promises);
//     return results;
//   }
//   const locations = [
//     'Manhattan',
//     'Chennai',
//     'Sivakasi',
//     'Coimbatore',
//     'Madurai',
//     'Chengalpet'
// ];
// (async()=>{

//     processBatch(await getDis())
//     .then(results => {
//         disData.push(results)
//         console.log(disData)
//         console.log('Batch processing results:', results);
//     });  
// })();
/************************************** */



module.exports={
    GetAllFishCatchData:GetAllFishCatchData,
    GetEverySpeciesCount:GetEverySpeciesCount,
    GetSpeciesCountAlltime:GetSpeciesCountAlltime,
    GetTotalSpeciesCount:GetTotalSpeciesCount,
    getbla:getbla
}


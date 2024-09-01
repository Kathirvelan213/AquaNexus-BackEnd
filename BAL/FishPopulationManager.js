const PopulationDAL = require('../DAL/FishPopulationRecords');

async function GetAllFishCatchData(){
    return await PopulationDAL.RetrieveAllFishCatchData();
}

async function GetEverySpeciesCount(districtID,startDate,endDate) {
    return await PopulationDAL.RetrieveAllSpeciesCount(districtID,startDate,endDate);
}

async function GetSpeciesCountAlltime(districtID){
    const today=new Date().toISOString().slice(0,10);
    console.log(today);
    return await PopulationDAL.RetrieveAllSpeciesCount(districtID,'1950-01-01',today);
}
module.exports={
    GetAllFishCatchData:GetAllFishCatchData,
    GetEverySpeciesCount:GetEverySpeciesCount,
    GetSpeciesCountAlltime:GetSpeciesCountAlltime
}


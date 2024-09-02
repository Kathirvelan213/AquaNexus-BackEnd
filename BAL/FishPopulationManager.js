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

module.exports={
    GetAllFishCatchData:GetAllFishCatchData,
    GetEverySpeciesCount:GetEverySpeciesCount,
    GetSpeciesCountAlltime:GetSpeciesCountAlltime,
    GetTotalSpeciesCount:GetTotalSpeciesCount
}


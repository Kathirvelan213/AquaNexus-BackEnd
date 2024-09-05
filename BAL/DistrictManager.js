const DistrictDAL = require('../DAL/DistrictRecords');

async function GetCoordinates(districtID){
    return await DistrictDAL.RetrieveCoordinates(districtID);
}

async function GetAllCoordinates(){
    return await DistrictDAL.RetrieveAllCoordinates();
}

module.exports={
    GetAllCoordinates:GetAllCoordinates,
    GetCoordinates:GetCoordinates
}
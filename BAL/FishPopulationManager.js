const GetAllFishCatchData=require('../DAL/FishPopulationRecords') 

async function GetAllFishCatchData2(){
    return await GetAllFishCatchData()
}

module.exports=GetAllFishCatchData2;
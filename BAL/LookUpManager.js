const LookUpDAL = require('../DAL/LookUps');

async function GetDistrictsLookUp() {
    return await LookUpDAL.RetrieveDistrictsLookUp();
}

module.exports={
    GetDistrictsLookUp:GetDistrictsLookUp
}
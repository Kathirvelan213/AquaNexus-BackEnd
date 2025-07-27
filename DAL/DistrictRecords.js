const sql=require("mssql");

var dbConfig = {
    server: "ssn-projects-server.database.windows.net",
    database: "db-fish-records_2025-07-27T02-09Z",
    user: "kathir",
    password: "sqlserver^SIH",
    
};

async function RetrieveCoordinates(districtID){
    try{
        let pool = await sql.connect(dbConfig);
        let result=await pool.request()
        .input('districtID',sql.Int,districtID)
        .execute('usp_GetCoordinates');
        return result.recordset;
    }catch(err){
        console.log(err);
    }
}

async function RetrieveAllCoordinates(){
    try{
        let pool = await sql.connect(dbConfig);
        let result=await pool.request()
        .execute('usp_GetAllCoordinates');
        return result.recordset;
    }catch(err){
        console.log(err);
    }
}

module.exports={
    RetrieveCoordinates:RetrieveCoordinates,
    RetrieveAllCoordinates:RetrieveAllCoordinates
}
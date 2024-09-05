const sql=require("mssql");

var dbConfig = {
    server: "ssn-projects-server.database.windows.net",
    database: "db-fish-records",
    user: "kathir",
    password: "sqlserver^SIH",
    
};

var conn = new sql.ConnectionPool(dbConfig)

async function RetrieveDistrictsLookUp(){
    try{
        let pool = await sql.connect(dbConfig);
        let result=await pool.request()
        .execute('usp_GetDistrictsLookUp');
        return result.recordset;
    }catch(err){
        console.log(err);
    }
}

module.exports={
    RetrieveDistrictsLookUp:RetrieveDistrictsLookUp
}
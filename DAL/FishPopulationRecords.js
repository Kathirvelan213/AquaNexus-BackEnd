const sql=require("mssql");

var dbConfig = {
    server: "ssn-projects-server.database.windows.net",
    database: "db-fish-records",
    user: "kathir",
    password: "sqlserver^SIH",
    
};

var conn = new sql.ConnectionPool(dbConfig)

async function RetrieveAllFishCatchData(){
    var req = new sql.Request(conn);
    let promise=new Promise((resolve,reject) => {

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return;
            }
            req.query("exec usp_GetAllFishCatchData", function (err, recordset) {
                if (err) {
                console.log(err);
            }
            else { 
                resolve(recordset.recordset);
            }
            conn.close();
        });
    });
})
let result=await promise;
return result;
}

async function RetrieveAllSpeciesCount(districtID,startDate,endDate){
    try{

        let pool = await sql.connect(dbConfig);
        let result=await pool.request()
        .input('DistrictID',sql.Int,districtID)
        .input('StartDate',sql.Date,startDate)
        .input('EndDate',sql.Date,endDate)
        .execute('usp_GetAllSpeciesCount');
        return result.recordset;
    }catch(err){
        console.log(err);
    }
}


module.exports={RetrieveAllSpeciesCount: RetrieveAllSpeciesCount,
    RetrieveAllFishCatchData: RetrieveAllFishCatchData
}  
// module.exports=RetrieveAllFishCatchData;


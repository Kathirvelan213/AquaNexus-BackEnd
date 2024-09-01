const sql=require("mssql");

var dbConfig = {
    server: "ssn-projects-server.database.windows.net",
    database: "db-fish-records",
    user: "kathir",
    password: "sqlserver^SIH",
    
};

var conn = new sql.ConnectionPool(dbConfig)

async function GetAllFishCatchData(){
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
                resolve(recordset.recordset)
            }
            conn.close();
        });
    });
})
let result=await promise
return result
}

module.exports=GetAllFishCatchData;   


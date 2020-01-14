
const connection = require("./connection")

function printQmarks(num) {

    const arry = [];
    for (let i=0; i<num; i++) {
        arry.push("?");
    }
    return arry.toString();

}


function objectTosql (ob){
    const arry = [];
    for(let key in ob ){
        let value = ob[key]
        if (Object.hasOwnProperty.call(ob,key)){
            if (typeof value ==="string" && value.indexOf("")>= 0 ){
                value = "'" + value + "'";
            }
            arry.push(key + "=" + value);
        }
    }
    return arry.toString();

}

const orm = {
    all: function (tableInput, cb){
        const queryString = "select * from " + tableInput + ";" ;
        connection.query(queryString, function (err, res){
            if (err){
                throw err;
            }
            cb(res);
        });
    }, 
    create: function(table, cols,vals, cb){
       let queryString = "insert into " + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "values (";
        queryString += printQmarks (vals.length);
        queryString+= ")";
    console.log(queryString);
    connection.query(queryString, vals, function (err,res){
        if (err) {
            throw err;
        } 
        cb(res);
    })
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = "update " + table;
    
        queryString += " set ";
        queryString += objectTosql(objColVals);
        queryString += " where ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
      
}

module.exports = orm
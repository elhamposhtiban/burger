
const connection = require("./connection")

function printQmarks(num) {

    const arry = [];
    for (const i=0; i<num; i++) {
        arry.push("?");
    }
    return arry.toString();

}


function objectTosql (ob){
    const arry = [];
    for(const key in ob ){
        const value = ob[key]
        if (objectTosql.hasOwnProperty.call(ob,key)){
            if (typeof value ==="string" && value.indexOf("")> = 0 ){
                value = "'" + value + "'";
            }
            Array.push(key + "=" + value);
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
        const queryString = "insert into" + table;
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
        var queryString = "update " + table;
    
        queryString += " set ";
        queryString += objToSql(objColVals);
        queryString += " where ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      delete: function(table, condition, cb) {
        var queryString = "delete from" + table;
        queryString += " where ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }

}

module.exports = orm
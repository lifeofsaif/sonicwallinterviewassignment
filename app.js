"use strict";
const CHUNK = 10
let express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var DataFrame = require('dataframe-js').DataFrame
let app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});

app.get('/chart', function (req, res) {
    fs.readFile('json/employees.json', 'utf8', function (err, data) {
      data = JSON.parse(data)
      
      
      var departmentData = getPieChartArrays(data, 'department')
      var genderData = getPieChartArrays(data, 'gender')
    
      
      res.json({
        departments: departmentData,
        gender: genderData
      })
    })
  })

function getPieChartArrays(data, column){
  var df = new DataFrame(data)
  var types = df.unique(column).toArray()
  var dataArray = []
  var labelArray = []
  
  types.forEach(function(type){
    dataArray.push((df.countValue(type[0],column)))
    labelArray.push(type[0])
  })
  
  return{
    dataArray:dataArray,
    labelArray:labelArray
  }
}


  //# sourceMappingURL=app.js.map
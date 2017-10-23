var DataFrame = require('dataframe-js').DataFrame
var fs = require('fs')
fs.readFile('json/employees.json', 'utf8', function (err, data) {
  data = JSON.parse(data)
  data = getArrrayWithTruncatedUniversityNames(data)
  
  
  console.log(df)
  
})



function getArrrayWithTruncatedUniversityNames(data){
  df = new DataFrame(data)
  df = df.withColumn('alma_mater', function(row){
    return truncate(row.get('alma_mater'))
  })
  df=df.toArray()
  return df 
}

function truncate(university){
  if(university.length > 25)
    return university.slice(0,25)+"..."
  else
    return university
}





angular.module('MainApp').factory('Data', ['$http', '$q', function ($http, $q) {
  
  var canceler 

  function getChart(){
    return $http({
      method: 'GET',
      url: '/chart'
    })
  }
  
  return {
    
    getChart: getChart
    
  }
  

}]);
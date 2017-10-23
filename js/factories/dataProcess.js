angular.module('MainApp').factory('Data', ['$http', '$q', function ($http, $q) {
  
  var canceler 
  
  function getPage(pageNumber){
    if(canceler)
      canceler.resolve()
    
    canceler = $q.defer();
    
    return $http({
      method: 'GET',
      url: '/data',
      params: {
          page: pageNumber,
          timeout: canceler.promise
        }
    })
  }
  
  function getChart(){
    return $http({
      method: 'GET',
      url: '/chart'
    })
  }
  
  return {
    getPage: getPage,
    getChart: getChart
    
  }
  

}]);
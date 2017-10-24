app.controller('MainController', ['$scope', '$location', '$http', 'Data', function ($scope, $location, $http, Data) {
  $scope.test = "test message hello hello world"
  $scope.appDescription = "Loads a JSON file using Ajax and displays in browser. Iterates over the json data and generates a html table, as well as two pie charts"

  if ($location.url() == '/analytics') {
    $("#chartBtn").addClass("active");
  } else {
    $("#tableBtn").addClass("active");
  }


  $http({
    method: 'GET',
    url: '/json/employees.json'
  }).then(function (employeejson) {
    let data = employeejson.data
    $scope.bigData = data

    if($location.search().page)
      $scope.pageNumber = $location.search().page
    else
      $scope.pageNumber = 1
  })

  $scope.$watch('pageNumber', function(newVal, oldVal) {
    if($scope.pageNumber){
      $scope.data = $scope.bigData.slice(($scope.pageNumber-1)*20,($scope.pageNumber-1)*20+20)   
    }
  });
  
 
  
  
  $scope.nextPage = function () {
    if ($scope.pageNumber < 51){
      $scope.pageNumber++
    }
  }

  $scope.prevPage = function () {
    if ($scope.pageNumber > 1) {
      $scope.pageNumber--
    }
  }


  $scope.truncate = function (str) {
    if (str.length > 25)
      return str.slice(0, 25) + "..."
    else
      return str
  }


  $scope.changeTab = function (tab) {
    if (tab == 'charts') {
      $("#chartBtn").addClass("active");
      $("#tableBtn").removeClass("active");
    } else {
      $("#tableBtn").addClass("active");
      $("#chartBtn").removeClass("active");
    }
  }









  Data.getChart().then(function (res) {

    $scope.genderlabels = res.data.gender.labelArray
    $scope.genderdata = res.data.gender.dataArray;
    $scope.gendercolors = ["#e7622f", "#1c2afa"]

    $scope.deptlabels = res.data.departments.labelArray
    $scope.deptdata = (res.data.departments.dataArray)
    $scope.deptcolors = ["#e7622f", "#1c2afa", "#999999", "#ff0000", "#5238ff", "#727272",
                          "#ff3700", "#0087ff", "#424242", "#ff569a", "#5e56ff", "#8e8bc4"]
  })



  //$scope.deptlabels = ["Male", "Female"];
  //$scope.deptdata = [300, 500];
  //$scope.deptcolors = ["#f47742", "#3fc658"]

  $scope.override = {
    borderColor: ['#a3a3a3', '#a3a3a3', '#a3a3a3', '#a3a3a3', '#a3a3a3', '#a3a3a3', '#a3a3a3', '#a3a3a3', '#a3a3a3']
  };

}]);

app.controller('MainController', ['$scope', '$location', 'Data', function ($scope, $location, Data) {
  $scope.test = "test message hello hello world"
  $scope.appDescription = "Loads a JSON file using Ajax and displays in browser. Iterates over the json data and generates a html table, as well as two pie charts"
  if ($location.url() == '/charts') {
    $("#chartBtn").addClass("active");
  }
  else {
    $("#tableBtn").addClass("active");
  }
  
  
  $scope.changeTab = function (tab) {
    if (tab == 'charts') {
      $("#chartBtn").addClass("active");
      $("#tableBtn").removeClass("active");
    }
    else {
      $("#tableBtn").addClass("active");
      $("#chartBtn").removeClass("active");
    }
  }
  
  
  $scope.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  $scope.setPage = function (pageNumber) {
    $scope.currentPage = pageNumber
  }

  function getPageNumbersArray(pageNumber) {
    pageNumber = parseInt(pageNumber)
    var arr = []
    var bound = false
    var i = pageNumber - 3
    while (arr.length < 10 || bound == true) {
      if (i > 0 && i < 100) {
        arr.push(i)
      }
      else if (i > 100) {
        bound = true
      }
      i++
    }
    return arr
  }
  $scope.$watch("currentPage", function (newValue, oldValue) {
    Data.getPage(newValue).then(function (data) {
      $scope.paginated = data.data.employees
      if (newValue) $scope.pages = getPageNumbersArray(newValue)
      $("#page-link-" + newValue).css({
        "background-color": "#ff7a41"
        , "color": "white"
      })
    })
  });
  
  
  Data.getChart().then(function(res){
    console.log(res.data.chart)
    $scope.genderlabels = res.data.gender.labelArray
    $scope.genderdata = res.data.gender.dataArray;
    $scope.gendercolors = [ "#e7622f", "#1c2afa"]  
  
    $scope.deptlabels = res.data.departments.labelArray
    $scope.deptdata = (res.data.departments.dataArray)
  })
  
  
  
  //$scope.deptlabels = ["Male", "Female"];
  //$scope.deptdata = [300, 500];
  //$scope.deptcolors = ["#f47742", "#3fc658"]
  
  $scope.override = { borderColor: ['#a3a3a3','#a3a3a3','#a3a3a3','#a3a3a3','#a3a3a3','#a3a3a3','#a3a3a3','#a3a3a3','#a3a3a3'] };

}]);

/*

    $scope.genderlabels = res.data.gender.labelArray
    $scope.genderdata = res.data.gender.dataArray
    $scope.gendercolors = ["#1c2afa", "#e7622f"]
    */
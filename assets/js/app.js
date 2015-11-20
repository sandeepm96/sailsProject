var app = angular.module("myApp",[]);

app.controller('Preview_Controller',['$scope','announncement_recent','posts_recent',
	function($scope, announncement_recent, posts_recent){
        announncement_recent.success(
        	function(data){
        		$scope.notice = recentFour(data);
        	});
    	posts_recent.success(
        	function(data){
        		$scope.post = recentFour(data);
        	});
    	/*openInfo helps jquery to show dialog box*/
    	$scope.openInfo = function(info) {
    	openInfo(info);
     	};
}]);

app.controller('footer',
               ['$scope',function($scope){
                $scope.date = new Date();
               }]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

app.factory('announncement_recent',['$http',function($http){
	return $http.get('/announcement')
	.success(function(data){return data;})
	.error(function(err){return err});
}]);
app.factory('posts_recent',['$http',function($http){
	return $http.get('/blog')
	.success(function(data){return data;
		})
	.error(function(err){return err});
}]);
var recentFour=function(data){
	var temp_data=[];
	for(var i=0;i<4;i++)
	{
		var _temp_data=data.pop();
		if((typeof _temp_data==="object")&&(_temp_data!=null)){temp_data.push(_temp_data);}

	}
	return temp_data;
}

var myApp = angular.module("myApp", []);
myApp.controller("priceController", function($scope){
	$scope.books = [
		{
			title: "LightBook",
			size: "15 x 10 cm",
			pages: "12 pages",
			binding: "binding on the clip",
			cover: "softcover",
			shipping: "$10",
			price: "129"
		}, {
			title: "ClassicBook",
			size: "30 x 21 cm",
			pages: "36 pages",
			binding: "binding on the spring",
			cover: "fabric cover",
			shipping: "$10",
			price: "239"
		}, {
			title: "PremiumBook",
			size: "42 x 50 cm",
			pages: "50 pages",
			binding: "hardcover",
			cover: "leather cover",
			shipping: "free shipping",
			price: "759"
		}
	];
	for(var i = 0; i < $scope.books.length; i++){
		for(var key in $scope.books[i]){
			if($scope.books[i][key] == ""){
				console.log(key);
			}
			
		}
	}
	
	
});




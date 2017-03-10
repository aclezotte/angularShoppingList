var app = angular.module("shoppingList", []);

app.controller('listCtrl', function($scope){
    
    $scope.list = [
        {name: 'Milk', price: 2.49},
        {name: 'Bread', price: 3.99},
        {name: 'Apples',price: 4.49,},
        {name: 'Spinach', price: 1.99,}
    ];
    
    $scope.total = 0;
    
    angular.forEach($scope.list, function(item) {
        $scope.total += item.price;
    });
    
    $scope.addItem = function() {
        $scope.list.push({name: $scope.nameBox, price: $scope.priceBox});
        $scope.total += ($scope.priceBox * 1);
    };
    
});

/*function shoppingListObjects(){
    var total = 0;
    var p;
    var div = document.getElementById('listDiv');
    
    for ( i = 0; i < list.length; i++ ) {
        p = document.createElement('p');
        p.innerHTML = list[i].name + ': $' + list[i].price.toFixed(2);
        div.appendChild(p);
        total += list[i].price;
    }
    
    total = total.toFixed(2);
    p = document.createElement('p');
    p.innerHTML = 'Total: $' + total;
    div.appendChild(p);
}

var list = [
        {name: 'Milk', price: 2.49},
        {name: 'Bread', price: 3.99},
        {name: 'Apples',price: 4.49,},
        {name: 'Spinach', price: 1.99,}
    ];
    
function addItem(){
        document.getElementById('listDiv').innerHTML = "";
        document.getElementById('totalDiv').innerHTML = "";
        var name = document.getElementById('nameBox').value;
        var price = document.getElementById('priceBox').value * 1;
        list.push({name: name, price: price});
        shoppingListObjects(list);
    }
    
document.getElementById('button').addEventListener('click', addItem);

shoppingListObjects (list);*/
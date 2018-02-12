(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var buyList = this;

        buyList.items =  ShoppingListCheckOffService.getItems();
        buyList.BuyItem = function(itemIndex){
            ShoppingListCheckOffService.BuyItem(itemIndex);
        };

        buyList.checkError = function(){
            return ShoppingListCheckOffService.checkError();
        }


    }

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
        boughtList.checkError2 = function(){
           return ShoppingListCheckOffService.checkError2();
        }
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var itemsToBuy =[
            { name: "Bread",  quantity: "3 pcs" },
            { name: "Olive oil",  quantity: "1 bottle" },
            { name: "Potato", quantity: "1 bag" },
            { name: "Cheese", quantity: "2 pcs" },
            {name: "Coffee", quantity: "1 bag"}
        ];
        var boughtItems = [];
    
        service.getItems = function () {
          
            return itemsToBuy;
          };
        
        service.getBoughtItems = function(){
           return boughtItems;
           
        };
        
        service.BuyItem = function(itemIndex){
           
            var item = itemsToBuy[itemIndex];
            boughtItems.push(item);
            itemsToBuy.splice(itemIndex, 1);
            

        };

        service.checkError = function(){
            if(itemsToBuy.length){
                return 0;
            } else {
                return 1;
            }
        };

        service.checkError2 = function(){
            if(boughtItems.length){
                return 0;
            } else {
                return 1;
            }
        };
    }

})();
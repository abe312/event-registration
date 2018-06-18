'use strict';

/**
 * @ngdoc function
 * @name testingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingApp
 */

// var $ = $.noConflict();


angular.module('testingApp')
    .controller('MainCtrl', function($scope, $document, $location, ngToast, $http, $uibModal, $log) {
        var date = new Date();
        //updated footer every year
        $scope.year = date.getFullYear();


        $scope.class="collapsed";
        $scope.toggleClass=function(){
          if($scope.class === "collapsed"){
            $scope.class="";
          }
          else if($scope.class === ""){
            $scope.class="collapsed";
          }
        };




        $scope.status = {
            isopen: false
          };

      $scope.home = function() {
        return $location.path() === "" || $location.path() === "/home" || $location.path() === "/";
      };

        //dummy auth
        $scope.authenticated = true;



        $scope.toast = function(){
             ngToast.create({
               content: '<div>Welcome to Vivriti Crafts Beer</div>',
               timeout: 3000,
               clickToClose: true,
               animation: 'slide'
             });
        };

        $scope.dis = true;

        // $scope.enabled = true;

        // API
          $http.get("http://d1oey74mq83tnb.cloudfront.net/beercraft.json")
          .then(function(success) {
            $scope.datasource =  success.data;
            // console.log(success.data);



              console.log($scope.datasource);
              $scope.styles = [];
              for(var i = 0; i<$scope.datasource.length; i++){
                  if($scope.styles.indexOf($scope.datasource[i].style) === -1){
                      $scope.styles.push($scope.datasource[i].style);
                      // console.log($scope.datasource[i].category);
                  }
              }


              $scope.datasource.splice(100, 10000);
            for (var i = 0; i < $scope.datasource.length; i++){
                $scope.datasource[i]["count"] = 0;
                $scope.datasource[i]["price"] = 499;
            }




            // console.log($scope.categories.length);
            $scope.styles = $scope.styles.sort();
            $scope.movies = $scope.styles;

            $scope.styles.unshift("All");
            console.log($scope.styles);

            $scope.activeMenu = $scope.styles[0];
            $scope.setActive = function(style) {
              $scope.activeMenu = style;

              // :DDDD bazinga
              if(style == "All")
                $scope.search = "";
              else
                $scope.search = style;
            }

            $scope.activeOrder = "name";
            $scope.order = "name";
              $scope.setOrder = function(str){
                  $scope.activeOrder = str;
                  // $scope.order = str;
              }



        },  function(error){
          console.log("error loading json" + error.data);
        });





        $scope.cartEmpty = true;
        // $scope.cartItems = [];
        $scope.cartObjItems = [];
        $scope.total = 0;
        // $scope.cartObj = {};

        $scope.addItem = function (menu) {
            var name = menu.name;
            var cost = menu.price;


            $scope.total+=cost;
            console.log(cost);

            var flag = 0;

            for(var i = 0; i<$scope.cartObjItems.length; i++){
              if($scope.cartObjItems[i].hasOwnProperty("name")){
                if($scope.cartObjItems[i].name == name){
                    ++$scope.cartObjItems[i].count;
                      $scope.cartObjItems[i].cost+=cost;
                    flag = 1;
                    break;
                }
              }

            }
            if(!flag){
                var obj = {};
                obj["name"] = name;
                obj["count"] = 1;
                obj["cost"] = cost;
                $scope.cartObjItems.push(obj);

            }

            $scope.cartEmpty = false;
            menu.count++;

        };

        $scope.removeItem = function(menu){
            // var index = $scope.cartItems.indexOf(menu);
            // if(index > -1){
            //     menu.count--;
            //
            //     $scope.cartItems.splice(index, 1);
            // }
            var name = menu.name;

            var cost = menu.price;


            for(var i = 0; i<$scope.cartObjItems.length; i++){
                if($scope.cartObjItems[i].hasOwnProperty("name")){

                    if($scope.cartObjItems[i].name == name){
                        if($scope.cartObjItems[i].count>1){
                            $scope.total -= cost;

                            --$scope.cartObjItems[i].count;
                            --menu.count;
                            $scope.cartObjItems[i].cost-=cost;
                            break;
                        }
                        else{
                            $scope.total -= cost;
                            $scope.cartObjItems[i].count = 0;
                            menu.count = 0;
                            // $scope.cartObjItems[i].cost= 0;
                            $scope.cartObjItems.splice(i, 1);
                            console.log("length of cartObjItems "+ $scope.cartObjItems.length);
                            console.log($scope.cartObjItems);
                            if($scope.cartObjItems.length == 0) $scope.emptyCart();
                            break;
                        }
                    }
                }
            }
        }

          $scope.emptyCart = function() {
              $scope.cartObjItems = [];
              $scope.cartEmpty = true;
              $scope.total = 0;
              for(var i = 0; i<$scope.datasource.length; i++){
                  $scope.datasource[i]["count"] = 0;
              }
          }





        // rotate icon logic
        var count1 = 0;
        var count2 = 0;

        $scope.closeThis1 = function () {
          // console.log('closing');
          // count1 = count2 = 0;
          count1 = 0;
          // console.log("1 "+ count1 + "   "+ count2);
          $scope.c1 = "";

      };
        $scope.closeThis2 = function () {
          // count1 = count2 = 0;
          count2=0;
          // console.log("2 "+ count1 + "   "+ count2);
          $scope.c2 = "";
      };

        $scope.clickC1 = function(){
          count2=0;
          // console.log(count1 +"here");
          if(count1%2===0){
            $scope.c1 = "up";
            count1++;
        }
          else{
            $scope.closeThis1();
          }

        };
        $scope.clickC2 = function(){
          count1 = 0;
          // console.log(count2);
          if(count2%2===0){
            $scope.c2 = "up";
            count2++;
            // console.log(count2);
        }
          else{
            $scope.closeThis2();
          }

        };


      // $scope.search = $scope.yourchoice;

    });

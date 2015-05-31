'use strict';

angular.module('techRadarApp')
  .controller('MainCtrl', ['$scope', 'radarService', function ($scope, radarService) {
    $scope.radarData = radarService.radar.data;

    $scope.setActive = function(status) {
      _.each($scope.radarData, function(status) { status.active = false; });
      status.active = true;
    };

    $scope.setActive($scope.radarData[0]);
    
    $scope.$on('tech-selected', function(e, status) {
      $scope.activeTechnology = status;
      $scope.setActive($scope.activeStatus);
      $('.nav-tabs li a[data-label="' + $scope.activeStatus.label + '"]').tab('show');
    });
    
    $scope.selectTech = function(category, tech) {
      var setInactive = function(elem) {
        elem.clicked = false;
        elem.active = false;
      };
      
      var allCategories = _.flatten(_.pluck($scope.radarData, 'categories'));
      allCategories.forEach(setInactive);
      var allTechnologies = _.flatten(_.pluck(allCategories, 'technologies'));
      allTechnologies.forEach(setInactive);
      
      category.active = true;
      tech.clicked = true;
      tech.active = true;
      $scope.activeTechnology = tech;
      updateActive($scope.radarData);
    };
    
    var updateActive = function(data){
      if(!data) {
        return;
      }
      var activeCategory = _.findWhere(_.flatten(_.pluck(data, 'categories')), {active: true});
      var activeStatus = _.find(data, function(status){
        return _.indexOf(status.categories, $scope.activeCategory) >= 0;
      });
      
      if(activeCategory) {
        $scope.activeCategory = activeCategory;
      }
      
      if(activeStatus) {
        $scope.activeStatus = activeStatus;
      }
    };
    
    $scope.$watch('radarData', updateActive, true);

  }]);

'use strict';

angular.module('techRadarApp')
  .controller('MainCtrl', ['$scope', '$anchorScroll', '$location', '$timeout', 'radarService', function ($scope, $anchorScroll, $location, $timeout, radarService) {
    
    $scope.setActive = function(status) {
      _.each($scope.radarData, function(status) { status.active = false; });
      status.active = true;
    };
    
    $scope.$on('tech-selected', function(e, tech) {
      $scope.activeTechnology = tech;
      $scope.technologiesOfSameType = radar.getTechnologiesOfSameType(tech);
      $scope.setActive($scope.activeStatus);
      $('.nav-tabs li a[data-label="' + $scope.activeStatus.label + '"]').tab('show');
    });
    
    var radar;
    var initRadar = function(radarParam) {
      radar = radarParam;
      $scope.title = radar.title;
      $scope.radarData = radar.data;
      $scope.technologiesByType = _.groupBy(radar.getTechnologies(), 'type');
      $scope.setActive($scope.radarData[0]);
    };
    initRadar(radarService.getRadar());
    $scope.rendered = true;
    
    $scope.selectedRadar = radarService.selectedRadarTitle;
    $scope.radarDescriptions = radarService.radarDescriptions;

    
    $scope.selectTech = function(tech) {
      var setInactive = function(elem) {
        elem.clicked = false;
        elem.active = false;
        elem.highlight = false;
      };
      
      radar.getCategories().forEach(setInactive);
      radar.getTechnologies().forEach(setInactive);
      
      var category = _.find(radar.getCategories(), function(category) {
        return _.indexOf(category.technologies, tech) >= 0;
      });
      
      category.active = true;
      tech.clicked = true;
      tech.active = true;
      $scope.activeTechnology = tech;
      
      radar.getTechnologiesOfSameType(tech).forEach(function(technology) {
        technology.highlight = true;
      });
      
      updateActive($scope.radarData);
      
      $scope.technologiesOfSameType = radar.getTechnologiesOfSameType(tech);
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
    
    $scope.$watch('selectedRadar', function(){
      radar = radarService.selectRadar($scope.selectedRadar);
      initRadar(radar);
      $scope.rendered = false;
      $timeout(function() {
        $scope.rendered = true;
      });
    });
    
    $scope.scrollTo = function(id) {
      if(!id) {
        $('html').scrollTop(0);
        return;
      }
      $anchorScroll(id);
    };

  }]);

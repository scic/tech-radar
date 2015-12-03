'use strict';

angular.module('techRadarApp').factory('radarData', ["javascriptData", "javaData", function(javascriptData, javaData) {
  
  var transform = function(radarDescriptor) {
    // Create structure with the technologies
    var structure = radarDescriptor.statusDefinitions.map(function(statusItem) {
      statusItem.categories = radarDescriptor.categories.map(function(category) {
        return {
          label: category,
          technologies: []
        };
      });
      return statusItem;
    });
    
    // Fill technologies into structure
    _.each(radarDescriptor.data, function(entries, type) {
      var category = radarDescriptor.typeToCategory[type];
      _.each(entries, function(data, tech) {
        var ring = _.findWhere(structure, {label: data.category});
        var slice = _.findWhere(ring.categories, {label: category});
        slice.technologies.push({label: tech, type: type, text: data.text});
      });
    });
    
    return {
      title: radarDescriptor.title,
      data: structure
    }
  };
  
  return _.map(arguments, function(param) {
    return transform(param);
  });
}]);
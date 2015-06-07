'use strict';

angular.module('techRadarApp').factory('radarService', ['radarData', function(radarData) {

    function Radar(data) {
      this.data = data ? data : [
        {
          label: 'Adopt',
          text: 'Switch to these',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: 'Trial',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: 'Assess',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: 'Hold',
          text: 'Don\'t start with it now. Try to replace.',
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        }
      ];
      
      data.forEach(function(status) {
        var technologies = _.flatten(_.pluck(_.flatten(status.categories), 'technologies'));
        technologies.forEach(function(technology) {
          technology.status = status.label;
        });
      });
    }

    Radar.prototype.getTechnologies = function() {
      var categories = _.pluck(this.data, 'categories');
      return _.flatten(_.pluck(_.flatten(categories), 'technologies'));
    };

    var radar = new Radar(radarData);

    function getCategories() {
      var categories = _.pluck(radar.data, 'categories');
      return _.pluck(categories, 'label');
    }

    function getStatuses() {
      return _.pluck(radar.data, 'label');
    }

    return { radar: radar, categories: getCategories(), statuses: getStatuses() };
  }]);
'use strict';

angular.module('techRadarApp').factory('radarService', ['radarData', function(radarData) {

    function Radar(title, data) {
      this.title = title || 'Technology Radar';
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
      
      this.allCategories = _.flatten(_.pluck(data, 'categories'));
      this.allTechnologies = _.flatten(_.pluck(this.allCategories, 'technologies'));
    }

    Radar.prototype.getTechnologies = function() {
      return this.allTechnologies;
    };

    Radar.prototype.getCategories = function() {
      return this.allCategories;
    };

    Radar.prototype.getTechnologiesOfSameType = function(tech) {
      return _.where(this.allTechnologies, {type: tech.type});
    };
    
    var radar = new Radar(radarData.title, radarData.data);

    function getCategories() {
      var categories = _.pluck(radar.data, 'categories');
      return _.pluck(categories, 'label');
    }

    function getStatuses() {
      return _.pluck(radar.data, 'label');
    }

    return { radar: radar, categories: getCategories(), statuses: getStatuses() };
  }]);
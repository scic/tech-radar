'use strict';

angular.module('techRadarApp').constant('javaData', {
  // The title of your radar
  title: 'Java Technology Radar',
  
  // List of your categories
  categories: ['Tools', 'Techniques', 'Platforms & Languages', 'Frameworks & Libraries'],
  
  // The status names with description
  statusDefinitions: [
  {
    label: 'Adopt',
    text: 'These items are proven and should be adopted for their intended usage. These items are recommended over their siblings in the same area.'
  },
  {
    label: 'Trial or Alternative',
    text: 'To be used in smallscale projects. Or technolgies that have a better alternative for most use cases.'
  },
  {
    label: 'Assess',
    text: 'Try these out.',
  },
  {
    label: 'Hold',
    text: 'Don\'t start with it now. Try to actively replace.',
  }
  ],
  
  // Map technology types to radar categories
  typeToCategory: {
    'Java Version': 'Platforms & Languages',
    'Application Server': 'Platforms & Languages',
    'Util Library': 'Frameworks & Libraries'
  },
  
  // Your technologies grouped by type
  data: {
    'Java Version': {
      'Java 8': {category: 'Adopt', text: 'It\'s got lamdas.'},
      'Java 6': {category: 'Hold', text: 'So old.'}
    },
    'Util Library': {
      'Lombok': {category: 'Adopt', text: 'Cool.'},
      'Guava': {category: 'Trial or Alternative', text: 'Hmm. Still needed with java 8?'}
    },
    'Application Server': {
      'Wildfly 8': {category: 'Adopt', text: 'Simply the best.'},
      'Glassfish': {category: 'Hold', text: 'Deprecated'}
    }
  }
});
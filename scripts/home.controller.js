angular
  .module('lynndupree06')
  .controller('HomeController', HomeController);

function HomeController() {
  const vm = this;

  vm.types = [];
  vm.skills = [
    {'skill': 'C++', 'type': 'language', 'value': 1},
    {'skill': 'C', 'type': 'language', 'value': 1},
    {'skill': 'Java', 'type': 'language', 'value': 1},
    {'skill': 'C#', 'type': 'language', 'value': 1},
    {'skill': 'PHP', 'type': 'language', 'value': 1},
    {'skill': 'Ruby', 'type': 'language', 'value': 1},
    {'skill': 'HTML', 'type': 'web', 'value': 1},
    {'skill': 'CSS', 'type': 'web', 'value': 1},
    {'skill': 'Javascript', 'type': 'web', 'value': 1},
    {'skill': 'JQuery', 'type': 'web', 'value': 1},
    {'skill': 'Ajax', 'type': 'web', 'value': 1},
    {'skill': 'ASP.NET MVC', 'type': 'web', 'value': 1},
    {'skill': 'Spring MVC', 'type': 'web', 'value': 1},
    {'skill': 'Spring Boot', 'type': 'web', 'value': 1},
    {'skill': 'Hibernate', 'type': 'framework', 'value': 1},
    {'skill': 'iBATIS', 'type': 'framework', 'value': 1},
    {'skill': 'Google Maps API', 'type': 'framework', 'value': 1},
    {'skill': 'Sencha', 'type': 'framework', 'value': 1},
    {'skill': 'Backbone', 'type': 'framework', 'value': 1},
    {'skill': 'AngularJS', 'type': 'framework', 'value': 1},
    {'skill': 'Rails', 'type': 'framework', 'value': 1},
    {'skill': 'Windows', 'type': 'system', 'value': 1},
    {'skill': 'MAC', 'type': 'system', 'value': 1},
    {'skill': 'Linux', 'type': 'system', 'value': 1},
    {'skill': 'Unix', 'type': 'system', 'value': 1},
    {'skill': 'Android', 'type': 'system', 'value': 1},
    {'skill': 'Eclipse', 'type': 'tool', 'value': 1},
    {'skill': 'IntelliJ', 'type': 'tool', 'value': 1},
    {'skill': 'Xamarin Studio', 'type': 'tool', 'value': 1},
    {'skill': 'Visual Studio', 'type': 'tool', 'value': 1}
  ];

  vm.filter = (type) => {
    if(_.contains(vm.types, type)) {
      vm.types = _.without(vm.types, type);
    } else {
      vm.types.push(type);
    }
  };

  vm.isSelected = (type) => {
    return vm.types.indexOf(type) > -1;
  }
}

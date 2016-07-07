angular
  .module('lynndupree06')
  .controller('HomeController', HomeController);

function HomeController() {
  const vm = this;

  vm.types = [];
  vm.skills = [
    {'skill': 'C++', 'type': 'language', 'value': 60},
    {'skill': 'C', 'type': 'language', 'value': 40},
    {'skill': 'Java', 'type': 'language', 'value': 85},
    {'skill': 'C#', 'type': 'language', 'value': 60},
    {'skill': 'PHP', 'type': 'language', 'value': 60},
    {'skill': 'Ruby', 'type': 'language', 'value': 50},
    {'skill': 'HTML', 'type': 'web', 'value': 100},
    {'skill': 'CSS', 'type': 'web', 'value': 100},
    {'skill': 'Javascript', 'type': 'web', 'value': 80},
    {'skill': 'JQuery', 'type': 'web', 'value': 70},
    {'skill': 'Ajax', 'type': 'web', 'value': 60},
    {'skill': 'ASP.NET MVC', 'type': 'web', 'value': 50},
    {'skill': 'Spring MVC', 'type': 'web', 'value': 60},
    {'skill': 'Spring Boot', 'type': 'web', 'value': 60},
    {'skill': 'Hibernate', 'type': 'framework', 'value': 60},
    {'skill': 'iBATIS', 'type': 'framework', 'value': 60},
    {'skill': 'Google Maps API', 'type': 'framework', 'value': 50},
    {'skill': 'Sencha', 'type': 'framework', 'value': 50},
    {'skill': 'Backbone', 'type': 'framework', 'value': 50},
    {'skill': 'AngularJS', 'type': 'framework', 'value': 60},
    {'skill': 'Rails', 'type': 'framework', 'value': 70},
    {'skill': 'Windows', 'type': 'system', 'value': 100},
    {'skill': 'MAC', 'type': 'system', 'value': 100},
    {'skill': 'Linux', 'type': 'system', 'value': 80},
    {'skill': 'Unix', 'type': 'system', 'value': 80},
    {'skill': 'Android', 'type': 'system', 'value': 80},
    {'skill': 'Eclipse', 'type': 'tool', 'value': 100},
    {'skill': 'IntelliJ', 'type': 'tool', 'value': 100},
    {'skill': 'Xamarin', 'type': 'tool', 'value': 90},
    {'skill': 'Visual Studio', 'type': 'tool', 'value': 80}
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

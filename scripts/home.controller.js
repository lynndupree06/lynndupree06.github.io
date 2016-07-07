angular
  .module('lynndupree06')
  .controller('HomeController', HomeController);

HomeController.$inject = [
  '$http'
];

function HomeController($http) {
  const vm = this;

  vm.types = [];
  $http.get('content/skills.json').success((response) => vm.skills = response);
  $http.get('content/experiences.json').success((response) => vm.experiences = response);

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

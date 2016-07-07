angular
  .module('lynndupree06')
  .controller('HomeController', HomeController);

HomeController.$inject = [
  '$http'
];

function HomeController($http) {
  const vm = this;

  vm.types = [];
  vm.skills = $http.get('content/skills.json').success((response) => response);
  vm.experiences = $http.get('content/experiences.json').success((response) => response);

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

angular
  .module('lynndupree06')
  .controller('HomeController', HomeController);

HomeController.$inject = [
  '$http'
];

function HomeController($http) {
  const vm = this;

  vm.selectedExperience = null;
  vm.types = [];
  vm.yearList = [
    2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007
  ];

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
  };

  vm.getDate = (date) => {
    return moment(new Date(date)).format('MMM');
  };

  vm.getPosition = (date) => {
    const yearIntervalHeight = 70;
    const currentDate = moment(new Date(date));
    const year = currentDate.year();
    const yearIdx = vm.yearList.indexOf(year);
    const spacingInterval = yearIntervalHeight / 12;
    const bottomPostion = yearIdx * yearIntervalHeight;
    return bottomPostion - (spacingInterval * currentDate.month());
  };

  vm.toggleSelectedExperience = (experience) => {
    if(vm.selectedExperience === experience) {
      vm.selectedExperience = null;
    } else {
      vm.selectedExperience = experience;
    }
  };

  vm.shouldShowExperience = (experience) => vm.selectedExperience === experience || vm.selectedExperience === null;
  vm.shouldShowContent = (experience) => vm.selectedExperience === experience;
}

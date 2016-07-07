angular
  .module('lynndupree06')
  .filter('searchFilter', SearchFilter);

function SearchFilter() {
  return (input, query) => {
      input = input || '';

      if (query.length > 0) {
          input = _.filter(input, (skill) => {
              return _.contains(query, skill.type);
          });
      }

      return input;
  };
}

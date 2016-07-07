angular
  .module('lynndupree06')
  .directive('progressChart', progressChart);

function progressChart() {
  function createGradient (svg, id, color1, color2) {
      var defs = svg.append("svg:defs")

      var red_gradient = defs.append("svg:linearGradient")
              .attr("id", id)
              .attr("x1", "0%")
              .attr("y1", "0%")
              .attr("x2", "50%")
              .attr("y2", "100%")
              .attr("spreadMethod", "pad");

      red_gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", color1)
              .attr("stop-opacity", 1);

      red_gradient.append("svg:stop")
              .attr("offset", "100%")
              .attr("stop-color", color2)
              .attr("stop-opacity", 1);
  };

  function drawChart (scope, element) {
    let percent = scope.progress;
    let ratio = percent/100;
    let w = 100, h = 100;
    let outerRadius = (w/2)-10;
    let innerRadius = 50;
    let color = ['#EA2786','#C1005F','#FFA581'];

    let pie = d3.layout.pie()
            .value(function(d){return d})
            .sort(null);

    element[0].innerHTML = "";
    let svg = d3.select(element[0])
            .append("svg")
            .attr({
                width:w,
                height:h,
                class:'shadow'
            })
            .append('g')
            .attr({
                transform:'translate('+w/2+','+h/2+')'
            });

    createGradient(svg,'gradient',color[0],color[1]);

    let arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);

    let arcLine = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0);


    let pathBackground = svg.append('path')
            .attr({
                d:arc
            }).style({
                fill:color[2]
            });


    let pathChart = svg.append('path')
            .datum({endAngle:0})
            .attr({
                d:arcLine
            }).style({
                fill:'url(#gradient)'
            });

    let middleCount = svg.append('text')
            .text(function(d){return d;}).attr({
                class:'middleText',
                'text-anchor':'middle',
                dy:5,
                dx:-10
            }).style({
                fill:color[1],
                'font-size':'20px'

            });

            svg.append('text')
                  .text('%')
                  .attr({
                      class:'percent',
                      'text-anchor':'middle',
                      dx:15,
                      dy:5

                  })
                  .style({
                      fill:color[1],
                      'font-size':'20px'

                  });

    const arcTween = (transition, newAngle) => {
        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            var interpolateCount = d3.interpolate(0, percent);
            return function (t) {
                d.endAngle = interpolate(t);
                middleCount.text(Math.floor(interpolateCount(t)));
                return arcLine(d);
            };
        });
    };

    const animate = () => {
        pathChart.transition()
                .duration(750)
                .ease('cubic')
                .call(arcTween,((2*Math.PI))*ratio);
    };

    setTimeout(animate,0);
  }

  return {
    restrict: 'E',
    scope: {
      'skill': '=',
      'progress': '='
    },
    link: function (scope, element, attrs) {
      scope.$watch('skill', function(newData, oldData) {
          if(newData) {
              drawChart({skill: newData, progress: scope.progress}, element);
          }
      }, true);

      scope.$watch('progress', function(newData, oldData) {
          if(newData){
              drawChart({progress: newData, skill: scope.skill}, element);
          }
      }, true);

      drawChart(scope, element);
    }
  };
}

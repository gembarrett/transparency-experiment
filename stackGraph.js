function makeStackGraph(sets) {

  // set width and height
  var w = 500;
  var h = 400;

  makeMatrix(sets);

  // initialise stack layout function
  var stack = d3.layout.stack();
  // call on dataset to get baseline value (sum of y values)
  stack(matrix);

  // scales need to be set up
  var xScale = d3.scale.ordinal()
              .domain(d3.range(matrix[0].length))
              .rangeRoundBands([0, h], 0.05);

  var yScale = d3.scale.linear()
                .domain([0,
                d3.max(matrix, function(d) {
                  return d3.max(d, function(d) {
                    return d.y0 + d.y;
                  });
                })
              ])
              .range([0, h]);

  // set colours for scale
  var colors = d3.scale.ordinal().range(['darkgrey', 'deepskyblue', 'royalblue']);

  // create svg to attach to
  var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

  // group rows of data
  var groups = svg.selectAll('g')
                .data(matrix)
                .enter()
                .append('g')
                .style('fill', function(d, i) {
                  return colors(i);
                });

  var rects = groups.selectAll('rect')
              .data(function(d) { return d; })
              .enter()
              .append('rect')
              .attr('y', function(d, i) {
                return xScale(i);
              })
              .attr('x', function(d) {
                return yScale(d.y0);
              })
              .attr('width', function(d) {
                return yScale(d.y);
              })
              .attr('height', xScale.rangeBand());

}
var apple,
    facebook,
    twitter,
    timeframes;
var appleQ = [];
var appleA = [];
var twitterQ = [];
var twitterA = [];
var facebookQ = [];
var facebookA = [];
var percentagesOn = false; // when true, replace all compliance totals with percentage data
var e15 = [];
var l14 = [];
var e14 = [];
var l13 = [];
var dataset = [];

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  timeframes = data["timeframes"];
  timeframes.reverse();
  apple = data["companies"][0]["apple"][0];
  facebook = data["companies"][0]["facebook"][0];
  twitter = data["companies"][0]["twitter"][0];
  getQuestions();
  getAnswers();
  makeDataset();
  // visualiseIt();
});


function getQuestions() {
  for (var i=0; i<timeframes.length; i++) {
    appleQ[i] = apple["data"][0]["questions"][i];
    twitterQ[i] = twitter["data"][0]["questions"][i];
    facebookQ[i] = facebook["data"][0]["questions"][i];
  }
}

function getAnswers() {
  var type = "numbers";
  if (percentagesOn) {
    type = "percentages";
  }
  for (var i=0; i<timeframes.length; i++) {
    appleA[i] = apple["data"][0]["answers"][0][type][i];
    twitterA[i] = twitter["data"][0]["answers"][0][type][i];
    facebookA[i] = facebook["data"][0]["answers"][0][type][i];
  }
  appleA.reverse();
  twitterA.reverse();
  facebookA.reverse();
}

function makeDataset() {

  // set width and height
  var w = 500;
  var h = 300;

  dataset = [
    [
      { x: 0, y: appleQ[0] },
      { x: 1, y: appleQ[1] },
      { x: 2, y: appleQ[2] },
      { x: 3, y: appleQ[3] }
    ],
    [
      { x: 0, y: twitterQ[0] },
      { x: 1, y: twitterQ[1] },
      { x: 2, y: twitterQ[2] },
      { x: 3, y: twitterQ[3] }
    ],
    [
      { x: 0, y: facebookQ[0] },
      { x: 1, y: facebookQ[1] },
      { x: 2, y: facebookQ[2] },
      { x: 3, y: facebookQ[3] }
    ]
  ];

  // initialise stack layout function
  var stack = d3.layout.stack();
  // call on dataset to get baseline value (sum of y values)
  stack(dataset);
  console.log(dataset);

  // scales need to be set up
  var xScale = d3.scale.ordinal()
              .domain(d3.range(dataset[0].length))
              .rangeRoundBands([0, w], 0.05);

  var yScale = d3.scale.linear()
                .domain([0,
                d3.max(dataset, function(d) {
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
                .data(dataset)
                .enter()
                .append('g')
                .style('fill', function(d, i) {
                  return colors(i);
                });

  var rects = groups.selectAll('rect')
              .data(function(d) { return d; })
              .enter()
              .append('rect')
              .attr('x', function(d, i) {
                return xScale(i);
              })
              .attr('y', function(d) {
                return yScale(d.y0);
              })
              .attr('height', function(d) {
                return yScale(d.y);
              })
              .attr('width', xScale.rangeBand());
}

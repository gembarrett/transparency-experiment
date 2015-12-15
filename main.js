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
var testDataset = [];

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  timeframes = data["timeframes"];
  timeframes.reverse();
  apple = data["companies"][0]["apple"][0];
  facebook = data["companies"][0]["facebook"][0];
  twitter = data["companies"][0]["twitter"][0];
  getQuestions();
  getAnswers();
  // makeHorizontalChart();
  makeDataset(appleQ, twitterQ, facebookQ);
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


function makeDataset(set1, set2, set3) {

  // set width and height
  var w = 500;
  var h = 400;

  var tempArray1 = [];
  var tempArray2 = [];
  var tempArray3 = [];

  for (var i=0; i< set1.length; i++) {
    tempArray1.push({
      x: [i],
      y: set1[i]
    });
  }
  for (var i=0; i< set2.length; i++) {
    tempArray2.push({
      x: [i],
      y: set2[i]
    });
  }
  for (var i=0; i< set3.length; i++) {
    tempArray3.push({
      x: [i],
      y: set3[i]
    });
  }

  var dataset2 = [[], [], []];
  
  // dataset2 = dataset2.push(tempArray1, tempArray2, tempArray3);
  console.log(dataset2);

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
  console.log(dataset);

  // initialise stack layout function
  var stack = d3.layout.stack();
  // call on dataset to get baseline value (sum of y values)
  stack(dataset);


  // scales need to be set up
  var xScale = d3.scale.ordinal()
              .domain(d3.range(dataset[0].length))
              .rangeRoundBands([0, h], 0.05);

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

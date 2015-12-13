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

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  timeframes = data["timeframes"];
  apple = data["companies"][0]["apple"][0];
  facebook = data["companies"][0]["facebook"][0];
  twitter = data["companies"][0]["twitter"][0];
  getQuestions();
  getAnswers();
  visualiseIt(appleQ);
  visualiseIt(facebookQ);
  visualiseIt(twitterQ);
});

function getQuestions() {
  for (var i=0; i<timeframes.length; i++) {
    appleQ[i] = apple["data"][0]["questions"][i];
    twitterQ[i] = twitter["data"][0]["questions"][i];
    facebookQ[i] = facebook["data"][0]["questions"][i];
  }
  appleQ.reverse();
  twitterQ.reverse();
  facebookQ.reverse();
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

function visualiseIt(thisData) {
  var w = 400, // size of chart
      h = 200,
      margin = 20, // room for labels
      y = d3.scale // converts data values to x and y on screen
          .linear()
          .domain([0, d3.max(thisData)])
          .range([0 + margin, h - margin]),
      x = d3.scale
          .linear()
          .domain([0, thisData.length])
          .range([0 + margin, w - margin]);

  var visualisation = d3.select("body")
                      .append("svg:svg")
                      .attr("width", w)
                      .attr("height", h);

  var g = visualisation.append("svg:g")
          .attr("transform", "translate(0,200)");

  var line = d3.svg.line()
              .x(function(d,i) { return x(i); })
              // -1 used to counter the y-axis default orientation
              .y(function(d) { return -1 * y(d); })

  // add path for line
  g.append("svg:path").attr("d", line(thisData));

  // add axes
  g.append("svg:line")
    .attr("x1", x(0))
    .attr("y1", -1 * y(0))
    .attr("x2", x(w))
    .attr("y2", -1 * y(0));
  g.append("svg:line")
    .attr("x1", x(0))
    .attr("y1", -1 * y(0))
    .attr("x2", x(0))
    .attr("y2", -1 * y(d3.max(thisData)));

  // axes labels
  g.selectAll(".xLabel")
    .data(x.ticks(thisData.length))
    .enter()
    .append("svg:text")
    .attr("class", "xLabel")
    .text(function(i) { return timeframes[i]; })
    .attr("x", function(d) { return x(d) })
    .attr("y", 0)
    .attr("text-anchor", "middle");


}

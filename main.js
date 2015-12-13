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
  timeframes.reverse();
  apple = data["companies"][0]["apple"][0];
  facebook = data["companies"][0]["facebook"][0];
  twitter = data["companies"][0]["twitter"][0];
  getQuestions();
  getAnswers();
  visualiseIt();
  // visualiseIt(facebookQ);
  // visualiseIt(twitterQ);
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

function visualiseIt() {
  
  var tempFull = appleQ.concat(twitterQ).concat(facebookQ);
  var fullWidth = window.innerWidth;

  var width = fullWidth - 100,
      barHeight = 20;

  var x = d3.scale.linear()
          .range([0, width]);

  var chart = d3.select(".chart")
              .attr("width", width);

  x.domain([0, d3.max(tempFull,function(d) { return d })]);

  chart.attr("height", barHeight * appleQ.length);

  var appleBar = chart.selectAll("g")
            .data(appleQ)
            .enter()
            .append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  appleBar.append("rect")
      .attr("width", function(d) { return x (d); })
      .attr("height", barHeight - 1)
      .style("fill", "lightblue");

  appleBar.append("text")
      .attr("x", function(d) { return x(d) - 50; })
      .attr("y", barHeight/2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });

  var twitterBar = chart.selectAll("g")
            .data(twitterQ)
            .enter()
            .append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  twitterBar.append("rect")
      .attr("width", function(d) { return x(d); })
      .attr("height", barHeight - 1)
      .style("fill", "lightgreen");

  twitterBar.append("text")
      .attr("x", function(d) { return x(d) - 10; })
      .attr("y", barHeight/2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });


}

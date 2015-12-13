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

function visualiseIt() {
  var appleSvg = d3.select("body")
            .append("svg")
            .attr("height", 120)
            .attr("width", 720);

  var appleCircles = appleSvg.selectAll("circle")
                .data(appleQ)
                .enter()
                .append("circle")
                .attr("cy", 60)
                .attr("cx", function(d,i) { return i * 100 + 30; })
                .attr("r", function(d) { return d/500; });

  var twitterSvg = d3.select("body")
            .append("svg")
            .attr("height", 120)
            .attr("width", 720);

  var twitterCircles = twitterSvg.selectAll("circle")
                .data(twitterQ)
                .enter()
                .append("circle")
                .attr("cy", 60)
                .attr("cx", function(d,i) { return i * 100 + 30; })
                .attr("r", function(d) { return d/500; });

  var facebookSvg = d3.select("body")
            .append("svg")
            .attr("height", 120)
            .attr("width", 720);

  var facebookCircles = facebookSvg.selectAll("circle")
                .data(facebookQ)
                .enter()
                .append("circle")
                .attr("cy", 60)
                .attr("cx", function(d,i) { return i * 100 + 30; })
                .attr("r", function(d) { return d/500; });
}

var apple;
var facebook;
var twitter;
var timeframes;
var e15q; // all request totals from early 2015
var e15a; // all compliance totals from early 2015
var l14q;
var l14a;
var e14q;
var e14a;
var l13q;
var l13a;
var percentagesOn = false; // when true, replace all compliance totals with percentage data

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  timeframes = data["timeframes"];
  apple = data["companies"][0]["apple"][0];
  facebook = data["companies"][0]["facebook"][0];
  twitter = data["companies"][0]["twitter"][0];
  getQuestions();
});

function getQuestions() {
  timeframeVars = ["e15q", "l14q", "e14q", "l13q"];
  companies = ["apple", "facebook", "twitter"];
  console.log(timeframeVars.length);
  // for (var i=0; i<timeframeVars.length)
}

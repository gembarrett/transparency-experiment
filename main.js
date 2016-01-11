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
var complianceButton = document.getElementById('compliances');
var requestButton = document.getElementById('requests');
var matrix = [];

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  timeframes = data["timeframes"];
  timeframes.reverse();
  apple = data["companies"][0]["apple"][0];
  facebook = data["companies"][0]["facebook"][0];
  twitter = data["companies"][0]["twitter"][0];
  getQuestions();
  getAnswers();
  var companies = [appleQ, twitterQ, facebookQ];
  makeStackGraph(companies);
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
  for (var i=0; i<timeframes.length; i++) {
    appleA[i] = apple["data"][0]["answers"][0][type][i];
    twitterA[i] = twitter["data"][0]["answers"][0][type][i];
    facebookA[i] = facebook["data"][0]["answers"][0][type][i];
  }
}

function makeMatrix(dataSet) {
  // empty matrix first
  matrix = [];
  for (var i=0; i<dataSet.length; i++) { // number of array objects (companies)
    matrix.push([]);
  }
  for (var i=0; i<dataSet.length; i++) { // number of arrays (companies)
     for (var j=0; j<timeframes.length; j++) { // number of objects per array (timeframes)
        matrix[i][j] = {
          x: j,
          y: dataSet[i][j]
        };
     }
  }
}


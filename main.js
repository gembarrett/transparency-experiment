var apple;
var facebook;
var twitter;
var services;

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  console.log(data["apple"]["requests"]["early-2015"]);
});


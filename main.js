var apple;
var facebook;
var twitter;
var services;

d3.json("https://raw.githubusercontent.com/gembarrett/transparency-experiment/master/sample.json", function(data) {
  console.log(data["apple"][0]["data"][0]["answers"][0]["numbers"][0]);
});

complianceButton.addEventListener("click", function(){
  d3.select("svg").remove();
  getAnswers();
  companies = [];
  companies = [appleA, twitterA, facebookA];
  makeStackGraph(companies);
});

requestButton.addEventListener("click", function(){
  d3.select("svg").remove();
  companies = [];
  companies = [appleQ, twitterQ, facebookQ];
  makeStackGraph(companies);
});
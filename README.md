# Experimenting with D3 and transparency report data
- Apple data taken from http://www.apple.com/privacy/transparency-reports/
- Twitter data taken from https://transparency.twitter.com/information-requests/2015/jan-jun
- Facebook data taken from https://govtrequests.facebook.com/country/United%20States/2015-H1/

## Defining the data
- Total number of requests received is reflective of total number of requests for data about or from the account of a user of Apple, Twitter or Facebook
- Data related to device requests are not shown as that would only apply to Apple
- Data shown only goes back to late 2013 because in early 2013 Apple grouped together requests in bands of 1000, making the data too vague to be of use here
- Google transparency report data was not used in this experiment because as of 12/12/15 there was no report released for early 2015
- Number of times company complied with requests is shown in number and percentage format because, although Apple provide actual number, both Twitter and Facebook only provide percentage. Number of decimal points for each company therefore varies:
  - Apple: whole numbers only
  - Twitter: whole percentages provided, calculated number to 1 or 2 DP
  - Facebook: percentages with 2 DP provided, calculated number to 4 DP
- Percentages provided, particularly in the Twitter report, may have been rounded up or down for readability
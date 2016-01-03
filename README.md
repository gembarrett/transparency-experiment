# Experimenting with D3 and transparency report data
- Apple data taken from http://www.apple.com/privacy/transparency-reports/
- Twitter data taken from https://transparency.twitter.com/information-requests/2015/jan-jun
- Facebook data taken from https://govtrequests.facebook.com/country/United%20States/2015-H1/

## Services affected
- iTunes, iCloud (Apple)
- Twitter, Periscope, Vine (Twitter)
- Facebook, Messenger, Whatsapp, Instagram (Facebook)

## Defining the data
- Total number of requests received is reflective of
  - total number of requests for data about or content from the account of a user of Apple, Twitter or Facebook-owned services
  - requests are all from US government (could expand this project into other countries in future)
  - National Security requests (such as National Security Letters and FISA court orders) are not included as they are usually reported separately in bands of 250 or 1000 and are therefore too vague to be of use here
  - most requests are usually part of search warrants, subpoenas and court orders
- Data related to device requests are not shown
  - that would only apply to Apple
  - impossible to know how many (other than "majority") are related to lost/stolen devices
  - only shared info is contact and when Apple services were used last, most info shared through account requests
- Data shown only goes back to late 2013 because in early 2013 Apple grouped together requests in bands of 1000, making the data too vague to be of use here
- Google transparency report data was not used in this experiment because as of 12/12/15 there was no report released for early 2015
- Number of times company complied with requests is shown in number and percentage format because, although Apple provide actual number, both Twitter and Facebook only provide percentage. Number of decimal points for each company therefore varies:
  - Apple: whole numbers provided, percentages calculated to 4 DP
  - Twitter: whole percentages provided, calculated number to 1 or 2 DP
  - Facebook: percentages with 2 DP provided, calculated number to 4 DP
- Percentages provided, particularly in the Twitter report, may have been rounded up or down for readability
- Data missing: how many accounts have ever been targetted?

## What information could be shared with the US government?
- name, physical address, other contact information, IP addresses
- real-time communications (wiretapping your online comms, including VOIP)
- photos, emails, device backups, documents, calendars, contacts and bookmarks

## How many accounts in total?
(monthly active users where possible, otherwise total accounts)
- Facebook: 1.55b + 700m + 400m = 2.65b
- Apple: 800m + 500m = 1.3b
- Twitter: 320m + 10m + 200m = 530m

### Total userbase references
- Vine: 200 million http://venturebeat.com/2015/08/27/twitter-launches-music-on-vine-to-help-you-discover-and-create-music/
- Twitter: 320 million https://about.twitter.com/company
- Periscope: 10 million http://recode.net/2015/08/12/periscope-has-10-million-users-kinda/
- Facebook: 1.55 billion http://expandedramblings.com/index.php/by-the-numbers-17-amazing-facebook-stats/
- Messenger: 800 million http://venturebeat.com/2015/04/22/mark-zuckerberg-as-more-people-make-voip-calls-with-messenger-and-whatsapp-call-quality-will-improve/
- Whatsapp: 700 million http://blogs.wsj.com/digits/2015/01/06/whatsapp-hits-700-million-monthly-users/
- Instagram: 400 million http://blog.instagram.com/post/129662501137/150922-400million
- iTunes: 800 million http://www.macrumors.com/2015/06/08/apple-music-100m-subscribers-goal/
- iCloud: 500 million http://mashable.com/2015/05/21/apple-icloud-down-some-users/#kNyOu8RyqSqr
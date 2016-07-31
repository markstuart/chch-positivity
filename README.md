# Christchurch Positivity
This repo content is Node/Express application, with serverside scripting to talk to the IBM Watson Alchemy Sentiment API.

The Express application was initially built to represent the positivity data for different datasets over time, but is incomplete, merely showing some dummy datapoints on a graph.

The main work is around pulling datasources from disparate locations and performing some transformations over them to prepare them for the Sentiment API.

`services/sentiment.js` is a proof of concept bulk text wrapper over the Watson Sentiment API, which only accepts single pieces of text for analysis.
Our service takes an array of text items, and sends each one to the Sentiment API. Once all the requests have completed, a percentage is calculated for each of the three sentiment types, positive, neutral, negative.

`news-releases.js` is an example usage of this service, parsing a json formatted rss feed, and deriving sentiment percentages from the descriptions in the rss feed data.

NOTE: The Watson API's require an API key, so you would need one of those to run the scripts.
var htmlToText = require('html-to-text')
var sentimentService = require('./services/sentiment')

var items = require('/Users/mstuart/Downloads/news-releases').rss.channel.item
var descriptions = items.map(function (item) {
  return htmlToText.fromString(item.description, {
    ignoreHref: true,
    ignoreImage: true
  }).replace(/\n/g, ' ')
})

sentimentService.bulkSentiments(descriptions, function (err, result) {
  console.log(result)
})

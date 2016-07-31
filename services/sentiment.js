var watson = require('watson-developer-cloud');
var async = require('async')

function sentiment (text, cb) {
  var alchemy_language = watson.alchemy_language({
    api_key: process.env.WATSON_KEY
  });

  var params = { text }

  alchemy_language.sentiment(params, function (err, response) {
    console.log(err || response.docSentiment)
    if (err) return cb(err)

    cb(null, response.docSentiment)
  });
}

function getPercentages (sentiments) {
  var posCount = 0
  var negCount = 0
  var neuCount = 0

  sentiments.forEach(function (s) {
    if (s.type === 'positive') return posCount += 1
    if (s.type === 'negative') return negCount += 1
    if (s.type === 'neutral') return neuCount += 1
  })

  return {
    percentage: {
      positive: (posCount / sentiments.length) * 100,
      neutral: (neuCount / sentiments.length) * 100,
      negative: (negCount / sentiments.length) * 100
    }
  }
}

function bulkSentiments (arrayOfText, cb) {
  async.mapLimit(arrayOfText, 20, sentiment, function (err, sentiments) {
    if (err) return cb(err)

    cb(null, getPercentages(sentiments))
  })
}

module.exports = {
  sentiment,
  bulkSentiments
}

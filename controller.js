var express = require('express')
var router = express.Router()
var OAuth = require('oauth')

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'IZUnumcInZQx7Q4lMLGOz7GdG',
  'GMcEyhJgCuRTl7CIDeQPoctmNvfrZKCgzi9LMr0VCrXCmojIWf',
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  getSearch: function (req, res, next) {
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}&src=typd`,
      '836417740206301184-Pa1szvCdLKv53UPy92gtinUTZ0ic166', // test user token
      'Pddzps9rrfqvzLexLyqSwlgIbHduKbzVUfQTQFyquubsZ', // test user secret
      function (e, data, respond) {
        if (e) console.error(e)
        res.json(data)
      })
  },
  getTimeline: function (req, res, next) {
    oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=isyanasarasvati`,
      '836417740206301184-Pa1szvCdLKv53UPy92gtinUTZ0ic166', // test user token
      'Pddzps9rrfqvzLexLyqSwlgIbHduKbzVUfQTQFyquubsZ', // test user secret
      function (e, data, respond) {
        if (e) console.error(e)
        res.json(data)
      })
  }
}

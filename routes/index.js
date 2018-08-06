var express = require('express');
var router = express.Router();
var request = require('request');

var coins = new Promise((resolve, reject) => {
  request('https://min-api.cryptocompare.com/data/all/coinlist', (err, res, body) => {
    if(err) {
      reject('Get coins error', err);
    }

    body = JSON.parse(body);
    console.log('Coin List: ' + body.Response);
    resolve(body);
  });
});

//make into promise
// var bitcoin = request('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=100', (err, res, body) => {
//   if(err) {
//     throw new Error(err);
//   }

//   body = JSON.parse(body);
//   // console.log(res.headers)
//   return body.data;
// });

/* GET home page. */
router.get('/', (req, res, next) => {
  coins.then((list) => {
    // console.log(list)
    res.render('index', 
      {title: 'The Crypto Price Project',
        baseImageUrl: "https://www.cryptocompare.com",
        coins: list.Data
      }
    )
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;

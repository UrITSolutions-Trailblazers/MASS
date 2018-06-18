var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var dbUrl = 'mongodb://localhost:27017/';

exports.addQues =
    function(ques) {
  MongoClient.connect(dbUrl, (err, db) => {
    if (err) {
      response.status(500).json({message: 'connection to db failed'});
    }
    var dbo = db.db('mass');
    dbo.collection('ques').insertOne(ques, (err, res) => {
      if (err) {
        response.status(500).json({message: 'data was not inserted in DB'});
      }
      console.log('Data inserted');
    });
  })
}

    exports.getQues = function() {
  var data = [];
  MongoClient.connect(dbUrl, (err, db) => {
    if (err) {
      response.status(500).json({message: 'connection to db failed'});
    }
    var dbo = db.db('mass');
    dbo.collection('ques').find({}).toArray((err, res) => {
      if (err) {
        throw err;
      }
      res.forEach(ele => {
        console.log(ele.question);
      });
      
      console.log('Data fetched');
    });
  });
  
  data.forEach(ele => {
    console.log(ele.question);
  });
  return data;
}
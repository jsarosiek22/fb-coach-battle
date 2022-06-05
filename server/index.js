const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');
//const MongoClient = require("mongodb").MongoClient;
const axios = require('axios');
const db = mongoose.connection;
const {
  MongoClient,
  ServerApiVersion,
  GridFSBucketReadStream
} = require('mongodb');
const {
  createPath
} = require('react-router-dom');
const {
  response
} = require('express');
require('./ROenv');
//const uri = `mongodb+srv://${global.username}:${global.password}@${global.clust}/betmark?retryWrites=true&w=majority`;

const app = express();

async function dbconnect(colname) {
  const uri = `mongodb+srv://${global.username}:${global.password}@${global.clust}/betmark?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const responseObj = await getData(client, colname);
    return responseObj;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

}

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(pino);


app.get('/api/coachselect', (req, res) => {
  dbconnect("coach").then(result => {
    arr = getRandomInt(4, 2);
    //let filteredResults = result.filter(o => o.coachnum !== arr[1] && o.coachnum !== arr[0]);
    let filteredResults = [{}];
    for (var i = 0; i < arr.length; i++) {
      filteredResults.push(result.filter(o => o.coachnum === arr[i]));
    }

    res.send(JSON.stringify({
      filteredResults
    }));
  }).catch(err => {
    console.log(err);
    res.sendStatus(502);
  });
});


app.get('/api/baseteam', (req, res) => {
  dbconnect("baseteam").then(result => {
    res.send(JSON.stringify({
      result
    }));
  }).catch(err => {
    console.log(err);
    res.sendStatus(502);
  });
});

app.get('/api/freeagents', (req, res) => {
  dbconnect("freeagents").then(result => {
    res.send(JSON.stringify({
      result
    }));
  }).catch(err => {
    console.log(err);
    res.sendStatus(502);
  });
});

app.get('/api/draftplayers', (req, res) => {
  dbconnect("draftplayers").then(result => {
    res.send(JSON.stringify({
      result
    }));
  }).catch(err => {
    console.log(err);
    res.sendStatus(502);
  });
});

async function getData(client, colname) {

  const cursor = client.db("fbcoachbattle").collection(colname).find({});

  const results = await cursor.toArray();

  return results;

}

function getRandomInt(max, len) {
  var arr = [];
  while (arr.length < len) {
    var r = Math.floor(Math.random() * max) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
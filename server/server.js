import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { dbName: "users" })
mongoose.connection.on('error', err => {
 throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://LFTUadmin:love4ugly@lftuuserdb.nxm6d.mongodb.net/LFTUuserDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.listen(config.port, (err) => {
 if (err) {
 console.log(err)
 }
 console.info('Server started on port %s.', config.port)
})

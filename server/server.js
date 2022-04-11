import config from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/config/config'
import app from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/server/express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { dbName: "LFTUuserDB" })
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

MongoClient.connect(uri, {useNewUrlParser: true}, function (err, db) {
 if(err) {
 res.send('Mongo error!');
 throw err;
 }
 //Query databse
 var dbo = db.db("mydb");
 // from https://docs.mongodb.com/drivers/node/current/usage-examples/find/
 const query = {};

 const options = {
   // sort returned documents in ascending order by title (A->Z)
   sort: { todoNumber: 1 },
   projection: { todoNumber: 1, todoText: 1 },
 };
 dbo.collection("todo").find(query, options).toArray(function(err, cursor) {
   if (err) throw err;
   console.log("items retreived");
   cursor.forEach(console.dir);
   console.log('End the database stuff');
   res.send(cursor);
   db.close();
 });

 });

app.use("/todo", function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match thedomain you will make the request from
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
 res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
 next();
});


app.listen(config.port, (err) => {
 if (err) {
 console.log(err)
 }
 console.info('Server started on port %s.', config.port)
})

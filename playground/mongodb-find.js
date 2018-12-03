const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.error("Unable to connect to MongoDB server");
  }
  console.log("Connect to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection('Todos').find({
  //   _id: new ObjectID("5c047b6ef5c7f4b60fc3c155")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // })
  // client.close();

  db.collection('Todos').find().count().then((count) => {
    console.log("Todos count: ", count);
  }, (err) => {
    console.log("unable to fetch todos", err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log("Users count", count);
  }, (err) => {
    console.log('Unable to connect to Users', err);
  });
});

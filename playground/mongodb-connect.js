const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.error("Unable to connect to MongoDB server");
  }
  console.log("Connect to MongoDB server");
  const db = client.db("TodoApp");
  // db.collection('Todos').insertOne({
  //   text: "Something todo",
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.error("Unable to insert in database", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: "Marcio Marques de Souza",
    age: 35,
    location: "World",
  }, (err, result) => {
    if(err) {
      return console.error("Unable to insert", err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});

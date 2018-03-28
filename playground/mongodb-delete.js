// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connted to MongoDB server');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({test: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // delete all User objects with name 'Joel'
    // db.collection('Users').deleteMany({name: 'Joel'});

    // find document with specific _id and delete it
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5aba6cb2c8dd41a7bba2e28c')
    }).then((results) => {
        console.log(results);
    });


    // client.close();
});
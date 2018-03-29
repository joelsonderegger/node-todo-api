const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// remove all todos
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5abc9b1b825eaef7520f798c'}).then((todo) => {

});

Todo.findByIdAndRemove('5abc9b1b825eaef7520f798c').then((todo) => {
    console.log(todo);
});

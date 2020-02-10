const User = require('./models/User');

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },
    Mutation: {
        storeUser: (_, { name, email }) => User.create({ name, email }),
        updateUser: (_, { id, name, email }) => {
            User.findByIdAndUpdate(id, { name, email })
        },
        deleteUser: (_, { id }) => {
            User.findByIdAndDelete(id);
        },
    }
}


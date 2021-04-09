const { AuthenticationError } = require('apollo-server-express');
const { user} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // Me (your account)
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')

      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      },
      // Pets (all pets)
      users: async () => {
        return User.find()
        .select('-__v -password')

    },

      // Pet (single pet)
      user: async (parent, { username }) => {
        return Pet.findOne({ username })
        .select('-__v -password')

    },

      // Tails (all tails, or by username)
      comments: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Comment.find(params).sort({ createdAt: -1 });
      }
    }
}
module.exports = resolvers;
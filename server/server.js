const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express')

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();

  server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
}

app.get('*', (req, res) => {
});

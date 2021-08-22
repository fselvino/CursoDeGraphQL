import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }
    type User {
      id: ID!
      userName: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'jinisll',
          userName: 'Fernando',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'Fernando',
          },
          {
            id: '2',
            userName: 'Selvio',
          },
          {
            id: '3',
            userName: 'Sousa',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});

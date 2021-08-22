const user = async () => {
  return {
    id: '1',
    userName: 'Fernando',
  };
};

//o fetch esta vindo do contexto de index.js
const users = async (_, __, { fetch }) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const userResolvers = {
  Query: { user, users },
};

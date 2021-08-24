const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

//O fetch esta vindo do contexto de index.js
const users = async (_, __, { getUsers }) => {
  const users = await getUsers();
  return users.json();
};

export const userResolvers = {
  Query: { user, users },
};

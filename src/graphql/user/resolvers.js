const user = () => {
  return {
    id: '1',
    userName: 'Fernando',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'Fernando',
    },
    {
      id: '2',
      userName: 'Selvino',
    },
  ];
};

export const userResolvers = {
  Query: { user, users },
};

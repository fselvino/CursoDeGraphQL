const post = () => {
  return {
    id: '1',
    title: 'title 01',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Post title 01',
    },
    {
      id: '2',
      title: 'Post title 02',
    },
  ];
};

export const postResolvers = {
  Query: { post, posts },
};

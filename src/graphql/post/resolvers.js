const post = () => {
  return {
    id: '1',
    title: 'title 01',
  };
};

const posts = async (_, __, { fetch }) => {
  const posts = await fetch('http://localhost:3000/posts');
  return posts.json();
};

export const postResolvers = {
  Query: { post, posts },
};

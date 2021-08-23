const post = async (_, __, { fetch }) => {
  const posts = await fetch('http://localhost:3000/posts/702');
  return posts.json();
};

const posts = async (_, __, { fetch }) => {
  const posts = await fetch('http://localhost:3000/posts');
  return posts.json();
};

export const postResolvers = {
  Query: { post, posts },
};

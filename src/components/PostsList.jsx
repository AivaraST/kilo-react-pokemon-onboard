import PropTypes from 'prop-types';

function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.isRequired,
};
export default PostsList;

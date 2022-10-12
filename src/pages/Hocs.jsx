import { useEffect, useState } from 'react';
import PostsList from '../components/PostsList';
import withLoader from '../hocs/withLoader';
import MainLayout from '../layouts/MainLayout';

function Hocs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const AnimListWithLoader = withLoader(PostsList);

  async function fetchPosts() {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    setLoading(false);
    setPosts(result);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <MainLayout>
      <>
        <AnimListWithLoader isLoading={loading} posts={posts} />
        <button type="submit" onClick={fetchPosts}>
          Simulate fetch again
        </button>
      </>
    </MainLayout>
  );
}

export default Hocs;

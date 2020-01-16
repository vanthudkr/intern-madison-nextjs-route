import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Post = (props) => {
  const { post } = props;
  return (
    <div>
      <Layout />
      {post.title.rendered}
    </div>
  );
}

Post.getInitialProps = async (context) => {

  console.log('isBrowser', process.browser);
  console.log("context", context.query);

  const postId = context.query.id;
  const res = await fetch(`https://codeytek.com/wp-json/wp/v2/posts/${postId}`);
  const postData = await res.json();

  return {
    post: postData
  }
}

export default Post;
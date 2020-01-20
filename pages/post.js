import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Link from 'next/link';

const Post = (props) => {
  const { post } = props;
  return (
    <div>
      <Layout />
      <Link href="/">
        <a>Home page</a>
      </Link>
      <p>{post.title.rendered}</p>
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
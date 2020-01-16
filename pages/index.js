import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import PostLink from '../components/PostLink';

const Index = (props) => {
  const { posts } = props;
  return (
    <div>
      <Layout />
      {
        posts.length && (
          <ul>
            {
              posts.map((item) => (
                <PostLink id={item.id} slug={item.slug} title={item.title.rendered} key={item.id} />
              ))
            }
          </ul>
        )  
      }
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://codeytek.com/wp-json/wp/v2/posts');
  const postData = await res.json();

  return {  
    posts: postData
  }
}

export default Index;
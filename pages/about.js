import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => {
  return (

    <div>
      <Layout>
        <Link href="/">
          <a>Home page</a>
        </Link>
        <p>This is content about page</p>
      </Layout>
    </div>
  );
}

export default About;
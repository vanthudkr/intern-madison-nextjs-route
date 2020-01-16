import Nav from './Nav';
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS</title>
        <link rel='stylesheet' href='https://bootswatch.com/4/darkly/bootstrap.min.css' />
      </Head>
      <Nav />
      {props.children}
    </div>
  );
}

export default Layout;
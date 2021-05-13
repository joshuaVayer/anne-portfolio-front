import Head from 'next/head'
import Layout from '../components/Layout';

export default function Painting() {
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Paintings</title>
        <link rel="stylesheet" href="/css/center.css"></link>
      </Head>

      <div>
          Paintings works
      </div>
    </Layout>
  );
};
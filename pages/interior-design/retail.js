import Head from 'next/head'
import Layout from '../../components/Layout';

export default function Retail_ID() {
    
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Interior design</title>
      </Head>

      <div className="content">
        <h4 className="content-title">Retail</h4>
        <div className="categories categories__wrap">

          {/* Cards generation */}


          {/* Last card to send last real flexbox element to the left */}
          <div className="category category__last"></div>
        </div>
      </div>
    </Layout>
  );
};